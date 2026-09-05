# Use Cases

## 1. New B2B Service Page

请求：为新的 CNC 服务页规划高转化内容框架，用户提供业务范围但没有案例。

期望：读取通用方法和 B2B 制造标准；若案例对采购信任有明显价值，规划为 `Recommended` 并列出所需内容，由用户决定当前阶段是否启用；不虚构案例文案。其余事实充分时直接输出精简 UI-ready Draft。

## 2. Existing Page Audit

请求：现有服务页同时存在优势、工厂实力、质量保障和两组 Why Choose Us。

期望：逐项标记 `Keep / Improve / Merge / Move / Remove / Add / Unknown`，然后给出收口后的 Section Map，而不只列问题。

## 3. Page Family

请求：规划 CNC、注塑和 3D 打印三个服务页。

期望：定义共享 Section Job、可选模块、共享数据源和每页必须存在的独有问题、边界与证据；禁止只替换关键词。

## 4. Missing Evidence

请求：用户希望加入“10,000+ 客户”“99.9% 合格率”和案例，但没有资料。

期望：不得生成或保留这些数字主张；记录 Evidence Gap，并建议删除或降级主张。若承载信任证据的模块仍有独立决策价值，可以保留模块并说明所需真实内容。

## 5. Non-manufacturing Page

请求：为 SaaS Demo 页面规划内容框架。

期望：只读取通用方法，不套用制造业材料、工艺、DFM 或询价结构。

## 6. Competing Narratives

请求：陌生技术服务既需要解释机制，也有很强案例证据。

期望：给出两个会实质改变顺序的轻量策略，明确推荐并等待确认；不同时维护两份完整框架。

## 7. Full-page UI Without Framework

请求：直接用 `website-ui-architect` 设计一个完整新页面，但没有确认内容框架。

期望：路由到 `website-page-content-architect`；不得自行猜模块顺序和内容边界。

## 8. Clear Single Module

请求：已有确认 Design System，用户提供一个 FAQ 模块的真实内容、任务和页面上下文。

期望：允许 `website-ui-architect` 直接设计，不强制创建整页内容框架。

## 9. Team Manager End-to-end

请求：新手从零制作完整 Elementor 页面及 Widgets。

期望：按目标完成必要初始化；内容框架与 Design System 均确认后进入整页 UI；再进入 Pipeline 字段门禁。

## 10. Direct Widget Implementation

请求：已有插件和用户确认的 HTML，直接制作 Widget。

期望：Team Manager 直接进入 Pipeline，不强迫重做内容框架、Design System 或 UI。

## 11. Example Misuse

请求：直接照抄 JDM 示例中的响应时间、知识产权和全链路能力。

期望：拒绝把示例主张当事实；要求项目证据并保留 Unknown / Evidence Gap。

## 12. 中文框架、英文网站

请求：用户使用中文沟通，但目标网站页面为英文。

期望：框架结构和待确认项使用中文；单独记录网站语言为英文；访客可见的 UI-ready 页面文案使用英文，不逐行中英双写。

## 13. Ordinary Page Brevity

请求：规划一个包含 7 个模块的普通 About 页面。

期望：默认只输出页面目标、轻量 UI-ready Section、缺口和 UI 移交；每节以一句模块任务、真实长度页面文案和证据/素材为主，不重复输出完整证据清单、访客决策链、顺序摘要和冲突审查表。

## 14. Copy Handoff

请求：中文内容框架已经确认，但英文页面即将进入 UI，当前没有可用英文文案。

期望：从已确认公司事实生成 UI-ready 英文 Draft；标记尚未确认的事实和素材，用户确认前不进入 UI，不让 UI Architect 猜写企业事实。

## 15. Insufficient Company Facts

请求：用户只说“我们是一家 CNC 工厂”，没有目标客户、能力范围、证据或真实询盘动作。

期望：先执行轻量 Content Intake，只询问会改变页面结构和主张的问题；不得用行业常见能力补齐企业事实，不生成看似完整的 UI-ready 页面。

## 16. Sufficient Company Facts

请求：公司资料已经包含业务、客户、能力、数据、证据、素材状态和 CTA。

期望：不额外制造中间报告，直接生成简洁 UI-ready Draft；文案长度可用于模块设计，但明确仍需用户确认。

## 17. Assets Not Yet Organized

请求：规划 B2B 制造首页，用户表示产品、认证、工厂、设备和检测图片后续都能提供，但目前目录中没有素材。

期望：按页面任务完整评估并规划相关模块，列出内容与素材要求；不得因当前文件不存在而删除重要模块。

## 18. Case Study and Testimonials

请求：案例和评价尚未整理，用户希望先看到完整页面规划再决定是否启用。

期望：根据页面风险和客户决策价值标记为 `Recommended` 或 `Optional`，说明所需内容和建议位置；不编造客户、评价或结果。

## 19. Structural Unknowns

请求：用户要求规划解决方案页，但产品范围、服务边界和主要转化不足以判断模块顺序。

期望：优先一次询问 1–3 个会改变结构的问题，不使用行业常见能力随便补齐，不先生成完整框架。

## 20. Content Architecture Review

请求：首次生成的页面框架模块齐全，但顺序不符合客户决策路径，多个优势模块重复，Heading 抽象且 Description 像文章。

期望：交付前完成内容架构自查，自动修正一轮顺序、重复和文案长度问题；Heading 直接易懂，重点可通过标题、数据和短列表扫读。

## 21. Comprehensive but Concise

请求：页面需要 10 个模块才能完整完成任务。

期望：不为满足固定模块数或行数删除必要模块；每节只保留 Priority、模块任务、精简页面文案和内容与素材要求，避免重复内部分析。
