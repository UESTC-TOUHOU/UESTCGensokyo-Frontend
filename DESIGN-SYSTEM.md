# UESTC幻想乡 前端设计体系

本文档定义了前端所有页面和组件必须遵守的设计约束。新增页面/组件时必须参照本规范。

## 色板体系

### 亮色模式：「神社深绯 × 暖白和纸与箔金」
以鸟子暖白和纸为底，神社深绯/臙脂红为主强调，寺院山吹箔金与响子山彦翠绿为辅，松烟墨为字色，沉稳雅致且对比舒适。

### 暗色模式：「永夜抄 · 星夜暗绀夜」
以极夜青绀为底（#0F141C），星夜绀青（#4C72A4）与星辰箔金（#DBA742）为主骨架，保持深邃幽静的夜空氛围。由 `touhou-theme.css` 的 `[data-theme='dark']` 自动覆盖同名变量。

仅使用 `main.css` / `touhou-theme.css` 中定义的 CSS 变量，禁止硬编码 hex/rgb 值：

| 用途 | 变量 | 亮色值 | 暗色值 | 说明 |
|------|------|--------|--------|------|
| 页面底色 | `--g-paper` / `--color-bg-light` | #FAF7F2 | #0F141C | 鸟子暖白和纸 / 极夜青绀 |
| 卡片面 | `--g-card` / `--color-bg-card` | #FFFFFF | #171E28 | 纯白卡片 / 星夜暗卡面 |
| 强调卡片面 | `--g-card-strong` | #F2EFE8 | #202937 | 素笺 / 深色强调块面 |
| 主文字墨色 | `--g-ink` / `--color-text-primary` | #1C1917 | #E2E7EE | 松烟墨 / 霜月白 |
| 次要文字墨色 | `--g-ink-soft` / `--color-text-secondary` | #605A54 | #9AA6B5 | 灰墨 / 雾绀灰 |
| **主强调色** | `--g-vermilion` / `--color-primary` | #9E2A2B | #4C72A4 | 神社深绯（臙脂） / 永夜绀青 |
| 主强调 hover | `--g-vermilion-deep` / `--color-primary-dark` | #7D1B22 | #324D72 | 深臙脂 / 深渊绀 |
| 副强调（箔金） | `--g-gold` / `--color-accent-gold` | #C89838 | #DBA742 | 山吹箔金 / 星辰金 |
| 阵营点缀 | `--g-teal` | #2A6B5E | #4C72A4 | 响子山彦翠绿 |
| 浅翠/浅强调 | `--g-teal-soft` | #3D8B7B | #6A93CB | hover 点缀 |
| 发丝边框线 | `--g-vermilion-line` | rgba(158,42,43,0.15) | rgba(76,114,164,0.22) | 细边框 |
| 灵光光晕 | `--g-teal-glow` | rgba(42,107,94,0.06) | rgba(76,114,164,0.12) | 背景径向渐变 |
| 金色微光 | `--g-purple-glow` | rgba(200,152,56,0.05) | rgba(219,167,66,0.08) | 符卡悬浮光晕 |

**暗色模式**由 `touhou-theme.css` 的 `[data-theme='dark']` 自动覆盖同名变量。硬编码颜色会导致暗色模式失效。

## 字体

| 用途 | 变量 |
|------|------|
| 标题/serif | `--g-font-serif` |
| 正文/sans | `--g-font-sans` |

标题 (`h1-h4`) 全部使用 `var(--g-font-serif)`，已在 `main.css` 全局设置。

## 圆角与阴影

| 变量 | 值 |
|------|----|
| `--g-radius` | 12px（大容器） |
| `--g-radius-sm` | 8px（卡片、按钮） |
| `--g-shadow` | 静态阴影 |
| `--g-shadow-hover` | hover 阴影 |

禁止使用 `borderRadius: 4` / `borderRadius: 6` 等硬编码值。

## 布局

- 页面外层容器使用 `.page-container`（max-width: 1200px, padding 已内置）
- 详情页/窄内容页容器使用专用 CSS class 设置 `max-width: 800px`
- 禁止在 JSX 上使用 `style={{ maxWidth: 800, margin: '0 auto' }}` 等 inline style
- 响应式断点：`640px`（移动端），`768px`（平板），`1024px`（桌面）

