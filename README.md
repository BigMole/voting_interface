# voting_interface
API for voting system  

项目包安装指导：

1、环境搭建
	nodejs 8.*
	mongodb 3.2*
	windows 或Linux
	
2、解压出项目包之后进入到项目包目录进行依赖包安装	

     npm install

3、打开项目包根目录的config.js文件 进行mongodb的数据库连接配置，端口配置，邮箱配置等等
     工作人员登录预置账号密码为admin ,342806abcd等，都可在配置文件进行修改

4、启动项目

    node app.js   或者   nohup node app.js & 

5、代码测试

	testApi.js 里面包含了所有接口测试代码，以及接口详情。
	
	也可以使用工具直接进行测试

PS(另外我自己已经在私有云服务器上面布置好了同样的接口：地址为http://www.suduak.com:88/api/   ) 可以直接进行测试
注意事项：如果使用我测试用的邮箱发送，那么注册用户的邮箱不能使QQ邮箱（已经被黑名单系统拦截，无法再接收）
另外私有云上的接口，由于端口限制，无法进行发送邮件（正在联系解决中）。
