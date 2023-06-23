// chamando os componentes encapsulados

import botaoConclui from "./componentes/concluiTarefa.js";
import BotaoDeleta from "./componentes/deletaTarefas.js";

const criarTarefa = (evento) => {

        //ele previne o comportamento padrão e deixa salvo no console do navegador, ou seja, não teve refresh.
        evento.preventDefault()

        //acessa a ul e o form do html armazenando nas variáveis
        const lista = document.querySelector('[data-list]');
        const input = document.querySelector('[data-form-input]');

        //pega o valor atribuído ao input do form
        const valor = input.value;

        //método que cria elementos e armazena em tarefa
        const tarefa = document.createElement('li');

        //A tarefa/li recebe a classe 'task' através do ClassList e adiciona. 
        tarefa.classList.add('task');
        
        //template de conteúdo que irá ser adicionado ao tarefa/li. 
        const conteudo = `<p class="content">${valor}</p>`;

        //recebe o parágrafo de conteudo 
        tarefa.innerHTML = conteudo;

        //cria um elemento filho da li
        tarefa.appendChild(botaoConclui())
        tarefa.appendChild(BotaoDeleta())
        //cria um filho da ul ou lista/[data-list]
        lista.appendChild(tarefa);

        //aqui ele limpa o input
        input.value = " ";  


    }

    /* Verifica se o input está vazio */
    const verificaVazio = (evento) => {
        evento.preventDefault();

        const input = document.querySelector('[data-form-input]');
        const valor = input.value;
        /* o código abaixo verifica remove os espaços em branco (espaços, tabulações, quebras de linha)  */

        /* const texto = "   Olá, mundo!   ";
        const textoSemEspacos = texto.trim();

        console.log(textoSemEspacos); // "Olá, mundo!"
        */

        const valorComparacao = valor.trim();
    
        if(valorComparacao === ""){
            alert('O campo de texto está vázio! Digite alguma tarefa.')
        } else {
            criarTarefa(evento);
        }
    }

    // responsável por acessar o button do html 
    const novaTarefa = document.querySelector('[data-form-button]');

    //através do click com o método/evento no button, a função criarTarefa
    novaTarefa.addEventListener('click', verificaVazio);