## 响应式图片

- 图片容器必须有 `max-width: 100%` 和 `overflow: hidden`
- 大图使用 `object-fit: cover` 或 `object-fit: contain`（视内容而定）
- 详情页图片容器高度不要用固定 px，用 `max-height: clamp(240px, 50vw, 500px)` 适配
- 卡片缩略图用固定宽高比（aspect-ratio 或 padding hack）

## 按钮规范

所有按钮使用 `main.css` / `Admin.css` 中已有的 class：
- `.admin-btn.admin-btn-primary` — 朱红主按钮
- `.admin-btn.admin-btn-secondary` — 描边次要按钮
- `.admin-btn.admin-btn-danger` — 危险操作

前台页面按钮用 CSS class 定义，不用 inline `style={{ background: '#c0392b' }}`。

## 组件模式

### 三语字段编辑器（TrilingualField）

后台有大量三语字段（zh/en/ja）。禁止将三个输入框纵向堆叠并用纯文本 `ZH` / `EN` / `JA` 标签区分——这种布局会让表单过长且视觉碎裂。

**标准交互模式：Tab 切换**
- 每个三语字段显示为 **一行标签 + 一个语言切换 Tab 组 + 一个输入框**
- Tab 组为紧凑的三按钮组 `[中文 | EN | 日本語]`，使用 `.admin-lang-tabs` + `.admin-lang-tab` 样式
- 当前激活语言 Tab 高亮（朱红底白字），输入框只显示该语言的值
- 默认激活中文 Tab
- 字段标签与 Tab 组在同一行（flex space-between），输入框撑满宽度

**组件**：`src/components/TrilingualField.tsx`，接收 `{ label, values: {zh, en, ja}, onChange, multiline? }` props。

**容器**：三语字段编辑区块使用 `.admin-accordion` 折叠面板，每个区块（Hero / Intro / Feature）独立保存。

### 符卡卡片
使用 `.spellcard-frame` 基类（来自 `touhou-theme.css`），自带四角角标动画。

### 详情页
标准结构：
```
.detail-page           → max-width + 居中
  .detail-back-btn     → 返回按钮
  .detail-hero-image   → 响应式图片容器
  .detail-title        → h1
  .detail-meta         → 日期/标签等元信息行
  .detail-meta-table   → 制品元数据表（价格、作者、页数等 key-value 表格）
  .detail-body         → 正文段落
  .detail-link-btn     → 相关链接按钮
```

### Admin 表单
使用 `.admin-form` / `.form-group` / `.admin-form-panel` 已有结构。
新区块编辑器使用 `.admin-accordion` / `.admin-accordion-header` / `.admin-accordion-body`。

### Admin 标签页
后台共 8 个标签：
- **活动** — activities CRUD（含图片、三语详情、相关链接）
- **组织架构与成员** — members CRUD
- **社团制品** — products CRUD（含三语名称/描述/详情、元数据 key-value、图片）
- **制品类型** — product_tags CRUD（三语标签名）
- **站点配置** — site_settings CRUD
- **主页内容编辑** — hero/intro/features 三语内容分区编辑
- **联系渠道** — contact_channels CRUD（QQ/GitHub/Discord 等渠道信息）
- **留言** — 访客留言查看与删除

## 禁止事项

1. **禁止 inline style** — 所有样式写 CSS class，除非是动态计算值（如进度条宽度）
2. **禁止硬编码颜色** — 必须引用 `--g-*` 或 `--color-*` 变量
3. **禁止硬编码圆角** — 必须引用 `--g-radius` / `--g-radius-sm`
4. **禁止英文硬编码文案** — Admin 面板所有文本使用 `t('key')` i18n 函数
5. **禁止无响应式图片** — 所有图片必须在移动端可见且不溢出

## 文件组织

- 每个页面组件有配套 `.css` 文件（如 `Activities.tsx` → `Activities.css`）
- 全局变量在 `main.css` / `touhou-theme.css`
- Admin 专用样式在 `Admin.css`
- 新增详情页样式写 `DetailPage.css`（共享）
