// 

let ahadith = document.querySelector(".ahadith");
let ahadithsection= document.getElementById("ahadith")

let next = document.querySelector(".buttons .next");

let prev = document.querySelector(".buttons .prev")

let numberahadith = document.querySelector(".numberahadith");

let btnmove = document.getElementById("btnmove");

let ahadithindex = 0;

btnmove.addEventListener("click",()=>{
 ahadithsection.scrollIntoView();
}
)

hadithnumber()

function hadithnumber(){
 fetch("https://api.hadith.gading.dev/books/muslim?range=1-300").then(response=>response.json()).then(data=>{
  let adiths= data.data.hadiths;
  ahadith.innerText = adiths[ahadithindex].arab
 })
 
 numberahadith.innerText = `300 / ${ahadithindex +1}`
}

next.onclick = ()=>{
if (ahadithindex < 300) {
  ahadithindex += 1;
}
 hadithnumber()
}
prev.onclick = ()=>{
 if (ahadithindex >0) {
  ahadithindex -= 1;
 }
 hadithnumber()
}

// quran section

let surahcontainer = document.querySelector(".surah-container");

getsurah()
function getsurah(){
 fetch("http://api.alquran.cloud/v1/meta").then(response=>response.json()).then(data=>{
 let surah = data.data.surahs.references;
 
 
 let numbersurhas = 114;
 for (let i=0 ;i< numbersurhas;i++) {
  
surahcontainer.innerHTML += `<div class="suraha">
    <p>${surah[i].name}</p>
    <p>${surah[i].englishName}</p>
  <p>${surah[i].numberOfAyahs} أية</p>
   </div>`
   
   
 }
 
 let surahtitel = document.querySelectorAll(".suraha")
 
 let popup = document.querySelector(".surah-poup");
 let close = document.querySelector(".close")
 let ayat =document.querySelector(".aya")
 
 surahtitel.forEach((titel,index)=>{
  titel.addEventListener("click",()=>{
   fetch(`http://api.alquran.cloud/v1/surah/${index +1}`).then(response=>response.json()).then(data=>{
    ayat.innerHTML="";
    
    let aya = data.data.ayahs;
    aya.forEach(ayas=>{
     popup.classList.add("surahactive");
     ayat.innerHTML += `
     .
     
     <p> <span class="satyleayah">(${ayas.numberInSurah}) </span>     ${ayas.text}</p>
     `
     
    })
    
    
    close.addEventListener("click",()=>{
     popup.classList.remove("surahactive")
    })
   })
   
  })
  
 })
  
 })
 
}

setInterval(function() {
      // الحصول على الوقت الحالي
      var date = new Date();

      // تحديث العناصر
      document.querySelector(".hours").innerHTML = date.getHours();
      document.querySelector(".minut").innerHTML = date.getMinutes();
      document.querySelector(".secound").innerHTML = date.getSeconds();
      
    }, 1000);
    
    
    let cards = document.querySelector(".cards")
    
    gettime()
    function gettime(){
     fetch("http://api.aladhan.com/v1/timingsByCity?city=tanger&country=moroco&method=8").then(response=>response.json()).then(data=>{
      
      let times = data.data.timings;
      cards.innerHTML ="";
      for (let time in times){
      
       cards.innerHTML += `
          <div class="card">
    <p>${times[time]}</p>
       <h1>${time}</h1>
   </div>`
      }
      
     })
     
    }
    
    let azkarindex = 0;
    
getadkar()
    function getadkar(){
     fetch("https://api.dikiotang.com/dzikir/pagi").then(response=>response.json()).then(data=>{
     //console.log(data)
       let azkar = data.data;
      let azkarcontainer= document.querySelector(".azkar-container");
      let azkars = document.querySelector(".azkars");
      let numberazkar= document.querySelector(".numberazkar")
      
      azkars.innerText = azkar[azkarindex].arab;
      
      numberazkar.innerHTML=`(${azkar[azkarindex].ulang})`
      
      console.log(data)
      
      
     })
     
     
    }
    
    let moveleft = document.querySelector("#moveleft")
        let moveright = document.querySelector("#moveright")
    
    moveleft.onclick = function(){
     if (azkarindex<22) {
      azkarindex +=1
     }
     getadkar()
    };
    
    moveright.onclick = function(){
     if (azkarindex>0) {
      azkarindex -=1
     }
     getadkar()
    }
    
    let load = document.querySelector(".loader");
    
    
    function lod(){
     load.style.display="none"
     
    }
setTimeout(lod,3000);