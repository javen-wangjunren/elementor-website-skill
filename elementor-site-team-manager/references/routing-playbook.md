# Routing Playbook

仅在完整建站、恢复任务、下一步不明或阶段存在歧义时读取。本文只负责判断“当前进入哪个阶段”；跨阶段门禁、状态、交接和回退执行读取 [Workflow Contract](workflow-contract.md)。

## 1. 证据检查

根据用户目标按需检查，不无差别扫描整个项目：

- `docs/workflow-status.md`：当前阶段、确认门禁、下一步和确认依据；
- `docs/company/about-company.md`：公司事实、目标买家、能力、证据与素材；
- `docs/research/*-visual-reference-brief.md`：当前 Scope 可复用的参考证据；
- `elementor-project.json` 与目标插件目录：插件路径、结构、面板可发现性和 `siteStyle`；
- `docs/page-content/*.md`：页面内容框架、页面 slug 和确认状态；
- `设计稿/design-system/style-board.html` 与 `docs/design-system/design-system.md`：视觉候选与当前基线；
- `docs/elementor/elementor-style-contract.md`：Site Mode、Style Authority、继承策略和状态；
- `设计稿/directions/<page-slug>/`：页面或模块视觉方向证据；
- `设计稿/pages/*.html`、`设计稿/modules/*.html`：当前 HTML 与 Section 边界候选；
- 当前对话：用户提供的目标、素材、截图、HTML、版本选择和明确确认。

当前对话中用户明确指定的目标和版本优先于目录里来源不明的候选文件。文件存在只能证明“有产物”，不能证明“已确认”。公司事实、页面框架、Style Board、Design System、Site Mode、Style Authority、Style Contract、UI Map、视觉方向、HTML 实现源、Canonical Module Slug 和 Widget 字段卡若无可靠确认来源，必须停在相应门禁。

## 2. 依赖图

```text
企业站内容 / 新站视觉方向
  ├─ 公司资料不足 → Company Intake
  └─ 条件触发且无适用 Brief → Reference Researcher ─┬→ Page Content
                                                    ├→ Design System
                                                    └→ UI Architect

需要 Widget ───────────────────────────────┐
  └─ 插件不存在 → Initialize ──────────────┤
                                           ├→ Widget Pipeline
完整页面 → Page Content ─┐                 │
                          ├→ UI Architect → HTML Prototyper ─┘
             Design System ┘

目标进入 Elementor 且需要站点样式继承：
Design System → Elementor Site Style Adapter → Widget Pipeline

老站扩展并保持风格：
URL → Existing Design System + Board → 后台样式证据 → Style Adapter
```

### 依赖原则

- 初始化是 Pipeline 的插件前置，不是设计前置。
- Company Intake 是企业内容和新站视觉方向的共享条件前置，不是所有任务的固定起点。
- Reference Researcher 只在同行参考不足、品牌目标较高、中心叙事缺失、视觉持续模板化、关键模块缺少范式，或用户明确要求分析参考网站时触发；已有适用 Brief 时复用。
- Page Content 与 Design System 是完整页面 UI 的两项独立前置，可以分别完成；进入 UI 前两者都须确认。
- 单模块已有明确任务、真实内容和页面上下文时，不强制创建整页内容框架或 UI Map。
- Elementor Style Contract 是平台实现前置，不是纯 UI 或 HTML 前置。
- 新站或完全重建由项目 Design System 主导；老站扩展且要求保持风格时由 Existing Site 主导。
- 只有公开 URL 可形成 Existing Design System，但精确继承 Elementor Token 还需要 Site Settings、可信 Kit 或等价后台证据。
- HTML Prototyper 需要已确认设计包；未完成视觉确认时返回 UI Architect。
- Pipeline 需要插件、确认 HTML 实现源、Canonical Module Slug，以及适用的 Confirmed Style Contract 或用户明确确认的隔离例外。
- 用户目标已经满足时停止，不自动追加后续阶段。

## 3. 路由表

| 用户目标与证据 | 当前阶段 | 完成条件 / 下一步 |
| --- | --- | --- |
| 企业站内容或新站视觉缺少可靠公司资料 | Company Intake | 确认公司资料后恢复原目标 |
| 当前 Scope 需要高质量参考且无适用 Brief | `website-reference-researcher` | 确认研究对象并形成共享 Brief |
| 用户已给出最终参考 URL | `website-reference-researcher` | 直接研究指定对象，不重复候选确认 |
| 已有适用 Visual Reference Brief | 原目标对应阶段 | 只传该阶段有权消费的字段 |
| 插件不存在且目标需要 Widget | `elementor-site-initialize` | 确认路径和 Profile 后恢复原目标 |
| 只需建立或统一页面内容框架 | `website-page-content-architect` | 用户确认 Page Content Framework |
| 完整页面缺少已确认内容框架 | `website-page-content-architect` | 确认后检查 Design System |
| 新站缺视觉基线，或需提炼老站风格 | `website-design-system-architect` | 确认 Style Board 与 Design System |
| Design System 已确认且目标进入 Elementor | `elementor-site-style-adapter` | 确认 Site Settings Mapping 与继承合同 |
| 老站保持风格但只有 URL 或视觉证据 | `website-design-system-architect` | 形成 Existing Design System；精确继承时再补后台证据 |
| 完整页面的 Content 与 Design System 均确认 | `website-ui-architect` | 确认 UI Map、完整视觉方向和 Module Slug |
| 单模块任务、内容和上下文明确，Design System 已确认 | `website-ui-architect` | 确认模块方案、视觉方向和 Slug |
| 完整页面或单模块视觉包已确认但没有 HTML | `website-html-prototyper` | 完成 HTML Design Review 与 Browser QA |
| 已有确认 HTML、插件和适用样式上下文 | `elementor-widget-pipeline` | 确认当前 Widget 最小字段卡后实现与验证 |
| 截图 / Figma 的内容职责未确认 | `website-page-content-architect` | 先确认内容任务，不直接实现 |
| 截图 / Figma 的内容明确但视觉方向未确认 | `website-ui-architect` | 先完成设计确认 |
| 不知道下一步或恢复历史任务 | 检查最小证据与状态 | 选择缺失依赖对应的唯一阶段 |

## 4. Reference Brief 消费边界

- Page Content 只消费 Brand Narrative、Narrative Architecture、Content Editing 与证据策略；
- Design System 只消费 Art Direction、Visual System 与迁移边界；
- UI Architect 只消费 Page / Module Architecture、媒体策略与响应式迁移原则；
- 外站内容不得作为企业事实，完整 Brief 不成为新的设计权威，也不交给 HTML Prototyper 重新解释。
