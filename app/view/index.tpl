
<html>
  <head>
    <title>大家好！</title>
  </head>
  <style>
    
  </style>
  <body>
        {% include "header.tpl" %}
        <!-- content -->
        <div class="ui container">
            <div class="ui content">
                <div class="ui feed" id="id-event-list">
                </div>
            </div>
        </div>
          <script type="text/javascript">
          var time = new Date().valueOf() - 60 * 1000 * 60;
             $.get("/api/events?time=").success(function(result){
              var events = returnRzSs(result);
              //   var events =[];
              //   _.each(result,function(event){
              //       var dateTime = event.time;
              //       var operation = event.operation;
              //       if(operation == 1){
              //         operation = "发表说说";
              //       }else{
              //         operation ="发布日志";
              //       }
              //       var _id = event._id;
              //       var contents = event.title || event.content || "";//有title是日志 没有title 是说说
              //       var userHead = event.userHead || "/public/images/head/1.jpg"
              //       moment.locale("cn");
              //       dateTime = moment(dateTime).fromNow();
              //       var html =  
              //       '<div class="event">'+
              //         '<div class="label">'+
              //           '<img src='+userHead+'>'+
              //         '</div>'+
              //         '<div class="content">'+
              //           '<div class="summary"><a class="user"> '+ event.userId +' </a> '+ operation +'<a  _id='+_id+' class="title a-event-detail">'+contents+'</a>'+'<div class="date">'+ dateTime +'</div>'+
              //           '</div>'+
              //           '<div class="meta">'+
              //            '<a class="like"><i class="like icon"></i>'+event.likes+' 个赞</a>'+
              //           '</div>'+
              //         '</div>'+
              //       '</div>';
              // events.push(html);
              // });
              $("#id-event-list").html(events.join(""));
             });
              function returnRzSs(result){
                    var events =[];
                    _.each(result,function(event){
                        var dateTime = event.time;
                        var operation = event.operation;
                        if(operation == 1){
                          operation = "发表说说";
                        }else{
                          operation ="发布日志";
                        }
                        var _id = event._id;
                        var contents = event.title || event.content || "";//有title是日志 没有title 是说说
                        var userHead = event.userHead || "/public/images/head/1.jpg"
                        moment.locale("cn");
                        dateTime = moment(dateTime).fromNow();
                       if(event.operation == 1){
                            var html =  
                            '<div class="event">'+
                              '<div class="label">'+
                                '<img src='+userHead+'>'+
                              '</div>'+
                              '<div class="content">'+
                                '<div class="summary"><a class="user"> '+ event.userId +' </a> '+ operation +'<span style="font-weight:200"  _id='+_id+'>'+contents+'</span>'+'<div class="date">'+ dateTime +'</div>'+
                                '</div>'+
                                '<div class="meta">'+
                                 '<a class="like"><i class="like icon"></i>'+event.likes+' 个赞</a>'+
                                '</div>'+
                              '</div>'+
                            '</div>';
                            events.push(html);
                        }else if(event.operation ==2){
                            var html =  
                            '<div class="event">'+
                              '<div class="label">'+
                                '<img src='+userHead+'>'+
                              '</div>'+
                              '<div class="content">'+
                                '<div class="summary"><a class="user"> '+ event.userId +' </a> '+ operation +'<a  _id='+_id+' class="title a-event-rz-detail">'+contents+'</a>'+'<div class="date">'+ dateTime +'</div>'+
                                '</div>'+
                                '<div class="meta">'+
                                 '<a class="like"><i class="like icon"></i>'+event.likes+' 个赞</a>'+
                                '</div>'+
                              '</div>'+
                            '</div>';
                            events.push(html);
                        };
                        
                  });
                    return events;
              }

             $("#id-event-list").on("click",".a-event-rz-detail",function(){
                alert(1);
             })

          </script>
         {% include "footer.tpl" %}
  </body>
</html>