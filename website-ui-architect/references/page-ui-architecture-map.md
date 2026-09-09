# Page UI Architecture Map

用于在完整页面视觉方向稿之前确认每个 Section 的沟通策略、信息层级、视觉叙事、UI Composition、媒体关系和整页节奏。它是可直接指导视觉初稿的设计决策文档，不锁定像素、DOM、Elementor 字段或最终响应式实现。

## 触发与门禁

- 所有完整页面必须生成 `设计稿/directions/<page-slug>/<page-slug>-ui-architecture-map.md`。
- 已有来源明确且经用户确认的 Map 时直接复用，只在内容结构或设计决定变更时更新。
- 单模块任务可使用同等明确且包含 Module Design Solution 的模块 Brief，不强制生成整页 Map。
- Map 未经用户确认时，不生成完整页面视觉方向稿，也不交给 `website-html-prototyper`。
- Module Design Solution 默认写在 Map 的当前 Section 内，不为每个模块创建独立文档。只在用户明确要求、需多轮单独确认或需跨项目复用时独立交付。

## 必备内容

先写明整页的用户浏览逻辑、Surface 节奏、主要 CTA、防重复原则与 Page Motion Budget。然后为每个 Section 先完成 Module Design Solution，再记录由它推导出的 Layout、媒体、Motion Intent 和页面衔接决策。

Page Motion Budget 按 [Motion Intent Contract](motion-intent-contract.md) 记录：

```text
Motion Level:
Signature Moment:
Sections using content reveal:
Continuous / autoplay media:
Page-level rejected motion:
```

- Section ID、任务、模块等级和访客应记住的核心信息；
- 内容之间是并列、主从、分类、过程还是对比，以及是否存在真实业务主次；
- 核心证据、证据优先级与查看要求；
- 客户问题、沟通目标、单一记忆点和期望行动；
- 信息层级、证据归属、扫读路径、视觉叙事和 UI Composition；
- 视觉焦点、强调/弱化、桌面/移动叙事、禁止方案与可观察的成功标准；
- 推荐 Layout、栏位关系，以及它为什么适合已确定的信息与视觉叙事；
- 图片用途与 Media Display Contract；
- CTA 层级与所属区域；
- 背景 Surface 与前后模块衔接；
- 移动端内容顺序和降级原则；
- Motion Purpose、Layer、Trigger、Sequence、移动端行为、Reduced Motion / 静态 fallback 与禁止动效；
- 需要避免的重复形式、模板化结构或虚构证据。

Map 必须能让方向稿执行者不再重新猜测卡片形式、信息主次、证据位置、扫读路径、视觉主线或媒体重量。默认 Active Item 不自动代表业务优先级；并列证据不得在没有理由时被设计成永久一大多小。

将 Map 交给用户前，必须按 [Module Design Review](module-design-review.md) 审查每个 Section 及整页，明确问题自动修正一轮后再提交。

## Module Design Solution Contract

每个 Section 必须填写以下紧凑决策块。简单模块可合并字段或使用一句话回答，但不得省略设计推理：

```text
Module role and page context:
Customer question / concern:
Communication objective:
Single takeaway:
Desired action:

Information hierarchy:
- Primary message
- Supporting information
- Evidence / commitment
- CTA

Recommended scan path:
Visual narrative:
UI composition:
Visual emphasis / de-emphasis:
Media or alternative visual device:
Desktop presentation:
Mobile narrative:
Rejected treatments:
Success criteria:

Motion purpose: Emphasis / Explanation / Transition / Feedback / None
Motion layer: 1 / 2 / 3 / None
Trigger and affected elements:
Sequence and token:
Mobile behavior: Preserve / Simplify / Remove
Reduced-motion and static fallback:
Rejected motion:
```

- 先完成内容的删除、合并、关联和主次判断，再选择 Grid、Split、Timeline、Carousel 或其他 Layout。
- 数据与证据应贴近它所支撑的步骤或主张；不因方便排版而拆成重复的 KPI 行。
- `Visual narrative` 必须表达内容关系或理解路径，不得只是“现代、简洁、科技感”等风格形容词。
- `UI composition` 说明信息如何组成一个视觉整体，包括主视觉锚点、内容分组、元素关系、大致权重、密度和 CTA 归属；不锁定像素或 DOM。
- 无图片需求时仍须记录替代视觉装置，例如路径、数字层级、对比轴或文档结构；不默认退化为普通文字横排。
- `Rejected treatments` 记录会造成信息重复、虚假主次、证据错位或与相邻 Section 冲突的方案。
- `Success criteria` 必须可观察，例如“访客 10 秒内能把 24h 报价关联到 Engineering Review”，不使用“感觉高级”。
- 普通 Section 默认 `Motion purpose: None`；不能为了填字段给全部模块添加相同 Reveal。Layer 2 只在顺序或叙事确有价值时使用，Layer 3 通常只出现在重点页面的一个 Signature Moment。
- 图片方向稿不能证明时间、Trigger、滚动行为或降级；Motion Intent 以 Map 和必要 Notes 为权威。
- `Recommended Layout` 放在该 Contract 之后，作为沟通与视觉决策的空间实现结论，不代替设计方案。

