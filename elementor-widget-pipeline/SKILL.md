---
name: elementor-widget-pipeline
description: 把用户确认的独立模块 HTML，或整页 HTML 中明确指定的 Section，以克制的可编辑字段实现为插件式 Elementor Widget。用于新增 Widget 或迁移已确认组件；不用于设计探索、批量实现整页、旧 Widget 故障排查、主题开发或发布。
---

# Elementor Widget Pipeline

把已经确认的设计稿稳定地变成 Elementor Widget。你负责字段收口、PHP/CSS/可选 JS、插件增量注册和最低验证，不负责重新设计模块。

## 输入边界

- 以用户当前在对话中指定并确认的 HTML/CSS/JS 为主要实现源。实现源可以是独立模块 HTML，也可以是整页 HTML 中边界明确的当前 Section；不自动扫描并选择设计稿版本。
- 截图、Figma 和页面 DOM 可以作为辅助证据；如果还没有确认版 HTML，交回 `website-ui-architect`。只有用户明确确认可直接实现时才能例外。
- 同时出现整页稿、模块稿或多个版本时，先确认当前 Widget 使用的最终实现源。
- 从对话或用户指定中确认目标插件目录、plugin slug、当前 Section 边界、Canonical Module Slug 和 Widget title；不要自行猜测多个可能目标。
- 插件可以在任意本地目录开发，正式使用时完整目录位于 `wp-content/plugins/<plugin>/`。

需要验证输入路由、整页 Section 边界或实现例外时，读取 [路由用例](evals/route-cases.md)。

## 唯一流程

1. 阅读确认版独立模块稿，或只提取确认版整页稿中用户指定的当前 Section；继承 Canonical Module Slug，并识别真实内容、固定设计和交互。
2. 按 [最小字段确认卡](references/spec-card-template.md) 在对话中提出字段初稿。
3. **停止并等待用户增删、微调和确认字段。确认前不得开始 PHP/CSS/JS 实现。**
4. 读取 [注册基线](references/registration-baseline.md)，确认目标插件已存在并向其增量接入；插件不存在时停止本流程，转交 `elementor-site-initialize`。
5. 按 [实现清单](references/implementation-checklist.md) 创建 Widget PHP、CSS 和可选 JS。
6. 按 [验证清单](references/verification-checklist.md) 完成静态检查，并给用户可执行的 Elementor 手动验证步骤。

## 字段原则

- 不因设计稿出现一段内容就自动创建字段；标题、正文、图片、按钮文字和链接也只是候选。
- 数量稳定的内容默认固定在代码中；只有运营确实需要增减时才使用 Repeater。
- `OPTIONAL STYLE CONTROLS` 默认是 `None`。不默认开放颜色、字体、字号、间距、圆角、阴影或背景。
- Layout/Style Controls 只有存在明确复用场景且用户确认时才添加。
- 用户确认的背景、Typography、间距、形状、布局、响应式和装饰规则直接固定在命名空间 CSS 中。
- PHP 主要用 Elementor Settings 替换内容，不得为了字段实现方便明显改变确认稿的信息结构。

## 实现原则

- Canonical Module Slug 由确认版设计稿定义；`get_name()` 与它完全一致，Widget 文件和资源文件从它确定性派生，不在本 Skill 中重新命名模块。
- 使用整页 HTML 时，只实现当前已指定 Section；相邻 Section 仅作为布局上下文，不得顺带实现为同一个 Widget。
- `get_title()` 使用对应的可读标题；CSS 根类可以增加项目 CSS Prefix，但必须保留完整 Module Slug。
- Slug 缺失、设计稿 basename 与声明不一致或与现有 Widget 冲突时，先让用户确认；不得擅自增加 `v2`、`new`、`final` 或数字。
- 实现前识别目标插件采用 Flat 还是 Grouped 结构，并严格沿用；不得在新增单个 Widget 时改变插件结构。
- 已有插件只做增量修改，不用模板覆盖入口，也不创建第二套注册器。
- CSS 只作用于当前 Widget 命名空间；padding、背景、容器和 Typography 按当前确认设计稿实现，不使用通用固定值。
- 无交互就不创建 JS、不注册 script handle，也不实现 `get_script_depends()`。
- 有交互时必须同页多实例隔离、避免重复绑定，并兼容 Elementor 编辑器重新渲染。
- 默认不修改主题 `functions.php`、主题资源或模板。若缺少网站级能力，说明影响并交给站点或主题任务处理。

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
- 旧 Widget 面板不可见、交互失效等独立故障诊断；
- Elementor 安装、主题修改或网站级字体/容器配置；
- 上传、缓存清理、生产发布和 `elementor-widget-release-sop` 的工作。
