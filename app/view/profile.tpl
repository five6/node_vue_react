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
                <div class="ui top attached tabular menu" id="profile-menu">
                    <a class="item active"  data-tab="updateUserInfo">修改密码</a>
                    <a class="item"  data-tab="createSS">写说说</a>
                    <a class="item"  data-tab="createRZ">写日志</a>
                </div>
                <div class="ui active tab attached" data-tab="updateUserInfo">
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
                <div class="ui tab attached" data-tab="createSS">
                    说说
                </div>
                <div class="ui tab attached" data-tab="createRZ">
                   <div class="form ui updateInsert-ss">
                     <form name="updateInsert-ss">
                            <div class="field">
                              <label>标题</label>
                              <div class="ui icon left input">
                                <input type="text" name="title" placeholder="" maxlength="100" id="rz-title">
                                <input type="hidden" name="operation" value="1"/>
                              </div>
                            </div>
                            <div class="field">
                                <label>内容</label>
                                <div class="ui left icon input">
                                  <textarea rows="10" cols="20" name="content"></textarea id="rz-content">
                                </div>
                            </div>
                            <button type="button" id="submit-rz" class="ui primary button">发表</button>
                        </form>
                   </div>
              </div>
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
          // $("#profile-menu .item").click(function(){
          //     $("#profile-menu").find("a.active").removeClass("active");
          //     $(this).addClass("active");
          //  });
          $("#submit-rz").on("click",function(e){
              var title = $("#rz-title").val();
              var content = $("#rz-content").text();
              $.ajax({
                url:"/api/events/create",
                dataType:"json",
                data:{
                  title:title,
                  content:content,
                  operation:2
                },
                method:"post",
                success:function(){
                  alert("success");
                  $("#rz-title").val("");
                  $("#rz-content").text("");
                },
                error:function(){
                  alert("error");
                }
              })
          });
          $('#profile-menu .item').tab()
        });

        </script>
        {% include "footer.tpl" %}
  </body>
</html>