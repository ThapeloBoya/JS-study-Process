<html>

    <body>
        <h3>
            swap first and last element
        </h3>
        <p id="demo">

        </p>
        <script>
            const num = [1, 2, 3, 4, 5]

            function swap() {
                let swape = [num[0], num[num.length - 1]] = [num[num.length - 1], num[0]];
            document.getElementById("demo").innerHTML = num;
      }
            swap()

        </script>
    </body>

</html>
