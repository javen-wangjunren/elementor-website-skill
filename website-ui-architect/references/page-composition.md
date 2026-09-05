# 整页拼接与 QA

用于整页优先路径的页面精调，或逐模块优先路径完成后的拼接与协调。它不强制页面必须从哪种路径生成。

## 拼接

### 逐模块优先路径

1. 按确认版 Page Content Framework 的顺序读取各模块 current HTML。
2. 生成或更新唯一整页预览：

```text
设计稿/pages/<page-slug>.html
```

3. 保留每个模块已经确认的信息任务、核心结构和 Canonical Module Slug。
4. 整页发现问题时回到对应模块文件修改，再同步整页预览；不要只修预览而使两份设计漂移。
5. 未经用户确认，不因整页协调而改变模块的核心方向。
6. 拼接后按 [HTML Design Review](html-design-review.md) 执行整页审查；明确问题回写对应模块源，再执行 Browser / Implementation QA。

### 整页优先路径

1. 以确认的图片方向、Page Content Framework 和 Design System 直接生成 HTML First Draft。
2. 读取 [HTML Design Review](html-design-review.md)，先在整页尺度检查顺序、Surface、密度和重复，再检查每个 Section 及其相邻区域。
3. 明确设计问题最多自动修正一轮；主观方向变化留给用户。修正后再执行 Browser / Implementation QA。
4. 不增加逐模块用户门禁，也不创建独立模块稿；整页确认前只维护整页设计源。
5. 整页确认后，为每个 Section 确认边界和 Canonical Module Slug；Pipeline 可以直接使用当前 Section。
6. 仅在用户需要保留、复用或单独打磨模块时抽取模块 HTML；若两份文件并存，进入 Pipeline 前明确当前模块的最终版本。

## 收口

用户确认整页后，仍按顺序一次交付一个 Widget。实现源可以是确认版独立模块 HTML，也可以是确认版整页 HTML 中边界明确的当前 Section；整页文件不授权下游一次实现全部模块。
