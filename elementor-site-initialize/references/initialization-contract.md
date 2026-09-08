# Elementor 站点初始化契约

仅在执行初始化时读取本文件。

## 1. 项目工作区与可选主题技术上下文

把当前工作目录视为项目工作区，不向上寻找 WordPress 根目录。插件可以创建在工作区内，也可以使用用户确认的其他本地路径。

只有当前目录包含主题 `style.css`，或用户明确提供主题目录时，才读取：

- `style.css`：`Theme Name`、`Text Domain`、`Template`、版本；
- `functions.php`：主题入口、主要 include/require、资源加载方式；
- 存在时按需查看 `inc/`、`src/`、`assets/`、`dist/`、`package.json` 和 Tailwind/LESS/Sass 配置；
- 按需确认与插件加载有关的主要 CSS/JS enqueue；不为推断 Elementor 视觉规则而扫描字体、Token、容器或全量 CSS。

主题读取始终只读。只记录有文件证据的命名和技术集成结论；`Template` 存在时可判断为子主题，类型无法可靠识别时写 `custom/unknown`。没有主题上下文时不要阻塞初始化，也不要猜后台激活状态、Elementor Site Settings 或视觉冲突。

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
Elementor Badge Label: CUSTOM
Elementor Marker Class: <project>-custom-widget
Elementor Base Keywords: custom, <project>
Expected Widget Scale: small (1–20) / large (21+)
Structure Profile: flat / grouped
Grouping Strategy: none / business-domain
Widget Groups: None / <4–8 confirmed group slugs>
Registration Strategy: explicit-main-file / manifest-registry
Local Plugin Path:
Design Root: 设计稿/
Theme Evidence: detected / user-provided / unavailable
Site Mode: greenfield / rebuild / existing-extension
Style Authority: project-design-system / existing-site
Global Style Policy: initialize-global-style / inherit-existing
Elementor Style Contract: docs/elementor/elementor-style-contract.md
Style Contract Status: pending
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
- 完全新站默认 `greenfield + project-design-system + initialize-global-style`。
- 用户明确从零重建已有网站时使用 `rebuild + project-design-system + initialize-global-style`，不自动继承旧站视觉。
- 老站新增页面或模块并要求保持现有风格时使用 `existing-extension + existing-site + inherit-existing`。
- 仅根据项目目录或主题存在不能把站点判为 existing-extension；以用户本次目标为准。

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
    "categoryTitle": "Example Widgets",
    "badgeLabel": "CUSTOM",
    "markerClass": "example-custom-widget",
    "baseKeywords": ["custom", "example"]
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
  "siteStyle": {
    "mode": "greenfield",
    "authority": "project-design-system",
    "policy": "initialize-global-style",
    "contract": "docs/elementor/elementor-style-contract.md",
    "status": "pending"
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

## 5. 主题技术摘要（可选）

只有存在主题证据时才创建 `docs/elementor/theme-profile.md`，简洁记录：

- 主题/父主题证据；
- CSS、JS 和字体从哪些文件或钩子加载；
- 与插件集成直接相关的资源加载事实；
- 仍未知的内容。

该文件是技术上下文，不是 Design System 或样式冲突报告。没有主题证据时配置写 `profile: null`，不创建空摘要，也不把零散旧样式升级为站点规则。

GeneratePress、父主题或子主题的存在不构成冲突证据。初始化不检查 Elementor Site Settings，也不从本地主题代码判断最终视觉；样式映射由 Style Adapter 依据 Design System 与 Elementor 后台证据完成。真实页面出现明确偏差时，再进入专项样式诊断。

## 6. 本地插件骨架

两种 Profile 都创建可被 `elementor-widget-pipeline` 扩展的最小插件入口。主插件文件至少包含：

- WordPress 插件头：Name、Description、Version、Author、Text Domain；
- `defined( 'ABSPATH' ) || exit;`；
- 使用 PHP Prefix 命名的插件主类；
- `plugins_loaded` 初始化；
- `elementor/elements/categories_registered` 分类注册；
- 使用 `elementor/editor/after_register_styles` 与 `elementor/editor/after_enqueue_styles` 注册并加载仅作用于编辑器面板的角标 CSS；
- 单一现代 `elementor/widgets/register` 注册入口；
- `wp_enqueue_scripts`、`elementor/frontend/after_register_styles`、`elementor/frontend/after_register_scripts` 资源注册入口；
- 暂为空的 `register_assets()` 与 `register_widgets()` 扩展点；
- 方法参数的对象与方法存在性保护。

插件骨架必须建立统一的面板可发现性契约：

- 所有项目 Widget 只归入确认的项目分类，不额外挂入 `general`，避免面板重复和混杂；
- 创建一份共享的编辑器 CSS，通过确认的 marker class 为 Widget 卡片右上角显示角标；默认文案为 `CUSTOM`，用户可在确认卡修改；
- marker class 由各 Widget 追加到 `get_icon()` 返回值，角标 CSS 据此识别 Widget，因此在分类区和搜索结果中都可见；
- 各 Widget 的 `get_keywords()` 继承基础关键词，并追加模块语义关键词。初始化只保存契约，不创建示例 Widget。

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
- 创建共享编辑器角标 CSS 以外的无用途 CSS/JS；
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
- 确认插件 slug、类前缀、Text Domain、分类、角标、marker class、基础关键词、路径、Profile、分组和注册策略一致；
- 确认 `siteStyle.mode`、`authority`、`policy`、合同路径和 `pending` 状态与确认卡一致；
- 确认 Flat 没有多余 Registry，Grouped 的所有确认分组在 `widgets/` 与 `assets/` 两侧成对存在；
- 最终说明这只是本地插件骨架，尚未创建 Design System、设计稿和 Widget。

初始化完成后返回调用它的总控或原始任务，不固定指定下一阶段：

- 原始目标是实现已有确认版 HTML：先检查是否需要 Confirmed Style Contract；需要且缺失时返回 `elementor-site-style-adapter`，否则进入 Pipeline；
- 原始目标是继续完整页面设计且缺少视觉规则：进入 `website-design-system-architect`；
- 原始目标包含 Elementor 实现且 Design System 已确认、Style Contract 缺失：进入 `elementor-site-style-adapter`；
- 原始目标只是创建插件骨架：完成验证后收口；
- 其他情况由 `elementor-site-team-manager` 根据原始目标和现有依赖重新路由。

初始化只解决插件与工作区前置条件，不要求用户重做已经确认的内容、Design System 或 UI。
