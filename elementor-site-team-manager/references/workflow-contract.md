# Workflow Contract

在多阶段任务启动或恢复、跨阶段、进入用户门禁、更新 `docs/workflow-status.md`，或根据失败执行定向回退时读取。本文定义跨阶段执行合同，不替代专项 Skill 的内部规则。

## 1. 完整页面与 Widget 路径

```text
确认公司事实
→ 按条件形成或复用 Visual Reference Brief
→ 确认 Page Content 与 Design System
→ 若目标进入 Elementor，确认 Elementor Style Contract
→ 确认 Page UI Architecture Map（含 Page Motion Budget 与 Section Motion Intent）
→ 确认覆盖全部 Section 的 Segment Set / Section Correction
→ HTML Prototyper 生成整页优先或模块优先 First Draft
→ HTML Design Review 与 Browser / Implementation QA
→ 确认整页设计、Section 边界与当前实现源
→ Pipeline 一次实现一个 Widget
→ 每个 Widget 独立确认字段卡、实现并验证
→ 用户在 Elementor 中组装整页并完成最终视觉验收
```

- UI Architect 负责 Module Design Solution、UI Map、媒体契约、Page Motion Budget、Section Motion Intent、视觉方向和 Canonical Module Slug。
- Prototyper 继承设计包与 Motion Contract，不重新设计；整页优先可只维护整页 HTML，模块优先可保留模块 HTML。
- Pipeline 可使用独立模块 HTML，或确认整页 HTML 中边界明确的当前 Section；两者同时存在时先确认最终版本。
- Prototype Handoff 只在跨会话、复杂交互或 DOM 结构需要锁定时按需生成。
- 用户承担 Elementor 整页组装与最终视觉验收，这是保留的人工门禁，不是 Pipeline 缺口。

## 2. 不可跳过的门禁

1. 企业内容依赖公司事实且来源不足时，确认 Company Intake；
2. 条件触发参考研究时，深度研究前确认候选对象；用户提供最终 URL 清单视为已确认；
3. 需要插件时，确认本地路径与 `Flat / Grouped` 结构；
4. 完整页面或内容职责未确定时，确认页面内容框架；
5. Style Board 确认后才能形成有效 Design System；
6. 目标进入 Elementor 时，确认 Site Mode 与 Style Authority；需要继承全局样式时，Style Contract 必须为 Confirmed；
7. 老站保持风格时先确认 Existing Design System；精确继承还需要 URL 渲染与 Site Settings / Kit 后台证据；
8. 完整页面必须确认 Page UI Architecture Map；单模块不强制整页 Map；
9. 确认当前页面或模块视觉方向；图片方向稿先完成设计师自查；
10. HTML First Draft 交付用户前必须完成 HTML Design Review 与 Browser / Implementation QA；
11. 进入 Pipeline 前确认 Canonical Module Slug、Section 边界、最终 HTML 实现源、面板可发现性和 Site Style Context；
12. 每个 Widget 的最小 Elementor 字段卡确认后才能实现。

New Site / Rebuild 的新产物默认包含 `Motion Level: Restrained`，但 Motion 不增加新的独立用户门禁，随 Design Board 与 UI Map 原门禁确认。旧产物缺少 Motion 字段时不阻塞；只有用户要求增强动态或重新设计受影响页面时才补齐。

文件存在只能证明有候选产物，不能代替用户确认。内容框架与 Design System 可以并行，但进入完整页面 UI 前两者都必须确认。

## 3. 状态与恢复

总控唯一维护 `docs/workflow-status.md`。只在启动或恢复多阶段任务、跨阶段、进入新门禁、遇到阻塞或完成任务时覆盖更新；普通对话和单一产物任务不为形式更新。

```text
当前阶段：
当前 Skill：
原始目标：
已确认：
确认依据：
待确认：
当前产物：
锁定约束：
已知风险：
下一步：
Site Mode：
Style Authority：
Style Contract Status：
Backend Style Evidence：
Motion Level：
Page Motion Budget：
更新时间：
```

- 状态文件只保存当前有效状态，不追加成长日志。
- 专项 Skill 不各自创建状态文件。
- 恢复时用当前对话和实际产物核验状态；无法证明的确认不得继承。
- 默认不展示固定状态卡，只在启动、恢复、跨阶段、阻塞或用户主动询问时简要说明。

## 4. 最小派工包

```text
GOAL:
ACTIVE STAGE:
CONFIRMED INPUTS:
SOURCE FILE / CONVERSATION INPUT:
TARGET PLUGIN / OUTPUT:
LOCKED CONSTRAINTS:
MOTION LEVEL:
PAGE MOTION BUDGET:
CURRENT SECTION MOTION INTENT:
EXPECTED DELIVERABLE:
NEXT USER GATE:
KNOWN RISKS:
```

- 只传当前专项工作所需信息，不复制其他 Skill 的完整规则。
- 不把未确认推断包装成已确认输入。
- 页面内容交给 UI 时只传确认文件、Section ID、Section Job、顺序、内容边界、证据状态和开放问题，不提前决定视觉 Form。
- 视觉包交给 Prototyper 时传确认 Map、Motion Level、Page Motion Budget、当前 Section Motion Intent、最终 Segment Set、必要的 Section Correction、Slug、Correction Notes 和素材真实性边界。
- 进入 Pipeline 时一次只派发当前模块，并原样传递 Canonical Module Slug、Section 边界、最终实现源、当前 Motion Intent/运行要求、项目面板可发现性、`siteStyle`、Confirmed Style Contract 和必要页面上下文。

## 5. 定向回退

先描述可观察现象，再判断根因属于事实、共享规则、页面构图、浏览器实现或平台实现：

| 问题根因 | 返回位置 |
| --- | --- |
| 企业事实、叙事或内容职责 | Page Content；资料不足时先 Company Intake |
| 缺少合理参考范式 | Reference Researcher |
| 多处重复出现的颜色、排版、Surface、间距或共享组件规则问题 | Design System Architect |
| Section Job、核心构图、媒体关系或响应式叙事 | UI Architect |
| Motion Purpose、Layer、Signature 或移动端动态叙事 | UI Architect |
| 换行、尺寸、裁切、对齐、断点、timing、Observer、视频、性能、交互和可访问性实现 | HTML Prototyper 自动修正一轮后复验 |
| Elementor 字段、组件代码、多实例、编辑器重渲染或单 Widget 运行时清理 | Widget Pipeline |

回退遵循最小影响原则：单模块问题不重做整页；单页例外不升级为全局规则；上游修正后只让受影响的下游产物失效并复验。

## 6. 持续推进与收口

1. 专项阶段完成且用户通过当前门禁后，重新计算原始目标的缺失依赖。
2. 只读取下一阶段的完整 Skill 和必要 references，不同时加载八套规则。
3. 用户对门禁的确认、修改或否决视为总控任务继续，不要求重新调用 Skill。
4. 当前目标满足时停止；单一产物任务不扩展成完整流程。

只有原始目标、必要产物、用户门禁和相称验证全部满足时才能宣布完成。收口时说明已完成内容、验证证据、保留的人工责任和范围外事项。

## 7. 外围边界

- 发布、上传和缓存清理：核心流程在本地验证后停止，推荐独立发布流程；
- 旧 Widget 不可见、白屏或交互失效：转独立故障排查；
- 主题 `functions.php`、模板或全站字体修改：转主题或 WordPress 开发；
- Elementor 未安装或 WordPress 环境缺失：说明前置条件，不在本流程中安装；
- 直接写入 Elementor Site Settings：Style Adapter 只生成本地合同，远程修改需要独立授权。
