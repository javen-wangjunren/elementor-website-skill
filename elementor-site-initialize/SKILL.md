---
name: elementor-site-initialize
description: Initialize a local custom Elementor Widget plugin and design handoff workspace, choosing a Flat or Grouped plugin structure from expected Widget scale. Use once before the first custom Widget when no plugin scaffold exists; theme context is optional and read-only. Do not use for visual design, Widget implementation, deployment, WordPress-root discovery, or Elementor installation checks.
---

# Elementor Site Initialize

初始化自定义 Elementor Widget 的本地开发基础。默认 Elementor 已安装；插件源代码可以放在用户确认的任意本地路径，正式使用时再把完整插件目录放入 WordPress `wp-content/plugins/`。

## 执行

1. 把当前目录视为项目工作区，不向上寻找 WordPress 根目录。当前目录有主题 `style.css`，或用户明确提供主题目录时，才只读扫描主题；没有主题也可以继续初始化。
2. 读取 [初始化契约](references/initialization-contract.md)，推导插件命名、目标路径、预计 Widget 规模和 `Flat / Grouped` 结构。
3. 在写文件前展示一张确认卡。用户必须确认本地路径、结构 Profile；Grouped 还必须确认业务分组。用户可修改任意值。
4. 确认后创建项目配置、设计交接目录和所选插件骨架；只有发现主题上下文时才创建主题扫描摘要。
5. 目标插件或配置已存在时先检查并保留，不覆盖、不重建，也不借初始化迁移 Flat/Grouped 结构。
6. 核对 PHP、JSON、目录和配置一致性，返回创建清单、结构决策和可选主题扫描结论；然后返回调用它的总控或原始任务，根据原始目标继续。

## 默认产物

- `elementor-project.json`
- `docs/elementor/theme-profile.md`（仅存在主题证据时）
- `docs/design-system/`
- `设计稿/modules/` 与 `设计稿/pages/`
- 用户确认路径下可被 `elementor-widget-pipeline` 扩展的 Flat 或 Grouped 插件骨架

空目录只需在本地创建，不添加装饰性占位文档。Design System 未建立时只标记 `pending`，不要替用户设计。

## 边界

- 不扫描 WordPress 根目录，不检查或安装 Elementor。
- 不初始化 CSS/JS 构建工具，默认原生 PHP、CSS、JS。
- 主题扫描始终只读；不修改 `functions.php`、主题资源或线上 `wp-content/plugins/`。
- 不创建 Design System、HTML 设计稿或具体 Widget。
- 不自动把现有 Flat 插件迁移为 Grouped，也不根据后续文件数量偷偷换结构。
- 不固定推荐 Design System。完成后返回 `elementor-site-team-manager` 或原始任务：已有确认版设计稿时可直接进入 `elementor-widget-pipeline`；需要视觉规则时进入 `website-design-system-architect`；其他情况由现有依赖决定。
