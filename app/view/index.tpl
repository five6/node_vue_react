
<html>
  <head>
    <title>Index</title>
    <link rel="stylesheet" type="text/css" href="public/semantic/dist/semantic.css">
    <link rel="stylesheet" type="text/css" href="public/css/common.css">
    <script src="public/js/jquery/jquery-1.10.2.js"></script>
     <script src="public/semantic/dist/semantic.js"></script>
     <script type="text/javascript">
       $(function() {
         $('.ui.form').form({
          fields: {
            userName : 'empty',
            password : 'empty',
          }
       });
        setTimeout(function(){
          $("#alert-message").remove();
        },2000);
      })
     </script>
  </head>
  <style>
    
  </style>
  <body class="ui inverted segment">
    {% if loginSuccess %}
    <div class="ui message" id="alert-message">
      <div class="header">注册成功!</div>
      <p>请使用注册的用户名和密码登录</p>
    </div>
    {% endif %}
    <div class="ui form inverted">
      <form action="/api/login" method="post">
          <div class="field">
            <label>用户名</label>
            <input name="userName" placeholder='用户名'>
          </div>
          <div class="field">
            <label>密码</label>
            <input type="password" placeholder='密码' name="password">
          </div>
          <button type="submit" class="ui primary button">提交</button>
          <a href="/view/register" class="ui default button">注册</a>
        </form>
    </div>
  </body>
</html>