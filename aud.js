const songs=[
    {
        id:"1",
        name:"Maharani",
        artist:"karun",
        img: "images/maharani.jpeg",
        genre:"Rock",
        source:"songs/maharani.mp3.mp3",
    },
    {
        id:"2",
        name:"Palpita",
        artist:"Diljit",
        img: "images/papita.jpeg",
        genre:"Pop",
        source:"songs/Palpita.mp3.mp3",
    },
    {
        id:"3",
        name:"Chann Sitare",
        artist:"Ammy Virk",
        img: "images/ammy.jpeg",
        genre:"Pop",
        source:"songs/chann.mp3.mp3",
    },
    {
        id:"4",
        name:"Hass",
        artist:"Diljit",
        img: "images/diljit.jpeg",
        genre:"Hip Hop",
        source:"songs/hass.mp3.mp3",
    },
    {
        id:"5",
        name:"Khabbi Seat",
        artist:"Ammy Virk",
        img: "images/ammy.jpeg",
        genre:"Hip Hop",
        source:"songs/khabbi.mp3.mp3",
    },
    {
        id:"6",
        name:"Koka",
        artist:"Karan Aujila",
        img: "images/karan.jpg",
        genre:"Pop",
        source:"songs/koka.mp3.mp3",
    },
    {
        id:"7",
        name:"Million",
        artist:"Karan Aujila",
        img: "images/karan.jpg",
        genre:"Rock",
        source:"songs/million.mp3.mp3",
    },
    {
        id:"8",
        name:"Wang Da Naap",
        artist:"Diljit",
        img: "images/ammy.jpeg",
        genre:"Pop",
        source:"songs/wang.mp3.mp3",
    }
];

//initial loading
changeImage(songs[0]);

// toggle Switch

const toggle = document.querySelector(".checkbox");
const card=document.querySelectorAll(".bck");
const text=document.querySelector("#head");
toggle.addEventListener('click',toggleTheme);

function toggleTheme(){
    if(toggle.checked==true){
        document.querySelector("body").setAttribute("style","background-color:rgb(37, 36, 36);color:white");
        for(let el of card)el.setAttribute("style","background-color:#021c32");
        text.textContent="Light";
    }else{
        document.querySelector("body").setAttribute("style","background-color:white");
        for(let el of card)el.setAttribute("style","background-color:#2196F3");
        text.textContent="Dark";
    }
}

// previous buttons
const nxt = document.querySelector("#next");
nxt.textContent="=>";
const prv = document.querySelector("#prev");
prv.textContent="<=";

// filter functionlity

const hip=document.getElementById("filter");
const filtered=document.getElementById("son");
if(hip.value==="All"){
    filtered.innerHTML="";
    for(let el of songs){
        const sng = document.createElement("div");
        sng.textContent=el.name;
        sng.className="new";
        filtered.append(sng);
    }
}
playSongs();
hip.addEventListener('click',()=>{
    if(hip.value==="All"){
        filtered.innerHTML="";
        for(let el of songs){
            const sng = document.createElement("div");
            sng.textContent=el.name;
            sng.className="new";
            filtered.append(sng);
        }
    }
    if(hip.value==="Pop"){
        filtered.innerHTML="";
        for(let el of songs){
            if(el.genre==="Pop"){
            const sng = document.createElement("div");
            sng.textContent=el.name;
            sng.className="new";
            filtered.append(sng);
            }
        }
    }
    if(hip.value==="Rock"){
        filtered.innerHTML="";
        for(let el of songs){
            if(el.genre==="Rock"){
            const sng = document.createElement("div");
            sng.textContent=el.name;
            sng.className="new";
            filtered.append(sng);
            }
        }
    }
    if(hip.value==="Hip Hop"){
        filtered.innerHTML="";
        for(let el of songs){
            if(el.genre==="Hip Hop"){
            const sng = document.createElement("div");
            sng.textContent=el.name;
            sng.className="new";
            filtered.append(sng);
            }
        }
    }
    playSongs();
})

// Play songs functionality
function playSongs(){
    const pick=document.querySelectorAll(".new")
    
    for(let i of pick){    
        i.addEventListener('click',()=>{  
            var elem=songs.find(item => item.name===i.textContent);
            changeImage(elem);
        })
    }
}
function changeImage(elem){
    const img=document.getElementById("image");
    const sng=document.getElementById("music");
         img.innerHTML=""; 
            const im = document.createElement("img");
                im.src=elem.img;
                sng.src=elem.source;
                sng.play();
                sng.name=elem.name;
                im.className="created";
            const nam=document.createElement("h2");
                nam.textContent=elem.name;
                nam.className="song-name";
            const art=document.createElement("h4");
                art.textContent=elem.artist;
                art.className="artist-name";
                img.append(im,nam,art);
}

// arrow buttons functionality
const pre=document.getElementById("prev");
const nex=document.getElementById("next");

nex.addEventListener('click',()=>{
    const seng=document.getElementById("music");
    var elemen=songs.findIndex(item => item.name===seng.name);
    elemen++;
    if(elemen>=songs.length)elemen=0;
    seng.src=songs[elemen].source;
    changeImage(songs[elemen]);
})
pre.addEventListener('click',()=>{
    const seng=document.getElementById("music");
    var elemen=songs.findIndex(item => item.name===seng.name);
    elemen--;
    if(elemen<0)elemen=songs.length-1;
    seng.src=songs[elemen].source;
    changeImage(songs[elemen]);
})

//Create Playlist

const currentPl = document.getElementById("currentPl");
const createPl = document.getElementById("create");
const butto = document.getElementById("button");
const allPl = document.getElementById("allPl");

let currentPlaylist = null;

butto.addEventListener('click', () => {
    const newPlaylist = document.createElement("div");
    newPlaylist.className = "playL";
    newPlaylist.textContent = createPl.value;

    // Create a unique Set for each playlist
    newPlaylist.value = new Set();

    createPl.value = "";

    newPlaylist.addEventListener('click', () => {
        // Set the current playlist when a playlist is clicked
        currentPlaylist = newPlaylist.value;
        displayArray(Array.from(currentPlaylist), currentPl);
    });

    allPl.append(newPlaylist);
});

function addToPlaylist() {
    const add = document.getElementById("add");
    add.addEventListener('click', () => {
        if (!currentPlaylist) {
            console.error("No playlist selected");
            return;
        }

        const songElement = document.getElementById("music");
        const song = songs.find(item => item.name === songElement.name);

        // Add the song to the specific playlist
        currentPlaylist.add(song);
        //console.log("playlist", currentPlaylist);

        // Display the updated playlist
        displayArray(Array.from(currentPlaylist), currentPl);
        const plst=document.querySelectorAll(".newly");
        for (let elemn of plst){
        elemn.addEventListener('click',()=>{
            let lala=songs.find(item => item.name===elemn.textContent);
        changeImage(lala); });
        } 
    });
}
    

function displayArray(arr, currenPl) {
    // Clear the current playlist before displaying the updated list
    currenPl.innerHTML = "";

    for (let element of arr) {
        const ads = document.createElement("div");
        ads.className = "newly";
        ads.textContent = element.name;
        currenPl.append(ads);
    }
   
}

// Call addToPlaylist to set up the event listener
addToPlaylist();