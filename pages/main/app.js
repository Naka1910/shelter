

fetch("./pets.json")
.then(function (response) {
  return response.json();
})
.then(function (data) {
   carusel(data);
})
.catch(function (err) {
  console.log("It is an error: " + err);
});






// carusel
function carusel(data) {
    let bgPopUp= document.getElementById("Friends-card-inblock-id");
    let arrowLeft = document.getElementById("Arrow-left");
    let arrowRight = document.getElementById("Arrow-right");
    let petsBlock = document.getElementById("pets-slide-id");
    
    let fBlock = document.createElement("div");
    let midBlock = document.createElement("div");
    let lBlock = document.createElement("div");
    fBlock.className = "first-block";
    midBlock.className = "middle-block";
    lBlock.className = "last-block";
    
    function randomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    function bothUn(arr1, arr2) {
      for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
          if (arr1[i] === arr2[j]) {
            return false;
          }
        }
      }
      return true;
    }
  
    let randy1 = [];
    let randy2 = [];
  
    function change() {
      randy1 = [];
      randy2 = [];
      while (randy1.length < 3) {
        let randy = randomInt(0, 7);
        if (randy1.includes(data[randy])) {
        } else {
          randy1.push(data[randy]);
        }
      }
      while (randy2.length < 3) {
        let randy = randomInt(0, 7);
        if (randy2.includes(data[randy])) {
        } else {
          randy2.push(data[randy]);
        }
      }
    }
  
    change();
  
    function grandMatch() {
      while (!bothUn(randy1, randy2)) {
        change();
      }
    }
  
    grandMatch();
  
