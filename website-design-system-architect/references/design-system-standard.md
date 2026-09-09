# Design System 标准

## 1. 产物与先后关系

三个设计阶段必须按顺序发生：

1. **临时规则草稿**：用户选定文字方向后在对话中形成，不单独落盘。
2. **单方向 Design Board**：写入 `设计稿/design-system/style-board.html`，把临时规则可视化。
3. **Active Baseline Design System**：Board 由用户确认后，写入 `docs/design-system/design-system.md`。

规则先产生，Board 只负责验证组合效果；正式 Design System 是当前有效基线，不是永久不变的终稿。

统一称为 **Design Board**；`style-board.html` 仅是为兼容下游保留的历史文件名。

### 总控协调状态

本 Skill 由 `elementor-site-team-manager` 调度时，总控将关键状态写入唯一的 `docs/workflow-status.md`：

```text
当前阶段：
已确认：
待确认：
下一步：
当前 Skill：
确认依据：
更新时间：
```

它不是本 Skill 的交付物。专项 Skill 不创建 `docs/design-system/workflow-status.md` 或其他独立状态文件；独立调用本 Skill 时不强制创建总控状态。确认信息不能只根据文件存在推断。

## 2. Design Board 的职责

Design Board 只回答：

- 颜色、字体、间距、形状和基础组件组合起来是否统一、专业；
- 常用基础组件是否共享同一种设计语言；
- 下游 UI Skill 是否无需重新猜基础规则。

它不是完整页面、模块设计稿、三套网站方案、营销 Landing Page 或穷举式组件库。

### 必须展示

- 品牌色、语义颜色与 Surface；
- Typography；
- Container、Grid 与 Spacing；
- Border、Radius 与 Shadow；
- Button、Link、Heading、Text、Badge/Chip、Card、List、Icon、Tabs、Accordion、Table；
- 必要的 Hover、Focus、Active、Disabled 状态；
- 一个紧凑 Motion Preview Strip：Layer 1 按钮/链接反馈、Layer 2 内容显现和 Tabs/Accordion 状态过渡。它只验证运动性格，不包含业务 Section 或 Layer 3 Signature。

默认组件结构与表现遵循 [B2B Design Board 默认模式](design-board-pattern.md)。具体品牌色、字体、密度与形状可被已确认品牌规范和用户决定覆盖；默认示例不等于强制视觉主题。

### 明确排除

- Form；
- Media 与 Responsive 展示区；
- Header、Mega Menu、Footer；
- Hero、Gallery、CTA Section；
- Product、Capability、Quality 等业务模块；
- 完整页面 Layout。

这里排除的是完整 Gallery 业务模块；Card 区使用三张并排 Gallery Cards 是基础组件示例。Board 只包含一个已确认方向，不得加入方向切换 Tabs、重复 CSS 系统或多套组件副本。

## 3. Board 生成与查看边界

- 使用一个可直接打开的自包含 HTML 文件；优先原生 HTML/CSS，JavaScript 仅用于展示必要组件状态。
- 不要求构建工具或前端框架；未经确认不依赖会失效的外部组件库、远程图片或远程脚本。
- 项目图片使用稳定的项目内路径；资源缺失时使用明确的中性占位，不伪装成真实企业素材。
- Design Board 是风格查看工具，不是实现验收对象。生成后按 [设计师自查](design-review.md) 判断颜色、字体、形状与基础组件语言是否专业、统一并足以指导后续模块设计。
- 视觉审查可使用用户整页截图或 Ego Browser 的一次桌面整页渲染，但这不构成浏览器 QA；不检查窄屏适配、溢出、兼容性或生产实现，也不输出验收等级。
- 页面与模块视觉方向由 `website-ui-architect` 确认；响应式、交互和 HTML 实现质量由 `website-html-prototyper` 验证。

## 4. 身份与真实性

