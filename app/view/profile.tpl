<html>
  <head>
    <title>个人中心</title>
  </head>
  <style>
    
  </style>
  <body>
        {% include "header.tpl" %}
        <!-- content -->
        <div class="ui container">
            <div class="ui content">
                  <div class="form ui">
                      <form action="/api/user/update" method="post" name="updateUserInfo">
                          <div class="field">
                            <label>用户名</label>
                            <div class="ui left icon input">
                              <input type="text" readonly name="userName" placeholder="" value={{userName}}>
                              <i class="user icon"></i>
                            </div>
                          </div>
                          <div class="field">
                                <label>原密码</label>
                                <div class="ui left icon input">
                                  <input type="password" name="old-password">
                                  <i class="lock icon"></i>
                                </div>
                          </div>
                          <div class="field">
                                <label>新密码</label>
                                <div class="ui left icon input">
                                  <input type="password" name="new-password">
                                  <i class="lock icon"></i>
                                </div>
                          </div>
                          <button type="submit" class="ui primary button">确认修改密码</button>
                      </form>
                  </div>
            </div>
        </div>
        <script type="text/javascript">
        $(function() {
          $('.select-gender').dropdown();
          $('.ui.form').form({
            fields: {
              userName : 'empty',
              "new-password" : ['minLength[6]', 'empty'],
            }
          })
        });
        </script>
        {% include "footer.tpl" %}
  </body>
</html>