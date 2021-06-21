function transmit(textfield) {
        var request = new XMLHttpRequest();
        var params = JSON.stringify({"exp":textfield});
        request.open('POST', 'http://pass.anticitizen.space/compute', true);
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        request.send(params);

        request.onload = function() {
            document.querySelector('#history').innerHTML += "<br>" + document.querySelector('#result').innerHTML + " = ";
            var result = JSON.parse(request.responseText).result;
            document.querySelector('#result').innerHTML = result;
            document.querySelector('#history').innerHTML += result;
        }
    }
