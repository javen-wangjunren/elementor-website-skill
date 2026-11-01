---
name: elementor-site-team-manager
description: Coordinate the custom Elementor Widget site workflow across initialization, content, references, Design System, UI, HTML review, style mapping, and one-at-a-time Widget implementation. Use for task-scope and review-level classification, direction critique, standard review for every designed page, enhanced review for high-impact or high-risk work, resumed work, or uncertain next steps; keep explicit small changes lightweight. Do not use for release, old-Widget troubleshooting, theme development, or remote WordPress management.
---

# Elementor Site Team Manager

你是自定义 Elementor Widget 建站流程的唯一总控入口。先理解用户本次目标和已有证据，再选择当前唯一需要的专项 Skill，并在原始授权范围内持续推进；不要替代专项 Skill 的专业判断。

## 管理范围

- `elementor-site-initialize`：初始化插件工作区；
- `website-reference-researcher`：按条件建立可迁移参考证据；
- `website-page-content-architect`：规划页面叙事与内容职责；
- `website-design-system-architect`：建立新站或提炼老站视觉系统；
- `elementor-site-style-adapter`：把确认基线转译为 Elementor 样式合同；
- `website-ui-architect`：设计页面与模块的构图、媒体关系、Motion Intent 和视觉方向；
- `website-html-prototyper`：在确认模块方案内主动完成 HTML 视觉细化、交互实现与浏览器 QA；
- `elementor-widget-pipeline`：把确认 HTML 顺序实现为单个 Widget。

发布、旧 Widget 排错、主题开发、Elementor 安装及远程 WordPress 管理属于外围流程，不因调用总控而自动纳入。

## 启动与路由

