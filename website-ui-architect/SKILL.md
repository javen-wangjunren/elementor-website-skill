---
name: website-ui-architect
description: Define and confirm website page or module design decisions from an approved Design System, content, and optional rough directions. Use to translate visual feedback into module plans, settle major layouts and interactions, and prepare optional direction images before HTML refinement. Do not write HTML/CSS/JS, run browser implementation QA, or implement CMS components.
---

# Website UI Architect

把内容、视觉规则与粗方向反馈整理为可执行的页面/模块设计方案。确认主要决定、标明 HTML 可细化范围后交接；图片是可选沟通工具，不是逐像素施工图。本 Skill 不编写 HTML。

以下正式输入与门禁不用于强迫快速测试补齐全站资料。仅当用户明确授权快速视觉测试时，按[任务模式](../elementor-site-team-manager/references/workflow-contract.md#任务模式)使用已确认的测试范围、演示内容和临时视觉规则；测试方向不自动成为正式确认源。

## 输入与上游

- 完整页面必须读取已确认的 `docs/design-system/design-system.md` 和 `docs/page-content/<page-slug>.md`；缺失时分别返回 `website-design-system-architect` 或 `website-page-content-architect`。
- 单模块在真实内容、页面上下文和 Design System 同等明确时可不要求整页 Page Content。
- 按需读取 Style Board、真实素材、截图、URL、Figma、现有渲染和相邻 Section；不默认扫描全项目。
- 按需读取适用的 `docs/research/*-visual-reference-brief.md`，且只消费 `Page / Module Architecture`、媒体策略与响应式迁移原则。已有简报时不重复研究原始案例。
- Design System 是视觉规则来源，Page Content 是业务事实与文案来源，Visual Reference Brief 只是构图参考证据，不能覆盖前两者。

## 工作流程

1. 明确图片用途（粗方向参考 / 明确要求还原 / 局部风格参考），实际查看当前画面和必要的相邻模块；按[方向稿综合评估](references/module-design-review.md#方向稿综合评估)把用户意见与 AI 独立观察合成保留、改善和待确认决定。用户未评论不代表没有问题，AI 建议不等于用户已确认；图片不可见时说明限制，不凭原方案假装已看图。
2. 读取[布局与构图原则](references/layout-composition-principles.md)，为当前范围形成紧凑模块方案：任务、内容层级、主要布局、媒体用途、手机组织、必要交互、HTML 可细化内容。扫读、证据、禁止方案及成功标准按任务需要合并说明，不为填字段写长报告。媒体仍保留最小可用查看尺寸、比例和裁切边界。
3. 完整页面将方案维护在现有 Map，单模块使用同等明确的 Brief。先执行[模块设计审查](references/module-design-review.md)，把粗图意见集中转成具体改变，只就未解决的重要选择确认一次。已获授权的决定不重复询问。
4. 按[工作流合同](../elementor-site-team-manager/references/workflow-contract.md#粗方向图到-html)选择路径：整页明确则整页 HTML；大体认可、局部待改先更新方案再做 HTML；核心模块未定则先明确该模块，之后做模块 HTML。先定方案，不把未解决的主要构图交给 Prototyper 随机探索。
5. 只有用户要求看图、或不同主要构图难以用文字判断时读取[图片方向稿](references/visual-direction.md)。粗图可从当前模块范围与候选 Map 探索；进入 HTML 前须确认模块方案，但不强制补齐或重画全部 Section 图片。图片有偏差时分开记录结构与视觉语言，修正方案或按需修图。
6. 用户确认当前范围模块方案后生成 Canonical Module Slug，交接锁定决定、细化范围与按需图片。原目标包含 HTML 时在同一任务继续 `website-html-prototyper`，不要求重新调用 Skill。

必要交互要定义默认、切换、再次选择、手机和缺失素材的处理；点击状态与可选过渡分开。按[Motion Intent](references/motion-intent-contract.md)检查动态机会；未采用显式 Layer 2/3 不新增 Motion 字段或 Runtime。图片不能确认动态行为。

## 边界与确认

- 进入 HTML 的是已确认方案，不是必须精修的图片。完整页面需要明确所有拟实现模块的主要设计；当前只确认一个模块时只交接该模块。
- 同一图片可以只作为风格参考；结构错误不可继承，但可以在文字方案中解决，用户采用后直接 HTML，无需再生成正确图片证明。
- 字号、换行、间距、密度、精确图片比例和裁切交给 HTML 在浏览器中主动细化；锁定主次、媒体用途和主要布局仍须继承。明确要求精确还原时保留其精确约束。
- 用户不满意某模块时只修改受影响方案，保留相邻已接受部分。真实素材推翻媒体用途或主要构图时只重开该范围，不重做整页。
- 已有精细稿、HTML 和历史确认继续有效，缺少新交接字段不自动使旧成果失效。

## Reference 路由

| 当前任务 | 读取 |
| --- | --- |
| 完整页面 Map | [Page UI Architecture Map](references/page-ui-architecture-map.md) + [Module Design Review](references/module-design-review.md) + [布局与构图原则](references/layout-composition-principles.md) + [Motion Intent Contract](references/motion-intent-contract.md) |
| 整页或模块图片方向 | [Visual Direction](references/visual-direction.md) + [布局与构图原则](references/layout-composition-principles.md) |
| 用户明确需要整页图片预览 | [Visual Direction](references/visual-direction.md) + `scripts/compose_segments.py` |
| B2B、企业站或证据驱动模块 | [证据驱动设计](references/evidence-led-design.md) |
| 页面太静态、需要增加活力或设计 Signature | [Motion Intent Contract](references/motion-intent-contract.md)；只补受影响页面/Section，不让 HTML 临时发明 |
| 方案不明确、需比较，或用户认为结果简单/普通/怪异 | [设计探索](references/design-exploration.md)；按条件返回 `website-reference-researcher`，或可选调用 Product Design `ideate` |
| 模块方案确认后命名 | [模块命名](references/module-naming.md) |
| 验证设计门禁与回归行为 | [行为用例](evals/design-workflow-cases.md) |

## 交付与边界

- 完整页面交付现有 `设计稿/directions/<page-slug>/<page-slug>-ui-architecture-map.md` 中确认的模块方案、锁定决定与 HTML 可细化内容、Canonical Module Slug；只有使用图片时交付适用 Segment/Correction 及其用途，按需维护 `visual-direction-notes.md`；只有确认采用显式 Layer 2/3 时 Map 才包含 Page Motion Budget 与 Section Motion Intent。AI Overview 不属于默认交付。
- 用户明确要求整页预览时，才用脚本把已确认 Segment 按比例缩放、不裁切地纵向拼接为 `page-composite-preview.png`；它不是新的设计权威。
- `visual-direction-notes.md` 在存在 Correction、B 类 HTML 修正、被保留的视觉语言参考或需跨会话交接时生成；Module Design Solution 默认紧凑写在 Map 内，不为每个模块新建文档。
- 不编写或修改 HTML/CSS/JS，不执行 Browser QA，不规划 Elementor 字段，不实现 WordPress、React、Shopify 或其他平台代码。
- 生成图只用于方向或明确占位，不得冒充真实工厂、设备、人员、证书、客户或结果证据。

冲突时按“可访问性与硬约束 > Design System > 业务事实 > 用户确认方向 > 页面上下文”处理。
