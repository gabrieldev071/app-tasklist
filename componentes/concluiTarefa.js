    //criando mais um componente 
    const botaoConclui = () => {
        const botaoFinalizado = document.createElement('button');

        botaoFinalizado.classList.add('check-button');

        //responsável por atribuir o texto ao botão criado.
        botaoFinalizado.innerText = 'Concluir';

        botaoFinalizado.addEventListener('click', concluirTarefa)

        return botaoFinalizado
    }

    const concluirTarefa = (evento) => {
        //qual elemento que eu cliquei? Você sabe através do objeto evento como parâmetro

        //ele descobre qual o alvo do evento através do target
        const botaoConclui = evento.target;

        //ele sobe um nó no elemento, ou seja, sobre um item, ou para o PAI do elemento e addiona a classe
        const tarefaCompleta = botaoConclui.parentElement;
        
        // o método toggle vai executar a classe done ao clicar o botão e retorna true ou false
        tarefaCompleta.classList.toggle('done');
    }

    // exportando o botaoConclui
    export default botaoConclui