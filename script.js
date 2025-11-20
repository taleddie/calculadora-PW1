let resultado = document.querySelector(".telaDesktop", ".telaMobile")); //seleciona o documento tela

function add(num) { //funcao de adicionar numeros e operadores
    if (resultado.value === "0"){ resultado.value = "";} //se o resultado for 0, limpa a tela
    resultado.value += num; //adiciona o numero ou o operador na tela
}

function limpar() { //funcao do botao AC
    resultado.value = ""; //limpa a tela
}

function calcular() { //funcao do botao =
    try {
        let conta = resultado.value; //pega o que ta na tela
        let resultadoFinal = eval(conta); //calcula
 
        resultadoFinal = parseFloat(resultadoFinal.toFixed(6)); //arredonda casas decimais

        resultado.value = resultadoFinal; //joga na tela
    } catch {
        resultado.value = "Erro"; //se der erro
    }
}

function apagar() { //funcao do botao C
    let texto = resultado.value; //pega o que ta na tela
    resultado.value = texto.slice(0, -1); //apaga o ultimo caractere
}

function add (n) {
    let input = document.querySelector(".tela");
    let Posicao = input.selectionStart;

    input.value = input.value.slice(0, Posicao) + n + input.value.slice(Posicao);
    let nvPosicao = (n === "()") ? Posicao + 1 : Posicao + n.length; //exceção para quando digitar '()' o cursor ir pra dentro do parenteses

    input.selectionStart = input.selectionEnd = nvPosicao;
    input.focus();
    
}

const desktop = window.matchMedia("(min-width: 768px)").matches;

if (window.matchMedia("(pointer: fine)").matches) {

    document.addEventListener("keydown", function(event) { //funcao para habilitar o teclado
    const tecla = event.key; //pega a tecla pressionada

    //se for enter, calcula
    if (tecla === "Enter") {
        calcular();
        return;
    }

    //se for backspace, apaga
    if (tecla === "Backspace") {
        apagar();  //praq o shift?
    }

    //libera setas e shift 
    if (["Shift", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(tecla)) {
        return;
    }

    //libera numeros e operadores
    if ("1234567890/*-+.()".includes(tecla)) {
        return;
    }

    //se nao for nada disso, bloqueia
    event.preventDefault(); //responsavel por bloquear o resto

//espero q o prof nao ache q eu soquei tudo no gpt se nao eu vo me matar eu to usando o gpt pra ver pq ta dando erro quando eu coloco os parenteses pdcreee
//to usando o googlis googlis p pesquisar, gpt so p tirar duvida :((( deixa essa parte como comentario final do codigo K K K K 
   
})

}


