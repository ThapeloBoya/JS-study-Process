<html>

    <body>
        <p id="demo">

        </p>
        <script>
            const numbers = [1, 2, 3, 4, 5]
            //0 shows the index on where to start
            var value = numbers[numbers.length / 2 | 0];

            function middleValue() {
                document.getElementById("demo").innerHTML = value;
      }
            middleValue()
        </script>
    </body>

</html>
