
<html>
  <head>
    <title>User List</title>
  </head>
  <style>
    .item:hover{
        background:greenyellow
    }
  </style>
  <body>
    <div class=userList">
      {% for user in users %}
        <div class="item">
          <a href="/user/{{ user.id }}">{{ user.name }}</a>
        </div>
      {% endfor %}
    </div>
  </body>
</html>