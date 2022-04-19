let quantidadeDeCartas;
let quadroDeCartas = document.querySelector(".cartas");
let pontuacao = document.querySelector(".pontos");

let pontos = 0;
let jogadas = 0;
let segundo = 0;
let time;

pontuacao.innerHTML = pontos;

const cartas = [
    {
        nome: "Amond",
        img: "Amond.jpg"
    },

    {
        nome: "Android14",
        img: "Android14.jpg"
    },

    {
        nome: "Android16",
        img: "Android16.jpg"
    },

    {
        nome: "Android17",
        img: "Android17.png"
    },

    {
        nome: "Android18",
        img: "Android18.jpg"
    },

    {
        nome: "Android19",
        img: "Android19.jpg"
    },

    {
        nome: "Android20",
        img: "Android20.jpg"
    },

    {
        nome: "Bardock",
        img: "Bardock.jpg"
    },

    {
        nome: "Bills",
        img: "Bills.jpg"
    },

    {
        nome: "Bojack",
        img: "Bojack.jpg"
    },

    {
        nome: "Bubbles",
        img: "Bubbles.jpg"
    },

    {
        nome: "Bujin",
        img: "Bujin.jpg"
    },

    {
        nome: "Bulma1",
        img: "Bulma1.jpg"
    },


    {
        nome: "Bulma2",
        img: "Bulma2.jpg"
    },

    {
        nome: "Cell__VersaoFinal",
        img: "Cell__VersaoFinal.jpg"
    },

    {
        nome: "Cell",
        img: "Cell.jpg"
    },

    {
        nome: "Chaoz",
        img: "Chaoz.jpg"
    },

    {
        nome: "Chichi",
        img: "Chichi.jpg"
    },

    {
        nome: "Cold",
        img: "Cold.jpg"
    },

    {
        nome: "Dabura",
        img: "Dabura.jpg"
    },

    {
        nome: "Dodoria",
        img: "Dodoria.jpg"
    },

    {
        nome: "FantasminhaCamarada",
        img: "FantasminhaCamarada.jpg"
    },

    {
        nome: "Fazendeiro",
        img: "Fazendeiro.jpg"
    },

    {
        nome: "Freeza__FormaDois",
        img: "Freeza__FormaDois.jpg"
    },

    {
        nome: "Freeza__FormaTres",
        img: "Freeza__FormaTres.jpg"
    },

    {
        nome: "Freeza__FormaUm_2",
        img: "Freeza__FormaUm_2.jpg"
    },

    {
        nome: "Freeza__FormaUm",
        img: "Freeza__FormaUm.jpg"
    },

    {
        nome: "Freeza",
        img: "Freeza.jpg"
    },

    {
        nome: "FreezaDourado",
        img: "FreezaDourado.jpg"
    },

    {
        nome: "Freeza2",
        img: "Freeza2.jpg"
    },

    {
        nome: "Ginyuu",
        img: "Ginyuu.jpg"
    },

    {
        nome: "Gohan__SuperSaiyajin",
        img: "Gohan__SuperSaiyajin.jpg"
    },

    {
        nome: "Gohan__SuperSaiyajin2",
        img: "Gohan__SuperSaiyajin2.jpg"
    },


    {
        nome: "Gohan1",
        img: "Gohan1.jpg"
    },

    {
        nome: "Gohan2",
        img: "Gohan2.jpg"
    },

    {
        nome: "Gohan3",
        img: "Gohan3.jpg"
    },

    {
        nome: "Gohan4",
        img: "Gohan4.jpg"
    },

    {
        nome: "Gohan5",
        img: "Gohan5.jpg"
    },

    {
        nome: "GohanMitico1",
        img: "GohanMitico1.jpg"
    },

    {
        nome: "GohanMitico2",
        img: "GohanMitico1.jpg"
    },

    {
        nome: "Goku__KaiohKen",
        img: "Goku__Kaiohken.jpg"
    },

    {
        nome: "Goku__sagaSaiyajin",
        img: "Goku__sagaSaiyajin.jpg"
    },

    {
        nome: "Goku__SuperSaiyajin",
        img: "Goku__SuperSaiyajin.jpg"
    },

    {
        nome: "Goku__SuperSaiyajin3_2",
        img: "Goku__SuperSaiyajin3_2.jpg"
    },

    {
        nome: "Goku__SuperSaiyajin3_3",
        img: "Goku__SuperSaiyajin3_3.jpg"
    },

    {
        nome: "Goku__SuperSaiyajin3",
        img: "Goku__SuperSaiyajin3.jpg"
    },

    {
        nome: "Goku",
        img: "Goku.jpg"
    },

    {
        nome: "Goku2",
        img: "Goku2.jpg"
    },

    {
        nome: "Goku3",
        img: "Goku3.jpg"
    },

    {
        nome: "Goku4",
        img: "Goku4.jpg"
    },

    {
        nome: "Goku5",
        img: "Goku5.jpg"
    },

    {
        nome: "GokuNormal",
        img: "GokuNormal.jpg"
    },

    {
        nome: "GokuNormal2",
        img: "GokuNormal2.jpg"
    },

    {
        nome: "Goten",
        img: "Goten.jpg"
    },

    {
        nome: "GotenksDesnutrido",
        img: "GotenksDesnutrido.jpg"
    },

    {
        nome: "Janemba",
        img: "Janemba.jpg"
    },

    {
        nome: "Janemba2",
        img: "Janemba2.jpg"
    },

    {
        nome: "Jiisu",
        img: "Jiisu.jpg"
    },

    {
        nome: "Kaiohshin__Novo",
        img: "Kaiohshin__Novo.jpg"
    },

    {
        nome: "Kaiohshin",
        img: "Kaiohshin.jpg"
    },

    {
        nome: "Kame",
        img: "Kamejpg"
    },

    {
        nome: "KamiSama",
        img: "KamiSama.jpg"
    },

    {
        nome: "Karin",
        img: "Karin.jpg"
    },

    {
        nome: "Kuririn",
        img: "Kuririn.jpg"
    },

    {
        nome: "KuririnEstiloSaiyajin",
        img: "KuririnEstiloSaiyajin.jpg"
    },

    {
        nome: "Kyiu",
        img: "Kyiu.jpg"
    },
    
    {
        nome: "MajinBoo__Gordo",
        img: "MajinBoo__Gordo.jpg"
    },

    {
        nome: "MajinBoo__magrao",
        img: "MajinBoo__magrao.jpg"
    },

    {
        nome: "MajinBoo__Magro",
        img: "MajinBoo__Magro.jpg"
    },

    {
        nome: "MajinBoo__Malhado",
        img: "MajinBoo__Malhado.jpg"
    },

    {
        nome: "MajinBoo__VersaoFinal",
        img: "MajinBoo__VersaoFinal.jpg"
    },

    {
        nome: "MajinBuu__gordo2",
        img: "MajinBuu__gordo2.jpg"
    },

    {
        nome: "MajinVegeta",
        img: "MajinVegeta.jpg"
    },

    {
        nome: "MestreKame",
        img: "MestreKame.jpg"
    },

    {
        nome: "MetaFreeza",
        img: "MetaFreeza.jpg"
    },

    {
        nome: "Mez",
        img: "Mez.jpg"
    },

    {
        nome: "Nappa",
        img: "Nappa.jpg"
    },

    {
        nome: "Neiz",
        img: "MestreKame.jpg"
    },

    {
        nome: "PaiKohan",
        img: "PaiKohan.jpg"
    },

    {
        nome: "Piccolo",
        img: "Piccolo.jpg"
    },

    {
        nome: "Piccolo2",
        img: "Piccolo2.jpg"
    },

    {
        nome: "Piccolo3",
        img: "Piccolo3.jpg"
    },

    {
        nome: "Piccolo4",
        img: "Piccolo4.jpg"
    },

    {
        nome: "PuiPui",
        img: "PuiPui.jpg"
    },

    {
        nome: "Raditz",
        img: "Raditz.jpg"
    },

    {
        nome: "ReiVegeta",
        img: "ReiVegeta.jpg"
    },

    {
        nome: "Saibaman",
        img: "Saibaman.jpg"
    },

    {
        nome: "SenhorKaioh",
        img: "SenhorKaioh.jpg"
    },

    {
        nome: "Shenlong",
        img: "Shenlong.jpg"
    },

    {
        nome: "Spopovich",
        img: "Spopovich.jpg"
    },

    {
        nome: "SuperVegetto",
        img: "SuperVegetto.jpg"
    },

    {
        nome: "SuperVegetto2",
        img: "SuperVegetto2.jpg"
    },

    {
        nome: "Taales",
        img: "Taales.jpg"
    },

    {
        nome: "Tenshinhan",
        img: "Tenshinhan.jpg"
    },

    {
        nome: "Tenshinhan2",
        img: "Tenshinhan2.jpg"
    },

    {
        nome: "Tigre",
        img: "Tigre.jpg"
    },

    {
        nome: "Trunks__SagaCell",
        img: "Trunks__SagaCell.jpg"
    },

    {
        nome: "Trunks",
        img: "Trunks.jpg"
    },

    {
        nome: "TrunksDoFuturo",
        img: "TrunksDoFuturo.jpg"
    },

    {
        nome: "Vegeta__SagaBoo",
        img: "Vegeta__SagaBoo.jpg"
    },

    {
        nome: "Vegeta__sagaSaiyajin",
        img: "Vegeta__sagaSaiyajin.jpg"
    },

    {
        nome: "Vegeta__SuperSaiyajin",
        img: "Vegeta__SuperSaiyajin.jpg"
    },

    {
        nome: "Vegeta__SuperSaiyajin2_2",
        img: "Vegeta__SuperSaiyajin2_2.jpg"
    },

    {
        nome: "Vegeta__SuperSaiyajin2_3",
        img: "Vegeta__SuperSaiyajin2_3.jpg"
    },

    {
        nome: "Vegeta__SuperSaiyajin2",
        img: "Vegeta__SuperSaiyajin2.jpg"
    },

    {
        nome: "Vegeta",
        img: "Vegeta.jpg"
    },

    {
        nome: "Vegeta2",
        img: "Vegeta2.jpg"
    },

    {
        nome: "Vegeta3",
        img: "Vegeta3.jpg"
    },

    {
        nome: "VegetaNormal",
        img: "VegetaNormal.jpg"
    },

    {
        nome: "Vegetto",
        img: "Vegetto.jpg"
    },

    {
        nome: "Vegetto2",
        img: "Vegetto2.jpg"
    },

    {
        nome: "Videl",
        img: "Videl.jpg"
    },

    {
        nome: "Videl2",
        img: "Videl2.jpg"
    },

    {
        nome: "Whis",
        img: "Whis.jpg"
    },

    {
        nome: "Yajirobe",
        img: "Yajirobe.jpg"
    },

    {
        nome: "Yamcha",
        img: "Yamcha.jpg"
    },

    {
        nome: "Yamu",
        img: "Yamu.jpg"
    },

    {
        nome: "Zarbon",
        img: "Zarbon.jpg"
    },

    {
        nome: "Zarbon2",
        img: "Zarbon2.jpg"
    }
];

