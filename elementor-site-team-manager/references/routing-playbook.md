# Routing Playbook

仅在完整建站、恢复任务、下一步不明或阶段存在歧义时读取。本文只负责判断“当前进入哪个阶段”；跨阶段门禁、状态、交接和回退执行读取 [Workflow Contract](workflow-contract.md)。

用户明确要求快速视觉测试时，先执行 [任务模式与范围](workflow-contract.md#任务模式与范围)，以确认的测试范围和临时输入选择当前唯一专项；以下正式依赖和门禁不用于把测试扩大成完整建站。局部视觉/实现缺陷按根因处理，不为修正清楚的裁切或页头问题重新采集完整公司资料。用户已经点名元素和改法时按 `Explicit Small Change` 直接进入负责实现的专项。

## 1. 证据检查

根据用户目标按需检查，不无差别扫描整个项目：

- `docs/workflow-status.md`：当前阶段、确认门禁、下一步和确认依据；
- `docs/company/about-company.md`：公司事实、目标买家、能力、证据与素材；
- `docs/research/*-visual-reference-brief.md`：当前 Scope 可复用的参考证据；
- `elementor-project.json` 与目标插件目录：插件路径、结构、面板可发现性和 `siteStyle`；
- `docs/page-content/*.md`：页面内容框架、页面 slug 和确认状态；
- `设计稿/design-system/style-board.html` 与 `docs/design-system/design-system.md`：视觉候选与当前基线；
- `docs/elementor/elementor-style-contract.md`：Site Mode、Style Authority、继承策略和状态；
- `设计稿/directions/<page-slug>/`：页面或模块视觉方向证据；只有用户采用显式 Layer 2/3 时才含 Page Motion Budget 与 Section Motion Intent；
- `设计稿/pages/*.html`、`设计稿/modules/*.html`：当前 HTML 与 Section 边界候选；
- `设计稿/reviews/<page-slug>/`，或 `elementor-project.json.design.reviews` 指定位置：只有加强评审实际触发时才检查；标准评审不因缺少目录而阻塞；
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
                          ├→ UI Architect → HTML Prototyper → 条件式质量评审 ─┘
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
- HTML Prototyper 需要当前范围已确认的模块设计决定；不要求每个模块有确认图片。粗图反馈先整理为方案，重要决定确认后即可交接；具体分流见[工作流合同](workflow-contract.md#粗方向图到-html)。
- New Site / Rebuild 默认由 Design System 提供 `Motion Level: Restrained`；它不等于全页 Reveal。Existing Extension 的动态证据不足时不新增 Signature。
- 页面为什么动、Motion Layer、Signature 和移动端动态叙事属于 UI Architect；timing、Observer、视频、性能和可访问性实现属于 Prototyper；Elementor 多实例、重渲染和清理属于 Pipeline。
- Pipeline 需要插件、确认 HTML 实现源、Canonical Module Slug，以及适用的 Confirmed Style Contract 或用户明确确认的隔离例外。
- 用户目标已经满足时停止，不自动追加后续阶段。
- 完整新站或重建站先选择一个代表性加强评审页面或模块完成 HTML 和质量评审，再铺开；其余设计页面仍做标准独立检查，但不自动评分。
- 所有设计页面的独立视觉评审和加强范围的开放式走查由 Prototyper 管理，不增加新的核心 Skill。无法隔离评审时按层级降级并披露，不伪装成独立评审。

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
| 完整页面的 Content 与 Design System 均确认 | `website-ui-architect` | 确认 Map 内模块方案、锁定决定与 HTML 细化范围，按需使用图片，确定 Slug |
| 单模块任务、内容和上下文明确，Design System 已确认 | `website-ui-architect` | 确认模块方案与 Slug；不强制图片或整页 Map |
| 当前范围模块方案已确认但没有 HTML，图片可有可无 | `website-html-prototyper` | 整页或模块 HTML 视觉细化、真实渲染 Review 与 Browser QA |
| 粗图大体认可，少数模块不满意 | `website-ui-architect` | 集中更新受影响方案，重要改变确认后做 HTML，不默认重画 |
| 核心模块主要布局未定 | `website-ui-architect` | 只明确该模块方案后进入模块 HTML，不猜写整页 |
| 已有 HTML，仅排版、密度或实际适配待优化 | `website-html-prototyper` | 在锁定设计内直接细化并复查，不返回生图 |
| 标准设计页面已完成 Browser QA，但尚未独立检查 | `website-html-prototyper` | 全新子 Agent 做一次不打分盲审，修正 P0/P1 后记录 checked |
| 加强评审页面已完成 Browser QA | `website-html-prototyper` | 完成评分盲审；有主要交互时再做开放式走查，修正并复验 |
| 明确小改或非设计任务已通过相称 QA | 原目标对应阶段 | 不创建设计评审门禁，按用户目标继续或收口 |
| 已有确认 HTML、插件和适用样式上下文 | `elementor-widget-pipeline` | 确认当前 Widget 最小字段卡后实现与验证 |
| 截图 / Figma 的内容职责未确认 | `website-page-content-architect` | 先确认内容任务，不直接实现 |
| 截图 / Figma 的内容明确但视觉方向未确认 | `website-ui-architect` | 先完成设计确认 |
| 不知道下一步或恢复历史任务 | 检查最小证据与状态 | 选择缺失依赖对应的唯一阶段 |
| 用户说页面太静态、希望增加一点活力，Motion Intent 未确认 | `website-ui-architect` | 只补受影响页面/Section 的 Motion Budget 与 Intent |
| Motion Intent 已确认但 timing、显现、视频或 Reduced Motion 实现异常 | `website-html-prototyper` | 最小实现修正并复验 |
| 动态 Widget 在多实例或 Elementor 编辑器中重复运行 | `elementor-widget-pipeline` | 修复实例作用域、重初始化与 cleanup |

## 4. Reference Brief 消费边界

- Page Content 只消费 Brand Narrative、Narrative Architecture、Content Editing 与证据策略；
- Design System 只消费 Art Direction、Visual System 与迁移边界；
- UI Architect 只消费 Page / Module Architecture、媒体策略、响应式与可迁移的 Motion / Interaction 模式；
- 外站内容不得作为企业事实，完整 Brief 不成为新的设计权威，也不交给 HTML Prototyper 重新解释。
