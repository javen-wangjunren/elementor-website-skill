# Routing Playbook

仅在使用 `elementor-site-team-manager` 时读取。目标是选择当前唯一需要的专项 Skill，并保留用户确认门禁。

## 1. 证据检查

根据用户目标按需检查：

- `docs/workflow-status.md`：总控维护的当前阶段、确认门禁、下一步和确认依据；
- `docs/company/about-company.md`：已确认公司事实、目标买家、能力、证据、素材和缺失信息；
- `docs/research/*-visual-reference-brief.md`：当前站点、页面或模块可复用的跨行业参考证据、适用范围和已知缺口；
- `elementor-project.json`：插件身份、本地路径、预计规模、`Flat / Grouped` Profile，以及 Elementor 项目分类、角标和基础搜索关键词；
- 目标插件目录：插件是否存在，以及现有结构是否与配置一致；
- `docs/page-content/*.md`：页面内容框架候选、页面 slug 和 Draft / Confirmed 状态；
- `设计稿/design-system/style-board.html`：Design System 视觉候选证据；
- `docs/design-system/design-system.md`：当前设计规则来源；
- `docs/elementor/elementor-style-contract.md`：Site Mode、Style Authority、Elementor 映射、继承策略与确认状态；
- `设计稿/directions/<page-slug>/`：按需生成的整页或模块图片方向证据；
- `设计稿/pages/*.html`：整页 current HTML 与模块上下文候选；
- `设计稿/modules/*.html`：模块 current draft 候选；
- 当前对话：用户提供的截图、HTML、目标、版本选择和明确确认。

不向上寻找 WordPress 根目录，不检查 Elementor 安装状态，也不把整个项目无差别读入上下文。当前对话中用户明确指定的目标和最终版本优先于目录里无法确认来源的候选文件。

证据优先用于回答“现在有什么”。以下内容仍需用户确认：

- 来源或确认状态不明的公司资料，以及会影响页面事实和主张的关键缺口；
- 尚未确认来源的 Style Board；
- 页面内容框架的目标页面、版本和用户确认状态；
- 多个或来源不明的 Design System；
- Site Mode、Style Authority、后台样式证据和 Elementor Style Contract 的确认状态；
- Segment Set、Section Correction 或模块视觉方向的结构与视觉确认状态；
- Canonical Module Slug、模块 current HTML 和最终整页 current HTML；
- Pipeline 的最小字段卡；
- 配置与真实插件结构不一致时采用哪一方。

## 2. 依赖图

不要强迫每个任务从第一阶段重新开始：

```text
企业站内容 / 新站视觉方向
  ├─ 公司资料不足 → Company Intake
  └─ 条件触发且无适用简报 → Reference Researcher ─┬→ Page Content（叙事/内容取舍）
                                                    ├→ Design System（艺术指导/视觉语言）
                                                    └→ UI Architect（页面/模块架构）

需要创建 Widget ──────────────────────────────┐
  └─ 插件不存在 → Initialize ─────────────────┤
                                              ├→ Widget Pipeline
需要完整页面设计 → Page Content ─┐            │
                                  ├→ UI Architect → HTML Prototyper ─┘
                    Design System ┘

目标进入 Elementor 且需要站点样式继承：
Design System → Elementor Site Style Adapter → Widget Pipeline

老站扩展并保持风格：
URL → Existing Design System + Board → 后台样式证据 → Style Adapter

内容职责明确的单模块设计 → Design System → UI Architect → HTML Prototyper（按目标）

完整页面：
UI Architect：Page UI Architecture Map → Segment Set → 结构与视觉确认 → Slug
→ HTML Prototyper：整页优先或模块优先 HTML First Draft → HTML Visual QA → Browser / Implementation QA
→ 逐个 Widget Pipeline
```

