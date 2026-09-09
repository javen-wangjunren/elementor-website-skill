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
MOTION CONTRACT SOURCE:
INTERACTION:
MOTION RUNTIME / CLEANUP:
LOCKED DOM:
OPEN QUESTIONS:
```

## 规则

- `FINAL HTML SOURCE` 必须指向唯一 current HTML。
- Slug 原样继承自 `website-ui-architect`，不得在交接时改名。
- `SECTION BOUNDARY` 应能让下游准确定位目标 Section，不要求额外拆文件。
- `ASSET / TRUTH BOUNDARY` 区分真实素材、生成占位与缺失素材。
- `CONFIRMED DESIGN SOURCES` 只列 Structure Approved 的 Segment 与按需 Section Correction；失败候选和可选 Composite Preview 不得作为权威源。
- 复杂交互或 Layer 3 才需要填写 Motion Runtime / Cleanup；普通 Hover 或一次性 Reveal 不为形式创建独立 Handoff。
- `MOTION CONTRACT SOURCE` 指向 Design System Motion Foundation 与当前 Map/Notes 的 Motion Intent，不重新定义动画目的。
- 只锁定改变后会破坏阅读顺序、交互、响应式重排或 Surface 的 DOM；不要锁定装饰 wrapper。
- 不规划 Elementor Controls、WordPress 字段、React Props、Shopify Schema 或其他平台实现。
- 无必要内容写 `None`，不为填满模板制造约束。
