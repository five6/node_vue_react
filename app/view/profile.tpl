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
                    <div class="form ui updateInsert-ss">
                     <form name="updateInsert-ss">
                            <div class="field">
                            <div class="field">
                                <label>说说</label>
                                <div class="ui left icon input">
                                  <textarea rows="10" cols="20" name="content"></textarea id="ss-content">
                                </div>
                            </div>
                            <button type="button" id="submit-ss" class="ui primary button button-publish-event">发表</button>
                        </form>
                      </div>
                </div>
                <div class="ui tab attached" data-tab="createRZ">
                   <div class="form ui updateInsert-ss">
                     <form name="updateInsert-ss">
                            <div class="field">
                              <label>标题</label>
                              <div class="ui icon left input">
                                <input type="text" name="title" placeholder="" maxlength="100" id="rz-title">
                              </div>
                            </div>
                            <div class="field">
                                <label>内容</label>
                                <div class="ui left icon input">
                                  <textarea rows="10" cols="20" name="content"></textarea id="rz-content">
                                </div>
                            </div>
                            <button type="button" id="submit-rz" class="ui primary button button-publish-event">发表</button>
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
           $('.ui.form.updateInsert-rz').form({
            fields: {
              "content" : ['minLength[4]', 'empty']
            }
          });
          // $("#profile-menu .item").click(function(){
          //     $("#profile-menu").find("a.active").removeClass("active");
          //     $(this).addClass("active");
          //  });

            $(".button-publish-event").on("click",function(e){
              var data = {};
              if($(e).is("#submit-rz")){
                    data["title"] = $("#rz-title").val();
                    data["content"] = $("#rz-content").text();
                    data["operation"]  = 2;

              }else if($(e).is("#submit-rz")){
                    data["content"] = $("#ss-content").text();
                    data["operation"]  = 1;
              }
              $.ajax({
                url:"/api/events/create",
                dataType:"json",
                data:data,
                method:"post",
                success:function(){
                  alert("success");
                  $("#rz-title").val("");
                  $("#ss-content").text("");
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