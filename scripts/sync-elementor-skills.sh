#!/usr/bin/env bash

# 将本机实际调用的 Elementor Skills 镜像到本仓库。
# 不会触碰 README、assets 或复盘文件；默认也不会删除仓库中已不存在的旧 Skill。
set -euo pipefail

SOURCE_DIR="$HOME/.agents/skills/elementor"
REPO_DIR="$(cd "$(dirname "$0")/.." && pwd)"

if [[ ! -d "$SOURCE_DIR" ]]; then
  echo "找不到运行时 Skill 目录：$SOURCE_DIR" >&2
  exit 1
fi

count=0
for source_skill in "$SOURCE_DIR"/*; do
  [[ -d "$source_skill" && -f "$source_skill/SKILL.md" ]] || continue

  skill_name="$(basename "$source_skill")"
  mkdir -p "$REPO_DIR/$skill_name"
  rsync -a --delete --exclude='.DS_Store' "$source_skill/" "$REPO_DIR/$skill_name/"
  echo "已同步：$skill_name"
  ((count += 1))
done

echo "完成：已同步 $count 个 Elementor Skills。"
echo "请在 GitHub Desktop 检查 Changes 后再提交。"
