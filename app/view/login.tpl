<!DOCTYPE html>
<html>
<head>
	<title>登陆</title>
</head>
<body>
	{% include "header.tpl" %}
	<!-- content -->
		<div class="ui container">
          	<div class="ui">
	          <div class="column">
	            <div class="ui form segment">
	              <form action="/api/login" method="post">
		              <div class="field">
		                <label>用户名</label>
		                <div class="ui left icon input">
		                  <input type="text" name="userName" placeholder="">
		                  <i class="user icon"></i>
		                </div>
		              </div>
		              <div class="field">
		                <label>密码</label>
		                <div class="ui left icon input">
		                  <input type="password" name="password">
		                  <i class="lock icon"></i>
		                </div>
		              </div>
		              <button type="submit" class="ui blue submit button">登录</button>
	              </form>
	            </div>
	          </div>
    	</div>
	</body>
	<script type="text/javascript">
       $(function() {
         $('.ui.form').form({
          fields: {
            userName : 'empty',
            password : 'empty',
          }
       });
      })
     </script>
</html>