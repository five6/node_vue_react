
<html>
  <head>
    <title>Profile</title>
  </head>
  <body>
  {% block body %}
    <div class=userList">
        <table>
            <tr>
                <td>Id</td><td>{{ user._id }}</td>
            </tr>
        </table>
    </div>
    {% endblock %}
  </body>
</html>