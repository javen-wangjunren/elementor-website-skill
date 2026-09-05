# Elementor 站点初始化契约

仅在执行初始化时读取本文件。

## 1. 项目工作区与可选主题证据

把当前工作目录视为项目工作区，不向上寻找 WordPress 根目录。插件可以创建在工作区内，也可以使用用户确认的其他本地路径。

只有当前目录包含主题 `style.css`，或用户明确提供主题目录时，才读取：

- `style.css`：`Theme Name`、`Text Domain`、`Template`、版本；
- `functions.php`：主题入口、主要 include/require、资源加载方式；
- 存在时按需查看 `inc/`、`src/`、`assets/`、`dist/`、`package.json` 和 Tailwind/LESS/Sass 配置；
- 搜索字体声明、字体文件、CSS Variables、容器和主要 CSS/JS enqueue。

主题扫描始终只读。只记录有文件证据的结论；`Template` 存在时可判断为子主题，类型无法可靠识别时写 `custom/unknown`。没有主题上下文时不要阻塞初始化，也不要猜主题、字体、容器或后台激活状态。

## 2. 结构 Profile 裁决

根据预计规模和站点用途推荐一次，写文件前由用户确认：

### Flat

适用：预计约 `1–20` 个 Widget、单一业务范围、短中期项目。

```text
<plugin-slug>/
├── <plugin-slug>.php
├── widgets/
└── assets/
```

- Widget、CSS、JS 在各自目录平铺。
- 注册项显式维护在插件主文件。
- `groupingStrategy: none`，`registrationStrategy: explicit-main-file`。

### Grouped

适用：预计 `21+` 个 Widget、纯 Elementor 长期网站、存在多个稳定业务家族，或已知会增长到四五十个模块。

```text
<plugin-slug>/
├── <plugin-slug>.php
├── includes/
│   └── widget-registry.php
├── widgets/
│   ├── <group>/
│   └── ...
└── assets/
    ├── <group>/
    └── ...
```

- `widgets/<group>/` 与 `assets/<group>/` 使用相同业务分组。
- 分组按稳定的业务或模块家族命名，不按具体页面命名；通常确认 `4–8` 个一级分组。
- 一个 Widget 归属一个主要分组，不增加无证据的深层目录。
- `includes/widget-registry.php` 是确定性清单，插件主文件通过它注册资源、引入类并注册 Widget；不用运行时 `glob()` 自动发现。
- `groupingStrategy: business-domain`，`registrationStrategy: manifest-registry`。

Profile 按预计规模而不是当前空目录裁决。纯 Elementor 长期网站默认推荐 Grouped；普通项目默认推荐 Flat。用户确认后固定，后续新增单个 Widget 不自动切换结构。

## 3. 自动推导与确认卡

有主题证据时优先从 Theme Name、Text Domain 和目录名推导；没有主题时从当前工作区名称和用户业务名称推导：

```text
Project Name:
Plugin Name: <Project> Elementor Widgets
Plugin Slug: <project>-elementor-widgets
PHP Prefix: <PROJECT>
CSS Prefix: <project>
Elementor Category Slug: <project>
Elementor Category Title: <Project> Widgets
Expected Widget Scale: small (1–20) / large (21+)
Structure Profile: flat / grouped
Grouping Strategy: none / business-domain
Widget Groups: None / <4–8 confirmed group slugs>
Registration Strategy: explicit-main-file / manifest-registry
Local Plugin Path:
Design Root: 设计稿/
Theme Evidence: detected / user-provided / unavailable
```

规则：

- 去掉主题名中无意义的 `Theme`、`Child Theme` 等尾缀；
- slug 和 CSS 前缀使用小写 kebab-case；
- PHP 前缀使用安全的大写标识符；
- 优先沿用已有 Text Domain 中稳定的品牌前缀；
- 发现命名冲突时提出一个推荐值，不自行覆盖。
- 当前工作区是主题项目时，本地路径默认推荐 `plugins/<plugin-slug>/`；普通工作区默认推荐工作区内 `<plugin-slug>/`。用户可以改为任意明确本地路径。
- 目标路径在工作区内时保存相对路径；在工作区外时保存用户确认的绝对路径，不用主题目录代替。
- Grouped 的分组 slug 使用小写 kebab-case；默认共用一个 Elementor 面板分类，文件分组不自动变成多个 Elementor 分类。

必须先展示确认卡。用户确认前不创建文件。

## 4. 项目配置

在项目工作区根创建 `elementor-project.json`。至少保存：

