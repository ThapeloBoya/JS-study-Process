<doctype html>
    <html>

        <head>

        </head>

        <body>
            <form id="form">
                <label>1st number:</label>
                <input id="num1">
                    <br>
                        <label>2nd number</label>
                        <input id="num2">
                            <br>
                                <button id="multiply" onclick="calculate('multiply')">multiply</button>
                                <button id="divide" onclick="calculate('divide')">divide</button>
                                <button id="add" onclick="calculate('add')">add</button>
                                <button id="minus" onclick="calculate('minus')">minus</button>
                                <button id="modulus" onclick="calculate('modulus')">modulus</button>
      </form>
                            <script>
                                function calculate(mode){
                                    let num1 = parseInt(document.getElementById('num1').value);
                                let num2 = parseInt(document.getElementById('num2').value);

                                let answer = 0;
                                switch (mode) {
		case 'multiply':
                                answer = num1 * num2;
                                break;
                                case 'divide':
                                answer = num1 / num2;
                                case 'add':
                                answer = num1 + num2;
                                break;
                                case 'minus':
                                answer = num1 - num2;
                                break;
                                case 'modulus':
                                answer = num1 % num2;
                                break;
                                default:
                                alert('Incorrect mode.');
	}

                                document.write('the answer is ' + answer);
}

                            </script>
    </body>
  </html>
