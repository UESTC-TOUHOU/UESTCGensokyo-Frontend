# 12 — 后端制品库 API

**What to build:** 新增 products 表 + REST CRUD 端点。表结构：id, name, category, description_key, image_url, sort_order。复用 admin.go 的 adminUpsert/adminDelete 模式。公开端点 GET /api/products，管理端点 POST/PUT/DELETE /api/admin/products。

**Blocked by:** 01 (已合并)

**Status:** ready-for-agent

- [ ] db/init.sql 加 products 表
- [ ] GET /api/products 公开列表
- [ ] POST/PUT/DELETE /api/admin/products 管理端点
- [ ] 集成测试覆盖 CRUD 全路径
