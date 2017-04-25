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
                    <a class="item"  data-tab="rzList">日志列表</a>
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
                                <label>说说</label>
                                <div class="ui left icon input">
                                  <textarea id="ss-content" rows="10" cols="20" name="content"></textarea>
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
                                  <textarea  id="rz-content" rows="10" cols="20" name="content"></textarea>
                                </div>
                            </div>
                            <button type="button" id="submit-rz" class="ui primary button button-publish-event">发表</button>
                        </form>
                   </div>
              </div>
              <div class="ui tab attached" data-tab="rzList">
                   <table class="ui celled table">
                    <thead>
                      <tr><th>时间</th>
                      <th>标题</th>
                      <th>内容</th>
                      <th>类型</th>
                      <th>操作</th>
                    </tr></thead>
                    <tbody id="tbody-rzList">
                    </tbody>
                  </table>
              </div>
            </div>
        </div>
    </div>
    <script type="text/javascript">
        $(function() {
          getUserEventList();
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
            

          $(".button-publish-event").on("click",function(e){
              var data = {};
              if($(e.target).is("#submit-rz")){
                    data["title"] = $("#rz-title").val();
                    data["content"] = $("#rz-content").val();
                    data["operation"]  = 2;

              }else if($(e.target).is("#submit-ss")){
                    data["content"] = $("#ss-content").val();
                    data["operation"]  = 1;
              }
              $.ajax({
                url:"/api/events/create",
                dataType:"json",
                data:data,
                method:"post",
                success:function(){
                  getUserEventList();
                  alert("success");
                  $("#rz-title").val("");
                  $("#ss-content").val("");
                  $("#rz-content").val("");
                },
                error:function(){
                  alert("error");
                }
              })});

          $('#profile-menu .item').tab();
          function getUserEventList(){
            $.get("/api/events/userEventList").success(function(result){
              var tables ="";
              _.each(result,function(event){
                var time = moment(event.time/1).format("YYYY-MM-DD HH:mm:ss");
                var operation = event.operation == 1 ? "说说":"日志";
                tables +="<tr>"+
                  "<td>"+time+"</td>"+
                  "<td><div class='td-div-event-title'>"+(event.title ||'')+"</sdiv></td>"+
                  "<td><div class='td-div-event-content'>"+(event.content || '')+"</div></td>"+
                  "<td>"+operation+"</td>"+
                  "<td _id="+ event._id +" ><button class='ui button button-removeEvent'>删除</button></td>"+
                  "</tr>";
              });
              $("#tbody-rzList").html(tables);
            })
          }
          $("#tbody-rzList").on("click",".button-removeEvent",function(e) {
            var _id = $(e.target).parent().attr("_id");
            $.ajax({
              url:"/api/events/delete/"+_id,
              method:"delete",
              type:"json",
              data:{},
              success:function(){
                $(e.target).parent().parent().remove();
              },
              error:function(){

              }
            })
          })
        });

        </script>
        {% include "footer.tpl" %}
  </body>
</html>