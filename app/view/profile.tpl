
<html>
  <head>
    <title>Profile</title>
  </head>
  <body>
  {% block body %}
    <div class=userList">
        <table>
            <tr>
                <td>Id</td><td>{{ user.id }}</td>
            </tr>
             <tr>
                <td>Name</td><td>{{ user.name }}</td>
            </tr>
        </table>
    </div>
    {% endblock %}
  </body>
</html>