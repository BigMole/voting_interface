//测试代码
//使用方法，将下文对应接口位置处的注释去掉，然后使用Nodejs即可即可进行模拟接口测试
//另，使用前端javascript ajax 或者其他语言的模拟请求也可以。



//通用变量
const request =require("request");
var url='http://localhost:3000/api/';
//测试参数
var user_account='DragonMount';
var user_pass='DragonMount';
var user_mail='406999665@qq.comm';
var vali_code=1046;
var votes='1|2|3'


//接口列表
/* 1.
	获取验证码
	接口地址 GET  ./register
	参数 user_mail=406999665@qq.com   
	
	返回：
	发送验证码给邮箱，返回发送成功或失败的Msg
*/

//--------------------------------------代码区
/* var url=url+"register";
var requestData='user_mail='+user_mail;
request.get(url+"?"+requestData, function(error, response, body) {

		console.log(response.body);

});
  */
//--------------------------------------代码区

/* 2.
	注册请求
	接口地址 PUT  ./register
	参数 user_mail  user_account=abc&user_pass=123123&user_mail=406999665@qq.com&vali_code=1046
	其中vali_code为获取的验证码
	
	
	返回：
	注册成功会返回提示信息，已经TOKEN
*/


//--------------------------------------代码区
 /* 
var url=url+"register";
var requestData='user_mail='+user_mail+'&user_account='+user_account+'&user_pass='+user_pass+'&vali_code='+vali_code;
request.put(url+"?"+requestData, function(error, response, body) {

		console.log(response.body);

});
 */
 //--------------------------------------代码区

/* 3.
	用户进行投票
	接口地址 POST  ./voting
	参数   candidate_ids=1|2|3| &token=.....      -------后台解释为投1 2 3 号候选人 
	或者用在 header中加入x-access-token 为注册之后返回的TOKEN
	
	
	返回：
	投票成功返回提示信息。
*/
 //token为注册之后返回的token
 
 //--------------------------------------代码区

 /* 
var token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJEaWxpbGkiLCJpYXQiOjE1NDc4NjM5MjEwOTQsInVzZXIiOnsidXNlcl9hY2NvdW50IjoiYWJjIiwidXNlcl9tYWlsIjoiNDA2OTk5NjY3QHFxLmNvbSJ9LCJleHAiOjE1NDc4NjQwMDc0OTR9.oQVVwRXBV4_CvGa1RhRVJe55WGLXCtJBB2w_aW1IgYg';
var url=url+"voting";
var requestData='candidate_ids='+votes+'&token='+token;
request.post(url+"?"+requestData, function(error, response, body) {

		console.log(response.body);

}); */

//--------------------------------------代码区

/* 4.
	工作人员登录
	接口地址 POST  ./login
	参数   user_account=admin&user_pass=342806abcd
	
	返回：
	投票成功返回提示信息，以及工作人员的TOKEN
*/
 //token为注册之后返回的token
//--------------------------------------代码区
 /*  
var url=url+"login";
var requestData='user_account=admin&user_pass=342806abcd';
request.post(url+"?"+requestData, function(error, response, body) {

		console.log(response.body);

}); 

 */

//--------------------------------------代码区
/* 5.
	开启投票系统
	接口地址 POST  ./switchs
	参数 token=''     ----登录之后返回的TOKEN
	或者header中加入x-access-token 为登录之后返回的TOKEN   
	
	返回操作提示
*/

//--------------------------------------代码区
/*  
var url=url+"switchs";
var requestData='token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJEaWxpbGkiLCJpYXQiOjE1NDc4Njc1ODIwNjgsInVzZXIiOnsidXNlcl9hY2NvdW50IjoiYWRtaW4iLCJhZG1pbiI6MX0sImV4cCI6MTU0Nzg2NzY2ODQ2OH0.XehyNqJOR4G6R-UHQbvLXMEaT7XnsOF5RLgBzn_oSKA';
request.get(url+"?"+requestData, function(error, response, body) {

		console.log(response.body);

}); 
  */


//--------------------------------------代码区
/* 6.
	关闭投票系统
	接口地址 POST  ./switchs
	参数 token=''     ----登录之后返回的TOKEN
	或者header中加入x-access-token 为登录之后返回的TOKEN   
	
	返回操作提示
*/

