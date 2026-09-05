# UESTCGensokyo-Frontend

UESTC幻想乡 / UESTC-TOUHOU — 电子科技大学东方Project同好会官网前端。

React 19 + Vite 7 + TypeScript + react-i18next（中/英/日三语）。

## 开发

```bash
pnpm install        # 安装依赖（pnpm 11）
pnpm dev            # 本地开发（http://localhost:5173）
pnpm test           # 单元测试（vitest + Testing Library）
pnpm lint           # ESLint 检查
pnpm build          # 生产构建
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

- **check**：PR 与 main push 时运行 lint + test + build（pnpm 11 + node 22）
- **deploy**：仅 main push 通过 check 后自动构建并发布到 GitHub Pages（`gh-pages` 分支）

### 部署（GitHub Pages）

> **约定：CD 自动部署必须保留。**

- **自动**：合并到 `main` 后 CI 自动部署到 GitHub Pages（站点：`https://uestc-touhou.github.io/UESTCGensokyo-Frontend/`）
- **手动备用**：`pnpm deploy` —— 使用 `gh-pages` 包构建并推送 `dist` 到 `gh-pages` 分支
- base 路径配置在 `vite.config(gh-pages).ts`（`/UESTCGensokyo-Frontend/`）；普通构建用 `vite.config.ts`（不带 base，供 Docker 部署 :443 使用）

> ⚠️ 不要删除 `vite.config(gh-pages).ts`、`package.json` 的 `deploy` 脚本以及 `deploy` job——它们是 GitPages 部署的既有约定，历史提交 `5787978` 起一直保留。

## 结构与约定

- `src/` — 应用源码；`src/i18n/locales/` — 三语文案；`src/assets/` — 站点素材（自社团资料库提取）
- 视觉设计体系：和纸象牙底 + 朱红/金箔/山彦青，见 `src/main.css` 的 CSS 变量
- 提交规范：不直接 push main，一律 feature 分支 + PR（见仓库根 `CLAUDE.md`）
- 工单跟踪：`.scratch/redesign-2026/`（本地 md tracker，spec + 工单）
