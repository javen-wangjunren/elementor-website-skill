# 图片方向稿

用于在编写 HTML 前低成本确认整页或模块的构图、视觉焦点、媒体比例、页面密度和节奏。它是设计决策工具，不是最终实现依据。

## 前置

- 完整页面必须已有用户确认的 Page UI Architecture Map。
- Map 在提交确认前必须完成 [Module Design Review](module-design-review.md) 定义的 Architecture Map Review；方向稿不应将已知的错误布局继续可视化。
- 方向稿必须沿用 Map 中的 Module Design Solution、Section Layout、媒体关系、默认比例与已确认调整，不重新猜测信息主次、卡片形式、证据位置或模块形式。
- 单模块可基于包含同等明确 Module Design Solution 的真实 Brief 生成方向稿。
- 生成图只表达方向或明确占位，不得冒充真实工厂、设备、人员、证书、客户或结果证据。

## 生成策略

### 不超过约 6 个模块

仍生成一张 Overview 与至少一张 Segment。若一张 Segment 能以正常 Section 高度、留白和 Map 规定的媒体比例覆盖全部模块，不再机械拆成多段。

### 超过约 6 个模块

默认生成：

1. 一张 Overview，只携带模块角色、视觉重量、Surface 和整页节奏摘要，检查顺序与整体节奏；
2. 每段约 3–4 个 Section 的分段方向稿，携带完整 Module Design Solution，用于检查信息主线、视觉叙事、证据归属、真实密度、模块构图、素材比例与视觉重量。

分段边界根据叙事关系确定，不机械按数量切割。Overview 不用于确认局部 Section 高度或最终素材裁切。

默认文件：

```text
设计稿/directions/<page-slug>/page-overview.png
设计稿/directions/<page-slug>/page-segment-01-s1-s4.png
设计稿/directions/<page-slug>/page-segment-02-s5-s7.png
设计稿/directions/<page-slug>/page-segment-03-s8-s10.png
```

实际 Section 范围可按页面分组调整，文件名必须反映真实范围。
生成数量不是完成目标。完成一张 Overview 与覆盖所有 Section 的必要 Segment 后，只要已能共同说明整页顺序、Surface 节奏与模块关系，且用户认为足够，就不追加独立模块稿或重复方向图。

## Image Generation Prompt Contract

每张整页或分段方向稿的提示词必须从已确认 Map 的 Module Design Solution 编译，而不是只概述视觉风格或 Layout。分段提示词对每个 Section 显式包含：

```text
Section job and customer question:
Communication objective and single takeaway:
Confirmed content list:
Information hierarchy and evidence mapping:
Recommended scan path:
Visual narrative:
UI composition and visual anchor:
Layout and rejected layouts:
Visual weight and density:
Media Display Contract:
  Asset count and media role
  Target ratio per image
  Image / text visual weight
  Desktop visible items
  Crop / contain
  Real assets / placeholders / forbidden evidence
Desktop and mobile presentation:
Success criteria:
```

- `Confirmed content list` 锁定真实条目、名称和数量，防止生图擅自替换产品、服务、证书或数据。
- `Layout and rejected layouts` 同时写推荐形式与明确禁用形式，例如“3 列图片主导 Gallery；禁止左小缩略图 + 长文字”。
- `Target ratio` 必须与图片视觉占比、同屏数量一起写入；只写 `4:3` 不算完成 Contract。
- 无媒体的 Section 将 `Media Display Contract` 写为 `None`，并从 Module Design Solution 编译已确认的替代视觉装置；不为填满提示词而虚构图片或图标。
- 生图不得自行拆分 KPI、制造卡片、添加图标或改变证据归属。确需改变时先回写 Map，不在提示词中静默重新设计。
- 有真实截图、Style Board、素材样例或已确认方向图时，工具允许的情况下附加实际文件，不只用文字转述。
- Overview 只携带顺序、Surface 和重量摘要；分段稿携带完整 Prompt Contract，避免为塞入总览而牺牲媒体尺寸。

## 密度与比例

- Hero 需要充分首屏高度；标准 Section 需要明显上下留白；只有数据带等真正紧凑的模块可收紧。
- 标题、正文、媒体和 CTA 必须形成可扫读的间距层级；重点证据模块应获得更大视觉重量。
- 素材比例优先使用 Architecture Map 中的默认值；仅使用 Map 已显式记录的调整。
- 不得为了塞入单张画布而压缩 Section、缩小关键文字，或把普通图片改成 `2:1–3:1` 横条。

## 初稿精度与停止条件

方向稿是页面设计初稿，目的是建立可讨论的整体参考，不是设计师终稿。当以下内容已可清楚判断时，方向稿即达到当前阶段目的：

- 模块构图与主次关系；
- 页面密度与基本留白；
- 图片的大致方向和比例类型；
- 色彩、Surface 和整体视觉语言；
- 模块之间的节奏与浏览顺序。

对生成图只要求比例方向可辨认，不在图片阶段测量是否精确等于 `16:9`、`4:3` 或 `3:4`。例如 `4:3` 被生成为接近的横向构图属于可接受初稿偏差；若变成 `3:1` 横条、竖版证书变横版，才属于影响方向判断的明确问题。

精确 `aspect-ratio`、Section 高度、间距、文字换行与最终裁切在 HTML 设计稿中实现和调整。方向图是需要在真实内容与上下文中继续验证的设计假设：HTML 应保留用户已确认的核心构图和气质，但可修正生图偏差、不适配真实内容的空间和相邻 Section 冲突。不得在未说明原因时推翻已确认的主要视觉方向。

## Visual Direction Review

生成后先检查 Solution Fidelity：单一记忆点、信息主线、视觉叙事、证据关联和扫读路径是否成立。即使方向稿忠实还原 Layout，丢失这些决策仍属于 A 类问题。

再检查 Map Fidelity：Section 是否完整、密度和比例方向是否可判断、素材是否不当裁切、视觉语言是否一致，以及是否出现虚构企业证据。随后执行 Media Fitness：不仅判断图片是否接近 `4:3`，还要判断图片是否达到最小有效查看尺寸、视觉占比和同屏数量要求。

再按 [Module Design Review](module-design-review.md) 反向验证 Map 的设计假设。只有其定义的 A 类问题触发 Map 回写和受影响分段的一轮重生；B 类记录为 HTML Correction Notes，C 类接受。用户确认后才可交给 `website-html-prototyper`。

完整页面必须以 Overview/Segment 完成视觉确认。单模块只有用户明确要求、构图仍无法判断、需要比较真正不同的方向，或没有已确认的强参考时，才新增单模块方向图。不得为了把接近 `4:3` 的生成图调整到精确比例而批量生成额外图片。

这不是浏览器 QA：不检查 DOM、真实响应式、溢出、键盘、兼容性或生产实现。

## 确认与交付

默认只生成一个推荐方向；确有关键差异时最多比较 2–3 个方向。交付时说明 Overview 和分段稿的用途、已完成方向自查，以及仍需用户决定的问题。视觉方向确认后，原始目标包含 HTML 时在同一任务中继续采用 `website-html-prototyper`。
