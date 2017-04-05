<!DOCTYPE html>
<html>
<head>
	<title></title>
	<script type="text/javascript">
		$(function(){
			$("#logOut").on("click",function(e){
				$.post('/api/logout').success(function(){
				    window.location.href = "/";
				});
			});
		});
	</script>
</head>
<body>
<div class="ui secondary  menu">
  <a class="item"> </a>
  <div class="right menu">
    <a class="ui item" id="logOut">退出 </a>
  </div>
</div>
</body>
</html>