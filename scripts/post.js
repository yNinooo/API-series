//Responsável por cadastrar uma nova série utilizando o método POST
document.getElementById("btnCadastrar").addEventListener("click", (e) => {
    e.preventDefault();

    //endpoint da API (URL)
    const url = "http://localhost:8082/serie"

    //Capturar dados que vem do formulário
    const dadosEnviadosAPI = {
        "nome": document.getElementById("nomeSerie").value,
        "temporadas": document.getElementById("temporadas").value,
        "lancamento": document.getElementById("anoLancamento").value,
        "estudio": document.getElementById("produtora").value,
    }

    const dadosFinais = JSON.stringify(dadosEnviadosAPI)

    console.log(dadosFinais)

    fetch(url, {
        "method": "post",
        "headers": {"Content-Type": "application/json"},
        "body": dadosFinais
    })
    .then(resposta => resposta.json())
    .catch(error => console.log(`Erro ao consumir API no cadastro ${error}`))
    
    window.location.reload();
});