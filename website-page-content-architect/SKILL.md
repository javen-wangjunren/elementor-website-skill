---
name: website-page-content-architect
description: Create or audit a complete, concise, UI-ready website page content framework from verified business facts before visual design. Use to define page goals, customer decision flow, section order, realistic draft copy, content and evidence needs, CTAs, or page-family rules; do not use for visual design, HTML, SEO implementation, or platform code.
---

# Website Page Content Architect

在视觉设计前，把真实业务资料转化为可直接排版的页面内容。默认产物是简短、便于人工审核的 **UI-ready Page Content Framework**：先按页面任务与目标客户决策路径完整规划模块，再提供长度适合模块设计的精简参考文案。它不是最终广告文案，不把内部分析过程全部写进文档。

## 选择模式

- **New Page**：从业务、受众、页面目标和可用证据规划新页面。
- **Existing Page**：审查已有页面，按 `Keep / Improve / Merge / Move / Remove / Add / Unknown` 收口。
- **Page Family**：规划一组服务、产品或行业页面的共享骨架、复用边界和差异化要求。

始终读取 [content-framework-method.md](references/content-framework-method.md)。只有当前任务属于 B2B 制造业时才读取 [b2b-manufacturing-page-framework-standard.md](references/b2b-manufacturing-page-framework-standard.md)。需要理解完整产物时可读取 [jdm-solution-page-framework-example.md](references/jdm-solution-page-framework-example.md)，但不得把示例事实或顺序当作模板。

交付页面框架前始终读取并执行 [Content Architecture Review](references/content-architecture-review.md)。

需要验证输入充分性、UI-ready 输出或路由行为时，读取 [行为用例](evals/use-cases.md)。

## 输入与事实门槛

按以下优先级读取事实来源：

1. `docs/company/about-company.md`；
2. 用户指定的公司、产品、服务、质量或案例资料；
3. 当前对话中用户已确认的信息；
4. 现有页面中的候选事实，必须标明是否已验证。

相关 `docs/research/*-visual-reference-brief.md` 是参考证据而不是企业事实来源。只读取其中的 `Brand Narrative`、`Narrative Architecture`、`Content Editing` 与证据策略；外站内容、数据、客户、能力和主张不得转写为本企业事实。

开始写作前，内部确认下列最小输入。只询问会改变页面结构、主张或 CTA 且无法从资料推导的问题：

```text
PAGE TYPE:
TARGET AUDIENCE / DECISION ROLES:
AWARENESS STAGE:
TRAFFIC INTENT:
OFFER / PAGE POSITIONING:
PRIMARY CONVERSION:
CUSTOMER PROBLEMS:
DIFFERENTIATORS:
BUSINESS BOUNDARIES:
AVAILABLE EVIDENCE / ASSETS:
RELATED PAGES:
WEBSITE LANGUAGE:
KNOWN:
INFERRED:
UNKNOWN:
```

若公司是谁、提供什么、服务谁、主要转化或会改变页面结构的业务边界仍不足，先执行轻量 Content Intake，不生成看似完整的页面。优先一次询问 1–3 个真正影响模块选择或顺序的问题，不用行业惯例随便补齐企业能力。

真实性门槛不等于保守删模块。默认假设项目方可以后续准备认证图、产品图、工厂图、机器设备图、检测图、团队图及其他信任素材；先判断页面是否需要相应模块，再说明内容与素材要求。Case Study、Testimonials、客户 Logo 或数据证明对决策有价值时可以规划为 `Recommended`，由用户决定当前阶段是否启用；没有真实内容时不得虚构访客可见的案例、评价、客户或数字。

## 语言与文案状态

- **框架语言**默认跟随用户当前沟通语言，而不是自动跟随网站发布语言。用户用中文沟通、网站为英文时，框架仍使用中文。
- **网站语言**单独记录，例如 `英文`。只有面向访客的标题、按钮或 UI-ready 文案才使用网站语言。
- 事实输入充分时，默认直接生成 `UI-ready Draft`，不再先交付一份只有内容要点的中间报告。
- UI-ready 表示事实可靠、信息完整、长度足以验证排版；不等于最终精修或已经获准上线。
- 事实输入不足时才使用 `Framework only`，并列出最少的阻塞问题。
- 面向访客的文案集中放在对应模块的 `页面文案` 小节，不把整个框架逐行中英双写。

## 参考研究接口

- 当前范围已有适用 Visual Reference Brief 时复用，不重复浏览或重做同行深度研究。
- 同行业参考不足、页面缺少中心叙事、用户要求品牌型体验或明确提供参考网站，且当前没有适用简报时，返回总控并路由 `website-reference-researcher`。
- 普通转化页、内容任务清晰或已有可靠参考时直接进行内容规划，不为形式触发研究。
- Brief 只帮助选择叙事、内容取舍与证据策略；最终页面命题、Section 顺序和文案仍由本 Skill 基于已确认企业事实决定。

## 工作流程

