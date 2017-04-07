<!DOCTYPE html>
<html>
<head>
	<title>注册</title>
   	<link rel="stylesheet" type="text/css" href="/public/semantic/dist/semantic.css">
   	<link rel="stylesheet" type="text/css" href="/public/css/common.css">
    <script src="/public/js/jquery/jquery-1.10.2.js"></script>
    <script src="/public/semantic/dist/semantic.js"></script>
    <script type="text/javascript">
    	$(function(argument) {
    		$('.select-gender').dropdown();
    		$('.ui.form').form({
			    fields: {
			      sex   : 'empty',
			      userName : 'empty',
			      password : ['minLength[6]', 'empty'],
			    }
    		})
		  });
    </script>
</head>
<body class="ui">
	<div class="ui form ">
      <form action="/api/register" method="post">
          <div class="field">
            <label>用户名</label>
            <input name="userName" placeholder='用户名'>
          </div>
          <div class="field">
            <label>密码</label>
            <input type="password" placeholder='密码' name="password">
          </div>
		  <div class="field">
		      <label>性别</label>
		      <div class="ui select-gender selection dropdown">
		          <input type="hidden" name="sex">
		          <i class="dropdown icon"></i>
		          <div class="default text">男</div>
		          <div class="menu">
		              <div class="item" data-value="1">男</div>
		              <div class="item" data-value="0">女</div>
		          </div>
		      </div>
		  </div>
          <button type="submit" class="ui primary button">注册</button>
        </form>
    </div>
</body>
</html>