<html>
  <head>
    <title>相册</title>
  </head>
  <style>
    
  </style>
  <body>
        {% include "header.tpl" %}
        <!-- content -->
        <div class="ui container">
            <div class="ui content">
                  <div id="album-container" />
            </div>
        </div>
        <script src="/public/dist/shared.js"></script>
        <script src="/public/dist/album.js"></script>
        {% include "footer.tpl" %}
  </body>
</html>