# My Portfolio

个人作品集网站，基于 Astro 构建。

## Logic Architecture（逻辑架构）

| 文件名 | 负责的功能 | 涉及的关键术语 |
| :--- | :--- | :--- |
| `src/layouts/Layout.astro` | 全站母版布局：顶部导航栏、内容插槽、全局样式与响应式规则 | **Props**：组件属性；**slot**：内容插槽；**sticky**：粘性定位；**flex**：弹性布局；**Media Query**：媒体查询，按视口切换样式 |
| `src/pages/index.astro` | 首页：姓名展示、圆形头像、旋转文字环（Projects / Insights / Journey 可点击）、打字机自我介绍 | **Layout**：引用母版；**clipPath**：SVG 裁剪；**textPath**：文字沿路径；**preserveAspectRatio**：比例与对齐；**@keyframes / animation**：CSS 动画；**setTimeout**：定时调度 |
| `src/pages/projects.astro` | 项目页占位：中央大标题 | **Layout**：母版复用；**flex**：居中布局 |
| `src/pages/insights.astro` | 洞察页占位：中央大标题 | **Layout**：母版复用；**flex**：居中布局 |
| `src/pages/journey.astro` | 旅程页占位：中央大标题 | **Layout**：母版复用；**flex**：居中布局 |
| `astro.config.mjs` | Astro 构建与开发配置 | **defineConfig**：Astro 配置入口 |
| `package.json` | 依赖、脚本与项目元信息 | **scripts**：npm 命令；**dependencies**：运行时依赖 |

### 关键术语简要说明

- **Props**：组件接收的外部参数，用于定制行为或内容
- **slot**：子内容插入点，母版中的占位，由使用该布局的页面提供
- **sticky**：元素在滚动到一定位置后固定在视口（如顶部导航）
- **flex**：弹性盒布局，用于排列和居中内容
- **Media Query**：按屏幕尺寸切换 CSS 规则，实现响应式
- **clipPath**：在 SVG 中定义裁剪形状（如圆形头像）
- **textPath**：让文字沿指定路径（如圆弧）排列
- **preserveAspectRatio**：控制 SVG 内容在给定区域内如何缩放与对齐
- **@keyframes / animation**：定义关键帧动画并应用到元素
- **setTimeout**：在指定延迟后执行一次回调，常用于打字机等效果

---

## Project Structure

```text
/
├── public/
│   ├── favicon.svg
│   └── my-avatar.png
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── projects.astro
│   │   ├── insights.astro
│   │   └── journey.astro
│   └── components/
│       └── Welcome.astro
├── astro.config.mjs
└── package.json
```

## Commands

| Command | Action |
| :--- | :--- |
| `npm install` | 安装依赖 |
| `npm run dev` | 启动开发服务器（默认 `localhost:4321`） |
| `npm run build` | 构建生产版本到 `./dist/` |
| `npm run preview` | 本地预览构建结果 |

## 相关链接

- [Astro 文档](https://docs.astro.build)