- 初始化是 Pipeline 的插件前置，不是建立 Design System 的技术前置。
- Company Intake 是 Page Content 与新站 Design System 的共享条件前置，不是所有任务的固定起点；已有已确认公司资料、单模块真实内容充分或任务不依赖公司事实时跳过。
- Reference Researcher 是条件前置，不是所有页面的固定阶段。同行参考不足、品牌目标较高、中心叙事缺失、视觉方向持续模板化、关键模块缺少表达方式或用户明确给出参考网站时才触发。
- 当前 Scope 已有适用 Visual Reference Brief 时直接复用；Page Content、Design System 和 UI Architect 只消费各自负责的字段，不重复浏览原始案例。
- Brief 是参考证据，不新增最终确认门禁；被调用时只在深度研究前确认 3–5 个对象。用户已明确最终 URL 清单时直接研究。
- Existing Site 的视觉本体提炼属于 Design System Architect，不因存在公开 URL 就误路由为跨行业参考研究。
- 页面内容框架与 Design System 是完整页面 UI 的两项独立前置，可以按现有证据分别完成。
- Design System 是 UI Architect 的设计前置。
- Elementor Style Contract 是 Elementor 平台实现前置，不是 UI 或纯 HTML 的前置。
- 新站/重建站由项目 Design System 主导；老站扩展且要求保持风格时由 Existing Site 主导。
- 只有公开 URL 时可形成 Existing Design System，但不能确认 Elementor Token；需要精确继承时必须补充 Site Settings 截图、可信 Kit 或等价后台证据。
- 完整页面必须先确认 Page UI Architecture Map；它确定 Section 构图、媒体关系、素材比例建议、CTA 和整页节奏，不由总控提前代写。
- 单模块已有明确任务、真实内容和页面上下文时，不强制创建整页内容框架。
- HTML Prototyper 需要已确认设计包；完整页面存在未被 Structure Approved 的 Segment/Section Correction 覆盖的 Section 时返回 UI Architect。AI Overview 或 Composite Preview 均不是门禁。
- HTML Visual QA 的实现适配问题由 Prototyper 自动修正一轮；Section Job、核心构图、媒体契约或响应式叙事问题返回 UI Architect；颜色角色、Surface、排版、间距尺度或共享组件规则在多个位置系统性失效时，携带渲染证据返回 Design System Architect，更新后再由 Prototyper 复验原页面。
- Pipeline 需要现有插件、用户确认的 HTML 实现源和适用的 Confirmed Style Contract，并继承 UI Architect 确认的 Canonical Module Slug。用户明确确认完全隔离且不继承站点样式的单次模块可以记录局部例外。
- Prototyper 可从确认视觉方向直接生成整页 HTML，也可逐个模块实现后拼接；单模块 HTML 是否保留取决于复用与打磨需要。
- Pipeline 的单模块验证不包含 Elementor 整页组装。用户保留整页组装和最终视觉验收责任时，该人工门禁就是完整流程的一部分，不得标记为 Skill 缺失。
- 用户目标已经满足时停止，不自动追加后续阶段。

## 3. 路由表

| 用户目标与证据 | 当前 Skill | 完成条件 / 下一门禁 |
| --- | --- | --- |
| 企业站内容规划或新站视觉方向缺少可靠公司资料 | 总控 Company Intake | 用户确认 `docs/company/about-company.md` 后，按原始目标进入 Page Content、Design System 或两者 |
| 已有公司资料但结构零散、来源或主张状态不清 | 总控 Company Intake | 先整理并确认，不要求用户重复提供已知事实；确认后按原始目标继续 |
| 同行业参考普通、目标要求品牌感，且无适用 Brief | `website-reference-researcher` | 提议 5–8 个候选，确认 3–5 个后输出共享 Visual Reference Brief，再恢复原目标 |
| 用户明确提供最终参考 URL 清单 | `website-reference-researcher` | 直接研究指定名单，不重复候选确认；输出对应 Scope 的 Brief |
| 当前范围已有适用 Visual Reference Brief | 原目标对应 Skill | 传递该 Skill 负责的最小字段，跳过重复研究 |
| 普通内容页或单模块目标明确且已有可靠参考 | 原目标对应 Skill | 不为形式触发 Researcher |
| 单个关键模块持续怪异且缺少合理范式 | `website-reference-researcher` | 只生成模块级 `<scope-slug>-visual-reference-brief.md`，不重做站点研究 |
| 从零建立完整自定义 Widget 工作区 | `elementor-site-initialize` | 确认路径和 Profile，完成后按原目标继续 |
| 插件不存在，但目标是实现确认版 HTML | `elementor-site-initialize` | 初始化后检查 Style Contract；必需且缺失时先转 Style Adapter，否则返回 Pipeline |
| 新建、审查或统一页面内容框架 | `website-page-content-architect` | 用户确认 `docs/page-content/<page-slug>.md` |
| 完整页面设计，但内容框架缺失或未确认 | `website-page-content-architect` | 确认后检查 Design System，再进入 UI |
| 提炼老站风格或建立新站视觉方向 | `website-design-system-architect` | 用户确认 Style Board 并形成 Design System |
| 新站/重建站已有 Design System，目标将进入 Elementor | `elementor-site-style-adapter` | 用户确认项目 Global Style 映射与 Widget 继承合同 |
| 老站扩展要求保持风格，只有 URL 或视觉证据 | `website-design-system-architect` | 先形成并确认 Existing Design System 与 Board |
| 老站 Existing Design System 已确认，需精确继承 Elementor | `elementor-site-style-adapter` | 补充后台证据，确认 Site Settings Mapping 与继承合同 |
| 完整页面内容已确认，但 Design System 缺失或未确认 | `website-design-system-architect` | 确认后继续 UI Architect |
| 完整页面内容与 Design System 均已确认 | `website-ui-architect` | 确认 Map、覆盖全部 Section 的 Segment Set 与 Canonical Module Slug；原目标含 HTML 时继续 Prototyper |
| 单模块任务、真实内容和上下文明确，Design System 已确认 | `website-ui-architect` | 不强制整页框架；确认方案、方向与 Slug |
| 完整页面视觉包已确认但没有 HTML | `website-html-prototyper` | 生成整页或模块优先 HTML，完成 Review、Browser QA 与 Section 边界确认 |
| 单模块设计已确认但没有 HTML | `website-html-prototyper` | 有方向图，或满足强参考 + 完整方案 + 无歧义例外时生成模块 HTML |
| 已有确认版 HTML、现有插件和适用的 Confirmed Style Contract | `elementor-widget-pipeline` | 用户确认字段卡后实现并验证 |
| 已有 HTML，但要求继承站点样式且 Style Contract 缺失 | `elementor-site-style-adapter` | 合同确认后返回 Pipeline |
| 当前模块最终 HTML 来源、Section 边界与 Slug 已确认 | `elementor-widget-pipeline` | 可使用独立模块稿或整页中的当前 Section；按顺序逐个实现并确认字段卡 |
| 只有截图/Figma，且模块内容职责未确认 | `website-page-content-architect` | 先确认内容任务；不直接进入 UI 或 Pipeline |
| 只有截图/Figma，但模块任务与内容已确认、方向未确认 | `website-ui-architect` | 先完成设计确认，不直接进入 HTML 或 Pipeline |
| 不知道下一步 | 先检查最少证据 | 读取总控状态并简短说明当前阶段，再采用缺失依赖对应的 Skill |

