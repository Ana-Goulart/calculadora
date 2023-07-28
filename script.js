 //função para inserir o numero na tela 
        function insert(num){ //inserir o numero passando pelo parametro nun
            var numero = document.getElementById("resultado").innerHTML//criou a variavel numero que vai armazenar o valor do id resultado definido nos botões de cada número
            document.getElementById('resultado').innerHTML = numero + num
            // esta linha acima pega a variavel numero que foi criada e vai adicionando as string por exemplo quando o usuario clicar em um numero e depois clicar em outro ele vai concatenar esses numero e junta-los, por exeplo o usuario clicou no numero 1 depois ele cliclou no numero 3 ai vai concatenar e ficar so uma string "13"
        }
        function clean(){//função para limpar a tela quando for chamada
            document.getElementById('resultado').innerHTML = " "
        }
        function back(){ //função para limpar a ultima string sempre que for chamada
            var resultado = document.getElementById('resultado').innerHTML
            document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
            //esta linha de cima usa o substring e recebe 2 parametros
        }
        function calcular(){//função que calcula os numeros
            var resultado = document.getElementById('resultado').innerHTML
            if(resultado){//pegando as strings
                document.getElementById('resultado').innerHTML = eval(resultado)
                //o eval pega a string e se for alguma expresão ele realiza e retorna na variavel criada la em cima este resultado
            }else{//se caso estiver vazio retorn vazio em resultado
                document.getElementById('resultado').innerHTML = "Vazio"
            }
        }