//--------------------------------------代码区
/* 
var url=url+"switchs";
var requestData='token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJEaWxpbGkiLCJpYXQiOjE1NDc4Njc1ODIwNjgsInVzZXIiOnsidXNlcl9hY2NvdW50IjoiYWRtaW4iLCJhZG1pbiI6MX0sImV4cCI6MTU0Nzg2NzY2ODQ2OH0.XehyNqJOR4G6R-UHQbvLXMEaT7XnsOF5RLgBzn_oSKA';
request.post(url+"?"+requestData, function(error, response, body) {

		console.log(response.body);

}); 
 */

//--------------------------------------代码区

/* 7.
	新增候选人
	接口地址 PUT  ./candidates
	参数 token=...&candidate_id=1&candidate_name     ----登录之后返回的TOKEN
	或者header中加入x-access-token 为登录之后返回的TOKEN   
	
	返回操作提示
*/
//--------------------------------------代码区
/* 
 
var url=url+"candidates";
var requestData='candidate_id=1&candidate_name=aa&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJEaWxpbGkiLCJpYXQiOjE1NDc4Njc1ODIwNjgsInVzZXIiOnsidXNlcl9hY2NvdW50IjoiYWRtaW4iLCJhZG1pbiI6MX0sImV4cCI6MTU0Nzg2NzY2ODQ2OH0.XehyNqJOR4G6R-UHQbvLXMEaT7XnsOF5RLgBzn_oSKA';
request.put(url+"?"+requestData, function(error, response, body) {

		console.log(response.body);

}); 
  */

//--------------------------------------代码区


/* 8.
	修改候选人
	接口地址 PUT  ./candidates
	参数 token=...&candidate_id=1&candidate_name     ----登录之后返回的TOKEN  candidate_name为修改后的名字，candidate_id不能直接修改
	或者header中加入x-access-token 为登录之后返回的TOKEN   
	
	返回操作提示
*/
 
//--------------------------------------代码区
 /* 
var url=url+"candidates";
var requestData='candidate_id=1&candidate_name=bb&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJEaWxpbGkiLCJpYXQiOjE1NDc4Njc1ODIwNjgsInVzZXIiOnsidXNlcl9hY2NvdW50IjoiYWRtaW4iLCJhZG1pbiI6MX0sImV4cCI6MTU0Nzg2NzY2ODQ2OH0.XehyNqJOR4G6R-UHQbvLXMEaT7XnsOF5RLgBzn_oSKA';
request.post(url+"?"+requestData, function(error, response, body) {

		console.log(response.body);

});  */
  

//--------------------------------------代码区
/* 9.
	删除候选人
	接口地址 PUT  ./candidates
	参数 token=...&candidate_id=1&candidate_name     ----登录之后返回的TOKEN
	或者header中加入x-access-token 为登录之后返回的TOKEN   
	
	返回操作提示
*/
 
//--------------------------------------代码区
 /* 
var url=url+"candidates";
var requestData='candidate_id=1&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJEaWxpbGkiLCJpYXQiOjE1NDc4Njc1ODIwNjgsInVzZXIiOnsidXNlcl9hY2NvdW50IjoiYWRtaW4iLCJhZG1pbiI6MX0sImV4cCI6MTU0Nzg2NzY2ODQ2OH0.XehyNqJOR4G6R-UHQbvLXMEaT7XnsOF5RLgBzn_oSKA';
request.del(url+"?"+requestData, function(error, response, body) {

		console.log(response.body);

}); 
 */

//--------------------------------------代码区
/* 10.
	查询候选人信息
	接口地址 PUT  ./candidates
	参数 token=...     ----登录之后返回的TOKEN  返回所有候选人信息包括票数信息
	或者header中加入x-access-token 为登录之后返回的TOKEN   
	
	返回操作提示 和候选人详细信息
*/
 
 
//--------------------------------------代码区
// var url=url+"candidates";
// var requestData='token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJEaWxpbGkiLCJpYXQiOjE1NDc4Njc1ODIwNjgsInVzZXIiOnsidXNlcl9hY2NvdW50IjoiYWRtaW4iLCJhZG1pbiI6MX0sImV4cCI6MTU0Nzg2NzY2ODQ2OH0.XehyNqJOR4G6R-UHQbvLXMEaT7XnsOF5RLgBzn_oSKA';
// request.get(url+"?"+requestData, function(error, response, body) {

		// console.log(response.body);

// }); 


//--------------------------------------代码区
  
