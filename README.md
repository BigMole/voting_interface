# voting_interface
API for voting system-a test  

项目包安装指导
1、环境搭建
	nodejs 8.*
	mongodb 3.2*
	windows 或Linux
2、解压出项目包之后进入到项目包目录进行依赖包安装
#	npm install

3、打开项目包根目录的config.js文件 进行mongodb的数据库连接配置，端口配置，邮箱配置等等


4、启动项目
    node app.js   或者   nohup node app.js & 

5、代码测试
	testApi.js 里面包含了接口测试代码，以及接口详情。
	也可以使用工具直接进行测试

PS(另外我自己已经在私有云服务器上面布置好了同样的接口：地址为http://www.suduak.com:88/api/   ) 可以直接进行测试
