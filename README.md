# SocialAutomate AI 部署说明

这是一个社交媒体自动化平台的前端应用部署包。

## 本地部署方法

1. 确保安装了Python 3
2. 运行 ./start_server.sh
3. 访问 http://localhost:8000 查看应用

## 生产环境部署选项

### 选项1: 使用静态网站托管服务
- 将所有文件上传到Netlify、Vercel、GitHub Pages等静态网站托管服务
- 这些服务通常提供免费的HTTPS和全球CDN

### 选项2: 使用云存储服务
- 将所有文件上传到AWS S3、Google Cloud Storage等云存储服务
- 配置静态网站托管功能

### 选项3: 使用传统Web服务器
- 将文件复制到Nginx、Apache等Web服务器的文档根目录
- 配置适当的MIME类型和缓存策略

## 注意事项

- 这是一个前端应用，不包含后端服务
- 所有API调用都是模拟的，在实际部署时需要替换为真实的后端API
- 确保所有资源路径正确，特别是图片和JavaScript文件
