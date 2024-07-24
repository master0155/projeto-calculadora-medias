const form = document.getElementById('form-atividade')
const imgAprovado = '<img src="./"></img>';
const imgReprovado = '<img src="./"></img>';
const atividades = []
const notas = [];

let linhas = ''
form.addEventListener('submit',function(e){
    e.preventDefault();
    atualizaMediaFinal();

    const inputNomeAtividade = document.getElementById('nome-atividade')
    const inputNotaAtividade = document.getElementById('nota-atividade')

    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += `<td> ${inputNomeAtividade.value}</td>`;
    linha += `<td> ${inputNotaAtividade.value} </td>`;
    linha += `<td> ${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado} </td>`;
    linha += `</tr>`;

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';

});

function atualizaMediaFinal(){
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++){
        somaDasNotas += notas
    }

    const media = somaDasNotas / notas.length;

    console.log(somaDasNotas);
}
