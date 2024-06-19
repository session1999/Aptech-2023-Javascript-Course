<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="jquery-1.7.2.js"></script>

    <script>
      $(document).ready(function () {
        $("button").click(function () {
          alert("You have clicked me!!");
        });
        $("p").hover(
          function () {
            $("p").css("background-color", "red");
          },
          function () {
            $("p").css("background-color", "maroon");
          }
        );
        $("p").mousemove(function () {
          $(this).css("color", "blue");
        });
      });
    </script>
  </head>
  <body>
    <button>Click Me</button>
    <p>Hover across this line</p>
  </body>
</html>
