---
name: elementor-widget-pipeline
description: 把确认版模块 HTML、整页 HTML 中指定的 Section，或既有 Elementor 页面中用户明确批准的简单强参考模块，以克制字段实现为插件式 Elementor Widget。用于新增或迁移单个已确认 Widget；不用于设计探索、复杂参考图直做、批量整页实现、旧 Widget 排错、主题开发或发布。
---

# Elementor Widget Pipeline

把确认的 HTML 或符合快速通道的简单强参考稳定地变成 Elementor Widget。你负责字段收口、PHP/CSS/可选 JS、插件增量注册和最低验证，不负责重新设计模块。

## 输入边界

- 以用户当前在对话中指定并确认的 HTML/CSS/JS 为主要实现源。实现源可以是独立模块 HTML，也可以是整页 HTML 中边界明确的当前 Section；不自动扫描并选择设计稿版本。
- 截图、Figma、图片和页面 DOM 默认只是辅助证据。只有既有 Elementor 页面新增简单独立模块、参考足够明确且用户明确批准直接实现时，才可进入 [Simple Reference-led Widget Fast Path](references/reference-led-fast-path.md)。
- 已有确认视觉设计包但没有 HTML，且不满足快速通道时转 `website-html-prototyper`；需要信息策略、布局、媒体或页面关系设计时转 `website-ui-architect`。
- 同时出现整页稿、模块稿或多个版本时，先确认当前 Widget 使用的最终实现源。
- 从对话或用户指定中确认目标插件目录、plugin slug、当前 Section 边界、Canonical Module Slug、Widget title，以及项目的 Elementor 分类、角标与基础搜索关键词；不要自行猜测多个可能目标。
- 确认 `elementor-project.json.siteStyle` 与 `docs/elementor/elementor-style-contract.md`。新站/重建站默认要求 Confirmed 项目合同；老站要求保持现有风格时必须有 Confirmed Existing Site 合同。用户明确要求完全隔离且不继承站点样式的单次模块可记录为局部例外后跳过。
- 老站缺少 Existing Design System 时转 `website-design-system-architect`；已有系统但合同缺少后台证据或未确认时转 `elementor-site-style-adapter`。不得在当前 Widget 中临时猜一套站点样式。
- 插件可以在任意本地目录开发，正式使用时完整目录位于 `wp-content/plugins/<plugin>/`。

需要验证输入路由、整页 Section 边界或实现例外时，读取 [路由用例](evals/route-cases.md)。

## 两条输入路径

- **Confirmed HTML Path**：读取确认版独立模块 HTML，或整页 HTML 中指定的当前 Section；继承 Canonical Module Slug。
- **Simple Reference-led Fast Path**：先读取快速通道规则并通过资格检查；从强参考提取最小结构和视觉约束，不要求先创建独立 HTML。快速通道不成立时不得勉强实现。

两条路径汇合后执行同一个实现流程：

1. 确认当前 `SOURCE MODE`、实现边界、真实内容、固定视觉、Motion / 交互、Canonical Module Slug 和 `SITE STYLE CONTEXT`；快速通道的 Slug 在字段卡中提出并由用户确认。
2. 按 [最小字段确认卡](references/spec-card-template.md) 在对话中提出字段初稿和来源解释。
3. **停止并等待用户增删、微调和确认字段。确认前不得开始 PHP/CSS/JS 实现。**
4. 读取 [注册基线](references/registration-baseline.md)，确认目标插件已存在并向其增量接入；插件不存在时停止本流程，转交 `elementor-site-initialize`。
5. 按 [实现清单](references/implementation-checklist.md) 创建 Widget PHP、CSS 和可选 JS。
6. 按 [验证清单](references/verification-checklist.md) 完成静态检查，并给用户可执行的 Elementor 手动验证步骤。

## 字段原则

- 只开放运营确实需要编辑的内容；数量稳定的内容固定，只有需要增减时才用 Repeater。
- `OPTIONAL STYLE CONTROLS` 默认 `None`；Layout/Style Controls 只有明确复用需求且用户确认时才添加。
- 动画速度、位移、缓动和 Layer 默认不开放为 Elementor Controls；固定继承确认 HTML 与 Motion Contract。只有运营确有跨实例配置需求且用户在字段卡明确批准时例外。
- 字体、颜色与基础视觉默认遵守 Confirmed Elementor Style Contract。可直接继承的属性使用 `inherit`；固定 CSS 只使用合同确认的 Elementor CSS Variables，并提供对应 Design System fallback。
- 确有运营覆盖需求时才新增 Style Control，且使用合同确认的 Elementor Global Style 作为默认绑定；这不改变“默认无 Style Controls”。
- 已确认的视觉和响应式规则固定在命名空间 CSS；不得为字段实现改变信息结构。

## 实现原则

- Confirmed HTML Path 原样继承设计稿 Slug；Fast Path 只提出一个语义化 Slug，并随字段卡由用户确认。确认后 `get_name()` 与它完全一致。
- 使用整页 HTML 时只实现当前 Section；相邻模块只作上下文。
- Slug 不一致或冲突时先确认，不擅自增加版本词或数字。
- 沿用现有 Flat/Grouped 结构并只做增量注册；Widget 必须继承插件级面板可发现性契约，模块 CSS 必须位于当前 Widget 命名空间，不修改主题。
- 老站不得因实现一个 Widget 修改 Site Settings、主题或全局 CSS；局部独立风格只作用于当前 Wrapper，也不反向更新站点合同。
- 无交互不创建 JS；有交互时支持同页多实例和 Elementor 编辑器重新渲染。Observer、定时器、RAF、视频与全局监听必须按实例保存并在重初始化、DOM 移除或页面生命周期结束时停止；无法获得可靠销毁 Hook 时使用会检查 `root.isConnected` 的自终止任务，避免常驻全局资源。
- Motion 不写入 Elementor Global Style；Style Contract 只负责视觉继承，当前模块的 Motion Source、Layer、Trigger、Mobile、Reduced Motion 与运行要求由字段卡和确认 HTML 传递。

## 输出

- 对话中经用户确认的最小字段卡；用户明确要求时才另存文件。
- 可运行的 Widget PHP、命名空间 CSS 和必要时的 JS。
- 对现有插件入口的最小增量修改。
- 静态检查结果和 Elementor 手动验证步骤。

## 模板

- [Widget PHP](templates/widget-php.php)：默认只有 Content Controls 和 CSS 依赖。
- [Widget CSS](templates/widget-css.css)：按确认稿填写，不预设视觉数值。
- [Widget JS](templates/widget-js.js)：仅交互模块使用。

## 不负责

- 设计方向探索或 Design System 建立；
- Elementor Site Settings 映射、Existing Site 样式来源审计或全局配置写入；
- 旧 Widget 面板不可见、交互失效等独立故障诊断；
- Elementor 安装、主题修改或网站级字体/容器配置；
- 上传、缓存清理、生产发布和 `elementor-widget-release-sop` 的工作。
