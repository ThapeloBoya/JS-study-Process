<html>

    <body>
        <h1>
            check  if 1 or 3 is NOT present in the array
        </h1>
        <p id="demo">

        </p>
        <script>
            const num = [0, 2, 0, 4, 5]

            function checkNumbers() {
        if (num.includes(3) != true || num.includes(1) != true) {
                document.getElementById("demo").innerHTML = true;
        } else {
                document.getElementById("demo").innerHTML = false;
        }
      }

            checkNumbers()

        </script>
    </body>

</html>
