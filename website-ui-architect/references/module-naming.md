# Module Naming

在视觉方向确认、交给 HTML Prototyper 前内部使用。只向用户展示 Canonical Module Slug，不输出命名卡。

## Canonical Module Slug

默认公式：

```text
{scope}-{content}-{form}[-{variant}]
```

- Scope：主要复用范围，例如 `shared`、`service`、`industry`。
- Content：真实业务内容，例如 `application`、`process`、`case-study`。
- Form：确认后的主要表达形式，例如 `split`、`matrix`、`timeline`、`carousel`。
- Variant：只有确实存在稳定差异时才增加。

使用小写 kebab-case，并检查项目内唯一性。更新已有模块时默认保留原 Slug。禁止使用 `new`、`final`、`latest`、`v2`、纯数字或页面临时名称。

视觉方向确认后生成 Slug；`website-html-prototyper` 的设计稿 basename、下游 Widget `get_name()` 和相关资源必须原样继承。发生冲突或业务语义不清时才请求用户确认。
