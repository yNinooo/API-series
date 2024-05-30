//Requisiçãp dp tipo GET para retornar os dados da API
function getSeries() {
    const url = "http://localhost:8082/serie"

    fetch(url, {
        "method": "get",
        "headers": {"Content-Type": "application/json"}
    })
    .then(resposta => resposta.json())
    .then(resposta => {
            
            resposta.forEach(series => {
        
                const tr = document.createElement("tr");
                const div = document.createElement("div");
                const listSeries = document.getElementById("listaSeries")

                const tdNomeSerie = document.createElement("td");
                tdNomeSerie.textContent = series.nome;

                const tdNumTemp = document.createElement("td");
                tdNumTemp.textContent = series.temporadas;

                const tdLancamento = document.createElement("td");
                tdLancamento.textContent = series.lancamento;

                const tdEstudio = document.createElement("td");
                tdEstudio.textContent = series.estudio;


                const tdEdit = document.createElement("img");
                tdEdit.src = "./assets/icons/pencil.svg";

                tdEdit.addEventListener("click", () => {
                    //lógica para atualizar 
                    const id = series.id
                })

                const tdDelete = document.createElement("img");
                tdDelete.src = "./assets/icons/trash.svg";

                tdDelete.addEventListener("click", () => {
                    //lógica para deletar 
                    const id = series.id
                    fetch(`http://localhost:8082/serie/${id}`, {
                        "method": "delete",
                        "headers": {"Content-Type": "application/json"}
                    })
                    .then(resposta => resposta.json())
                })


                tr.appendChild(tdNomeSerie);
                tr.appendChild(tdNumTemp);
                tr.appendChild(tdLancamento);
                tr.appendChild(tdEstudio);
                tr.appendChild(div)
                div.appendChild(tdEdit);
                div.appendChild(tdDelete);

                listSeries.appendChild(tr);
            });
        })
    .catch(error => console.log(`Erro ao consumir API no cadastro ${error}`))
}

getSeries();