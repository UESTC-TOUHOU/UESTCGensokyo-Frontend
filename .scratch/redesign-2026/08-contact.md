# 08 — 联系页换肤 + API 地址可配置

**What to build:** Contact 页视觉换肤（符卡容器）＋ 后端地址从硬编码 `http://debian:18080` 改为环境变量 `VITE_API_BASE`（.env 默认值保留兼容），表单状态文案三语化。

**Blocked by:** 03

**Status:** completed

- [x] `VITE_API_BASE` 生效（.env.example 提供），默认值 = 现地址
- [x] 表单符卡样式，320px 可用
- [x] 状态文案走 i18n 三语
- [x] 提交成功/失败路径测例更新后全绿

