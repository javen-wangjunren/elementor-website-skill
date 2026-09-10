# B2B Design Board 默认模式

## 用途

这是 B2B 与制造业项目的默认结构参考，用来提高首次生成质量，不是固定品牌主题。已确认的品牌规范、用户决定和行业证据可覆盖具体色值、字体、密度与圆角；不得机械套用深海军蓝或工程蓝。

可参考 `../assets/b2b-design-board-reference.html` 的信息结构和组件比例。只借鉴结构，不复制其中的示例身份与色值。

## Board 范围

只展示：

- Color；
- Typography；
- Grid、Spacing、Shape；
- Button、Link、Chip、Icon；
- Card、List；
- Tabs、Accordion；
- Table。

不展示 Media、Responsive、Hero、Header、Footer、Form、完整 Gallery、CTA、页面级 Signature 或其他业务模块。Board 是基础设计语言参考，不是缩小版页面设计稿。

### 可选 Motion Preview Strip

- 默认不附加；Layer 1 通过 Button、Link、Tabs 和 Accordion 的基础状态即可表达。
- 只有用户明确要求查看运动方向，或项目已确认 Layer 2 跨页基线时才附加。
- 只演示一个按钮/链接 Feedback、一个短距离 Content Reveal，以及 Tabs 或 Accordion 的状态过渡。
- New Site / Rebuild 默认采用 `Motion Level: Restrained` 与 [Motion System Standard](motion-system-standard.md) Token；品牌或用户决定可覆盖。
- 提供明确的 Replay 或直接交互入口，不依赖持续自动循环展示效果。
- 内容默认可见；脚本失败或 `prefers-reduced-motion: reduce` 时仍能查看全部组件和状态。
- 不使用视频、视差、滚轮绑定、长距离 Sticky 或业务模块来展示 Motion Foundation。

## 默认组件规则

### Button 与强调色

- Button 默认使用 8px 柔和圆角；品牌特征明确时可调整。
- 至少展示 Default、Hover、Active、Focus、Disabled。
- 同一视觉区域只保留一个实心强调按钮，其余使用描边或文本层级。
- 黄色、红色等信号色只表示优先级、警告或业务信号，不作为默认 CTA。

### Card

- 默认使用三张并排 Gallery Cards，验证真实网站常见的卡片组合。
- 图片框固定 4:3，`object-fit: cover`；卡片默认 12px 圆角。
- 三张卡片应共享图片高度、内容节奏和操作位置。
- 不使用单张占满整行的大卡片充当组件演示。

### List

- 只保留 Bullet、Numbered、Semantic Icon 三种有明确用途的形式。
- 普通顺序 List 直接使用 `1. 2. 3.`，不为序号添加装饰方框、徽章或卡片容器。
- Semantic Icon 只在图标能表达验证、支持、下载、交付等明确语义时使用。

### Icon

- 同一 Board 使用统一线性图标语言。
- 明确常用尺寸、描边粗细、默认色和强调色。
- 带底容器只用于状态、功能入口或需要扩大点击区域的场景，不作为普遍装饰。

### Tabs 与 Accordion

- 用紧凑、真实的内容展示默认与激活/展开状态。
- 激活状态使用品牌主色、字重或下划线中的一到两种，不叠加过多信号。
- 不在 Board 中实现复杂业务交互或完整信息架构。

### Table

- Table 使用完整外边框、内部行列分隔和整体圆角；圆角建议与 Card 同一尺度族。
- 表头优先使用品牌主色的可读派生色，不默认使用黑色或近黑重表头。
- 数字使用 tabular numerals，列标题与数据对齐清晰。
- 表格只验证技术数据的层级、密度和可读性，不承载真实业务主张。

## 视觉纪律

- 色彩、字体、间距、圆角、边框与阴影必须像同一个系统。
- 阴影只用于确有层级需要的元素，B2B 信息容器优先依靠留白与边框。
- 示例必须接近真实网站使用方式；不为“显得设计过”制造古怪结构。
- 下游 UI Architect 应能从 Board 直接推断模块中的基础控件，而无需重新决定按钮、卡片、列表或表格语言。
- UI Architect 应能读出基础运动性格与 Token，但仍负责页面级 Motion Budget 和 Section Motion Intent。
