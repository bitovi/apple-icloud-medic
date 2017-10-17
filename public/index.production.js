<!doctype html>
<html>
  <head>
    <title>Medic</title>
    <link rel="icon" type="image/x-icon" href="//www.apple.com/favicon.ico"/>
    <link rel="stylesheet" href="/public/dist/public/index.css"/>
  </head>

  <body>
    <div id="application"></div>
    <script>
      steal = {
        instantiated: {
          'bundles/public/index.css!$css': null
        }
      };
    </script>
    <script src="/node_modules/steal/steal.production.js" data-env="production" data-bundles-path="public/dist" data-main="public/index"></script>
  </body>
</html>