如果用户明确允许 Pipeline 从截图/Figma 直接实现，仍遵守 Pipeline 自己的例外规则；总控不能自行替用户作出该确认。

## 4. 持续推进

总控采用当前专项 Skill 后，完整遵守它的停顿点。用户确认后：

1. 若属于多阶段任务，在 `docs/workflow-status.md` 更新当前阶段、已确认、待确认、下一步、当前 Skill、确认依据和更新时间；
2. 检查原始用户目标是否已经满足；
3. 未满足时重新计算缺失依赖；
4. 只读取下一位专项 Skill 的完整说明和当前任务所需 references；
5. 用最小派工包继续，不让用户重新发起 Skill 调用。

专项 Skill 的完成提示只是路由信号，不代表总控可以跳过下一阶段的输入和确认。

`docs/workflow-status.md` 只保存当前有效状态，不追加成长日志。专项 Skill 不创建各自的状态文件；单一产物任务没有跨阶段恢复需求时可以不创建。

Company Intake 完成后，根据原始目标向 `website-page-content-architect`、`website-design-system-architect` 或两者传递已确认的公司资料文件、相关事实、证据状态、素材缺口和禁止主张。不要把 Intake 变成页面 Section Map，也不要提前决定视觉 Form。

Reference Researcher 完成后，按下游职责拆分同一份 Brief：Page Content 只接收 Brand Narrative、Narrative Architecture、Content Editing 与证据策略；Design System 只接收 Art Direction、Visual System 与迁移边界；UI Architect 只接收 Page / Module Architecture、媒体策略与响应式迁移原则。不要把外站内容当企业事实，不把完整 Brief 变成新的设计权威，也不传给 HTML Prototyper 重新解释。

Design System 交给 Style Adapter 时传递 Site Mode、Style Authority、Active Baseline、确认版 Board，以及 Existing Site 模式下的 URL、渲染证据和后台样式证据。主题技术摘要不是默认样式输入。Style Adapter 返回合同路径、状态、Elementor Site Settings Mapping、继承规则、fallback 和未知项；不传递远程写入授权。

完整页面设计进入 Pipeline 时，一次只派发当前模块：Prototyper 确认的独立模块 HTML，或确认版整页 HTML 中边界明确的当前 Section；同时传递 Canonical Module Slug、目标插件、`elementor-project.json` 中的面板可发现性与 `siteStyle` 配置、Confirmed Style Contract、必要页面上下文和已知风险。整页 HTML 不授权 Pipeline 同时实现所有模块。当前 Widget 完成后，再通过下一张字段卡进入下一个 Widget。

## 5. 最小派工包

```text
GOAL:
ACTIVE STAGE:
CONFIRMED INPUTS:
SOURCE FILE / CONVERSATION INPUT:
TARGET PLUGIN / OUTPUT:
LOCKED CONSTRAINTS:
EXPECTED DELIVERABLE:
NEXT USER GATE:
KNOWN RISKS:
```

只填写当前专项工作必需的信息。Visual Reference Brief 交给各下游时只传其职责字段和 `Observed / Inferred / Transferable / Not Transferable` 标记。页面内容框架交给 UI 时传递确认文件、Section ID、Section Job、顺序、内容边界、证据状态和开放问题；不传递尚未决定的视觉 Form。视觉包交给 Prototyper 时传递确认 Map、最终 Segment Set、按需的 Section Correction、Slug、Correction Notes 和素材真实性边界；可选 Composite Preview 不作为权威输入。不要复制其他 Skill 的完整规则；不要把未确认推断包装成已确认输入。

## 6. 收口与外围流程

- 单一产物完成：状态写完成，并说明可选下一步，不自动执行。
- 完整 Widget 目标完成：以 Pipeline 的静态检查和 Elementor 手动验证步骤收口。
- 完整页面的多个 Widget 完成：报告已完成的单模块实现与验证，并把 Elementor 整页组装和最终视觉验收明确保留给用户；不宣称这是 Pipeline 尚未完成的工作。
- 发布、上传、缓存或线上操作：核心流程到本地验证即停止。
- 故障排查和主题开发：报告为范围外，推荐合适流程，不在总控内临时扩充额外执行模式。