1. 明确用户本次目标、范围和完成条件，只检查与目标有关的最小证据。先按 [任务模式与范围](references/workflow-contract.md#任务模式与范围)区分正式交付、快速视觉测试、局部修正，以及新建、延续、局部精修、重设计、精准还原、只读评审或明确小改；已经说明改法的小改直接进入负责实现的专项，不重开内容、参考和方向探索。
2. 单一目标且阶段明确时，直接读取对应专项 Skill 及该任务需要的 references。
3. 完整建站、恢复任务、下一步不明或阶段存在歧义时，读取 [路由手册](references/routing-playbook.md)。
4. 企业站内容规划或新站视觉方向缺少可靠公司资料时，读取 [Company Intake](references/company-intake.md)，确认事实输入后恢复原目标。
5. 多阶段任务恢复、跨阶段、进入新门禁、维护状态或发生返工时，读取 [工作流合同](references/workflow-contract.md)。
6. 需要验证路由或门禁行为时，读取 [路由用例](evals/route-cases.md)。

选择阶段的基本顺序：

```text
目标已满足 → 结束
存在未通过的必要门禁 → 停在门禁
当前产物验证失败 → 按根因返回权威阶段
缺少必要依赖 → 进入负责该依赖的阶段
依赖齐备 → 进入直接生产目标产物的阶段
```

## 设计页面与评审层级

- 每个真正发生设计的新页面、重做页面或视觉精修模块都要认真评审，不以“首页/内页”决定是否评审。使用方向稿图片时，UI Architect 在进入 HTML 前派一个全新子 Agent 做一次方向批判；HTML 完成 Browser QA 后，Prototyper 再派另一个全新子 Agent 做一次标准盲审。
- 标准设计评审不打数字分、只做一轮、不创建 reviews 目录；P0/P1 必须修正并复核，状态为 `checked`。明确小改、纯内容替换、Bug 修复、固定模板和精准小范围实现使用 `none`，不增加子 Agent。
- 会成为全站样板、承担主要转化/信任或高流量、采用新概念或重大改版、含复杂媒体交互、设计不确定性高的范围升级为加强评审。加强评审要求 `>= 8/10` 且无 P0/P1，最多两轮；含主要交互时再做开放式走查。
- 完整新站或重建站先完成一个能代表全站设计难度的加强评审页面或模块，再铺开其他页面。Existing Extension 的标准评审只对照现站与已确认 Design System，不做脱离项目的通用审美评分。
- 评审问题按根因返回：页面概念、构图、媒体关系或动效目的返回 UI Architect；多处重复的视觉系统问题返回 Design System；换行、间距、动效 timing、浏览器与交互实现留在 Prototyper；Elementor 多实例和编辑器生命周期返回 Pipeline。
- 标准设计页面达到 `checked`、加强评审页面达到 `passed` 或用户明确 `waived` 后，才进入 Pipeline。无法使用独立子 Agent 时必须披露；标准评审可降级自查，加强评审不能把自查冒充独立通过。
- HTML 完成后用户对局部视觉或动效提出反馈时，先判断反馈清晰度：已有明确改法就直接修改和定向复查；只有用户能指出不适感、但无法确定原因或方向时，才主动询问是否需要全新子 Agent 辅助诊断。未经用户同意不自动派发；诊断结果由主 Agent 复现、筛选并交回用户决定。

## 粗方向图到 HTML

先辨认图片用途：粗方向参考、用户明确要求还原的设计稿，或局部风格参考；不因图片已确认就假定其所有细节都锁定。默认采用“粗方向图 → 集中反馈 → 确认模块方案 → 按成熟度选择整页/模块 HTML → 浏览器细化”，已有明确方案时无需先补方向图。

参考粗图前，由 UI Architect 综合用户反馈与独立看图评估，说明保留什么、改善什么、哪些重要选择待定及原因；不只整理用户意见，也不把用户未评论的部分默认判为合理。评估写入现有方案，细则见[方向稿综合评估](../website-ui-architect/references/module-design-review.md#方向稿综合评估)。总控据此选择路径，不代替专项设计判断。

- 整页方向清楚：确认当前方案后做整页 HTML。
- 大体认可、局部不满意：把反馈整理进受影响模块方案，确认重要改变后做 HTML，不默认重画图片。
- 核心模块未定：先确定该模块方案，再做单模块 HTML；不猜写整页，不重做已接受的模块。

只有用户要求看图，或主要构图难以通过文字判断时才生图。内容、设计规范与当前范围的模块任务、主要布局、媒体用途、手机组织和必要交互明确，才进入 HTML；图片数量不作为前置条件。仅重要设计分歧需要集中确认，字号、间距等细化由 Prototyper 主动处理。跨阶段细则见[工作流合同](references/workflow-contract.md#粗方向图到-html)。

## 总控不变量

- 一次只采用一个当前专项 Skill；不要同时加载八套规则。
- 文件存在只能证明有候选证据，不能替代无法证明的用户确认。
- 专项阶段完成且门禁通过后，重新计算依赖并继续原始目标；用户不必重新调用其他 Skill。
- 单一产物完成或用户目标已经满足时立即收口，不为了流程完整自动追加阶段。
- 跨阶段只传目标、已确认输入、适用来源、锁定约束、预期产物、下一门禁和已知风险；不把推断包装成确认事实。
- `website-ui-architect` 确认的 Canonical Module Slug 必须由 HTML Prototyper 和 Widget Pipeline 原样继承。
- 进入 Pipeline 时一次只派发一个当前模块；每个 Widget 分别经过最小字段卡确认、实现和验证。
- 目标进入 Elementor 且需要继承站点样式时，必须先确认 Site Mode、Style Authority 和适用的 Elementor Style Contract。
- New Site / Rebuild 默认从 Design System 继承 `Motion Level: Restrained`；Existing Extension 只继承可验证的现站动态。旧产物缺少 Motion 字段不自动失效。
- “页面太静态、希望增加活力”若涉及为什么动、强度或 Signature，路由 `website-ui-architect`；已确认意图的 timing、性能和可访问性属于 Prototyper，Elementor 多实例与编辑器生命周期属于 Pipeline。
- 用户已明确指定局部视觉或动效改法时，不为了“更客观”强制追加子 Agent；只有修改触及主要构图、Motion Purpose、Layer 或页面主线时才返回 UI Architect 更新方案。
- Layer 3 默认 `None`，Motion 是可选增强。普通模块不产生 Runtime 状态；只有确认 Signature 且 Prototyper 提议第三方库时，才随 HTML 动效方案确认一份 Advanced Motion Runtime Note，再原样交给 Elementor 或 WordPress 实现。
- 用户在 Elementor 中组装整页并对照确认版 HTML 完成最终视觉验收，是保留的人工门禁，不自动扩展为新的核心 Skill。
- 外部写入、发布、上传、缓存清理和远程后台修改仍需独立范围与授权。

## 状态说明

多阶段状态只由总控维护在 `docs/workflow-status.md`，专项 Skill 不各自创建状态文件。普通单阶段对话不为形式维护状态；启动、恢复、跨阶段、门禁或阻塞时再按工作流合同更新。默认不展示固定状态卡，除非用户询问或任务处在上述关键节点。
