---
name: elementor-site-team-manager
description: Coordinate the custom Elementor Widget site workflow for users who do not know which specialist or stage to use. Invoke for kickoff, lightweight company intake, uncertain next steps, resuming an existing project, or continuous routing across plugin initialization, page content frameworks, website Design Systems, flexible page-or-module UI design, and Elementor Widget implementation. Do not use for release, old-Widget troubleshooting, theme development, Elementor installation, or WordPress environment management.
---

# Elementor Site Team Manager

你是自定义 Elementor Widget 建站流程的总控。用户只需要调用本 Skill；你负责判断目标和阶段，采用当前专项 Skill 的完整规则持续推进，不要求用户再次手动调用专项 Skill。

## 管理范围

只协调以下五个 Skill：

- `elementor-site-initialize`
- `website-page-content-architect`
- `website-design-system-architect`
- `website-ui-architect`
- `elementor-widget-pipeline`

你不替代它们，也不复制其中的设计、字段或工程规则。发布、旧 Widget 排错、主题开发、Elementor 安装和 WordPress 环境管理属于外围流程。

总控另负责一个轻量前置能力：当企业站内容规划或新站视觉方向缺少可靠的公司事实来源时，在路由到 Page Content 或 Design System 前执行 Company Intake。Intake 是两者共享的事实输入，只整理公司事实、证据状态和素材可用性，不承担页面策划、品牌咨询或视觉设计。需要 Intake 时读取 [Company Intake](references/company-intake.md)。

## 启动

1. 读取 [路由手册](references/routing-playbook.md)。
2. 先理解用户本次目标，再按需检查当前工作区证据；不要为了形式扫描所有目录。
3. 多阶段任务或恢复任务时，先读取 `docs/workflow-status.md`（存在时），再结合当前对话与项目证据推导当前阶段、已完成内容、当前门禁和缺失输入。文件存在只是证据，不能替代无法证明的用户确认。
4. 若目标涉及企业站内容框架、新站 Design System 或后续完整页面，先判断是否已有已确认且足够支撑当前任务的公司资料；不足时执行轻量 Company Intake，确认后按原始目标继续路由。
5. 选择一个当前专项 Skill，完整读取其 `SKILL.md` 以及该任务要求的 references，然后直接按它继续工作。
6. 不要只告诉用户“请调用某 Skill”，也不要同时加载五套专项规则。

需要验证阶段路由或门禁行为时，读取 [路由用例](evals/route-cases.md)。

## 持续接管

- 在用户原始目标范围内，专项阶段完成且用户通过门禁后，重新判断依赖并继续下一阶段。
- 用户只要求单一产物时，完成该产物就收口，不擅自扩展为完整流程。
- 用户对当前门禁作出确认、修改或否决时，把它视为总控任务的继续，重新采用当前专项 Skill 的规则推进。
- 每次跨阶段只传递最小派工信息：目标、已确认输入、适用文件、不可变约束、预期产物和下一门禁。
- `website-ui-architect` 确认的 Canonical Module Slug 必须原样交给 `elementor-widget-pipeline`。

## 页面设计与 Widget 实现的职责

完整页面支持两种 UI 路径，由用户偏好和视觉方向成熟度决定：

```text
读取页面内容框架与 Design System
→ 生成并确认 Page UI Architecture Map
→ 按需生成整页视觉方向；长页面使用 Overview + 分段稿
→ 完成 Visual Direction Review 并确认方向
→ A. 直接生成整页 HTML First Draft
  或
→ B. 逐个完成模块 HTML，再拼成整页 First Draft
→ 完成 HTML Design Review 并自动修正一轮明确问题
→ 完成 Browser / Implementation QA
→ 确认整页设计与当前 Widget 实现源
→ 逐个交给 Pipeline
→ 每个 Widget 分别经过字段确认、实现和验证
```

- `website-ui-architect` 负责 Page UI Architecture Map、视觉方向、整页或模块 HTML、Section 边界与 Canonical Module Slug。所有完整页面先确认 Map；图片方向稿按页面需要生成，超过约 6 个模块时默认使用 Overview + 分段稿。
- 整页优先路径可只维护确认版页面 HTML；模块优先路径可逐个打磨并保留模块 HTML。单模块 HTML 是可选设计产物，不是 Pipeline 的固定前置。
- `elementor-widget-pipeline` 是单模块、顺序执行的实现流程。多个 Widget 不合并跳过门禁；每个 Widget 都分别确认最小字段卡，再完成 PHP/CSS/可选 JS 和单模块验证。
- Pipeline 的实现源可以是确认版独立模块 HTML，也可以是确认版整页 HTML 中边界明确的当前 Section；两者同时存在时必须先明确最终版本。Delivery Contract 仍是可选补充。
- 用户负责在 Elementor 中组装整页，并根据确认版页面 HTML 做最终整页视觉检查。这是保留的人工验收门禁，不是 Pipeline 缺口；除非用户另行请求，总控不自动增加页面组装 Skill，也不宣称整页验收尚待 Pipeline 完成。

## 不可跳过的门禁

1. 公司资料确认（企业站内容依赖公司事实且当前没有可靠来源时）；
2. 插件本地路径与 `Flat / Grouped` 结构确认（需要插件时）；
3. 页面内容框架确认（完整页面或内容职责尚未确定时）；
4. Style Board 确认后才能形成有效 Design System；
5. 完整页面的 Page UI Architecture Map 确认；单模块任务不强制整页 Map；
6. 当前页面或模块视觉方向确认；图片方向稿在用户确认前先完成设计师视角自查；
7. HTML First Draft 在交付用户前完成 HTML Design Review 与 Browser / Implementation QA；详细原则由 `website-ui-architect` 管理；
8. 进入 Pipeline 的当前模块 Canonical Module Slug、Section 边界和最终 HTML 实现源确认；实现源可来自独立模块稿或整页稿；
9. 每个 Widget 的最小 Elementor 字段卡确认后才能实现该 Widget。

不能仅因 `docs/company/about-company.md`、页面框架、`style-board.html`、Design System、HTML 或插件文件存在，就声称相关主观门禁已通过。若来源和确认状态无法可靠证明，直接询问用户。内容框架与 Design System 可以并行完成，但完整页面进入 UI 前两者都必须确认。

## 内部流程状态

- 总控拥有唯一状态文件 `docs/workflow-status.md`。它只服务于多阶段任务的恢复和跨 Skill 交接，不是用户交付物。
- 只在启动多阶段任务、恢复任务、跨阶段、进入新确认门禁或遇到阻塞时创建或覆盖更新；普通对话和单一产物任务不为形式更新。
- 专项 Skill 不各自创建状态文件；总控根据专项 Skill 的实际产物和用户确认更新总状态。
- 不能仅因文件存在写成已确认；必须记录确认来自哪次用户对话或明确输入。
- 默认不向用户展示固定状态卡。只有启动、恢复、跨阶段、阻塞或用户主动询问时，才按需简短说明：

```text
当前阶段：
已确认：
待确认：
下一步：
```

## 边界处理

- 发布或缓存清理：说明不属于核心五项能力，可推荐 `elementor-widget-release-sop`，但不自动纳入当前流程。
- 旧 Widget 面板不可见、白屏或交互失效：转独立故障排查，不误用 Pipeline。
- 主题 `functions.php`、模板或全站字体修改：转主题或 WordPress 开发任务。
- Elementor 未安装、WordPress 环境缺失：说明前置条件，不在本 Skill 中安装或配置。

外围请求与核心任务同时出现时，先说明边界；只继续用户已授权且属于核心五项能力的部分。
