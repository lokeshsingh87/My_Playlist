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
let audioElement = new Audio ('bollywoodromance/dilkyuyemera.mp3');
let song = [
  {
    songName: "Dil Kyu Mera",
    filePath: "bollywoodromance/dilkyuyemera.mp3",
    coverPath: "/Img/Aathma.jpeg",
  },
  {
    songName: "Tum Se Hi",
    filePath: "bollywoodromance/tumsehi.mp3",
    coverPath: "/Img/Harekrishna.jpeg",
  },
  {
    songName: "Nazm Nazm",
    filePath: "bollywoodromance/nazmnazm.mp3",
    coverPath: "/Img/Heram.jpeg",
  },
  {
    songName: "Dil Jaaniye",
    filePath: "bollywoodromance/diljaaniye.mp3",
    coverPath: "/Img/Kishori.jpeg",
  },
  {
    songName: "Mein Agar Kahoon",
    filePath: "bollywoodromance/meinagarkahoon.mp3",
    coverPath: "/Img/Madhu.jpeg",
  },
  {
    songName: "Tere Sang Yaara",
    filePath: "bollywoodromance/teresangyaara.mp3",
    coverPath: "/Img/namonamo.jpeg",
  },
  {
    songName: "Jab Tak",
    filePath: "bollywoodromance/jabtak.mp3",
    coverPath: "/Img/Narayan.jpeg",
  },
  {
    songName: "Rabb Manneya",
    filePath: "bollywoodromance/rabbmaneya.mp3",
    coverPath: "/Img/Radharani.jpeg",
  },
  { songName: "Tum Jo Aaye", filePath: "bollywoodromance/tumjoaaye.mp3", coverPath: "/Img/Ramsiyaram.jpeg" },
  {
    songName: "Rang Lageya ",
    filePath: "bollywoodromance/ranglageya.mp3",
    coverPath: "/Img/Hanuman.jpeg",
  },
  {
    songName: "Mera Bina",
    filePath: "bollywoodromance/merebina.mp3",
    coverPath: "/Img/Sawlisurat.jpeg",
  },
  {
    songName: "Mera Mann Kehne Laga",
    filePath: "bollywoodromance/meramann.mp3",
    coverPath: "/Img/Sawlisurat.jpeg",
  },
  {
    songName: "Chaar Kadam",
    filePath: "bollywoodromance/chaarkadam.mp3",
    coverPath: "/Img/Sawlisurat.jpeg",
  },
  {
    songName: "Soniyo",
    filePath: "bollywoodromance/soniyo.mp3",
    coverPath: "/Img/Sawlisurat.jpeg",
  },
  {
    songName: "Aankhon Se Batana",
    filePath: "bollywoodromance/aankhonsebatana.mp3",
    coverPath: "/Img/Sawlisurat.jpeg",
  },
  {
    songName: "Pehli Nazar Mein",
    filePath: "bollywoodromance/pehlinazarmein.mp3",
    coverPath: "/Img/Sawlisurat.jpeg",
  },
  {
    songName: "Kinna Sona",
    filePath: "bollywoodromance/kinnasona.mp3",
    coverPath: "/Img/Sawlisurat.jpeg",
  },
  {
    songName: "Tera Naam Doon",
    filePath: "bollywoodromance/teranaamdoon.mp3",
    coverPath: "/Img/Sawlisurat.jpeg",
  },
  {
    songName: "Dil Meri Naa Sune",
    filePath: "bollywoodromance/dilmerinasune.mp3",
    coverPath: "/Img/Sawlisurat.jpeg",
  },
  {
    songName: "Do Dil Mil Rahe Hai",
    filePath: "bollywoodromance/dodilmil.mp3",
    coverPath: "/Img/Sawlisurat.jpeg",
  },
  {
    songName: "Ek Din Aap",
    filePath: "bollywoodromance/ekdinaap.mp3",
    coverPath: "/Img/Sawlisurat.jpeg",
  },
  {
    songName: "Mein Koi Aisa Geet Gaun",
    filePath: "bollywoodromance/meinkoiaisa.mp3",
    coverPath: "/Img/Sawlisurat.jpeg",
  },
  {
    songName: "Sawar Loon",
    filePath: "bollywoodromance/sawarloon.mp3",
    coverPath: "/Img/Sawlisurat.jpeg",
  },
  {
    songName: "Tera Fitoor",
    filePath: "bollywoodromance/terafitoor.mp3",
    coverPath: "/Img/Sawlisurat.jpeg",
  },
  {
    songName: "Tujh Mein Rabb Dikhta Hai",
    filePath: "bollywoodromance/tujhmeinrab.mp3",
    coverPath: "/Img/Sawlisurat.jpeg",
  },
  {
    songName: "Tumse Milke Dil Ka",
    filePath: "bollywoodromance/tumsemilke.mp3",
    coverPath: "/Img/Sawlisurat.jpeg",
  },
  {
    songName: "Chaand Shifarish",
    filePath: "bollywoodromance/chandshifarish.mp3",
    coverPath: "/Img/Sawlisurat.jpeg",
  },
  {
    songName: "Tumhe Jo Maine Jo Dekha",
    filePath: "bollywoodromance/tumhejomainedekha.mp3",
    coverPath: "/Img/Sawlisurat.jpeg",
  },
  {
    songName: "Tu Jaane Na",
    filePath: "bollywoodromance/tujaanena.mp3",
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
