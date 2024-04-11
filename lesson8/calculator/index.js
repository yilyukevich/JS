const calculator = {

    inputArea: null,
    historyArea: null,

    blockAction: false,

    handler: function (event) {
        let target = event.target;
        this.inputArea = document.querySelector(".input_area_text");
        this.historyArea = document.querySelector(".history");

        switch (target.className) {
            case "input_symbol_button":
                this.updateInput(target.value);
                break;
            case "action_symbol_ce":
                this.clear();
                break;
            case "action_symbol_execute":
                this.execute();
        }
    },

    updateInput(symbol) {
        if (symbol === 'R') {
            if (this.isActionSymbol(this.inputArea.value.at(-1))) {
                this.blockAction = false;
            }
            this.inputArea.value = this.inputArea.value.slice(0, -1);

        } else if (this.isActionSymbol(symbol)) {
            if (!this.blockAction) {
                this.inputArea.value += symbol;
                this.blockAction = true;
            }

        } else {
            this.inputArea.value += symbol;
        }
    },

    isActionSymbol(symbol) {
        return symbol === "+" || symbol === "-" || symbol === "*" || symbol === "/" || symbol === "h";
    },

    clear() {
        this.inputArea.value = "";
        this.blockAction = false;
    },

    execute: function () {
        let expression = this.parse(this.inputArea.value);
        if (expression.length === 3)    {
            let result = this.run(expression[0], expression[1], expression[2]);
			
            this.inputArea.value = Number.isInteger(result) ? result : result.toFixed(3);

            this.updateHistory(expression[0] + expression[1] + expression[2] + "=" + result);
            this.blockAction = false;
        }                
    },

    parse(str) {
        let result = [];
        let tmp = '';

        for (let char of str) {
            if ((char >= 0 && char <= 9) || char === '.') {
                tmp += char;
            } else {
                result.push(tmp);
                result.push(char);
                tmp = '';
            }
        }
        result.push(tmp);

        return result;
    },

    run(firstValue, action, secondValue) {
        switch (action) {
            case "+":
                return firstValue + secondValue;
            case "-":
                return firstValue - secondValue;
            case "*":
                return firstValue * secondValue;
            case "/":
                return firstValue / secondValue;
            case "h":
                return Math.pow(firstValue, secondValue);
        }
        return "";
    },

    updateHistory(value)    {
        this.historyArea.innerHTML += "<p>" + value + "</p>";
    }

};

let calc = document.querySelector(".calc");
calc.addEventListener('click', calculator.handler.bind(calculator));