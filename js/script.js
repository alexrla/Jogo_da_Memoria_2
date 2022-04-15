let quantidadeDeCartas;
let quadroDeCartas = document.querySelector(".cartas");
let pontuacao= document.querySelector(".pontos");
let pontos = 0;
let jogadas = 0;
let segundo = 0;
let time;

pontuacao.innerHTML = pontos;

const cartas = [
    {
        nome: "Android16",
        id: 1,
        img: "Android16.jpg"
    },

    {
        nome: "Android17",
        id: 2,
        img: "Android17.png"
    },

    {
        nome: "Android18",
        id: 3,
        img: "Android18.jpg"
    },

    {
        nome: "Android19",
        id: 4,
        img: "Android19.jpg"
    },

    {
        nome: "Android20",
        id: 5,
        img: "Android20.jpg"
    },

    {
        nome: "Bills",
        id: 6,
        img: "Bills.jpg"
    },

    {
        nome: "Bulma1",
        id: 7,
        img: "Bulma1.jpg"
    },


    {
        nome: "Bulma2",
        id: 8,
        img: "Bulma2.jpg"
    },

    {
        nome: "Cell",
        id: 9,
        img: "Cell.jpg"
    },

    {
        nome: "Cell__VersaoFinal",
        id: 10,
        img: "Cell__VersaoFinal.jpg"
    },


    {
        nome: "Chichi",
        id: 11,
        img: "Chichi.jpg"
    },


    {
        nome: "Dabura",
        id: 12,
        img: "Dabura.jpg"
    },

    {
        nome: "Freeza",
        id: 13,
        img: "Freeza.jpg"
    },

    {
        nome: "Gohan__SuperSaiyajin",
        id: 14,
        img: "Gohan__SuperSaiyajin.jpg"
    },

    {
        nome: "Gohan__SuperSaiyajin2",
        id: 15,
        img: "Gohan__SuperSaiyajin2.jpg"
    },


    {
        nome: "Gohan1",
        id: 16,
        img: "Gohan1.jpg"
    },

    {
        nome: "Gohan2",
        id: 17,
        img: "Gohan2.jpg"
    },

    {
        nome: "Gohan3",
        id: 18,
        img: "Gohan3.jpg"
    },


    {
        nome: "GohanMitico1",
        id: 19,
        img: "GohanMitico1.jpg"
    },

    {
        nome: "GohanMitico2",
        id: 20,
        img: "GohanMitico1.jpg"
    },

    {
        nome: "Goku",
        id: 21,
        img: "Goku.jpg"
    },

    {
        nome: "Goku__SuperSaiyajin3",
        id: 22,
        img: "Goku__SuperSaiyajin3.jpg"
    },


    {
        nome: "Goten",
        id: 23,
        img: "Goten.jpg"
    },

    {
        nome: "GotenksDesnutrido",
        id: 24,
        img: "GotenksDesnutrido.jpg"
    },

    {
        nome: "Kuririn",
        id: 25,
        img: "Kuririn.jpg"
    },

    {
        nome: "MajinBoo__Gordo",
        id: 26,
        img: "MajinBoo__Gordo.jpg"
    },

    {
        nome: "MajinVegeta",
        id: 27,
        img: "MajinVegeta.jpg"
    },

    {
        nome: "Nappa",
        id: 28,
        img: "Nappa.jpg"
    },

    {
        nome: "Piccolo",
        id: 29,
        img: "Piccolo.jpg"
    },


    {
        nome: "Raditz",
        id: 30,
        img: "Raditz.jpg"
    },

    {
        nome: "Spopovich",
        id: 31,
        img: "Spopovich.jpg"
    },

    {
        nome: "SuperVegetto",
        id: 32,
        img: "SuperVegetto.jpg"
    },

    {
        nome: "Tenshinhan",
        id: 33,
        img: "Tenshinhan.jpg"
    },

    {
        nome: "TrunksDoFuturo",
        id: 34,
        img: "TrunksDoFuturo.jpg"
    },

    {
        nome: "Vegeta__SagaBoo",
        id: 35,
        img: "Vegeta__SagaBoo.jpg"
    },

    {
        nome: "Vegeta__SuperSaiyajin",
        id: 36,
        img: "Vegeta__SuperSaiyajin.jpg"
    },

    {
        nome: "Vegetto",
        id: 37,
        img: "Vegetto.jpg"
    },

    {
        nome: "Vegetto2",
        id: 38,
        img: "Vegetto2.jpg"
    },

    {
        nome: "Videl",
        id: 39,
        img: "Videl.jpg"
    },

    {
        nome: "Videl2",
        id: 40,
        img: "Videl2.jpg"
    },

    {
        nome: "Whis",
        id: 41,
        img: "Whis.jpg"
    },

    {
        nome: "Yamcha",
        id: 42,
        img: "Yamcha.jpg"
    }
];

