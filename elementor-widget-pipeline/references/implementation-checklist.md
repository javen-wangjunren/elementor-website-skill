# 实现清单

先确认字段卡，再执行本清单。Confirmed HTML Path 以确认 HTML 为依据；Fast Path 以用户确认的参考解释为依据。模板只提供 Elementor 接线骨架。

## PHP

- `get_name()` 与确认版 Canonical Module Slug 完全一致；`get_title()` 使用对应的可读标题。
- 实现 `get_name()`、`get_title()`、`get_icon()` 和 `get_categories()`；分类包含项目分类与 `general`。
- 实现 `get_style_depends()`，handle 与插件入口和真实 CSS 文件一致。
- 只有确认存在 JS 交互时才实现 `get_script_depends()`。
- `register_controls()` 只输出用户确认的字段；默认不创建 `TAB_STYLE`。
- Repeater 只包含确认的子字段、真实默认项和合理的 `title_field`。
- `render()` 使用 `get_settings_for_display()`；Confirmed HTML Path 不随意改变确认稿结构和类名，Fast Path 不超出已确认的参考解释发明结构。
- 文本用 `esc_html()`，属性用 `esc_attr()`，URL 用 `esc_url()`；只有确认允许的富文本才使用 `wp_kses_post()`。
- 空字段按字段卡决定隐藏、保留占位或使用默认值，不临时发明行为。
- 只有交互模块才在根节点加入实例标识和 JS 所需 `data-*`。

## CSS

- CSS 根类允许增加项目 CSS Prefix，但必须保留完整 Canonical Module Slug，并与确认设计稿对应。
- 所有选择器位于唯一模块命名空间内，例如 `.rd-xxx` 或 `.mml-xxx`。
- 不污染 `:root`、`body`、`.container`、裸 `h1-h6/p/a/button` 或 `.elementor-*`。
- padding、背景、容器宽度、颜色、Typography、圆角和响应式值来自确认 HTML，或 Fast Path 已确认的参考解释与现有页面上下文；通用模板不提供固定视觉默认值。
- 网站已经加载正确字体时可以继承；否则把缺失的网站级字体能力报告给用户，不修改主题或在单个 Widget 中偷偷重复加载。
- 避免全局 reset，补齐 hover、focus、长内容、空内容和目标断点。

## JS（仅交互模块）

- 根节点使用唯一 `data-*` 标识，并以实例为范围查询元素。
- 用 dataset 标记防止同一 DOM 重复初始化。
- 同页多个 Widget 实例互不共享可变状态或选择器结果。
- 普通前台在 `DOMContentLoaded` 后初始化。
- 在 `elementor/frontend/init` 后注册 `frontend/element_ready/<widget-name>.default`。
- Elementor 编辑器替换为新 DOM 时可以初始化新实例。
- 支持键盘操作、必要的 ARIA 状态和 `prefers-reduced-motion`。

## 插件入口

- 已有插件只增加当前资源、文件引入和 Widget 注册，不覆盖其他组件。
- 无现有插件时停止实现，转交 `elementor-site-initialize`；初始化完成后再继续。
- 不在主题 `functions.php` 或模板中加入 Widget 注册代码。
