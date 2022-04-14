let quantidadeDeCartas;

function perguntarQuantidadeDeCartas()   {
    while(true) {
        // quantidadeDeCartas = parseInt(prompt("Informe a quantidade de cartas que deseja jogar (o número deve ser um valor par e estar dentro do intervalo - [4, 14]):"));
        quantidadeDeCartas = parseInt(4);

        if(isNaN(quantidadeDeCartas))   {
            alert("O valor informado não é um número.");
        }
        else if(quantidadeDeCartas % 2 != 0)   {
            alert("O valor informado não é par.")

            if(quantidadeDeCartas < 4)   {
                alert("E o valor informado é menor do que 4.")
                continue;
            }

            else if(quantidadeDeCartas > 14)   {
                alert("E o valor informado é maior que 14.");
                continue;
            }
        }
        else if(quantidadeDeCartas < 4)   {
            alert("O valor informado é menor do que 4.")
        }
        else if(quantidadeDeCartas > 14)   {
            alert("O valor informado é maior que 14.");
        }
        else    {
            break;
        }
    }
}

perguntarQuantidadeDeCartas();