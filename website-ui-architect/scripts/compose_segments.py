#!/usr/bin/env python3
"""Vertically compose confirmed visual-direction segments without cropping."""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

try:
    from PIL import Image, ImageColor, ImageOps
except ImportError as exc:  # pragma: no cover - environment-dependent
    raise SystemExit(
        "Pillow is required for compose_segments.py. Install it in the active "
        "environment before running this optional preview step."
    ) from exc


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Stack confirmed Segment images into a non-authoritative page preview."
    )
    parser.add_argument("segments", nargs="+", type=Path, help="Segment images in page order")
    parser.add_argument("--output", required=True, type=Path, help="Output PNG path")
    parser.add_argument(
        "--width",
        type=int,
        help="Target width. Defaults to the narrowest input to avoid upscaling.",
    )
    parser.add_argument("--gap", type=int, default=24, help="Separator height in pixels")
    parser.add_argument("--background", default="#FFFFFF", help="Gap/background color")
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    if args.gap < 0:
        raise SystemExit("--gap must be zero or greater")

    missing = [str(path) for path in args.segments if not path.is_file()]
    if missing:
        raise SystemExit("Missing Segment image(s): " + ", ".join(missing))

    images = [ImageOps.exif_transpose(Image.open(path)).convert("RGB") for path in args.segments]
    target_width = args.width or min(image.width for image in images)
    if target_width <= 0:
        raise SystemExit("--width must be greater than zero")

    resized = []
    for image in images:
        height = round(image.height * target_width / image.width)
        resized.append(image.resize((target_width, height), Image.Resampling.LANCZOS))

    gap_total = args.gap * max(0, len(resized) - 1)
    canvas_height = sum(image.height for image in resized) + gap_total
    background = ImageColor.getrgb(args.background)
    canvas = Image.new("RGB", (target_width, canvas_height), background)

    y = 0
    for image in resized:
        canvas.paste(image, (0, y))
        y += image.height + args.gap

    args.output.parent.mkdir(parents=True, exist_ok=True)
    canvas.save(args.output, format="PNG", optimize=True)
    print(f"Composed {len(resized)} segments into {args.output} ({target_width}x{canvas_height})")
    return 0


if __name__ == "__main__":
    sys.exit(main())
