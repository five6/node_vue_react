<!DOCTYPE html>
<html>
<head>
	<title></title>
	  <meta charset="utf-8" />
	  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
	  <!-- Site Properties -->
	  <link rel="stylesheet" type="text/css" href="/public/css/common.css">
	  <link rel="stylesheet" type="text/css" href="/public/semantic/dist/semantic.css">
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
	  <style type="text/css">
		    /*.hidden.menu {
		      display: none;
		    }
		    .masthead.segment {
		      min-height: 700px;
		      padding: 1em 0em;
		    }
		    .masthead .logo.item img {
		      margin-right: 1em;
		    }
		    .masthead .ui.menu .ui.button {
		      margin-left: 0.5em;
		    }
		    .masthead h1.ui.header {
		      margin-top: 3em;
		      margin-bottom: 0em;
		      font-size: 4em;
		      font-weight: normal;
		    }
		    .masthead h2 {
		      font-size: 1.7em;
		      font-weight: normal;
		    }
		    .ui.vertical.stripe {
		      padding: 8em 0em;
		    }
		    .ui.vertical.stripe h3 {
		      font-size: 2em;
		    }
		    .ui.vertical.stripe .button + h3,
		    .ui.vertical.stripe p + h3 {
		      margin-top: 3em;
		    }
		    .ui.vertical.stripe .floated.image {
		      clear: both;
		    }
		    .ui.vertical.stripe p {
		      font-size: 1.33em;
		    }
		    .ui.vertical.stripe .horizontal.divider {
		      margin: 3em 0em;
		    }
		    .quote.stripe.segment {
		      padding: 0em;
		    }
		    .quote.stripe.segment .grid .column {
		      padding-top: 5em;
		      padding-bottom: 5em;
		    }
		    .footer.segment {
		      padding: 5em 0em;
		    }
		    .secondary.pointing.menu .toc.item {
		      display: none;
		    }*/
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
	$('.userOptions').dropdown();
	$("#logOut").on("click",function(e){
		$.post('/api/logout').success(function(){
			window.location.reload();
		});
	});

	$("#top-large-menu .item").click(function(){
		$("#top-large-menu > .container").find("a.active").removeClass("active");
		$(this).addClass("active");
	});
});
</script>
</head>
<body>

<!-- Following Menu -->
<div class="ui large top fixed menu" id="top-large-menu">
  <div class="ui container">
    <a class="active item">主页</a>
    <a class="item">好友动态</a>
    <a class="item">日志</a>
    <a class="item">相册</a>
    <a class="item">个人中心</a>
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