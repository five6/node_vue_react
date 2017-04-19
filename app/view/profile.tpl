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
               <div class="ui menu" id="profile-menu">
                <a class="item active" href="#profile-update-user">修改密码</a>
                <a class="item" href="#profile-updateInsert-ss">写说说</a>
                <a class="item" href="#profile-updateInsert-rz">写日志</a>
              </div>
            </div>
        </div>
        <div class="ui container" id="profile-updateInsert-ss">
            <div class="ui content">
            说说
            </div>
        </div>
        </div>
        <div class="ui container" id="profile-updateInsert-rz">
             <div class="ui content">
                 <div class="form ui updateInsert-ss">
                   <form action="/api/events/create" method="post" name="updateInsert-ss">
                          <div class="field">
                            <label>标题</label>
                            <div class="ui icon left input">
                              <input type="text" name="title" placeholder="" maxlength="100">
                              <input type="hidden" name="operation" value="1"/>
                            </div>
                          </div>
                          <div class="field">
                              <label>内容</label>
                              <div class="ui left icon input">
                                <textarea rows="10" cols="20" name="content"></textarea>
                              </div>
                          </div>
                          <button type="submit" class="ui primary button">发表</button>
                      </form>
                 </div>
            </div>
        </div>
        <div class="ui container" id="profile-update-user">
            <div class="ui content">
                  <div class="form ui updateUserInfo">
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
          $('.ui.form.updateUserInfo').form({
            fields: {
              userName : 'empty',
              "new-password" : ['minLength[6]', 'empty'],
            }
          });
          $('.ui.form.updateInsert-ss').form({
            fields: {
              "title" : ['minLength[4]', 'empty'],
              "content" : ['minLength[4]', 'empty']
            }
          });
          $("#profile-menu .item").click(function(){
              $("#profile-menu").find("a.active").removeClass("active");
              $(this).addClass("active");
           });
          // $('.ui.modal').modal('show')
        });

        </script>
        {% include "footer.tpl" %}
  </body>
</html>