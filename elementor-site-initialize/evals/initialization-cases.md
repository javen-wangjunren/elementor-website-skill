# Initialization Cases

1. 完全新站：确认卡默认 `greenfield / project-design-system / initialize-global-style / pending`。
2. 用户明确完全重建旧站：使用 `rebuild`，不得因发现旧主题而改成 existing-extension。
3. 老站新增模块并保持风格：使用 `existing-extension / existing-site / inherit-existing / pending`。
4. GeneratePress 或子主题新站：不扫描或记录推测性视觉冲突；只在确有价值时保留命名与技术集成摘要，不生成 Style Contract。
5. Design System 未完成：只保存 pending，不发明 Global Colors 或 Fonts。
6. 已有 Confirmed Style Contract：初始化不覆盖合同或把状态重置为 pending。
7. 原始任务是 Widget 且合同必需但缺失：插件骨架完成后路由 Style Adapter，而不是直接实现 Widget。