1. 读取业务资料并完成事实充分性检查；不足时先执行轻量 Content Intake。
2. 检查当前范围是否有适用 Visual Reference Brief，按上述接口选择性消费；需要研究但缺失时返回总控。
3. 在内部建立 Page Brief 与 Evidence Inventory；最终文档只保留影响用户判断的结论。
4. 根据访客决策问题选择叙事策略，不机械套固定段落。
5. 如存在两个会实质改变模块顺序的合理策略，先给出两个轻量候选；用户确认后只展开一个。
6. 确定完整 Section 顺序，按 `Core / Recommended / Optional` 标记模块优先级；素材尚未整理不自动删除重要模块。
7. 为每个模块写一句任务、精简 UI-ready 文案、内容与素材要求和必要 CTA。
8. 按 [Content Architecture Review](references/content-architecture-review.md) 检查客户浏览顺序、整页任务闭环、模块重复与文案可扫读性；明确问题自动修正一轮。
9. 创建或更新 `docs/page-content/<page-slug>.md`。首次写入标记 `STATUS: Draft`；用户确认后更新为 `STATUS: Confirmed`。

页面文件存在不等于用户已确认。未能证明确认状态时，停在内容框架门禁，不交给 UI。

## 默认 UI-ready 产物

普通页面默认使用以下人类可读结构：

```markdown
# <页面名称>内容框架

STATUS: Draft / Confirmed
框架语言：中文
网站语言：英文
文案状态：UI-ready Draft / Framework only

## 1. 页面目标
- 页面任务：
- 核心用户：
- 主要转化：
- 内容思路：

## 2. 页面结构

### S1 · <Section ID / 中文名称>
- Priority: Core / Recommended / Optional
- 模块任务：一句话说明该模块要回答什么。

#### 页面文案
- Eyebrow:（按需）
- Heading:
- Description:（按需）
- List / Data:（按需）
- Primary CTA:（按需）
- Secondary CTA:（按需）

#### 内容与素材要求
- 该模块需要准备的事实、数据、图片或证明
- 未确认的主张边界（仅有风险时）

## 3. 缺口与待确认

## 4. UI 移交
- 已确认顺序：
- 不可改动的事实与主张边界：
- 文案状态与下一步：
```

字段按内容实际需要使用，不得为了模板完整而输出空字段。每个 Section 默认只保留 `Priority、模块任务、页面文案、内容与素材要求`；CTA 直接属于页面文案。以下内容仅在存在真实风险时补充：

- `内容边界`：相邻模块存在重复或越界风险时；
- `Preview / Detail`：当前页与详情页职责需要区分时；
- `复用规则`：Page Family 或共享模块任务；

普通页面优先采用 6–10 个模块并控制在约 100–180 行；模块数量由页面任务决定，不设硬上限。超过时先删除重复事实、逐节状态说明和内部推理，不因压缩行数删掉完成页面任务所需的模块。

不要默认输出独立的完整 Evidence Inventory、Visitor Decision Chain、Duplication Review、Section Order Summary 和 Handoff 重复表。先在内部完成这些检查，只有存在需要用户决定的问题时才展示相关结论。

`SECTION ID` 只表达 Scope 和内容任务，例如 `service-supported-materials`，不包含尚未确认的布局 Form。完整 Canonical Module Slug 由 `website-ui-architect` 在视觉方向确认后生成。

## Content Architecture Review

这不是实现 QA，不检查视觉、响应式、HTML 或 SEO 配置。交付前检查模块顺序是否符合目标客户决策路径、整页是否完成页面任务、模块是否重复或缺失，以及标题和正文是否一眼可懂。发现明确问题自动修正一轮；仍涉及业务策略、产品边界或模块取舍时交给用户确认。交付时只说明“已完成内容架构自查”，不输出验收等级。

## 内容约束

- UI-ready 文案是基于已确认事实的可排版草稿，允许后续精修，但不得使用空泛占位文案代替真实内容。
- 缺少证据时标记内容要求或待确认主张；模块有独立决策价值时保留为 `Recommended / Optional`，没有真实内容时不编造页面文案。
- Primary CTA 应对应一个明确转化目标；Transitional CTA 仅在访客尚未准备完成主行动时使用。
- 同一信息可以在不同决策阶段以不同深度出现，但不能无目的重复。
- Preview 只展示完成当前决策所需的子集；全量内容应归属于明确的详情页或聚合页。
- Page Family 必须同时定义共享骨架、允许变化字段、页面独有证据和防止关键词替换式同质化的规则。

## 优先级与边界

冲突时遵循：

```text
可验证的业务事实与合规约束
> 用户确认的页面目标与业务边界
> 真实客户问题、证据和站内页面关系
> 行业研究
> 借鉴的方法框架
```

本 Skill 不建立 Design System，不决定视觉布局，不生成 HTML、图片、页面线框、Elementor 字段或平台代码。完整页面进入 `website-ui-architect` 前，需要确认版 UI-ready 内容框架和确认版 Design System。单个模块若任务、真实内容和页面上下文已经明确，可以不额外创建整页框架。
