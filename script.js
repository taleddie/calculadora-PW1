let resultado = document.querySelector(".tela"); //seleciona o documento tela

    function bloquearTecladoMobile() { //função para não ativar o teclado quando for mobile ou tablet

        const isTouch = window.matchMedia("(pointer: coarse)").matches; //verifica uma condição que está no CSS, no JS. no caso, se é touch

        if ( isTouch ) {  //se a largura do navegador for menor que 1025px
            //mobile e tablet
            resultado.setAttribute("readonly", true); //ativa o readonly 
        } else {
            // desktop
            resultado.removeAttribute("readonly"); //se nao, ele remove o readonly
        }
    }

    bloquearTecladoMobile(); //chama a função quando a página carrega
    window.addEventListener("resize", bloquearTecladoMobile); 

    function add(num) { //funcao de adicionar numeros e operadores
        if (resultado.value === "Erro" || resultado.value === "0") {
            resultado.value = ""
        }
    
        let input = document.querySelector(".tela"); // ai n sei fazer porcentagem aq nau, vo arrancar essebotao fora KKKKKKKKKKKKKKKKKKK
        let Posicao = input.selectionStart;                // o q c quer fazer? fazer o botao funcionar direito, a porcentagem certinha:( to vendo aqui parece muitp dificil fazer esse ngc de porcetagem entao
        let nAnterior = input.value[Posicao - 1];
        

        if (num === "()" && nAnterior && (/[0-9]/.test(nAnterior) || nAnterior === ")")) {
            num = "*" + num;
        } 

        input.value = input.value.slice(0, Posicao) + num + input.value.slice(Posicao);
        let nvPosicao = (num === "()") ? Posicao + 1 : (num === "*()") ? Posicao + 2 : Posicao + num.length; //exceção para quando digitar '()' o cursor ir pra dentro do parenteses

        input.selectionStart = input.selectionEnd = nvPosicao;
        input.focus();
    }
        

    function calcular() { //funcao do botao =
        try {
            let conta = resultado.value; //pega o que ta na tela

            let resultadoFinal = eval(conta); //calcula
    
            resultadoFinal = parseFloat(resultadoFinal.toFixed(6)); //arredonda casas decimais

            document.querySelector(".contaAnterior").textContent = conta + " ="; 
            
            resultado.value = resultadoFinal; //joga na tela
        } catch {
            resultado.value = "Erro"; //se der erro
        } 
    }

    function limpar() { //funcao do botao AC
        resultado.value = ""; //limpa a tela
        document.querySelector(".contaAnterior").textContent = ""; //limpa a conta anterior

    }

    function apagar() { //funcao do botao C
        let texto = resultado.value; //pega o que ta na tela
        resultado.value = texto.slice(0, -1); //apaga o ultimo caractere
    }


    document.addEventListener("keydown", function(event) { //funcao para habilitar o teclado
        const tecla = event.key; //pega a tecla pressionada

        //se for enter, calcula
        if (tecla === "Enter") {
            calcular();
            return;
        }

        //se for backspace, apaga
        if (tecla === "Backspace") {
            apagar();  //praq o shift? pra poder usar os operadores fora do teclado numerico
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
    //to usando o googlis p pesquisar, gpt so p tirar duvida :((( deixa essa parte como comentario final do codigo K K K K 
    
    });

