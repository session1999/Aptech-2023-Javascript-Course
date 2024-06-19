<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <script>
    function new_window() {
      if (confirm("Do you want to open a new page")) {
        window.open(
          "http://www.aptech-education.com/pages/about-us/about-aptech.html ",
          " _parent"
        );
      } else {
        window.alert("In the current window");
      }
    }
  </script>
  <body>
    <input
      type="button"
      value="Click to move to the next page"
      onclick="new_window()"
    />
  </body>
</html>