let cartasSelecionadas = [];
let cartasClicadas = [];
let titleCartasClicadas = [];

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

    gerarQuadroDeCartas();
}

function gerarQuadroDeCartas()  {
    cartas.sort(()  =>  {
        return Math.random() - 0.5;
    });

    for(let i = 0; i < quantidadeDeCartas / 2; i++) {
        cartasSelecionadas.push(cartas[i]);
        cartasSelecionadas.push(cartas[i]);
    }

    cartasSelecionadas.sort(()  =>  {
        return Math.random() - 0.5;
    });

    renderizarQuadroDeCartas();
}

function renderizarQuadroDeCartas() {
    for(let i = 0; i < cartasSelecionadas.length; i++)  {

        let carta = `
                        <li title="${cartasSelecionadas[i].nome}"  class="carta" onclick="exibirCarta(this)">
                            <div class="front-face face">
                                <img src="img/DragonBall.jpg">
                            </div>

                            <div class="back-face face">
                                <img  src="img/${cartasSelecionadas[i].img}">
                            </div>
                        </li>
                    `;
        
        quadroDeCartas.innerHTML += carta;
    }
}

function exibirCarta(carta)  {
    carta.removeAttribute("onclick");
    jogadas++;

    carta.classList.toggle("virarCarta");
    cartasClicadas.push(carta);
    titleCartasClicadas.push(carta.title);

    // if(jogadas > 0) timer();

    setTimeout(() => {
        if(cartasClicadas.length == 2)  {
            let cartaUm = cartasClicadas[0], cartaDois = cartasClicadas[1];
            let cartaUmTitle = titleCartasClicadas[0], cartaDoisTitle = titleCartasClicadas[1];
    
            if(cartaUmTitle == cartaDoisTitle)    {
                pontos++;
                pontuacao.innerHTML = pontos;
            }
            else    {
                cartaUm.classList.toggle("virarCarta");
                cartaUm.setAttribute("onclick", "exibirCarta(this)");

                cartaDois.classList.toggle("virarCarta");
                cartaDois.setAttribute("onclick", "exibirCarta(this)");
            }

            cartasClicadas = [];
            titleCartasClicadas = [];

            verificarFimDeJogo();
        }
    }, 1500);
}

function resetarJogo()  {
    quadroDeCartas.innerHTML = "";
    pontuacao.innerHTML = 0;
    pontos = 0;
    cartasSelecionadas = [];
    cartasClicadas = [];
    titleCartasClicadas = []
    perguntarQuantidadeDeCartas()
    // window.location.reload();
}

function verificarFimDeJogo()   {
    if(pontos == quantidadeDeCartas / 2)    {
        // clearInterval(time);

        alert(`Parabéns! Você ganhou com ${jogadas} jogadas.`);

        jogadas = 0;
    }
}

// function timer()    {
//     time = setInterval(function () {
//         segundo++;
//         document.querySelector(".segundo").innerHTML = segundo;
//     }, 1000);
// }

perguntarQuantidadeDeCartas();