const perguntas = [

{
pergunta:"Qual minha comida favorita?",
respostas:["Pizza","Hambúrguer","Lasanha","Sushi"],
correta:"Pizza"
},

{
pergunta:"Se eu não fosse garoto de programa com o que eu iria fazer faculdade?",
respostas:["Direito","Medicina Veterinária","Psicologia","Engenharia"],
correta:"Medicina Veterinária"
},

{
pergunta:"Qual meu personagem favorito de One Piece?",
respostas:["Luffy","Ace","Zoro","Sanji"],
correta:"Zoro"
},
{
pergunta:"Se eu pudesse morar em qualquer lugar, onde seria?",
respostas:[
"Praia",
"Cidade Grande",
"Roça",
"Montanha"
],
correta:"Roça"
},

{
pergunta:"Qual álbum venceu o Grammy de Álbum do Ano em 2010?",
respostas:[
"Red",
"Fearless",
"Speak Now",
"1989"
],
correta:"Fearless"
},

{
pergunta:"Qual é o nome dos fãs da Taylor Swift?",
respostas:[
"Swifties",
"Taylorlismo",
"Eras",
"Taylor Army"
],
correta:"Taylorlismo"
},

{
pergunta:"Qual meu anime favorito?",
respostas:[
"Naruto",
"Dragon Ball",
"Crônicas de um Aristocrata",
"One Piece"
],
correta:"Crônicas de um Aristocrata"
},

{
pergunta:"O que eu faço quando estou sozinho?",
respostas:[
"Durmo",
"Jogo",
"Vou cagar",
"Vejo anime"
],
correta:"Vou cagar"
},

{
pergunta:"Qual meu Pokémon favorito?",
respostas:[
"Lucario",
"Pikachu",
"Charizard",
"Gengar"
],
correta:"Lucario"
},
{
pergunta:"Qual inicial Pokémon eu normalmente escolheria?",
respostas:["Tipo Água","Tipo Fogo","Tipo Planta","Aleatório"],
correta:"Tipo Água"
},


];

let atual = 0;

const pergunta = document.getElementById("pergunta");
const respostas = document.getElementById("respostas");
const contador = document.getElementById("contador");
const barra = document.getElementById("barra");

function carregar(){

    contador.innerText =
    `Pergunta ${atual+1} de ${perguntas.length}`;

    barra.style.width =
    ((atual+1)/perguntas.length)*100 + "%";

    pergunta.innerText =
    perguntas[atual].pergunta;

    respostas.innerHTML = "";

    perguntas[atual].respostas.forEach(resp=>{

        const btn =
        document.createElement("button");

        btn.innerText = resp;

        btn.onclick = ()=>{

            if(resp === perguntas[atual].correta){

                atual++;

                if(atual >= perguntas.length){

                    window.location.href =
                    "final.html";

                }else{

                    carregar();

                }

            }else{

                alert("Errou 😝");

            }

        };

        respostas.appendChild(btn);

    });

}

carregar();