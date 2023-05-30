fetch('https://brasilapi.com.br/api/cnpj/v1/{89131189000165}?',{
    method: 'GET'
})
.then(response => response.json())
.then(data => {
    data = window.document.getElementById('res')
    console.log(window.location.href)
})
.catch(error => {
    console.error(error);
});
