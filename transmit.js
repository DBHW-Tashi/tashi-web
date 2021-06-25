function transmit(textfield) {
        var request = new XMLHttpRequest();
        var params = JSON.stringify({"exp":textfield});
        request.open('POST', 'http://pass.anticitizen.space/compute', true);
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        request.send(params);

        request.onload = function() {
            var buffer = document.querySelector('#history').innerHTML;
            document.querySelector('#history').innerHTML = "<br>" + document.querySelector('#result').innerHTML + " = ";
            var expResult = JSON.parse(request.responseText).result;
            document.querySelector('#result').innerHTML = expResult;
            document.querySelector('#history').innerHTML += expResult + buffer;
        }
    }
