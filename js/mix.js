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
let audioElement = new Audio ('mix/dildiyan.mp3');
let song = [
  {
    songName: "Dil Diyan Gallan",
    filePath: "mix/dildiyan.mp3",
    coverPath: "/Img/Aathma.jpeg",
  },
  {
    songName: "Mahi Ve",
    filePath: "mix/mahive.mp3",
    coverPath: "/Img/Harekrishna.jpeg",
  },
  {
    songName: "Raanjhanaa",
    filePath: "mix/raanjhanaa.mp3",
    coverPath: "/Img/Heram.jpeg",
  },
  {
    songName: "Jannat",
    filePath: "mix/jannat.mp3",
    coverPath: "/Img/Kishori.jpeg",
  },
  {
    songName: "Heer Ranjha",
    filePath: "mix/heerranjha.mp3",
    coverPath: "/Img/Madhu.jpeg",
  },
  {
    songName: "Tere Bin",
    filePath: "mix/terebin.mp3",
    coverPath: "/Img/namonamo.jpeg",
  },
  {
    songName: "Iktara",
    filePath: "mix/iktara.mp3",
    coverPath: "/Img/Narayan.jpeg",
  },
  {
    songName: "Mehrama",
    filePath: "mix/mehrama.mp3",
    coverPath: "/Img/Radharani.jpeg",
  },
  { songName: "Thoda Thoda Pyaar", filePath: "mix/thoda.mp3", coverPath: "/Img/Ramsiyaram.jpeg" },
  {
    songName: "Mere Yaara",
    filePath: "mix/mereyaara.mp3",
    coverPath: "/Img/Hanuman.jpeg",
  },
  {
    songName: "Ki Kariye",
    filePath: "mix/kikariye.mp3",
    coverPath: "/Img/Sawlisurat.jpeg",
  },
  {
    songName: "Kabhi Tumhe",
    filePath: "mix/kabhitumhe.mp3",
    coverPath: "/Img/Sawlisurat.jpeg",
  },
  {
    songName: "Raatan Lambiyan",
    filePath: "mix/raatanalambiyan.mp3",
    coverPath: "/Img/Sawlisurat.jpeg",
  },
  {
    songName: "Sang Na",
    filePath: "mix/sangna.mp3",
    coverPath: "/Img/Sawlisurat.jpeg",
  },
  {
    songName: "Kalle Rehn De",
    filePath: "mix/kalley.mp3",
    coverPath: "/Img/Sawlisurat.jpeg",
  },
  {
    songName: "Darkhast",
    filePath: "mix/darkhast.mp3",
    coverPath: "/Img/Sawlisurat.jpeg",
  },
  {
    songName: "Kinna Sona",
    filePath: "bollywoodromance/kinnasona.mp3",
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