合格的 Contract 应使两位设计师产生相同的信息结构、视觉主线和重点，只在字号、间距、圆角等样式细节上有所差异。

## Media-first Layout Decision

包含图片的 Section 不得先选择 Split、Grid、Gallery、Carousel 或 Viewer，再为既定布局补一个比例。按以下顺序决策：

```text
Section Job
→ Module Design Solution
→ Media role
→ Asset count and source geometry
→ Minimum useful viewing size
→ Image / text visual weight
→ Layout candidates
→ Media Display Contract
→ Recommended Layout
```

- 产品图承担识别或比较任务时，图片必须获得足以辨认产品差异的面积，不默认压成缩略图。
- 工厂、设备、证书或文件承担证明任务时，主体、机构或文件形态必须可辨认。
- 图片只承担提示、索引或装饰任务时，才可使用小缩略图；Map 必须说明文字为何是主要判断依据。
- 原始素材比例、方向或质量未知时写 `Pending asset audit`，不得把默认比例表述为已验证素材事实。
- 多个 Layout 均合理且会明显改变媒体尺寸或浏览方式时，先进入 Design Exploration，不直接锁定一个模板。

## Media Display Contract

每个包含图片的 Section 必须填写：

```text
Media role: Identification / Proof / Explanation / Atmosphere
Asset count:
Source geometry: <known ratios and orientations> / Pending asset audit
Default ratio:
Recommended ratio:
Minimum useful viewing size:
Image / text visual weight:
Desktop visible items:
Mobile presentation:
Crop / contain:
Rejected layouts:
```

- `Minimum useful viewing size` 使用可执行描述，例如“桌面三列时图片仍能辨认 PCB 板型”，不要求在 Map 阶段锁死像素。
- `Image / text visual weight` 说明谁是主角，可使用约 `70/30` 的方向值，不作为最终 CSS 精确值。
- `Desktop visible items` 与 `Mobile presentation` 必须共同说明比例如何影响同屏数量、卡片高度和页面长度。
- `Rejected layouts` 记录会使媒体失真、过小、制造虚假主次或与相邻 Section 重复的形式。

## Flexible Media Ratio Contract

默认比例是设计的优先起点，不是强制限制：

| 素材类型 | 优先比例 | 可调整方向 |
| --- | --- | --- |
| Hero 主视觉 | `16:9` | 根据首屏构图微调 |
| 工厂全景、模块横幅 | `16:9` | 特殊 Banner 可适当加宽 |
| 产品与材料图 | `4:3` | 可调整为 `1:1` |
| Gallery Card | `4:3` | 可调整为 `1:1` |
| Related Blog Card | `4:3` | 根据卡片设计微调 |
| 工厂与设备卡片 | `4:3` | 竖向设备可调整为 `3:4` |
| 应用场景卡片 | `4:3` | 根据主体构图微调 |
| 证书 | `3:4` | 细长证书可调整为 `1:2` |
| 文件与报告 | 真实文件比例 | 不强制统一裁切 |

默认比例必须在 Layout 确认前进入 Media Display Contract。`4:3` 不只是生图参数，还要约束媒体占卡片的面积、同屏数量和最小有效查看尺寸。只在主体方向、关键信息裁切、Layout 视觉重量、真实素材差异、同组对齐、移动端稳定性或页面节奏能明显改善时提出调整。不得因生图画布不足把普通素材压成 `2:1–3:1` 横条。

比例调整必须在 Map 中显式记录，不得静默改变：

```text
Default ratio:
Recommended ratio:
Reason:
Crop / contain strategy:
Affected desktop and mobile layout:
```

同一并列组优先使用统一比例。如必须混用，Map 需说明设计原因与对齐方式。

## 确认范围

请用户确认每个 Section 的核心信息、视觉叙事、UI Composition、Layout、媒体关系、Motion Intent、比例调整建议、CTA 层级和整页节奏，不要把像素细节、最终裁切或实现技术提前锁死。

旧版已确认 Map 没有 Motion 字段时不阻塞既有流程。用户未要求增强动态时，下游只保留基础 Hover、Focus 和必要状态；用户反馈“太静态”或需要 Signature 时，只为受影响页面/Section 补 Motion Intent。
