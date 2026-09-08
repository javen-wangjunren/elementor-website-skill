# 分层设计系统架构说明

STATUS: Active Architecture

## 1. 核心结论

当前网站设计流程不是一条只能向前推进的流水线，而是一个具有明确权威、独立门禁和定向回退能力的分层设计系统。

```text
研究层：外部世界有哪些可迁移规律
        ↓
策略层：项目应该讲什么，并形成怎样的视觉语言
        ↓
设计层：当前页面和模块应该如何表达
        ↓
实现层：设计在真实浏览器中能否成立
        ↓
反馈层：根据问题根因返回正确层级修正
```

拆分的目的不是增加流程，而是避免研究、事实、视觉规则、页面构图和实现细节相互污染。每一种问题都应有明确负责人，也应能回到最小必要范围修正。

## 2. 为什么从单体 Skill 演化为分层系统

早期由一个 `website-ui-architect` 同时完成调研、分析、方向图和 HTML，适合快速验证完整链路。那时尚未积累足够真实失败案例，过早拆分容易形成没有依据的复杂架构。

随着实践增加，四类问题逐渐显现：

- 外部参考被直接当成项目设计答案，缺少迁移判断；
- AI 一边设计页面，一边修改全局规则，视觉权威不断漂移；
- 页面设计问题与 HTML 实现问题混在一起，返工位置不清；
- 单个 Skill 上下文过重，后半程容易遗忘前置约束。

因此，早期单体方案不是错误，而是探索阶段的合理原型。真正的问题是：当独立职责已经被真实失败验证后，仍继续让一个 Skill 同时研究、决策、实现并自我验收。

## 3. 分层职责

### 3.1 研究层：Website Reference Researcher

负责回答：外部案例中，哪些设计原理值得迁移，为什么跨行业后仍然成立？

- 输入：公司背景、页面或模块问题、参考 URL、素材能力；
- 输出：Visual Reference Brief；
- 权威范围：真实网站观察和迁移逻辑；
- 不负责：企业定位、页面文案、Design System、模块方案和 HTML；
- 核心门禁：用户确认研究对象后才开展深度研究；用户明确提供最终 URL 清单时视为已确认。

研究层提供证据，不做最终设计决策。

### 3.2 策略层 A：Website Page Content Architect

负责回答：页面应该讲什么，按什么顺序建立认知、信任和转化？

- 输入权威：已确认企业事实、客户问题、业务边界；
- 可消费参考：Brand Narrative、Narrative Architecture、Content Editing、证据策略；
- 输出：UI-ready Page Content Framework；
- 不负责：颜色、布局、组件和 HTML。

外部案例只能启发叙事与内容取舍，不能成为本企业事实。

### 3.3 策略层 B：Website Design System Architect

负责回答：整个项目应该遵循怎样的共享视觉语言？

- 输入权威：品牌资产、项目约束、现站证据或已筛选参考简报；
- 可消费参考：Art Direction、Visual System、迁移边界；
- 输出：Design Board 与 Active Baseline Design System；
- 不负责：页面 Section 顺序、业务模块构图和 HTML。

Design Board 用于验证视觉规则组合，不能被视为最终页面设计稿。

### 3.4 设计层：Website UI Architect

负责回答：页面与模块应该采用怎样的信息层级、构图、媒体关系和响应式叙事？

- 输入权威：已确认 Page Content 与 Design System；
- 可消费参考：Page / Module Architecture、媒体策略、响应式迁移原则；
- 输出：Module Design Solution、Page UI Architecture Map、方向图和 Canonical Module Slug；
- 不负责：重新定义企业事实、修改全局视觉规则或编写 HTML。

参考案例不能直接决定 Layout。最终方案必须同时通过 Section Job、真实内容、素材能力、认知成本和 Design System 的验证。

### 3.5 实现层：Website HTML Prototyper

负责回答：已经确认的设计在真实浏览器里是否成立？

- 输入权威：Page Content、Design System、Architecture Map、确认方向和 Correction Notes；
- 输出：页面或模块 HTML、HTML Visual QA 与 Browser QA 结果；
- 可直接修正：换行、尺寸、间距、裁切、对齐、断点、交互和可访问性实现；
- 不负责：重新研究品牌网站或自行创造新的设计方向。

HTML Prototyper 不直接读取原始品牌案例或第三方 `DESIGN.md`。参考原则必须先经过上游转换与确认。

### 3.6 平台实现层

当目标进入 Elementor 时：

- `elementor-site-style-adapter` 把确认的 Design System 转译为站点样式继承合同；
- `elementor-widget-pipeline` 把确认版 HTML 转化为单个 Widget，并管理字段、代码和验证；
- 平台实现层不得重新决定品牌方向或页面构图。