```json
{
  "projectName": "Example",
  "theme": {
    "evidence": "unavailable",
    "name": null,
    "slug": null,
    "textDomain": null,
    "parentTheme": null,
    "type": null,
    "profile": null
  },
  "elementor": {
    "assumedInstalled": true,
    "categorySlug": "example",
    "categoryTitle": "Example Widgets"
  },
  "plugin": {
    "name": "Example Elementor Widgets",
    "slug": "example-elementor-widgets",
    "phpPrefix": "EXAMPLE",
    "cssPrefix": "example",
    "localPath": "example-elementor-widgets",
    "expectedWidgetScale": "small",
    "structureProfile": "flat",
    "groupingStrategy": "none",
    "groups": [],
    "registrationStrategy": "explicit-main-file"
  },
  "design": {
    "status": "pending",
    "system": "docs/design-system/design-system.md",
    "modules": "设计稿/modules",
    "pages": "设计稿/pages"
  },
  "assets": {
    "strategy": "plain-css-js",
    "themeModification": "forbidden-by-default"
  }
}
```

Grouped 项目把对应值改为：

```json
{
  "expectedWidgetScale": "large",
  "structureProfile": "grouped",
  "groupingStrategy": "business-domain",
  "groups": ["global", "solutions", "products", "content", "conversion"],
  "registrationStrategy": "manifest-registry"
}
```

上面是 `plugin` 对象中的字段片段，不是第二份配置。JSON 必须有效。工作区内路径使用相对路径；只有用户明确选择工作区外路径时使用绝对路径。

## 5. 主题扫描摘要（可选）

只有存在主题证据时才创建 `docs/elementor/theme-profile.md`，简洁记录：

- 主题/父主题证据；
- CSS、JS 和字体从哪些文件或钩子加载；
- 已发现的全局字体、CSS Variables、容器或断点；
- 后续 Design System 可以复用的事实；
- 仍未知的内容。

该文件是观察结果，不是 Design System。没有主题证据时配置写 `profile: null`，不创建空摘要，也不把零散旧样式直接升级为新站规则。

## 6. 本地插件骨架

两种 Profile 都创建可被 `elementor-widget-pipeline` 扩展的最小插件入口。主插件文件至少包含：

- WordPress 插件头：Name、Description、Version、Author、Text Domain；
- `defined( 'ABSPATH' ) || exit;`；
- 使用 PHP Prefix 命名的插件主类；
- `plugins_loaded` 初始化；
- `elementor/elements/categories_registered` 分类注册；
- 单一现代 `elementor/widgets/register` 注册入口；
- `wp_enqueue_scripts`、`elementor/frontend/after_register_styles`、`elementor/frontend/after_register_scripts` 资源注册入口；
- 暂为空的 `register_assets()` 与 `register_widgets()` 扩展点；
- 方法参数的对象与方法存在性保护。

Flat 创建 `widgets/` 与 `assets/` 空目录，入口显式保留增量注册位置。

Grouped 额外创建 `includes/widget-registry.php` 和确认的每个 `widgets/<group>/`、`assets/<group>/` 空目录。Registry 初始内容只返回空数组，不创建示例 Widget：

```php
<?php

defined( 'ABSPATH' ) || exit;

return [];
```

Grouped 主插件入口必须读取 Registry，并按以后每项记录的 `class`、`file`、`style_handle/style` 和可选 `script_handle/script` 完成确定性注册。初始化时只建立空循环和安全检查，不伪造模块记录；相对路径始终以插件根目录为基准。

不要：

- 写示例 Widget；
- 创建无用途的 CSS/JS；
- 使用 legacy `elementor/widgets/widgets_registered`；
- 修改主题加载插件；WordPress 激活插件后会自行加载入口文件；
- 检查、安装或激活 Elementor。

## 7. 安全与验证

- 创建前检查所有目标，存在时保留并报告；
- 不用初始化覆盖已有项目配置或插件；
- 已有插件只识别并报告当前 Profile，不借初始化执行结构迁移；
- 对生成的 PHP 执行 `php -l`；
- Grouped 同时检查 Registry PHP 语法和主入口可以读取空 Registry；
- 检查 JSON 可解析；
- 确认插件 slug、类前缀、Text Domain、分类、路径、Profile、分组和注册策略一致；
- 确认 Flat 没有多余 Registry，Grouped 的所有确认分组在 `widgets/` 与 `assets/` 两侧成对存在；
- 最终说明这只是本地插件骨架，尚未创建 Design System、设计稿和 Widget。

初始化完成后返回调用它的总控或原始任务，不固定指定下一阶段：

- 原始目标是实现已有确认版 HTML：直接返回 `elementor-widget-pipeline`；
- 原始目标是继续完整页面设计且缺少视觉规则：进入 `website-design-system-architect`；
- 原始目标只是创建插件骨架：完成验证后收口；
- 其他情况由 `elementor-site-team-manager` 根据原始目标和现有依赖重新路由。

初始化只解决插件与工作区前置条件，不要求用户重做已经确认的内容、Design System 或 UI。
