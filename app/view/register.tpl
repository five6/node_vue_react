<!DOCTYPE html>
<html>
<head>
	<title>注册</title>
</head>
<body>
  {% include "header.tpl" %}
  <div class="ui container">
      <div class="ui content">
        <div class="ui form ">
          <form action="/api/register" method="post">
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
      </div>
  </div>
  <script type="text/javascript">
    $(function() {
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
  {% include "footer.tpl" %}
</body>
</html>