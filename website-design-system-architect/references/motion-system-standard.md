# Motion System Standard

用于 New Site / Rebuild 的 Active Baseline Motion Foundation，或 Existing Site 有可靠动态证据时的受控提炼。它只定义跨页面的运动性格、Token 和边界，不决定某个 Section 的具体动画。

## 默认基线

New Site / Rebuild 未提出相反要求时使用：

```text
Motion Level: Restrained

Motion Tokens:
- Fast feedback: 180ms
- Standard transition: 320ms
- Content reveal: 600ms
- Default easing: cubic-bezier(0.22, 1, 0.36, 1)
- Default reveal distance: 16px
- Default stagger: 80ms; cumulative delay <= 400ms
- Default media hover scale: 1.03

Motion Layers:
- Layer 1 / Feedback
- Layer 2 / Reveal
- Layer 3 / Signature
```

这些值是可复用默认值，不是要求所有组件都运动。品牌规范、Existing Site 证据或用户明确选择可以覆盖；覆盖项必须记录来源并继续满足可访问性与性能边界。

## 三层职责

- **Layer 1 / Feedback**：按钮、链接、菜单、Tabs、Accordion、Carousel 控件和表单状态。用于确认可操作性与状态变化，不隐藏关键信息。
- **Layer 2 / Reveal**：只用于确有层级、顺序、数据变化或叙事承接价值的内容。普通 Section 默认不使用，不把全页统一淡入当作高级感。
- **Layer 3 / Signature**：页面级记忆点，例如克制视差、媒体扩展、步骤与媒体联动或数据绘制。由 UI Architecture 决定，重点页面通常最多一个，普通内页默认没有。

“80% 稳定清晰、15% 微交互活力、5% 品牌记忆点”只用于校准整体克制度，不作像素、数量或评分要求。

## 允许与禁止

优先使用短距离、低幅度、可中断的变化。推荐：

- 按钮箭头移动、边框或 Surface 过渡；
- 图片 `1.02–1.04` 范围内的轻微放大；
- Tab、Accordion、菜单的状态过渡；
- 有内容顺序时的一次性短距离显现；
- 有明确解释价值且移动端可降级的单一 Signature。

默认禁止：

- 弹跳、持续旋转、大面积鼠标跟随和纯装饰循环；
- 劫持滚轮、阻塞页面阅读的强制横向滚动；
- 多段视频同时自动播放；
- 全页重复同一种淡入、所有卡片逐一延迟出现；
- 动画结束前隐藏核心文案、证据或 CTA；
- 用动效掩盖内容、结构、证据或视觉层级问题。

## 移动端与 Reduced Motion

- Layer 1 保留必要状态反馈，但不依赖 Hover；Touch 与键盘有等价路径。
- Layer 2 缩短位移或改为纯透明度；内容密集、性能受限或滚动频繁时可移除。
- Layer 3 必须在 UI 合同中明确 `保留 / 简化 / 移除`，不能直接照搬桌面。
- `prefers-reduced-motion: reduce` 下禁用视差、滚动绑定、自动轮播、平滑滚动和非必要位移；内容立即可见，状态切换保留无位移反馈，自动视频默认暂停。

## 媒体与性能边界

- 视频必须有 poster；只播放当前可见且承担信息或氛围职责的视频，离屏暂停。
- 移动端可用静态图、较低码率素材或移除非必要视频；降级方式由 UI Architecture 明确。
- 跨页面默认不规定动画库。HTML 原型优先原生 CSS、IntersectionObserver 和少量 JavaScript；第三方动画依赖只在用户或已确认实现约束明确要求时采用。
- Motion Foundation 不写 DOM、Selector、Elementor Control 或具体 Section 动画。

## Existing Site 与兼容

- Existing Extension 以可观察的现站行为为依据；无法观察的 Hover、滚动和动态状态标记为 `Unknown`，不自动套用 Restrained Signature。
- 旧版 Design System 没有 Motion Foundation 时不阻塞既有产物；默认只保留基础 Hover、Focus 和即时状态反馈。用户要求增强动态或页面重新设计时再补齐 Motion Foundation。

