
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
                <div id="modal-container">
                  <div class="ui modal modal-rz-detail">
                    <div class="header" id="modal-rz-detail-header"></div>
                    <div class="content" id="modal-rz-detail-body">
                      <p></p>
                    </div>
                    <div class="actions">
                      <div class="ui cancel button">确定</div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
          <script type="text/javascript">
             $.get("/api/events").success(function(result){
              var events = returnRzSs(result);
              events = events.concat('<div class="getMoreEvents button">更多</div>');
              $("#id-event-list").html(events.join(""));
             });
              function returnRzSs(result){
                    var events =[];
                    _.each(result,function(event){
                        var dateTime = event.time;
                        var eventTime = event.time;
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
                                '<div class="summary"><a class="user"> '+ event.userId +' </a> '+ operation +'<span class="event_id" style="font-weight:200" eventTime='+eventTime+' _id='+_id+'>'+contents+'</span>'+'<div class="date">'+ dateTime +'</div>'+
                                '</div>'+
                                '<div class="meta">'+
                                 '<a class="like eventLikes " eventLikes='+event.likes+' ><i class="like icon" eventLikes='+event.likes+'></i>'+event.likes+' 个赞</a>'+
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
                                '<div class="summary"><a class="user"> '+ event.userId +' </a> '+ operation +'<a eventTime='+eventTime+'  _id='+_id+' class="event_id title a-event-rz-detail">'+contents+'</a>'+'<div class="date">'+ dateTime +'</div>'+
                                '</div>'+
                                '<div class="meta">'+
                                 '<a class="like eventLikes" eventLikes='+event.likes+'  _id='+_id+'><i class="like icon" eventLikes='+event.likes+'  _id='+_id+'></i>'+event.likes+' 个赞</a>'+
                                '</div>'+
                              '</div>'+
                            '</div>';
                            events.push(html);
                        };
                        
                  });
                    return events;
              }

             $("#id-event-list").on("click",".a-event-rz-detail",function(e){
                   var _id = $(e.target).attr("_id");
                   $.get("/api/events/"+_id).success(function(result){
                      rizhiDetail(result);
                    });
               
             })
             $("#id-event-list").on("click",".getMoreEvents",function(){
                var lastEvent = $("#id-event-list").find("div.event").last();
                var time = lastEvent.find(".event_id").attr("eventTime");
                $.get("/api/events?time="+time).success(function(result){
                  var events = returnRzSs(result);
                  lastEvent.after(events.join(""));
              });
             });
             $("#id-event-list").on("click",".eventLikes",function(e){
                var clicks = $(e.target).attr("eventLikes");
                var _id = $(e.target).attr("_id");
                var action = ""
                $.ajax({
                  url:"/api/events/update/"+_id,
                  method:"put",
                  type:"json",
                  data:{
                    
                  },
                  success:function(){


                  },
                  error:function(){

                  }
                })
              });
            function rizhiDetail(event){
                var title = event.title;
                var content = event.content;
                $("#modal-rz-detail-header").html(title);
                $("#modal-rz-detail-body p").html(content);
                $('.modal-rz-detail.modal').modal('show');
            }
          </script>
         {% include "footer.tpl" %}
  </body>
</html>