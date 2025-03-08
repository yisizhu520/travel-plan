const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

// 检查是否已安装依赖
const nodeModulesPath = path.join(__dirname, 'node_modules');
if (!fs.existsSync(nodeModulesPath)) {
  console.log('正在安装依赖，请稍候...');
  exec('npm install', (error, stdout, stderr) => {
    if (error) {
      console.error(`安装依赖出错: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`安装依赖警告: ${stderr}`);
    }
    console.log(`安装依赖完成: ${stdout}`);
    startDev();
  });
} else {
  startDev();
}

function startDev() {
  console.log('正在启动开发服务器...');
  const child = exec('npm run dev');
  
  child.stdout.on('data', (data) => {
    console.log(data);
  });
  
  child.stderr.on('data', (data) => {
    console.error(`错误: ${data}`);
  });
  
  child.on('close', (code) => {
    console.log(`开发服务器已关闭，退出码: ${code}`);
  });
}