let cartasSelecionadas = [];
let cartasClicadas = [];
let titleCartasClicadas = [];

function perguntarQuantidadeDeCartas()   {
    while(true) {
        quantidadeDeCartas = parseInt(prompt("Informe a quantidade de cartas que deseja jogar (o número deve ser um valor par e estar dentro do intervalo - [4, 14]):"));

        if(isNaN(quantidadeDeCartas))   {
            alert("O valor informado não é um número.");
        }
        else if(quantidadeDeCartas % 2 !== 0)   {
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

    let largura = document.querySelector(".cartas");

    largura.style.width = definirLargura();

    gerarQuadroDeCartas();
}

function definirLargura()   {
    let controlador, widTH = 500, acrescimo = 200;

    if(quantidadeDeCartas === 4) controlador = 0;
    else if(quantidadeDeCartas === 6)    controlador = 1;
    else if(quantidadeDeCartas === 8)    controlador = 2;
    else if(quantidadeDeCartas === 10)    controlador = 3;
    else if(quantidadeDeCartas === 12)    controlador = 4;
    else if(quantidadeDeCartas === 14)    controlador = 5;

    let widthFinal = widTH + (acrescimo * controlador);

    return `${widthFinal}px`;
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
    if(jogadas === 0) timer();

    if(cartasClicadas.length < 2 && titleCartasClicadas.length < 2) {
        carta.removeAttribute("onclick");
        carta.classList.toggle("virarCarta");

        cartasClicadas.push(carta);
        titleCartasClicadas.push(carta.title);
    } 
    else return;

    jogadas++;

    setTimeout(() => {
        if(cartasClicadas.length === 2)  {
            let cartaUm = cartasClicadas[0], cartaDois = cartasClicadas[1];
            let cartaUmTitle = titleCartasClicadas[0], cartaDoisTitle = titleCartasClicadas[1];
    
            if(cartaUmTitle === cartaDoisTitle)    {
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
    segundo = 0;
    document.querySelector(".segundo").innerHTML = 0;
    perguntarQuantidadeDeCartas()
    // window.location.reload();
}

function verificarFimDeJogo()   {
    if(pontos === quantidadeDeCartas / 2)    {
        clearInterval(time);
        
        alert(`Parabéns! Você ganhou com ${jogadas} jogadas.`);

        jogadas = 0;
    }
}

function timer()    {
    time = setInterval(function () {
        segundo++;
        document.querySelector(".segundo").innerHTML = segundo;
    }, 1000);
}

perguntarQuantidadeDeCartas();