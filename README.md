# 烽火陇原 V2.0

**THE ECHOES OF LONGYUAN · 山河有信，精神不息。**

甘肃红色历史数字展馆。首页、原红色档案、时光长卷、精神谱系和青年回响仍可访问。V2 新增历史专题、人物档案、场馆名录、红色地图与全馆检索。

## 在 Windows 本地运行

在包含 package.json 的目录打开 PowerShell：

```powershell
npm.cmd install
npm.cmd run dev
```

按终端显示的 Local 地址打开网站。生产预览：

```powershell
npm.cmd run build
npm.cmd run preview
node scripts/verify-v2.mjs
```

构建生成 dist/index.html 与静态资源。浏览器使用 HTTP 预览，HashRouter 路由形如 /#/history/nanliang。

## 内容与资源维护

- src/data/v2History.js、v2People.js、v2Museums.js 分别保存专题、人物与场馆。为每节内容写来源 ID，并在该记录的 sources 内登记对应出处。
- 新增关联时使用 /history/slug、/people/slug、/museums/slug。场馆同时是地图数据来源，分类与名称由同一份记录维护。
- src/data/v2Images.js 登记照片的页面关联、替代文本、作者、许可和处理记录。展示文件在 public/images/v2，保留已取得的原尺寸文件。授权范围和待补项见 IMAGE_SOURCES.md。
- src/components 与 src/styles 保存阅读页、检索、主题线路图和样式。原页面和样式仍由原目录维护。
- 历史来源、内容覆盖、测试与待核项目分别见 HISTORY_SOURCES.md、CONTENT_COVERAGE.md、QA_REPORT.md。人物和场馆的细节口径另见 PEOPLE_RESEARCH.md 与 MUSEUM_RESEARCH.md。
- 首屏保留视频组件，当前展示本地 SVG 后备图。有权使用的视频可放入 public/videos/hero.mp4 后按 HeroVideo.jsx 的开关注释启用。

## Cloudflare Pages

仓库根部直接包含 package.json、package-lock.json、index.html、src 和 public。通过 GitHub 网页上传时，将上传包解压后把里面的各项拖到仓库根部。

| 设置 | 值 |
| --- | --- |
| Root directory | 留空（仓库根目录） |
| Build command | npm run build |
| Build output directory | dist |

Cloudflare 应部署包含 V2 源码的指定分支。Vite 的 base 保持 ./，HashRouter 详情页刷新仍从静态入口读取。V2 本地分支为 feature/red-history-v2。本批次未修改线上设置或执行发布。
