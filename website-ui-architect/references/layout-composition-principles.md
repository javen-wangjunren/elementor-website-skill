# Layout and Composition Principles

用于 Module Design Solution、Page UI Architecture Map 和 Page Direction。目标是根据任务、内容关系与素材条件选择布局，并用视觉层级、Gestalt 与认知负荷验证构图；它不重定义 Design System token，也不执行 HTML QA。

## 布局决策顺序

```text
Section Job
→ Customer Question
→ Content Relationship
→ Evidence and Media Role
→ Desired Scan Path
→ Visual Hierarchy
→ Layout Candidates
→ Responsive Narrative
→ Neighbor and Full-page Check
```

不得先选择 Carousel、Tabs、Grid 或 Split，再把内容塞入模板。

## 内容关系与常见布局

| Section 任务 | 通常适合 | 主要风险 |
| --- | --- | --- |
| 解释单一价值 | 单焦点、文图双栏、大媒体配短文 | 多卡片、多 Tab 稀释重点 |
| 同时比较 3–6 项 | 对齐列表、等权卡片、表格 | 用轮播隐藏比较对象 |
| 浏览大量入口 | 分组网格、分类导航、View All | 一行塞满或大量窄 Tab |
| 深入探索 3–4 个场景 | 始终可见选项 + 主从详情 | 只用箭头隐藏范围 |
| 展示过程 | 步骤流、时间线、递进叙事 | 无顺序的同质卡片 |
| 展示证据 | 尊重真实比例的陈列、数据带、Viewer | 强裁证书、缩小关键证据 |
| 单一转化 | 简洁 CTA、一个主操作 | 多个同级高强调按钮 |

这张表提供候选，不代替内容判断。若多个布局都成立，比较扫读成本、媒体查看尺寸、页面长度和移动端代价，再给推荐方案与影响。

## 视觉层级与构图

- 一个视区通常只保留一个第一焦点；第一焦点必须对应当前 Section 的业务主任务。
- 使用尺寸、位置、明度、对比、空间和顺序建立层级；不要让标题、图片、数字、CTA 同时处于最高等级。
- 视觉重量应匹配业务价值。辅助模块不应凭大图、深色 Surface 或强动效超过核心证明模块。
- 构图需要稳定锚点、清晰路径与适当平衡；对称适合稳定与比较，非对称适合制造方向，但不能破坏扫读。
- 变化服务内容关系和页面节奏，不为“每个模块不同”创造无意义的新奇结构。

## Gestalt 关系

- Proximity：相关内容距离更近，组内间距小于组间间距；
- Similarity：相同外观表示相同类别或功能；
- Common Region：容器用于表达真实分组，不把所有内容都卡片化；
- Continuity：对齐线、阅读方向和流程连接应连续；
- Figure / Ground：主体与背景层级明确，装饰不抢主体；
- Prägnanz：优先选择用户能迅速理解的最简稳定结构。

若必须依赖边框、阴影或颜色才能解释内容关系，先检查分组和对齐是否错误。

## 信息架构与认知负荷

- 首先删除、合并、排序和归组，再设计容器。
- 同时比较的项目应同时可见；隐藏交互只有在节省空间的收益大于记忆成本时才成立。
- 选项数量、标签长度和使用频率决定 Tabs、Grid、Accordion 或导航形式，不以组件偏好决定。
- 默认 Active Item 只表示当前查看状态，不自动表示业务优先级。
- 交互控件的视觉权重与任务价值一致；轮播箭头通常是辅助控件，不应抢过内容标题、选项导航或 CTA。
- 证据靠近它支持的主张，避免让用户跨 Section 记忆关联。

## 媒体与布局

- 先确定媒体角色：Identification / Proof / Explanation / Atmosphere。
- Identification 与 Proof 需要足够查看面积；Atmosphere 可以裁切，但不能伪装成事实证据。
- 并列、等权图片不应被无理由做成永久一大多小；Viewer 可有当前大图，但每项必须能获得同等查看尺寸。
- 真实素材的数量、方向、比例和质量可以推翻早期布局假设；此时只重新打开受影响 Section。
- 证书、报告和文件保留真实方向与比例，必要时提供放大查看，而不是强裁成统一横卡。

## 页面节奏与相邻关系

完整页面同时检查：

- 核心、支撑、辅助、过渡和转化模块是否形成合理强弱；
- 相邻 Section 是否连续重复 Card Grid、大图、KPI、CTA 或深色 Surface；
- Surface 变化是否有叙事理由，还是模块模板拼接；
- 高视觉重量模块之间是否有足够缓冲；
- CTA 是否随决策路径逐步增强，而非每屏同等叫喊。

## 响应式叙事

移动端不是桌面布局压窄。Map 必须说明：

- 内容顺序与第一焦点；
- 哪些并列关系必须保留，哪些可以顺序浏览；
- Tabs、表格、Viewer、媒体和证据如何降级；
- CTA 与关键证据是否仍靠近对应内容；
- 不依赖 Hover 获取关键信息。

若移动端重组改变了信息主次、证据归属或任务，应修改方案，而不是留给 CSS 临场处理。

## Page Direction 审查

方向稿按以下顺序判断：

1. Structure：Section 身份、条目数量、内容关系和证据是否正确；
2. Hierarchy：第一焦点、扫读路径和强调等级是否符合 Map；
3. Composition：锚点、平衡、密度、媒体面积与留白是否成立；
4. Neighbors：前后模块是否重复或竞争；
5. Full Page：Surface、强弱和转化节奏是否连续；
6. Visual Language：是否忠实使用 Design System。

结构错误不能因为配色好看而通过。视觉语言被认可，也不代表 Layout 或证据关系已确认。

## 可观察的输出

Module Design Solution 必须给出原因和成功标准，例如：

```text
Decision: 4 个应用场景使用始终可见的等权选项 + 一个主详情画面
Reason: 用户需要先理解范围，再深入查看单个场景
Controls: Tab 是主要导航；箭头仅为辅助浏览，使用低强调样式
Success criteria: 用户无需点击即可识别全部 4 个应用领域，切换后能把主图与当前标签对应
Rejected: 只显示大图与箭头；9 个窄 Tab；四张同权大图纵向堆叠
```

不得使用“更高级”“更有设计感”作为唯一判断依据。

