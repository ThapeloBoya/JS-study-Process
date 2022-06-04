< !DOCTYPE html >
    <html>

        <body>

            <p id="demo"></p>

            <script>
                const numbers = [54, 4, 9, 16, 25];
                const numbers2 = numbers.map(largestNumber);

                document.getElementById("demo").innerHTML = numbers2;

                function largestNumber(value, index, array) {
                    let last = numbers.length - 1;

        if (numbers[0] > numbers[last]) {
          return value = numbers[0];
        } else if (numbers[0] < numbers[last]) {
          return value = numbers[last];
        } else {
                    alert("first and last numbers are equal")
                }
      }

            </script>

        </body>

    </html>
