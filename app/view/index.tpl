
<html>
  <head>
    <title>Index</title>
  </head>
  <style>
    form input,form button {
        height:30px;
    }
  </style>
  <body>
    login:
    <form action="/api/login" method="post">
        <input name="userName" value="jack" placeholder='name'>
        <input type="password" placeholder='password' name="password">
        <button type="submit">Submit</button>
    </form>
  </body>
</html>