// 导入express
const express = require("express");
// 创建一个express应用
const app = express();

// 创建一个路由
app.get("/", (req, res) => {
    // 响应数据
    res.send({msg: "Hello world"});
});

// 在运行环境配置中动态创建端口号
const PORT = process.env.PORT || 5000;

// 告诉Node去监听5000端口
app.listen(PORT);