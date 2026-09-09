# Motion Implementation Standard

用于实现已确认的 Motion Foundation、Page Motion Budget 与 Section Motion Intent。它不创造新的动画概念，也不把普通 Section 统一套上淡入。

## 实现优先级

1. 核心内容在无 JavaScript 时完整可见、可读、可操作。
2. Layer 1 优先 CSS transition；状态语义、键盘和 Touch 与视觉反馈同步。
3. Layer 2 默认使用一次性 IntersectionObserver，只有 JavaScript 成功初始化后才添加待显现状态。
4. Layer 3 才允许滚动进度或连续帧更新；必须来自确认的 Motion Intent。

默认使用原生 CSS、IntersectionObserver 和少量 JavaScript。未经用户或项目约束确认，不新增 GSAP、Framer Motion 或其他动画依赖。

## CSS 与显现

- 优先动画 `transform`、`opacity`；避免持续动画布局属性、滤镜或大面积阴影。
- 使用 Motion Foundation Token；真实内容或浏览器验证需要微调时保持同一强度，并记录为实现层修正。
- Stagger 只用于有顺序的可见内容，默认 80ms，累计延迟不超过 400ms。
- 不用 `display:none`、初始行内 `opacity:0` 或未初始化类永久隐藏核心内容。
- Focus、Active、Expanded 等状态不能依赖过渡完成后才可理解。

推荐渐进增强形态：

```text
默认 DOM：可见
JS 初始化成功：根节点添加 motion-ready
Observer 命中：目标添加 is-visible 并 unobserve
JS 失败：内容保持默认可见
```

## 滚动、连续动画与视频

- 不劫持滚轮，不把纵向滚动强制转换为横向滚动。
- Sticky 只在确认的 Signature 中使用；不得形成无业务理由的长距离锁屏。
- 每页连续动画共用一个调度循环；滚动/Resize 监听使用被动监听或只标记脏状态，视觉写入在 `requestAnimationFrame` 中统一处理。
- Signature 离开视口、页面隐藏或进入 Reduced Motion 后停止调度；销毁时移除监听和 Observer。
- 视频提供 poster，默认 `preload="metadata"`；只播放当前可见视频，离屏暂停。轮播切换时暂停非当前视频。
- 移动端按 Motion Intent 使用静态图、较轻素材或移除 Signature，不擅自保留桌面成本。

## Reduced Motion 与输入方式

- `prefers-reduced-motion: reduce` 下移除视差、滚动绑定、自动轮播、自动视频和平滑滚动；Reveal 内容立即显示。
- 必要状态切换可以保留无位移的即时或短透明度反馈。
- Hover 不是获取信息或控制状态的唯一方式；键盘 Focus、点击与 Touch 有等价路径。
- 动画不得覆盖 Focus、阻止跳转、推迟 CTA 或改变屏幕阅读器可访问内容。

## Review 与停止条件

真实渲染时检查：

- 动效是否支持 Section Job，而不是掩盖结构或素材问题；
- 一个视区是否出现多个运动焦点；
- 相邻 Section 是否重复同一 Reveal；
- 动画是否造成等待、位移眩晕、滚动锁死或内容闪烁；
- Desktop、Mobile、Reduced Motion、无 JavaScript 和低性能降级是否都保留理解与操作。

改变 Motion Purpose、Layer、Signature 或移动端叙事属于 A 类，返回 UI Architect。修正 timing、位移、Observer、视频暂停、Focus 或运行性能属于 B 类，可在 HTML 内最小修正一轮后复验。

