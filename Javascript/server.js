function buscaCNPJ() {
    var cnpj = document.getElementById('cnpj').value;
    var res = document.getElementById('res');
    fetch('https://brasilapi.com.br/api/cnpj/v1/'+cnpj+'?', {
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
        // Criar uma representação em formato de string dos dados
        var dataString = '';
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                dataString += key + ': ' + JSON.stringify(data[key]) + '<br>';
            }
        }
        // Atribuir a string ao elemento HTML
        res.innerHTML = dataString;
    })
    .catch(error => {
        console.error(error);
    });
}

