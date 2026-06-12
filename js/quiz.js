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
pergunta:"Qual é meu maior vício?",
respostas:["Anime","Pizza","Pokémon","Você ❤️"],
correta:"Você ❤️"
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
pergunta:"Qual a data da nossa primeira vez?",
respostas:[
"30 de abril",
"30 de março",
"30 de maio",
"não sei"
],
correta:"30 de abril"
},

{
pergunta:"Que dia foi o nosso primeiro selinho?",
respostas:[
"15 de março",
"14 de março",
"13 de março",
"20 de março"
],
correta:"15 de março"
},


{
pergunta:"Quem foi o primeiro a dizer 'eu te amo'?",
respostas:[
"Eu ❤️",
"Você ❤️",
"Foi ao mesmo tempo ❤️",
"Ninguém ainda 😅"
],
correta:"Eu ❤️"
},
{
pergunta:"Quem faz mais drama?",
respostas:[
"Eu 😅",
"Você 😅",
"Os dois 😂",
"Ninguém 😇"
],
correta:"Você 😅"
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