//   i will stop here coz i was changeing randysa
    
    function makeCarusel() {
   
        for (let i = 0; i < randy2.length; i++) {
          let slideCard = document.createElement("div");
          slideCard.className = "slide-card";
          let petImage = document.createElement("img");
          petImage.src = randy2[i].img;
          let petName = document.createElement("p");
          petName.className = "pets-name";
          petName.innerText = randy2[i].name;
          let petBtn = document.createElement("button");
          petBtn.className = "learn-more";
          petBtn.innerText = "Learn more";
          petBtn.addEventListener("click", () => {
            bgPopUp.style.visibility = "visible";
            bgPopUp.style.zIndex = 100;
            let popUp = document.getElementById("Friends-pop-up-id");
            let popUpInfo = document.createElement("div");
            let popUpDetails = document.createElement("div");
    
            popUpInfo.className = "pop-up-info";
            popUpDetails.className = "pop-up-details";
            
            let pic = document.createElement("img");
            pic.src = randy2[i].img;
            let nickName = document.createElement("h3");
            nickName.innerText = randy2[i].name;
            nickName.className ="nickname"
            let popTitle = document.createElement("div");
            popTitle.className="pop-title"
            let animal = document.createElement("span");
            let family = document.createElement("span");
            family.innerText = randy2[i].breed;
            animal.innerText = `${randy2[i].type} - `;
            popTitle.appendChild(animal);
            popTitle.appendChild(family);
    
            let descrip = document.createElement("p");
            descrip.className= "pop-descrip"
            descrip.innerText = randy2[i].description;
            let UL = document.createElement("ul");
            UL.className = "pop-up-ul";

            let lifeDiv = document.createElement("li");
            let ocultDiv = document.createElement("li");
            let healthDiv = document.createElement("li");
            let wormsDiv = document.createElement("li");
    
            let lifeTag = document.createElement("span");
            let ocultTag = document.createElement("span");
            let healthTag = document.createElement("span");
            let wormsTag = document.createElement("span");
    
            lifeTag.innerText = "Age: ";
            ocultTag.innerText = "Inoculatios: ";
            healthTag.innerText = "Diseases: ";
            wormsTag.innerText = "Parasites: ";
    
            let life = document.createElement("span");
            let ocult = document.createElement("span");
            let health = document.createElement("span");
            let worms = document.createElement("span");
    
            life.className = "pop-list-item";
            ocult.className = "pop-list-item";
            health.className = "pop-list-item";
            worms.className = "pop-list-item";
    
            life.innerText = randy2[i].age;
            ocult.innerText = randy2[i].inoculations;
            health.innerText = randy2[i].diseases;
            worms.innerText = randy2[i].parasites;
    
            lifeDiv.appendChild(lifeTag);
            lifeDiv.appendChild(life);
            ocultDiv.appendChild(ocultTag);
            ocultDiv.appendChild(ocult);
            healthDiv.appendChild(healthTag);
            healthDiv.appendChild(health);
            wormsDiv.appendChild(wormsTag);
            wormsDiv.appendChild(worms);
    
            popUpInfo.appendChild(pic);
            popUpDetails.appendChild(nickName);
            popUpDetails.appendChild(popTitle);
            popUpDetails.appendChild(descrip);
    
            UL.appendChild(lifeDiv);
            UL.appendChild(ocultDiv);
            UL.appendChild(healthDiv);
            UL.appendChild(wormsDiv);
            popUpDetails.appendChild(UL);
    
            popUpInfo.appendChild(popUpDetails);
            popUp.append(popUpInfo);
    
            arrowLeft.disabled = true;
            arrowRight.disabled = true;
            let closeBtn = document.getElementById("close-btn-id-id");
            closeBtn.onclick = () => {
              popUpInfo.remove();
              arrowLeft.disabled = false;
              arrowRight.disabled = false;
              bgPopUp.style.visibility = "hidden";
            };
          });
    
          
          slideCard.appendChild(petImage);
          slideCard.appendChild(petName);
          slideCard.appendChild(petBtn);
          fBlock.append(slideCard);
        }
        
      for (let i = 0; i < randy1.length; i++) {
        let slideCard = document.createElement("div");
        slideCard.className = "slide-card";
        let petImage = document.createElement("img");
        petImage.src = randy1[i].img;
        let petName = document.createElement("p");
        petName.className = "petname";
        petName.innerText = randy1[i].name;
        let petBtn = document.createElement("button");
        petBtn.className = "learn-more";
  
        petBtn.innerText = "Learn more";
        petBtn.addEventListener("click", () => {
          bgPopUp.style.visibility = "visible";
          bgPopUp.style.zIndex = 103;
          let popUp = document.getElementById("Friends-pop-up-id");
          let popUpInfo = document.createElement("div");
          let popUpDetails = document.createElement("div");
  
          popUpInfo.className = "pop-up-info";
          popUpDetails.className = "pop-up-details";
  
          let pic = document.createElement("img");
          pic.src = randy1[i].img;
          let nickName = document.createElement("h3");
          nickName.innerText = randy1[i].name;
          nickName.className= "nickname";
          let popTitle= document.createElement("div");
          popTitle.className ="pop-title"
          let animal = document.createElement("span");
          let family = document.createElement("span");
          family.innerText = randy1[i].breed;
          animal.innerText = `${randy1[i].type} - `;
          popTitle.appendChild(animal);
          popTitle.appendChild(family);
          let descrip = document.createElement("p");
          descrip.className="pop-descrip"
          descrip.innerText = randy1[i].description;
          let UL = document.createElement("ul");
          UL.className = "pop-up-ul";
          let lifeDiv = document.createElement("li");
          let ocultDiv = document.createElement("li");
          let healthDiv = document.createElement("li");
          let wormsDiv = document.createElement("li");
  
          let lifeTag = document.createElement("span");
          let ocultTag = document.createElement("span");
          let healthTag = document.createElement("span");
          let wormsTag = document.createElement("span");
  
          lifeTag.innerText = "Age: ";
          ocultTag.innerText = "Inoculatios: ";
          healthTag.innerText = "Diseases: ";
          wormsTag.innerText = "Parasites: ";
  
          let life = document.createElement("span");
          let ocult = document.createElement("span");
          let health = document.createElement("span");
          let worms = document.createElement("span");
  
          life.className = "pop-list-item";
          ocult.className = "pop-list-item";
          health.className = "pop-list-item";
          worms.className = "pop-list-item";
  
          life.innerText = randy1[i].age;
          ocult.innerText = randy1[i].inoculations;
          health.innerText = randy1[i].diseases;
          worms.innerText = randy1[i].parasites;
  
          lifeDiv.appendChild(lifeTag);
          lifeDiv.appendChild(life);
          ocultDiv.appendChild(ocultTag);
          ocultDiv.appendChild(ocult);
          healthDiv.appendChild(healthTag);
          healthDiv.appendChild(health);
          wormsDiv.appendChild(wormsTag);
          wormsDiv.appendChild(worms);
  
          popUpInfo.appendChild(pic);
          popUpDetails.appendChild(nickName);
          popUpDetails.appendChild(popTitle);
          popUpDetails.appendChild(descrip);
  
          UL.appendChild(lifeDiv);
          UL.appendChild(ocultDiv);
          UL.appendChild(healthDiv);
          UL.appendChild(wormsDiv);
          popUpDetails.appendChild(UL);
  
          popUpInfo.appendChild(popUpDetails);
          popUp.append(popUpInfo);
  
          arrowLeft.disabled = true;
          arrowRight.disabled = true;
          let closeBtn = document.getElementById("close-btn-id");
          closeBtn.onclick = () => {
            popUpInfo.remove();
            arrowLeft.disabled = false;
            arrowRight.disabled = false;
            bgPopUp.style.visibility = "hidden";
          };
        });
        slideCard.appendChild(petImage);
        slideCard.appendChild(petName);
        slideCard.appendChild(petBtn);
        midBlock.appendChild(slideCard);
      }
  
      for (let i = 0; i < randy2.length; i++) {
        let slideCard = document.createElement("div");
        slideCard.className = "slide-card";
        let petImage = document.createElement("img");
        petImage.src = randy2[i].img;
        let petName = document.createElement("p");
        petName.className = "pets-name";
        petName.innerText = randy2[i].name;
        let petBtn = document.createElement("btn");
        petBtn.className = "learn-more";
        petBtn.innerText = "Learn more";
  
        petBtn.addEventListener("click", () => {
          bgPopUp.style.visibility = "visible";
          bgPopUp.style.zIndex = 100;
          let popUp = document.getElementById("Friends-pop-up-id");
          let popUpInfo = document.createElement("div");
          let popUpDetails = document.createElement("div");
  
          popUpInfo.className = "pop-up-info";
          popUpDetails.className = "pop-up-details";
  
          let pic = document.createElement("img");
          pic.src = randy2[i].img;
          let nickName = document.createElement("h3");
          nickName.innerText = randy2[i].name;
         
          let popTitle = document.createElement("div");
        
          let animal = document.createElement("span");
  
          let family = document.createElement("span");
          family.innerText = randy2[i].breed;
          animal.innerText = `${randy1[i].type} - `;
          popTitle.appendChild(animal);
          popTitle.appendChild(family);
  
          let descrip = document.createElement("p");
          descrip.innerText = randy2[i].description;
  
          let UL = document.createElement("ul");
          UL.className = "pop-up-ul";
  
          let lifeDiv = document.createElement("li");
          let ocultDiv = document.createElement("li");
          let healthDiv = document.createElement("li");
          let wormsDiv = document.createElement("li");
  
          let lifeTag = document.createElement("span");
          let ocultTag = document.createElement("span");
          let healthTag = document.createElement("span");
          let wormsTag = document.createElement("span");
  
          lifeTag.innerText = "Age: ";
          ocultTag.innerText = "Inoculatios: ";
          healthTag.innerText = "Diseases: ";
          wormsTag.innerText = "Parasites: ";
  
          let life = document.createElement("span");
          let ocult = document.createElement("span");
          let health = document.createElement("span");
          let worms = document.createElement("span");
  
          life.className = "pop-list-item";
          ocult.className = "pop-list-item";
          health.className = "pop-list-item";
          worms.className = "pop-list-item";
  
          life.innerText = randy2[i].age;
          ocult.innerText = randy2[i].inoculations;
          health.innerText = randy2[i].diseases;
          worms.innerText = randy2[i].parasites;
  
          lifeDiv.appendChild(lifeTag);
          lifeDiv.appendChild(life);
          ocultDiv.appendChild(ocultTag);
          ocultDiv.appendChild(ocult);
          healthDiv.appendChild(healthTag);
          healthDiv.appendChild(health);
          wormsDiv.appendChild(wormsTag);
          wormsDiv.appendChild(worms);
  
          popUpInfo.appendChild(pic);
          popUpDetails.appendChild(nickName);
          popUpDetails.appendChild(popTitle);
          popUpDetails.appendChild(descrip);
  
          UL.appendChild(lifeDiv);
          UL.appendChild(ocultDiv);
          UL.appendChild(healthDiv);
          UL.appendChild(wormsDiv);
          popUpDetails.appendChild(UL);
  
          popUpInfo.appendChild(popUpDetails);
          popUp.append(popUpInfo);
  
          arrowLeft.disabled = true;
          arrowRight.disabled = true;
          let closeBtn = document.getElementById("close-btn-id");
          closeBtn.onclick = () => {
            popUpInfo.remove();
            arrowLeft.disabled = false;
            arrowRight.disabled = false;
            bgPopUp.style.visibility = "hidden";
          };
        });
  
        slideCard.appendChild(petImage);
        slideCard.appendChild(petName);
        slideCard.appendChild(petBtn);
        lBlock.appendChild(slideCard);
      }
  
      petsBlock.prepend(fBlock);
      petsBlock.appendChild(midBlock);
      petsBlock.prepend(lBlock);
    }
  
    function emptyBlock() {
      fBlock.innerHTML = "";
      midBlock.innerHTML = "";
      lBlock.innerHTML = "";
    }
  
    makeCarusel();
  
    function onestep() {
      emptyBlock();
      change();
      grandMatch();
      makeCarusel();
    }
  
    let offSet = 0;
    let countR = 0;
    let countL = 0;
  
    arrowRight.addEventListener("click", () => {
      onestep();
      countR++;
      offSet += 960;
      petsBlock.style.cssText = `transform: translateX(${offSet}px); transition: 1s;`;
      setTimeout(function () {
        offSet = 0;
        petsBlock.style.cssText = `transform: translateX(${offSet}px);`;
        midBlock.style.order = 1;
        fBlock.style.order = 2;
        lBlock.innerHTML = midBlock.innerHTML;
      }, 1000);
  
      if (countR > 1) {
        setTimeout(function () {
          offSet = 0;
          petsBlock.style.cssText = `transform: translateX(${offSet}px);`;
          midBlock.style.order = 2;
          fBlock.style.order = 1;
          lBlock.innerHTML = fBlock.innerHTML;
          countR = 0;
        }, 1000);
      }
    });
  
    arrowLeft.addEventListener("click", () => {
      onestep();
      countL++;
      offSet -= 960;
      petsBlock.style.cssText = `transform: translateX(${offSet}px); transition: 1s`;
      setTimeout(function () {
        offSet = 0;
        petsBlock.style.cssText = `transform: translateX(${offSet}px);`;
        midBlock.style.order = 1;
        fBlock.style.order = 2;
        lBlock.innerHTML = midBlock.innerHTML;
      }, 1000);
  
      if (countL > 1) {
        setTimeout(function () {
          offSet = 0;
          petsBlock.style.cssText = `transform: translateX(${offSet}px);`;
          midBlock.style.order = 2;
          fBlock.style.order = 1;
          lBlock.innerHTML = fBlock.innerHTML;
          countL = 0;
        }, 1000);
      }
    });
  }

    document.getElementById("myButton").onclick = function () {
    location.href = "#ourFriends";
};
    document.getElementById("myButton-2").onclick = function () {
        location.href = "../pets/pets.html";
    };
    document.getElementById("bar").onclick = function(){
        let sdmenu =document.getElementById("sidemn");
        sdmenu.style ="display: block";
        let con1 =document.getElementById("cont-1");
        con1.style ="display: none";
        let barmenu = document.getElementById("bar");
        barmenu.style ="display: none";
        let ntonly =document.getElementById("notonly");
        ntonly.style ="display: none";
    }
    document.getElementById("side-bar").onclick = function (){
        let sdmenu =document.getElementById("sidemn");
        sdmenu.style ="display:none";
        let con1 =document.getElementById("cont-1");
        con1.style ="display: block";
        let barmenu = document.getElementById("bar");
        barmenu.style ="display: block";
        let ntonly =document.getElementById("notonly");
        ntonly.style ="display: block";
    
    
    }

   document.getElementById("side-help").onclick= function (){
    let sdmenu =document.getElementById("sidemn");
    sdmenu.style ="display:none";
    let barmenu = document.getElementById("bar");
     barmenu.style ="display: block";

   }
   document.getElementById("side-contact").onclick =function(){
    let sdmenu =document.getElementById("sidemn");
    sdmenu.style ="display:none";
    let barmenu = document.getElementById("bar");
     barmenu.style ="display: block";

   }
