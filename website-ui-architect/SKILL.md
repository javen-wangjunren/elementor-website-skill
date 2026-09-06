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
- Design System 是视觉规则来源，Page Content 是业务事实与文案来源，参考只用于辅助构图与扫读判断。

## 唯一流程

1. 提取 Section Job、客户问题、真实内容与证据、页面上下文和品牌约束。
2. 每个 Section 先完成紧凑的 Module Design Solution，包含沟通目标、信息层级、证据归属、扫读路径、视觉叙事、UI Composition、响应式叙事、禁止方案和成功标准，再确定 Layout。媒体 Section 同时完成 Media Display Contract。
3. 完整页面写入 Page UI Architecture Map，执行 Module Solution Qualification 与 Media Fitness Review，明确问题自动修正一轮后交给用户确认。单模块可使用同等明确的 Brief。
4. 从确认 Map 编译视觉提示词。完整页面必须生成并确认 Overview/Segment；单模块只有在已有强参考、Module Design Solution 完整且构图无歧义时才可经用户确认跳过单独生图。
5. 对方向稿执行 Solution Fidelity、Map Fidelity 和 Media Fitness Review。A 类问题回写受影响 Section 并只重生对应分段一轮；B 类写入 HTML Correction Notes；C 类噪声不阻塞确认。
6. 用户确认视觉方向后生成 Canonical Module Slug，交付确认的视觉设计包。原始目标包含 HTML 时，在同一任务中继续采用 `website-html-prototyper`，不要求用户重新调用 Skill。

## 门禁

- 完整页面 Map 未经用户确认，不生成方向稿；方向稿未确认，不交给 HTML Prototyper。
- 只有 Layout、栏位或组件名称的 Section 不是合格设计方案。
- 真实素材审计推翻已确认假设时，只重新打开受影响 Section 的 Map 门禁。
- 方向稿只需足以判断构图、证据与主次、大致比例、密度和节奏，不追求设计师终稿精度。

## Reference 路由

| 当前任务 | 读取 |
| --- | --- |
| 完整页面 Map | [Page UI Architecture Map](references/page-ui-architecture-map.md) + [Module Design Review](references/module-design-review.md) |
| 整页或模块图片方向 | [Visual Direction](references/visual-direction.md) |
| B2B、企业站或证据驱动模块 | [证据驱动设计](references/evidence-led-design.md) |
| 方案不明确、需比较，或用户认为结果简单/普通/怪异 | [设计探索](references/design-exploration.md)；按条件可选调用 Product Design `ideate` |
| 视觉确认后命名 | [模块命名](references/module-naming.md) |
| 验证设计门禁与回归行为 | [行为用例](evals/design-workflow-cases.md) |

## 交付与边界

- 完整页面交付 `设计稿/directions/<page-slug>/<page-slug>-ui-architecture-map.md`、已确认 Overview/Segment、Canonical Module Slug，以及按需生成的 `visual-direction-notes.md`。
- `visual-direction-notes.md` 只在存在 B 类 HTML 修正项或需跨会话交接时生成；Module Design Solution 默认紧凑写在 Map 内，不为每个模块新建文档。
- 不编写或修改 HTML/CSS/JS，不执行 Browser QA，不规划 Elementor 字段，不实现 WordPress、React、Shopify 或其他平台代码。
- 生成图只用于方向或明确占位，不得冒充真实工厂、设备、人员、证书、客户或结果证据。

冲突时按“可访问性与硬约束 > Design System > 业务事实 > 用户确认方向 > 页面上下文”处理。
