# Spec — UESTC幻想乡 官网改版：东方美学 · 响子吉祥物 · 响应式修复 · 管理后台 · CI

**Status:** ready-for-agent
**Date:** 2026-09-06
**Local tracker:** `.scratch/redesign-2026/`

## Problem Statement

官网现状：企业蓝风格（#003366/#007bff）完全不符东方Project美学；主角缺失（现有 logo 动画、文案均为占位）；响应式在 ≤375px 全面损坏（导航溢出、动画超视口、卡片裁切）；除旋转 logo 外无技术力展示；内容不可维护（非开发者无法更新活动/成员）；无测试、无 CI。

## Solution

将全站重塑为东方幻想乡主题：和纸象牙底色 + 朱红/金箔/山彦青三组点缀、明朝题字、弹幕粒子背景与符卡动效、响子作为吉祥物贯穿全域；补齐响应式；公开内容由管理后台驱动（活动/成员真实数据出库）；i18n 三语真实文案；双仓库 CI + 测试；提交全走 PR。

## User Stories

1. 作为访客，我希望看到东方风格的全站设计（和纸底色、朱红/金箔/青配色、明朝体），以便一眼认出这是东方Project社团网站。
2. 作为访客，我希望首页有响子吉祥物（旋转徽章 + 符卡开场），以便感受到社团标志性的角色。
3. 作为访客，我希望看到弹幕粒子背景与结界光环动效，以便体验"技术力"。
4. 作为手机用户，我希望 ≤768px 下导航收进汉堡菜单，以便不再横向滚动。
5. 作为手机用户，我希望产品卡与表单在 320px 下完整可读，以便不再裁切。
6. 作为手机用户，我希望旋转 logo 动画不越出视口，以便页面不再抖动。
7. 作为访客，我希望主页展示社团真实介绍、活动列表、成员/部门架构，以便了解社团。
8. 作为访客，我希望作品页展示社团真实出版物与周边（同人本封面、书签、卡套、制品实拍），以便看到产出实绩。
9. 作为访客，我希望联系表单可用且后端地址可配置，以便部署时指向正确API。
10. 作为非开发维护者，我希望登录 /admin 后可视化管理活动与成员条目，以便不依赖开发者更新内容。
11. 作为管理员，我希望登录失败过多被节流、会话 7 天有效，以便后台安全。
12. 作为开发者，我希望两个仓库 CI 全绿（lint/test/build、集成测试带真实 Postgres），以便放心合并。
13. 作为语种使用者，我希望中/英/日三语切换覆盖全站真实文案，以便国际同好使用。
14. 作为社团，我希望最终视觉经子代理截图验收（320/375/768/1280），以便交付前确认无回归。

## Implementation Decisions

### 设计体系（源自 design-research/touhou-design-language.md）

- 底色：页面 `#FFF9F2` 和纸象牙 / 卡片 `#FDF3E7` 羊皮纸
- 文字：主墨 `#221516` / 次要 `#6B5C58`
- 点缀：朱红 `#8E1E26`（弹幕/符卡）/ 金箔 `#C99738` / 山彦青 `#2F7571`（响子发色、按钮）
- 描边 `rgba(142,30,38,.14)` 朱砂发丝线 / 辉光 `rgba(47,117,113,.08)` 山彦灵光
- 字体：CJK 衬线栈（`"Noto Serif SC", "Source Han Serif SC", serif`）+ 无衬线正文栈；印章/行书点缀
- 纹样：弹丸 5 形（星弹/针弹/米弹/柳叶/樱弹）CSS/SVG 描绘；符卡边框、结界环、青海波样式可选

### 动效（技术力）

- 手写 Canvas 弹幕粒子（~80 行，零依赖，低透明度青红弹丸 + 边界弹跳）＝ yamabiko 回声
- 双环反向结界旋转（CSS keyframes，20s 顺时针 / 35s 逆时针）围绕吉祥物
- 符卡宣言横幅：章节激活时 15° 朱红横幅滑入 + 音波脉冲
- 旋转 logo 保留，但包进符卡容器、视口安全（位移限制）

### 数据与 API（后端已全部实现并本地验证）

- `activities`（title_key/date/location/summary_key/sort_order）与 `members`（name/role_key/description_key/sort_order）；多语言走前端 i18n 键；init.sql 幂等
- 公开：`GET /api/health|activities|members`、`POST /api/contact`
- 管理：`POST /api/admin/login|logout`（bcrypt + Bearer 7天 + 节流 5次/60s）、`POST|PUT|DELETE /api/admin/activities|members`
- `go run . --hash` 生成密码哈希

### 前端结构

- 新增 `/admin` 路由（登录 → 活动/成员 CRUD 面板）
- Homepage 重组：介绍 + 活动 + 成员区块，消费后端 API
- Products 展示真实作品（素材选品 + 作者署名标注）
- Contact API 地址改 `VITE_API_BASE` 环境变量，默认 `http://debian:18080`
- 素材源 `C:\Users\Wray\qq\data`（响子圆徽 favicon/logo、宣传海报主视觉、书签/卡套/制品实拍作品页）

## Testing Decisions

- 只测外部行为，不测实现细节
- 后端：handler 层 httptest 单测 + 真实 Postgres 集成测试（`TEST_DATABASE_URL` 门控自动跳过）；CI postgres service 全跑
- 前端：组件级 vitest（memory router + i18n 注入 + fetch stub）——导航/语言切换/联系表单
- 视觉回归不入 CI，走子代理截图验收（320/375/768/1280）

## Out of Scope

- 多角色权限（单一管理员）
- 在线售卖/购物车
- 音乐播放器（素材无音频）
- 视觉回归 CI（子代理验收替代）
- 旧 Postgres 数据迁移（幂等建表兼容）

## Further Notes

- Backend 管理 API/测试/CI 与 frontend 测试基建已在 2026-09-06 会话中完成并本地验证（后端 9 单测 + 2 集成全绿），待按 A/B 工单提交
- 安全：compose 明文密码不扩散；admin 密码用 `--hash` 生成
- 研究材料：`D:\Projects\gensokyo\design-research\`（设计语言/社团事实/参考站风格）
