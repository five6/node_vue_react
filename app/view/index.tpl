
<html>
  <head>
    <title>Index</title>
    <link rel="stylesheet" type="text/css" href="/public/semantic/dist/semantic.css">
    <link rel="stylesheet" type="text/css" href="/public/css/common.css">
    <script src="/public/js/jquery/jquery-1.10.2.js"></script>
     <script src="/public/semantic/dist/semantic.js"></script>
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
  </head>
  <style>
    
  </style>
  <body>
       {% if userName %}
          {% include "header.tpl" %}  
        {% else %}
        <div class="ui two column middle aligned relaxed fitted stackable grid">
          <div class="column">
            <div class="ui form segment">
              <form action="/api/login" method="post">
              <div class="field">
                <label>用户名</label>
                <div class="ui left icon input">
                  <input type="text" name="userName" placeholder="Username">
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
          <div class="ui vertical divider">
            Or
          </div>
          <div class="center aligned column">
            <a class="huge green ui labeled icon button" href="/view/register">
              <i class="signup icon"></i>
              注册
            </a>
          </div>
        </div>
        {% endif %}
  </body>
</html>