<!DOCTYPE html>
<html>
<head>
	<title></title>
	  <meta charset="utf-8" />
	  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
	  <!-- Site Properties -->
	  <link rel="stylesheet" type="text/css" href="/public/css/common.css">
	  <link rel="stylesheet" type="text/css" href="/public/semantic/dist/semantic.min.css">
	  <link rel="stylesheet" type="text/css" href="/public/semantic/dist/components/reset.css">
	  <link rel="stylesheet" type="text/css" href="/public/semantic/dist/components/site.css">

	  <link rel="stylesheet" type="text/css" href="/public/semantic/dist/components/container.css">
	  <link rel="stylesheet" type="text/css" href="/public/semantic/dist/components/grid.css">
	  <link rel="stylesheet" type="text/css" href="/public/semantic/dist/components/header.css">
	  <link rel="stylesheet" type="text/css" href="/public/semantic/dist/components/image.css">
	  <link rel="stylesheet" type="text/css" href="/public/semantic/dist/components/menu.css">

	  <link rel="stylesheet" type="text/css" href="/public/semantic/dist/components/divider.css">
	  <link rel="stylesheet" type="text/css" href="/public/semantic/dist/components/dropdown.css">
	  <link rel="stylesheet" type="text/css" href="/public/semantic/dist/components/segment.css">
	  <link rel="stylesheet" type="text/css" href="/public/semantic/dist/components/button.css">
	  <link rel="stylesheet" type="text/css" href="/public/semantic/dist/components/list.css">
	  <link rel="stylesheet" type="text/css" href="/public/semantic/dist/components/icon.css">
	  <link rel="stylesheet" type="text/css" href="/public/semantic/dist/components/sidebar.css">
	  <link rel="stylesheet" type="text/css" href="/public/semantic/dist/components/transition.css">
	  <link rel="stylesheet" type="text/css" href="/public/semantic/dist/components/tab.css">
	  <style type="text/css">
		    @media only screen and (max-width: 700px) {
		      .ui.fixed.menu {
		        display: none !important;
		      }
		      .secondary.pointing.menu .item,
		      .secondary.pointing.menu .menu {
		        display: none;
		      }
		      .secondary.pointing.menu .toc.item {
		        display: block;
		      }
		      .masthead.segment {
		        min-height: 350px;
		      }
		      .masthead h1.ui.header {
		        font-size: 2em;
		        margin-top: 1.5em;
		      }
		      .masthead h2 {
		        margin-top: 0.5em;
		        font-size: 1.5em;
		      }
		    }
		  </style>

  <script src="/public/js/jquery/jquery-1.10.2.js"></script>
  <script src="/public/semantic/dist/semantic.js"></script>
  <script src="/public/semantic/dist/components/visibility.js"></script>
  <script src="/public/semantic/dist/components/sidebar.js"></script>
  <script src="/public/semantic/dist/components/transition.js"></script>
   <script src="/public/semantic/dist/components/tab.js"></script>
  <script src="/public/js/underscore.js"></script>
  <script src="/public/js/moment.js"></script>
  <script src="/public/js/zh-cn.js"></script>
  <script>
  $(document)
    .ready(function() {
      // fix menu when passed
      $('.masthead')
        .visibility({
          once: false,
          onBottomPassed: function() {
            $('.fixed.menu').transition('fade in');
          },
          onBottomPassedReverse: function() {
            $('.fixed.menu').transition('fade out');
          }
        })
      ;
      // create sidebar and attach to menu open
      $('.ui.sidebar')
        .sidebar('attach events', '.toc.item')
      ;
    })
  ;
$(function(){
	if(location.href.indexOf("profile") > -1){
		$("#menu-item-profile").addClass("active");
	}else if(location.href.indexOf("index") > -1) {
		$("#menu-item-index").addClass("active");
	}else if(location.href.indexOf("album") > -1){
		$("#menu-item-album").addClass("active");
	}
	else if(location.href.indexOf("topics") > -1){
		$("#menu-item-topics").addClass("active");
	}
	$('.userOptions').dropdown();
	$("#logOut").on("click",function(e){
		$.post('/api/logout').success(function(){
			window.location.href ="/";
		});
	});

	// $("#top-large-menu .item").click(function(){
	// 	$("#top-large-menu > .container").find("a.active").removeClass("active");
	// 	$(this).addClass("active");
	// });
});
</script>
</head>
<body>

<!-- Following Menu -->
<div class="ui large top fixed menu" id="top-large-menu">
  <div class="ui container">
    <a href="/view/index" class="item" id="menu-item-index">主页</a>
    {% if userName %}
    	{% if topicId %}
 			<a href="/view/topic/{{topicId}}" class="item" id="menu-item-topics">主题</a>
		{% else %}
 			<a href="/view/topics" class="item" id="menu-item-topics">主题</a>
		{% endif %}
	    <a href="/view/album" class="item" id="menu-item-album">相册</a>
	    <a href="/view/profile" class="item" id="menu-item-profile">个人中心</a>
    {% endif %}
    <div class="right menu">
    {% if userName %}
		<div class="item">
        	<div class="ui dropdown userOptions">
		    	<div class="text">{{userName}}  </div>
			    <i class="dropdown"></i>
	  		    <div class="menu">
		  		     <div class="item" id="logOut">退出</div>
		 		</div>
	 		</div>
      	</div>
		{% else %}
		<div class="item">
	    	<a class="ui button" href="/view/login">登陆</a>
	  	</div>
	  	<div class="item">
        	<a class="ui primary button" href="/view/register">注册</a>
      	</div>
		{% endif %}
    </div>
  </div>
</div>
</body>
</html>