# UESTCGensokyo-Frontend

UESTC幻想乡 / UESTC-TOUHOU — 电子科技大学东方Project同好会官网前端。

React 19 + Vite 7 + TypeScript + react-i18next（中/英/日三语）。

## 开发

```bash
bun install         # 安装依赖
bun dev             # 本地开发（http://localhost:5173）
bun run test        # 单元测试（vitest + Testing Library）
bun run lint        # ESLint 检查
bun run build       # 生产构建
```

### API 地址配置

联系表单等后端请求基址通过环境变量 `VITE_API_BASE` 配置：

```bash
# .env.local
VITE_API_BASE=https://your-backend.example.com
```

未设置时默认 `http://localhost:18080`（docker compose 后端映射端口）。

## CI / CD（GitHub Actions）

`.github/workflows/ci.yml`：

- **check**：PR 与 main push 时运行 lint + test + build（bun）
- **deploy**：仅 main push 通过 check 后自动构建并发布到 GitHub Pages（`gh-pages` 分支）

### 部署（GitHub Pages）

> **约定：CD 自动部署必须保留。**

- **自动**：合并到 `main` 后 CI 自动部署到 GitHub Pages（站点：`https://uestc-touhou.github.io/UESTCGensokyo-Frontend/`）
- **手动备用**：`bun run deploy` —— 使用 `gh-pages` 包构建并推送 `dist` 到 `gh-pages` 分支
- base 路径配置在 `vite.config(gh-pages).ts`（`/UESTCGensokyo-Frontend/`）；普通构建用 `vite.config.ts`（不带 base，供 Docker 部署 :443 使用）

> ⚠️ 不要删除 `vite.config(gh-pages).ts`、`package.json` 的 `deploy` 脚本以及 `deploy` job——它们是 GitPages 部署的既有约定，历史提交 `5787978` 起一直保留。

## 结构与约定

- `src/` — 应用源码；`src/i18n/locales/` — 三语文案；`src/assets/` — 站点素材（自社团资料库提取）
- 视觉设计体系：和纸象牙底 + 朱红/金箔/山彦青，见 `src/main.css` 的 CSS 变量
- 提交规范：不直接 push main，一律 feature 分支 + PR（见仓库根 `CLAUDE.md`）
- 工单跟踪：`.scratch/redesign-2026/`（本地 md tracker，spec + 工单）

### 路由

| 路由 | 页面 | 说明 |
|---|---|---|
| `/` | Welcome | 封面欢迎页 |
| `/home` | Homepage | 社团简介 + 最近3条活动 + 组织架构 |
| `/activities` | Activities | 完整活动列表，`type=call` 征集活动置顶高亮，普通活动按年份分组 |
| `/products` | Products | 社团制品展示（支持分类标签筛选与三语切换） |
| `/contact` | Contact | 联系与社群（QQ群/GitHub/Discord展示与扫码 + 商务/匿名留言信箱） |
| `/admin` | Admin | 内容管理后台（活动/成员/制品/制品类型标签 CRUD + 全站数据备份与还原） |
| `/admin/login` | AdminLogin | 后台登录 |
