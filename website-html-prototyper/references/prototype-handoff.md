# Optional Prototype Handoff

默认通过最终回复交接。只有用户明确要求、需要跨会话传递，或 DOM/交互必须锁定时，才在 HTML 旁创建轻量 Markdown。

```text
TITLE:
CANONICAL MODULE SLUG:
SCOPE: page | module
FINAL HTML SOURCE:
SECTION BOUNDARY:
CONFIRMED DESIGN SOURCES:
ASSET / TRUTH BOUNDARY:
RESPONSIVE BEHAVIOR:
INTERACTION:
LOCKED DOM:
OPEN QUESTIONS:
```

只有用户确认显式 Layer 2/3 时，才在 `INTERACTION` 后追加一行：

```text
MOTION CONTEXT: <confirmed source + intent + mobile/reduced fallback>
```

只有确认的 Layer 3 使用第三方库时，再追加：

```text
ADVANCED MOTION RUNTIME:
- Library + version:
- Required capability:
- Loading / cleanup:
- Mobile / reduced-motion fallback:
```

## 规则

- `FINAL HTML SOURCE` 必须指向唯一 current HTML。
- Slug 原样继承自 `website-ui-architect`，不得在交接时改名。
- `SECTION BOUNDARY` 应能让下游准确定位目标 Section，不要求额外拆文件。
- `ASSET / TRUTH BOUNDARY` 区分真实素材、生成占位与缺失素材。
- `CONFIRMED DESIGN SOURCES` 只列 Structure Approved 的 Segment 与按需 Section Correction；失败候选和可选 Composite Preview 不得作为权威源。
- 普通 Hover、一次性 Reveal、原生交互和原生 Layer 3 都不追加 Advanced Motion Runtime；第三方库来源必须是用户明确指定、项目既有依赖或已确认的实现说明，下游不得临时换库。
- `MOTION CONTEXT` 只压缩传递 Design System Motion Foundation 与当前 Map/Notes 已确认的意图，不重新定义动画目的；普通交互与 Layer 1 完全省略。
- 只锁定改变后会破坏阅读顺序、交互、响应式重排或 Surface 的 DOM；不要锁定装饰 wrapper。
- 不规划 Elementor Controls、WordPress 字段、React Props、Shopify Schema 或其他平台实现。
- 无必要内容直接省略，不为填满模板制造约束。
