
let Nickname = document.getElementById("nickname");
let Name = document.getElementById("lastname");
let Adress = document.getElementById("adress");
let Email = document.getElementById("email");
let Gender = document.getElementById("gender");
let Age = document.getElementById("age");

function clearDiv (){
  let div = document.getElementById("safeplace");
  //isstrinam divo vidu, bet pats  divas lieka;
  div.innerHTML = null;
};

function paint(obj){
  let visitCard = document.getElementById("safeplace");
  let nicknameP = document.createElement ("p");
  let nameP  = document.createElement ("p");
  let adressP  = document.createElement ("p");
  let emailP  = document.createElement ("p");
  let genderP  = document.createElement ("p");
  let ageP  = document.createElement ("p");
  nicknameP.textContent = obj.nickname;
  nameP.textContent = obj.name;
  adressP.textContent = obj.adress;
  emailP.textContent = obj.email;
  genderP.textContent = obj.gender;
  ageP.textContent = obj.age;
  visitCard.appendChild(nicknameP);
  visitCard.appendChild(nameP);
  visitCard.appendChild(adressP);
  visitCard.appendChild(emailP);
  visitCard.appendChild(genderP);
  visitCard.appendChild(ageP);
};


let submitButton = document.getElementById("submit");
submitButton.addEventListener ("click", function(event){
 let credentialsObj = {
     nickname:Nickname.value,
     name:Name.value, 
     adress:Adress.value,
     email:Email.value, 
     gender:Gender.value, 
     age:Age.value
  };

 localStorage.setItem('credentials', JSON.stringify(credentialsObj));
 clearDiv();
 paint(credentialsObj);
});

window.addEventListener("load" , function(event){
  let usersdata = JSON.parse(localStorage.getItem('credentials'))||{};
  Nickname.value = usersdata.nickname;
  Name.value = usersdata.name;
  Adress.value = usersdata.adress;
  Email.value = usersdata.nickname;
  Gender.value = usersdata.gender;
  Age.value = usersdata.age;
  paint(usersdata);
  console.log(Nickname.value);
});

let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", function(event){
  Nickname.value = "";
  Name.value = "";
  Adress.value = "";
  Email.value = "";
  Gender.value = "";
  Age.value = "";
  localStorage.clear();
  clearDiv();
});

