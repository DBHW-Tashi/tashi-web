function transmit(textfield) {
        var request = new XMLHttpRequest();
        var params = JSON.stringify({"exp":textfield});
        request.open('POST', 'http://pass.anticitizen.space/compute', true);
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        request.send(params);

        request.onload = function() {
            document.querySelector('#result').innerHTML = request.responseText;
            console.log(JSON.parse(request.responseText).result);
            console.log(request.responseText);
            result.innerHTML = JSON.parse(request.responseText).result;
        }
    }