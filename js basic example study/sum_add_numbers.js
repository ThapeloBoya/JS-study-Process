<html>

    <body>
        <h3>
            adding two numbers with 2 digits
        </h3>
        <p id="demo"></p>

        <script>
            function doubleDigits(num1, num2) {
        if (num1 >= 10 || num1 <= 99 && num2 >= 10 || num2 <= 99) {
                document.getElementById("demo").innerHTML = "the total sum is: " + (num1 + num2);
        } else {
                alert("try again")
            }
      }

            num1 = parseInt(prompt("enter first number:"))
            num2 = parseInt(prompt("enter second number:"))

            doubleDigits(num1, num2)

        </script>
    </body>

</html>
