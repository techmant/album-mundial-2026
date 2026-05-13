const abrirSobre = document.getElementById("abrirSobre");
const cartasContainer = document.getElementById("cartasContainer");

const audioSobre = document.getElementById("audioSobre");

const cromos = [

{
 id:1,
 nombre:"Valencia",
 imagen:"img/ecuador/valencia.png"
},

{
 id:2,
 nombre:"Caicedo",
 imagen:"img/ecuador/caicedo.png"
},

{
 id:3,
 nombre:"Plata",
 imagen:"img/ecuador/plata.png"
},

{
 id:4,
 nombre:"Hincapie",
 imagen:"img/ecuador/hincapie.png"
}

];

abrirSobre.addEventListener("click", ()=>{

    audioSobre.play();

    cartasContainer.innerHTML = "";

    let seleccionadas = [];

    while(seleccionadas.length < 3){

        let random = cromos[
            Math.floor(Math.random()*cromos.length)
        ];

        if(!seleccionadas.includes(random)){
            seleccionadas.push(random);
        }

    }

    seleccionadas.forEach((cromo,index)=>{

        let carta = document.createElement("div");
        carta.classList.add("carta");

        carta.innerHTML = `
            <img src="${cromo.imagen}">
        `;

        carta.addEventListener("click", ()=>{

            let slot = document.getElementById(`slot${index+1}`);

            slot.innerHTML = `
                <img src="${cromo.imagen}">
            `;

        });

        cartasContainer.appendChild(carta);

    });

});
