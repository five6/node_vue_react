
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
             $.get("/api/events").success(function(result){
                var events =[];
                _.each(result,function(event){
                    var dateTime = event.time;
                    dateTime = moment(dateTime).format("YYYY-MM-DD HH:mm:ss");
                    var html =  
                    '<div class="event">'+
                      '<div class="label">'+
                        '<img src='+event.userHead+'>'+
                      '</div>'+
                      '<div class="content">'+
                        '<div class="summary"><a class="user"> '+ event.userId +' </a> '+ event.operation +'<div class="date">'+ dateTime +'</div>'+
                        '</div>'+
                        '<div class="meta">'+
                         '<a class="like"><i class="like icon"></i>'+event.likes+' 个赞</a>'+
                        '</div>'+
                      '</div>'+
                    '</div>';
              events.push(html);
              });
              $("#id-event-list").html(events.join(""));
             });
          </script>
         {% include "footer.tpl" %}
  </body>
</html>