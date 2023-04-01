//for story

function story1() {
  let i = 0;
  document.querySelector(".story").onclick = document.querySelector(
    ".view-story"
  ).style.display = "block";
  setTimeout(() => {
    document.querySelector(".view-story").style.display = "none";
  }, 6000);

  setInterval(() => {
    i += 10;

    if ((i = 95)) {
      i = 95;
    } else {
      i = 90;
    }
    document.querySelector(".slider").style.width = i + "%";
  }, 2500);
  document.querySelector(".close-story1").onclick = () =>
    (document.querySelector(".view-story").style.display = "none");
}

function story2() {
  let a = 0;
  document.querySelector(".story").onclick = document.querySelector(
    ".view-story2"
  ).style.display = "block";
  setTimeout(() => {
    document.querySelector(".view-story2").style.display = "none";
  }, 4900);

  setInterval(() => {
    a += 10;

    if ((a = 95)) {
      a = 95;
    } else {
      a = 90;
    }
    document.querySelector(".slider2").style.width = a + "%";
  }, 1400);
  document.querySelector(".close-story2").onclick = () =>
    (document.querySelector(".view-story2").style.display = "none");
}
function story3() {
  let b = 0;
  document.querySelector(".story").onclick = document.querySelector(
    ".view-story3"
  ).style.display = "block";
  setTimeout(() => {
    document.querySelector(".view-story3").style.display = "none";
  }, 4900);

  setInterval(() => {
    b += 10;

    if (b == 95) {
      b = 95;
    } else {
      b = 90;
    }
    document.querySelector(".slider3").style.width = b + "%";
  }, 1400);
  document.querySelector(".close-story3").onclick = () =>
    (document.querySelector(".view-story3").style.display = "none");
}
function story4() {
  let c = 0;
  document.querySelector(".story").onclick = document.querySelector(
    ".view-story4"
  ).style.display = "block";
  setTimeout(() => {
    document.querySelector(".view-story4").style.display = "none";
  }, 4900);

  setInterval(() => {
    c += 10;

    if (c == 95) {
      c = 95;
    } else {
      c = 90;
    }
    document.querySelector(".slider4").style.width = c + "%";
  }, 1400);
  document.querySelector(".close-story4").onclick = () =>
    (document.querySelector(".view-story4").style.display = "none");
}

setTimeout(() => {
  document.querySelector(".footer").style.display = "block";
  console.log("cookies pop-up active");
}, 4000);

function dismissCookiesPop() {
  document.querySelector(".footer").style.display = "none";
  document.querySelector(".cookies-not").style.display = "block";

  setTimeout(() => {
    document.querySelector(".cookies-not").style.display = "none";
  }, 7000);

  console.log("cookies allowed");
}
function dismissCookiesPop1() {
  document.querySelector(".footer").style.display = "none";
  document.querySelector(".cookies-not1").style.display = "block";
  setTimeout(() => {
    document.querySelector(".cookies-not1").style.display = "none";
  }, 7000);

  console.log("cookies disallowed");
}
function onSound() {
  let speaker = document.querySelector(".fa-volume-xmark");
  speaker.setAttribute("class", "fa fa-volume-up muter");
  document.querySelector(".cookies-not2").style.display = "block";

  setTimeout(() => {
    document.querySelector(".cookies-not2").style.display = "none";
  }, 7000);

  console.log("Sound on");

  document.querySelector(".fa-volume-up").onclick = () => {
    speaker.setAttribute("class", "fa fa-volume-xmark muter");
    document.querySelector(".cookies-not3").style.display = "block";

    setTimeout(() => {
      document.querySelector(".cookies-not3").style.display = "none";
    }, 7000);

    console.log("Sound off");
  };
}
function like() {
  let likes = document.querySelector(".likes");
  likes = 999;
  likes += 1;
  console.log(likes);
  document.querySelector(".likes").innerHTML = likes;
}
function like1() {
  let likes1 = document.querySelector(".likes1");
  likes1 = 80;
  likes1 += 1;
  console.log(likes1);
  document.querySelector(".likes1").innerHTML = likes1;
}
function like2() {
  let likes2 = document.querySelector(".likes2");
  likes2 = 100;
  likes2 += 1;
  console.log(likes2);
  document.querySelector(".likes2").innerHTML = likes2;
}

function counting() {
  let numsz = 10;

  setInterval(() => {
    numsz += 10;
    document.querySelector(".num").innerHTML = numsz;
  }, 500);
}
counting();
 function closeComment(){
  document.querySelector(".commentalert").style.display = "none";

 }
function comment() {
  if(document.querySelector(".comment").value==""){
    document.querySelector(".commentalert").style.display = "block";
  }
  else{
  let comm = document.querySelector(".comment").value;
  let body = document.querySelector(".live-2");
  let time = document.createElement("p");
  let now = "now";
  time.innerHTML = now;
  time.setAttribute("class", "pp");
  let timeCont = document.createElement("div");
  timeCont.setAttribute("class", "pg-3");
  timeCont.appendChild(time);
  let hd = document.createElement("h4");
  let logo = document.createElement("img");
  logo.setAttribute("src", "assets/2.jpg");
  logo.setAttribute("class", "fff");
  let logoCont = document.createElement("div");
  logoCont.setAttribute("class", "pg-1");
  logoCont.appendChild(logo);
  let com = "Jennifer";
  hd.innerHTML = com;
  hd.setAttribute("class", "pg-hd");
  let bd = document.createElement("p");
  bd.innerHTML = comm;
  bd.setAttribute("class", "fd");
  let chat = document.createElement("div");
  chat.setAttribute("class", "pg-2");
  let commCont = document.createElement("div");
  commCont.setAttribute("class", "pgg");
  chat.appendChild(hd);
  chat.appendChild(bd);
  commCont.appendChild(logoCont);
  commCont.appendChild(chat);
  commCont.appendChild(timeCont);
  body.appendChild(commCont);
  body.scrollTop =  body.scrollHeight;

  }
}
function bing() {
  document.querySelector(".bing").style.display = "block";
}
function closeBing() {
  document.querySelector(".bing").style.display = "none";
}