## 4. 权威与产物矩阵

| 层级 | 负责的问题 | 核心权威 | 主要产物 | 不得越权 |
| --- | --- | --- | --- | --- |
| 研究 | 什么值得参考 | 真实网页证据 | Visual Reference Brief | 不做项目设计决策 |
| 内容策略 | 页面讲什么 | 企业事实 | Page Content Framework | 不决定视觉 Form |
| 视觉策略 | 共享视觉语言 | 品牌与确认基线 | Design Board / Design System | 不设计业务模块 |
| UI 设计 | 页面如何表达 | Content + Design System | Architecture Map / 方向图 | 不写实现代码 |
| HTML 实现 | 浏览器中能否成立 | 已确认设计包 | HTML / Visual QA | 不重新定义设计 |
| 平台实现 | 如何进入 Elementor | HTML + Style Contract | Widget | 不修改上游权威 |

发生冲突时，优先遵循：

```text
可验证企业事实与硬约束
> 已确认 Page Content / Design System
> 已确认 UI Architecture 与修正说明
> 参考研究结论
> 实现便利性
```

## 5. 系统不是瀑布流程

各阶段有前后依赖，但允许基于真实结果定向回退：

```text
Reference Brief
   ├─→ Page Content
   ├─→ Design System
   └─→ UI Architecture

Page Content + Design System
   → UI Architecture
   → HTML Prototype
   → Browser Evidence
          ├─ 实现适配问题 → HTML 内修正
          ├─ 模块构图问题 → 返回 UI Architecture
          ├─ 全局视觉问题 → 返回 Design System
          └─ 叙事或事实问题 → 返回 Page Content
```

回退遵循最小影响原则：单模块问题不重做整页；单页例外不轻易升级为全局规则；只有共享问题在多个位置重复出现时才更新 Design System。

## 6. 问题归属规则

| 观察到的问题 | 默认归属 |
| --- | --- |
| 首页只有能力目录，没有中心命题 | Page Content；必要时先触发 Researcher |
| 不知道跨行业哪些页面模式适合借鉴 | Researcher |
| 强调色在多个模块持续抢夺注意力 | Design System |
| Applications 的 Tab、Viewer 或切换方式不合理 | UI Architect |
| 图片主次、证据归属或模块扫读路径错误 | UI Architect |
| HTML 换行、比例、裁切、间距或移动端溢出 | HTML Prototyper |
| Elementor 字段或组件实现异常 | Widget Pipeline |

不能只依据“看起来不好看”决定返工层级。必须先描述可观察现象，再判断根因属于事实、规则、构图还是实现。

## 7. 条件触发，而不是阶段膨胀

Reference Researcher 不是所有任务的固定前置。以下情况才触发：

- 同行业缺少高质量参考；
- 用户要求品牌型、体验型或“大牌感”官网；
- 页面缺少中心叙事；
- Design System 长期模板化；
- 关键模块缺少合理表达方式；
- 用户明确提供参考网站并要求分析。

普通转化页、目标清晰的内容页、已有可靠参考或简单单模块应直接进入对应阶段。已有适用 Visual Reference Brief 时复用，不重复研究。

## 8. 是否继续拆分 Skill 的判断标准

一项工作只有同时出现以下特征，才值得拆成独立 Skill：

1. 有不同于现有阶段的输入权威；
2. 有可独立使用或复用的输出物；
3. 有不同的质量评价标准；
4. 有独立门禁或用户决策点；
5. 失败后需要返回不同责任人；
6. 独立执行能降低上下文负担，而不是只增加交接成本。

如果只是现有职责中的检查清单、理论知识、辅助方法或少量步骤，应优先作为 `references/`、工作步骤或 QA 规则，不应新建 Skill。

## 9. 体系维护原则

- 一个决定只能有一个主要权威来源；
- 研究证据与项目事实必须分离；
- 下游只读取自己负责的 Brief 字段；
- 用户确认的是项目决策，不是外部参考本身；
- HTML 发现问题后先分类，再决定局部修正或上游回退；
- 不因文件存在就推定已获得用户确认；
- 新增 Skill 前必须先证明现有边界无法清晰承载该职责。

## 10. 总结

这套体系的成熟标志不是 Skill 数量增加，而是形成了三项能力：

- 每个阶段知道自己依据什么做判断；
- 每个产物知道由谁确认、由谁消费；
- 每个失败都能回到正确层级，以最小范围修正。

因此，当前架构应被理解为从“能生成结果的单体流程”演化为“能解释决策、控制权威并稳定返工的分层设计系统”。
