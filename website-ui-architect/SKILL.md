---
name: website-ui-architect
description: Design and visually validate implementation-agnostic website pages or modules from an approved Design System and confirmed content. Use for Module Design Solutions, Page UI Architecture Maps, media and evidence decisions, visual-direction images, and direction review before HTML. Do not use to write or review HTML/CSS/JS, run browser implementation QA, plan platform fields, or implement CMS components.
---

# Website UI Architect

把已确认的页面内容与视觉规则转化为经视觉验证的 UI 设计方案。本 Skill 在视觉方向确认后结束，不编写 HTML。

## 输入与上游

- 完整页面必须读取已确认的 `docs/design-system/design-system.md` 和 `docs/page-content/<page-slug>.md`；缺失时分别返回 `website-design-system-architect` 或 `website-page-content-architect`。
- 单模块在真实内容、页面上下文和 Design System 同等明确时可不要求整页 Page Content。
- 按需读取 Style Board、真实素材、截图、URL、Figma、现有渲染和相邻 Section；不默认扫描全项目。
- 按需读取适用的 `docs/research/*-visual-reference-brief.md`，且只消费 `Page / Module Architecture`、媒体策略与响应式迁移原则。已有简报时不重复研究原始案例。
- Design System 是视觉规则来源，Page Content 是业务事实与文案来源，Visual Reference Brief 只是构图参考证据，不能覆盖前两者。

## 唯一流程

1. 提取 Section Job、客户问题、真实内容与证据、页面上下文和品牌约束；检查是否有适用 Visual Reference Brief，并只提取本 Skill 负责的字段。
2. 每个 Section 先读取 [布局与构图原则](references/layout-composition-principles.md)，再完成紧凑的 Module Design Solution，包含沟通目标、信息层级、证据归属、扫读路径、视觉叙事、UI Composition、响应式叙事、禁止方案和成功标准，最后根据任务、内容关系和认知成本确定 Layout。媒体 Section 同时完成 Media Display Contract。
3. 完整页面写入 Page UI Architecture Map，执行 Module Solution Qualification 与 Media Fitness Review，明确问题自动修正一轮后交给用户确认。单模块可使用同等明确的 Brief。
4. 从确认 Map 按叙事关系编译 Segment 提示词；通常每张覆盖 2–4 个 Section，复杂 Section 可独占一张。生图前先告知预计数量、Section 范围与文件名；每个 Segment 默认只生成一个候选，不生成 AI Overview。
5. 对方向稿分别执行 Structure Fidelity 与 Visual Language Review，再检查 Solution、Map 和 Media Fidelity。A 类问题先报告并停止生图；用户确认修正后只生成受影响 Section 的 Correction Direction。B 类写入 HTML Correction Notes；C 类噪声不阻塞确认。
6. 用户确认视觉方向后生成 Canonical Module Slug，交付确认的视觉设计包。原始目标包含 HTML 时，在同一任务中继续采用 `website-html-prototyper`，不要求用户重新调用 Skill。

## 门禁

- 完整页面 Map 未经用户确认，不生成方向稿；全部 Section 未被 Structure Approved 的 Segment 或 Section Correction 覆盖时，不交给 HTML Prototyper。
- 用户可以只确认某张图的 Visual Language；这不自动确认其中错误的 Section 结构。
- 只有 Layout、栏位或组件名称的 Section 不是合格设计方案。
- 真实素材审计推翻已确认假设时，只重新打开受影响 Section 的 Map 门禁。
- 方向稿只需足以判断构图、证据与主次、大致比例、密度和节奏，不追求设计师终稿精度。

## Reference 路由

| 当前任务 | 读取 |
| --- | --- |
| 完整页面 Map | [Page UI Architecture Map](references/page-ui-architecture-map.md) + [Module Design Review](references/module-design-review.md) + [布局与构图原则](references/layout-composition-principles.md) |
| 整页或模块图片方向 | [Visual Direction](references/visual-direction.md) + [布局与构图原则](references/layout-composition-principles.md) |
| 用户明确需要整页图片预览 | [Visual Direction](references/visual-direction.md) + `scripts/compose_segments.py` |
| B2B、企业站或证据驱动模块 | [证据驱动设计](references/evidence-led-design.md) |
| 方案不明确、需比较，或用户认为结果简单/普通/怪异 | [设计探索](references/design-exploration.md)；按条件返回 `website-reference-researcher`，或可选调用 Product Design `ideate` |
| 视觉确认后命名 | [模块命名](references/module-naming.md) |
| 验证设计门禁与回归行为 | [行为用例](evals/design-workflow-cases.md) |

## 交付与边界

- 完整页面交付 `设计稿/directions/<page-slug>/<page-slug>-ui-architecture-map.md`、覆盖全部 Section 的已确认 Segment Set、按需的 Section Correction、Canonical Module Slug，以及按需生成的 `visual-direction-notes.md`。AI Overview 不属于默认交付。
- 用户明确要求整页预览时，才用脚本把已确认 Segment 按比例缩放、不裁切地纵向拼接为 `page-composite-preview.png`；它不是新的设计权威。
- `visual-direction-notes.md` 在存在 Correction、B 类 HTML 修正、被保留的视觉语言参考或需跨会话交接时生成；Module Design Solution 默认紧凑写在 Map 内，不为每个模块新建文档。
- 不编写或修改 HTML/CSS/JS，不执行 Browser QA，不规划 Elementor 字段，不实现 WordPress、React、Shopify 或其他平台代码。
- 生成图只用于方向或明确占位，不得冒充真实工厂、设备、人员、证书、客户或结果证据。

冲突时按“可访问性与硬约束 > Design System > 业务事实 > 用户确认方向 > 页面上下文”处理。
