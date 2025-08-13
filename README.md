# WordPress vulnerability online scan (React + Vite + Node.js)

本网站是一个基于 WPScan API 的在线 WordPress 漏洞检测平台，旨在为用户提供便捷、安全的漏洞扫描服务。 用户只需在网页端输入目标 WordPress 网站的 URL 及其个人 WPScan API Key，即可获取来自 WPScan 的漏洞检测报告。 核心特点：
This website is an online WordPress vulnerability detection platform based on WPScan API, aiming to provide users with convenient and secure vulnerability scanning services. Users can get a vulnerability detection report from WPScan by simply entering the URL of the target WordPress website and their personal WPScan API Key on the web page. Core features:

轻量化交互  
o 通过基于 React 的简单网页表单，用户无需本地安装 WPScan，即可发起漏洞扫描请求。  
Lightweight interaction   
o With a simple React-based web form, users can initiate vulnerability scanning requests without the need to install WPScan locally.  

安全的 API Key 管理   
o 后端采用 Node.js（如 Express）接收请求，仅记录用户提交的 API Key（不保存 URL 或扫描结果），并存储在 MySQL 数据库中，便于后续调用统计或日志分析。   
o 所有 API Key 均经过格式校验与安全存储，防止 SQL 注入与数据泄露风险。  
Secure API Key Management   
o The backend uses Node.js (such as Express) to receive requests, recording only the API Keys submitted by the user (no URLs or scan results are saved) and stored in the MySQL database for easy subsequent call statistics or log analysis.   
o All API Keys are format validated and securely stored to prevent SQL injection and data leakage risks.  

高效的扫描结果获取   
o Node.js 后端将 API Key 安全传递至 WPScan API 服务器进行调用。   
o WPScan API 返回的漏洞检测结果经过后端解析与格式化，再回传至前端页面供用户查看。  
Efficient scan results Retrieval   
o Node.js The backend securely passes the API key to the WPScan API server for calls.   
o The vulnerability detection results returned by the WPScan API are parsed and formatted by the backend and then sent back to the frontend page for users to view.  

架构简洁，易于扩展   
o 采用前后端分离架构，前端负责表单与结果展示，后端负责数据处理与 API 调用，数据库专注于 API Key 存储。   
o 未来可扩展用户登录、调用次数限制、结果缓存等功能。  
Simple architecture and easy to scale   
o Adopt a front-end and back-end separation architecture, with the front-end responsible for forms and result display, the back-end responsible for data processing and API calls, and the database focusing on API key storage.   
o In the future, functions such as user login, call number limit, and result caching can be expanded.  
