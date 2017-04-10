<!DOCTYPE html>
<html>
<head>
	<title></title>
	<script type="text/javascript">
		$(function(){
			$('.userOptions').dropdown();
			$("#logOut").on("click",function(e){
				$.post('/api/logout').success(function(){
					window.location.reload();
				});
			});
		});
	</script>
</head>
<body>
<div class="ui secondary  menu" style="padding: 0px 20px 0px 20px">
  <a class="item"> </a>
  <div class="right menu">
  	{% if userName %}
	<div class="ui dropdown userOptions">
	    <div class="text">{{userName}}  </div>
		    <i class="dropdown"></i>
  		    <div class="menu">
	  		     <div class="item" id="logOut">退出</div>
	 		</div>
	 	</div>
	 </div>
  	{% endif %}
  </div>
</div>
</body>
</html>