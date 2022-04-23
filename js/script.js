var tournaments = [
{
  state: 'Registration',
  name: 'Winter Tournament',
  number:'12',
  date: '01/12/2022',
  players: '16-18<br>women'
},
{
  state: 'progress',
  name: 'Winter Tournament',
  number:'13',
  date: '03/12/2022',
  players: '18+<br>involved'
},
{
  state: 'Registration',
  name: 'Winter Tournament',
  number:'22',
  date: '01/14/2022',
  players: '16<br>women'
},
{
  state: 'Finished',
  name: 'Winter Tournament',
  number:'12',
  date: '08/29/2022',
  players: '14 men'
},
{
  state: 'Registration',
  name: 'Winter Tournament',
  number:'12',
  date: '04/21/2022',
  players: '12-14<br>women'
},
{
  state: 'Finished',
  name: 'Winter Tournament',
  number:'12',
  date: '05/29/2022',
  players: '14<br>men'
},
{
  state: 'Registration',
  name: 'Winter Tournament',
  number:'12',
  date: '06/03/2022',
  players: '12<br>women'
},
];


function createTour () {
  let container = document.getElementsByClassName("tournamentsContainer")[0];

  for (let i=0;i<tournaments.length;i++){
    let tournament = document.createElement("button");
    let figcaption = document.createElement("figcaption");

    tournament.classList.add("tournaments");
    tournament.classList.add(tournaments[i].state);
    tournament.innerHTML+= tournaments[i].name;

    tournament.innerHTML+="<progress value=\"75\" max=\"100\" class=\"proTournament\"></progress>";
    let iconContainer = document.createElement("div");
    let figure = document.createElement("figure");
    figure.classList.add("iconOpen");
    iconContainer.classList.add("iconContainer");
    
    let img = document.createElement("img");
    img.src="images/People.png";
    img.alt="";
    figcaption.innerHTML = tournaments[i].number;
    figure.appendChild(img);
    figure.appendChild(figcaption);
    iconContainer.appendChild(figure);

    figure = document.createElement("figure");
    figure.classList.add("iconOpen");
    img = document.createElement("img");
    img.src="images/Calrndar.png";
    img.alt="";
    figcaption = document.createElement("figcaption");
    figcaption.innerHTML = tournaments[i].date;
    figure.appendChild(img);
    figure.appendChild(figcaption);
    iconContainer.appendChild(figure);

    figure = document.createElement("figure");
    figure.classList.add("iconOpen");
    img = document.createElement("img");
    img.src="images/Category.png";
    img.alt="";
    figcaption = document.createElement("figcaption");
    figcaption.innerHTML = tournaments[i].players;
    figure.appendChild(img);
    figure.appendChild(figcaption);

    iconContainer.appendChild(figure);
    tournament.appendChild(iconContainer);
    container.appendChild(tournament);
    filterSelection('all');
  }
}

function createDate() {
  let container = document.getElementsByClassName("tournamentsContainer")[0];
  container.innerHTML="";
  for (let i=0; i<tournaments.length;i++){
    tournaments[i].date = new Date(tournaments[i].date);
  }
}

function sortByDateasc () {
createDate();
// let reg = document.getElementById("btnOpenReg");
// if (reg.classList.contains("selected")
// {
//   var regTour = tournaments.filter(obj => {
//     return obj.state=
//   })

  tournaments = tournaments.sort((dateA, dateB) => dateA.date - dateB.date);
  for (let i=0; i<tournaments.length;i++){
    tournaments[i].date = tournaments[i].date.toLocaleDateString('en-US');
  }
   createTour();
}

function sortByDatedesc () {
  createDate();
    tournaments = tournaments.sort((dateA, dateB) => dateB.date - dateA.date);
    for (let i=0; i<tournaments.length;i++){
      tournaments[i].date = tournaments[i].date.toLocaleDateString('en-US');
    }
    createTour();
  }

function filterFunction() {
  let input, filter, ul, li, a, i;
  input = document.getElementById("RefereeSearch");
  filter = input.value.toUpperCase();
  div = document.getElementsByClassName("dropdown-menu")[3];
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
  this.racheli[0].date;
}

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("tournaments");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
  addactive();
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}



function addactive() {
  var btnContainer = document.getElementById("mainBtnContainer");
  var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("selected");
      if (current.length>1){
      current[1].className = current[1].className.replace("selected", "");
      }
      this.className += " selected";
    });
  }
}