- 项目名称、Logo、品牌色和公司身份必须来自已确认资料。
- 禁止用 `Hello Elementor`、主题名、仓库名或模板名代替公司名称。
- 示例内容只使用已验证事实，或明确中性的演示文字。
- 禁止虚构客户数量、认证、交期、质量数据、VR 工厂参观等企业主张。
- 禁止用完整 Hero 或营销页面包装基础组件。

## 5. Design Board 用户确认

请用户判断：

- 项目身份正确，没有主题或模板残留；
- 没有虚构事实和业务能力；
- 只包含基础规则与基础组件；
- 颜色、字体、间距、形状和基础组件形成统一语言；
- 常用组件层级与状态清晰；
- 下游 UI Skill 无需重新猜基础规则。

提交用户前先完成一次设计师自查和最多一轮明确问题自动修正。用户要求修改时更新临时规则和 Board；只有用户明确确认后才生成正式 Design System。

## 6. Active Baseline Design System 最小合同

正式 `design-system.md` 至少包含：

1. `Status: Active Baseline`、版本、来源、最近确认日期、`Site Mode` 与 `Style Authority Intent`；
2. 希望给人的感觉 / 不希望给人的感觉；
3. 颜色角色与语义颜色；
4. Typography 层级；
5. Container、Grid 与 Spacing；
6. Surface、Border、Radius 与 Shadow；
7. 基础组件规则与状态；
8. 图片比例、裁切、Caption 与 Media Rules；
9. Evidence Guardrails：事实型媒体必须与已确认资料匹配；
10. Motion Foundation、Responsive 与 Accessibility 基线；Motion Foundation 至少包含 Motion Level、Token、三层职责、默认禁止项、移动端与 Reduced Motion；
11. `Locked / Flexible / Open`；
12. 已知例外与待验证项。

`Style Authority Intent` 只表达设计权威：`Project Design System` 或 `Existing Site`。它不包含 Elementor Global Token、Theme Style 字段或平台 CSS Variable；这些由 `elementor-site-style-adapter` 映射。

Existing Site 还应记录代表 URL、查看日期、渲染证据可信度，并把关键规则区分为 `Observed Rendering / Probable Source / Backend Verification Required`。无法从公开页面证明的平台事实必须保留为待验证项。

Form 默认标记为插件负责，不纳入首版基础组件规则；确有跨页面统一定制需求时再增加。

Board 不展示 Media、Responsive 与 Accessibility，也不展示页面级 Signature。Motion Preview Strip 只确认基础运动性格；未经用户确认的具体页面动效必须标为 `Flexible` 或 `Open`，不得伪装成已确认规则。

## 7. Active Baseline 设计师自查

正式交付前按 [设计师自查](design-review.md) 检查：

- 每条规则可追溯到确认版 Board、用户决定或行业研究；
- Board 中确认的颜色角色、字体层级、间距、圆角与组件规则准确写入；
- `Locked / Flexible / Open` 完整且没有把未确认内容写成 `Locked`；
- 不重新引入用户已否决的无圆角卡片、黑色重表头、方框序号 List 或单张整行大卡片；
- 不包含页面布局、业务模块或平台实现细节，规则之间没有冲突。

明确遗漏、冲突或回退最多自动修正一轮；仍需品牌或业务决定的项目保留为 `Open`。

## 8. 受控演进

- 单页面或单模块特例留在 UI 阶段，不修改 Design System。
- 会跨页面复用的基础规则，由 AI 说明影响范围，经用户确认后更新 Design System。
- 只有颜色、字体或 Board 所展示的基础组件规则出现明显视觉变化时，才同步更新 Design Board。
- 每次更新保留 `Locked / Flexible / Open` 判断，并更新版本或变更记录。

## 9. 冲突优先级

1. 用户最新明确决定；
2. 已确认品牌与公司事实；
3. 当前 Active Baseline；
4. 已确认的同行研究结论；
5. 通用设计建议。

## 10. 首版限制

- 不追求完整设计系统或覆盖所有页面场景。
- 未在真实页面验证的规则标记为 `Open`。
- 不把单次页面实验过早升级为全站规则。
- 保留平台中立性，不写 Elementor、GeneratePress 等实现细节。
