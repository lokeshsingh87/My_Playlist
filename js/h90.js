// initializing
let songIndex = 0;
let info=document.getElementsByClassName('info');
let songname=document.getElementById('name');
let playbtn=document.getElementById('playbtn');
let shufflebtn=document.getElementById('shufflebtn')
let musicBar = document.getElementById("musicBar");
let volumeBar = document.getElementById("volumeBar");
let playpause = document.getElementById("playpause");
let backward = document.getElementById("backward");
let forward = document.getElementById("forward");
let audioElement = new Audio ('/90/meresapnokirani.mp3');
let song = [
  {
    songName: "Mere Sapno Ki Rani",
    filePath: "/90/meresapnokirani.mp3",
    coverPath: "/Img/Aathma.jpeg",
  },
  {
    songName: "Jane Kahan Mera Jigar Gya Ji",
    filePath: "/90/jigargyaji.mp3",
    coverPath: "/Img/Harekrishna.jpeg",
  },
  {
    songName: "Pyaar Hua Ikraar Hua",
    filePath: "/90/pyarhuaikrar.mp3",
    coverPath: "/Img/Heram.jpeg",
  },
  {
    songName: "Chura Liya Hai Tumne",
    filePath: "/90/churaliyahai.mp3",
    coverPath: "/Img/Kishori.jpeg",
  },
  {
    songName: "Ek Pyaar Ka Nagma",
    filePath: "/90/pyarkanagma.mp3",
    coverPath: "/Img/Madhu.jpeg",
  },
  {
    songName: "In Aankhon Ki Masti Mein",
    filePath: "/90/aankhonkimasti.mp3",
    coverPath: "/Img/namonamo.jpeg",
  },
  {
    songName: "Dekha Ek Khwab",
    filePath: "/90/dekhaekkhwab.mp3",
    coverPath: "/Img/Narayan.jpeg",
  },
  {
    songName: "Udein Jab Jab Zulfein Teri",
    filePath: "/90/udeinjabjab.mp3",
    coverPath: "/Img/Radharani.jpeg",
  },
  { songName: "Beqarar Karke Hume", filePath: "/90/bekararkarke.mp3", coverPath: "/Img/Ramsiyaram.jpeg" },
  {
    songName: "Ek Pardeshi Mera Dil Le Gya ",
    filePath: "/90/ekpardeshi.mp3",
    coverPath: "/Img/Hanuman.jpeg",
  },
  {
    songName: "Ajib Dastan Hai Ye",
    filePath: "/90/ajibdastan.mp3",
    coverPath: "/Img/Sawlisurat.jpeg",
  },
  {
    songName: "Likhe Jo Khat Tujhe",
    filePath: "/90/khat.mp3",
    coverPath: "/Img/Sawlisurat.jpeg",
  },
  {
    songName: "Tu Tu Hai Wahi",
    filePath: "/90/tutuhai.mp3",
    coverPath: "/Img/Sawlisurat.jpeg",
  },
  {
    songName: "Ye Ratein Ye Mausam",
    filePath: "/90/yeraatein.mp3",
    coverPath: "/Img/Sawlisurat.jpeg",
  },
  {
    songName: "Neele Neele Ambar Pe",
    filePath: "/90/neeleneele.mp3",
    coverPath: "/Img/Sawlisurat.jpeg",
  },
  {
    songName: "Tum Mile",
    filePath: "/90/tummile.mp3",
    coverPath: "/Img/Sawlisurat.jpeg",
  },
  {
    songName: "Sagar Jaisi Aankhon Wali",
    filePath: "/90/sagarjaisi.mp3",
    coverPath: "/Img/Sawlisurat.jpeg",
  },
  {
    songName: "Mere Saamnewali Khidki Pe",
    filePath: "/90/meresamnewali.mp3",
    coverPath: "/Img/Sawlisurat.jpeg",
  },
  {
    songName: "Gulaabi Aankhein",
    filePath: "/90/gulabiaankhein.mp3",
    coverPath: "/Img/Sawlisurat.jpeg",
  },
  {
    songName: "Panna Ki Tamannah",
    filePath: "/90/pannakitamana.mp3",
    coverPath: "/Img/Sawlisurat.jpeg",
  },
  {
    songName: "Ye Dil Tum Bin",
    filePath: "/90/yediltumbin.mp3",
    coverPath: "/Img/Sawlisurat.jpeg",
  },
];
playpause.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    playpause.classList.remove("fa-play");
    playpause.classList.add("fa-pause");
    songname.innerText=`Now Playing :- ${song[songIndex].songName}`;
    document.getElementById('1').classList.remove("fa-play");
    document.getElementById('1').classList.add("fa-pause");
    document.getElementById('2').innerText='PLAYING';
    songname.innerText=`Now Playing :- ${song[songIndex].songName}`;
    playbtn.style.backgroundColor='#DAA520';

  } 
  else {
    audioElement.pause();
    playpause.classList.remove("fa-pause");
    playpause.classList.add("fa-play");
    document.getElementById('1').classList.remove("fa-pause");
    document.getElementById('1').classList.add("fa-play");
    document.getElementById('2').innerText='PLAY';
    playbtn.style.backgroundColor='red';
  }
   
});
audioElement.addEventListener('ended',function(){
    audioElement.pause();
    songIndex+=1;
    audioElement.src=song[songIndex].filePath;
    songname.innerText=`Now Playing :- ${song[songIndex].songName}`;
    audioElement.play();
    playpause.classList.remove("fa-play");
    playpause.classList.add("fa-pause");
})
audioElement.addEventListener('timeupdate', () => {
  progres = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  musicBar.value = progres;
});
musicBar.addEventListener('change', () => {
  audioElement.currentTime = audioElement.duration*musicBar.value/100;
});
volumeBar.addEventListener('change',function(e){
  audioElement.volume=e.currentTarget.value/100;
})
const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songs")).forEach((element) => {
    element.classList.remove("fa-pause");
    element.classList.add("fa-play");
  });
};
Array.from(document.getElementsByClassName("songs")).forEach((element) => {
  element.addEventListener("click", (e) => {
    makeAllPlays();

    songIndex = parseInt(e.target.id);

    audioElement.src = song[songIndex].filePath;

    songname.innerText=`Now Playing :- ${song[songIndex].songName}`;

    audioElement.currentTime = 0;

    musicBar.value=0;

    audioElement.play();

    playpause.classList.remove("fa-play");

    playpause.classList.add("fa-pause");
  });
});

