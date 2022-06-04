<html>

    <body>
        <h1>
            Return first and last item of the array
        </h1>
        <p id="demo">

        </p>
        <script>
            function firstLast() {
        const num = [1, 2, 3, 4, 5]
            let last = num.length - 1;
            document.getElementById("demo").innerHTML ="the first and last items of the array: " +  [num[0], num[last]];
      }
            firstLast()

        </script>
    </body>

</html>
