# 注册基线

本 Skill 默认向一个已有 Elementor Widget 插件增量加入组件。插件可以在任意本地目录开发，正式使用时完整目录应位于 `wp-content/plugins/<plugin-slug>/`。

## 结构识别

实现前先检查目标插件入口和目录，只识别并沿用，不执行迁移：

- **Flat**：Widget 与资源分别平铺在 `widgets/`、`assets/`，注册项通常显式维护在主插件文件。
- **Grouped**：Widget 与资源位于对应的 `widgets/<group>/`、`assets/<group>/`，通常由 `includes/widget-registry.php` 等确定性 Registry 管理。
- 证据混合或无法判断时先询问用户；不得把新增单个 Widget 当作整理全插件结构的机会。

Flat 示例：

```text
<plugin-slug>/
├── <plugin-slug>.php
├── widgets/
│   └── <widget>-widget.php
└── assets/
    ├── <widget>.css
    └── <widget>.js      # 仅交互模块需要
```

示例中的 `<widget>` 使用确认版 Canonical Module Slug。Grouped 的目录位置由现有业务分组决定，但文件、Registry 记录和 Widget `get_name()` 仍继承同一个 Slug。

Grouped 项目把当前 Widget 放入已经存在的业务分组，并按现有 Registry 格式增量登记；不要临时发明新分组、第二份 Registry 或另一种注册方式。

## 已有插件：只做增量修改

先读取现有入口和 `elementor-project.json`（存在时），沿用其类前缀、项目分类、角标、marker class、基础关键词、handle、版本策略和组织方式。只增加当前 Widget 需要的内容：

- CSS handle 与 `wp_register_style()`；
- 有交互时才增加 JS handle 与 `wp_register_script()`；
- `require_once`；
- `$widgets_manager->register()`；
- Widget 类文件和真实存在的资源文件。

不要用模板覆盖现有插件入口，不要创建第二套注册器，也不要把注册代码放进主题 `functions.php`。

## 没有插件：转初始化流程

目标插件不存在时停止 Widget 实现，转交 `elementor-site-initialize` 创建并确认插件名称、路径、命名和 `Flat / Grouped` 结构。初始化完成后再回到本 Skill；不得在 Pipeline 内临时创建插件入口或绕过结构规划。

## 注册原则

- 只使用现代 `elementor/widgets/register` 注册 Widget。
- 避免 legacy `elementor/widgets/widgets_registered`。
- 使用 `elementor/elements/categories_registered` 注册自定义分类。
- 编辑器专用角标样式使用 `elementor/editor/after_register_styles` 与 `elementor/editor/after_enqueue_styles`，不得加载到网站前台。
- 使用 `wp_register_style()` / `wp_register_script()` 注册资源。
- Widget 通过 `get_style_depends()` 和可选的 `get_script_depends()` 按需加载资源。
- `get_categories()` 只返回项目分类；不要同时加入 `general`，避免同一个 Widget 在面板重复出现或混入通用分类。
- `get_icon()` 在 Elementor 图标 class 后追加项目 marker class，共享编辑器 CSS 据此显示统一角标。
- `get_keywords()` 至少包含项目基础关键词，并追加 Widget title、模块职责和常用同义词对应的精简关键词。
- 路径使用 `plugin_dir_path()`、`plugin_dir_url()` 或 `plugins_url()`，不写本机绝对路径。
- 资源 handle、真实文件名、Widget 声明和入口注册必须一致。
- 资源和 PHP 文件可以按现有插件约定增加职责后缀，但不得改变 Canonical Module Slug。

旧插件若已有项目分类但缺少角标资产或关键词契约，可在实现当前 Widget 时做一次插件级最小补齐；不得借机改名、迁移目录或重构全部 Registry。

注册完成不等于发布完成。本 Skill 只完成本地实现和最低验证，不处理上传、缓存环境或线上发布。