forward.addEventListener("click", () => {
  if (songIndex >= song.length-1) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }

  audioElement.src = song[songIndex].filePath;

  songname.innerText=`Now Playing :- ${song[songIndex].songName}`;


  audioElement.currentTime = 0;

  musicBar.value=0;

  audioElement.play();
  playpause.classList.remove("fa-play");
  playpause.classList.add("fa-pause");
});

backward.addEventListener("click", () => {
  if (songIndex <= song.length-1) {
    songIndex -= 1;
  } 
  else {
    songIndex = 0;
  }

  audioElement.src = song[songIndex].filePath;

  songname.innerText=`Now Playing :- ${song[songIndex].songName}`;

  
  audioElement.currentTime = 0;
  
  musicBar.value=0;
  
  audioElement.play();
  playpause.classList.remove("fa-play");
  playpause.classList.add("fa-pause");
});


//shuffle 

function shuffle(array){
  for(let i=array.length-1;i>0;i--){
      let j=Math.floor(Math.random()*(i+1));
      [array[i],array[j]]=[array[j],array[i]];
  }
}
shufflebtn.addEventListener('click',()=>{
shuffle(song);
audioElement.src=song[songIndex].filePath;
audioElement.play();
songname.innerText=`Now Playing :- ${song[songIndex].songName}`;
playpause.classList.remove("fa-play");
playpause.classList.add("fa-pause");
})
playbtn.addEventListener('click',()=>{
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    playpause.classList.remove("fa-play");
    playpause.classList.add("fa-pause");
    document.getElementById('1').classList.remove("fa-play");
    document.getElementById('1').classList.add("fa-pause");
    document.getElementById('2').innerText='PLAYING';
    songname.innerText=`Now Playing :- ${song[songIndex].songName}`;
    playbtn.style.backgroundColor='#DAA520';
  } 
  else {
    audioElement.pause();
    playpause.classList.remove("fa-pause");
    playpause.classList.add("fa-play");
    document.getElementById('1').classList.remove("fa-pause");
    document.getElementById('1').classList.add("fa-play");
    document.getElementById('2').innerText='PLAY';
    playbtn.style.backgroundColor='red';
  }
})