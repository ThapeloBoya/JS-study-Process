<doctype html>
    <html>

        <head>

        </head>

        <body>
            <form>
                <label>1st number:</label>
                <input id="num1" value="">
                    <br>
                        <label>2nd number</label>
                        <input id="num2" value="">
                            <br>
                                <button type="button" id="multiply" onclick="multiply">multiply</button>
                                <button type="button" id="divide" onclick="divide">divide</button>

                                <p id="multiply"></p>
      </form>

                            <script>
                                function calculate(num1, num2, total) {
                                    let x;
                                if (total == 0){
                                    let multiply = num1 * num2;
          } else {
                                    let divide = num1 / num2;
          }
        }

                                //let num1 = prompt("Enter 1st number");
                                //let num2 = prompt("Enter 2nd number");

                                calculate(num1, num2, total)
                            </script>
    </body>

  </html>
