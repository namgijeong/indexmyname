let section1 = document.querySelector(".section1");
//제이쿼리에서 쓰는것
//let section1length = section1.offset().top;
let section1length = section1.getBoundingClientRect().top;
console.log(section1length);
let header = document.getElementsByTagName("header");
let headerlength = header[0].clientHeight;
console.log(headerlength);
/*
이건 제이쿼리에서 쓰는것
this.scroll(() => {
  //let windowlength = this.scrollTop();
 
  console.log(windowlength);
  //if (windowlength <= headerlength) {
  // section1.classList.remove("fixedsection1");
  //}
  if (section1length < windowlength) {
    section1.classList.add("fixedsection1");
  } else {
    section1.classList.remove("fixedsection1");
  }
});
*/
window.addEventListener("scroll", () => {
  let windowlength = document.documentElement.scrollTop;
  console.log(windowlength);

  if (section1length < windowlength) {
    section1.classList.add("fixedsection1");
  } else {
    section1.classList.remove("fixedsection1");
  }
});
const hiddenmenu = document.querySelector(".hiddenmenu");

const category = document.querySelectorAll("#category div a");

//let flag = 0;
/*
마우스가 카테고리에 닿은다음에 마우스 커서가 히든메뉴 영역에 올동안 사라지지않고 유지하게.
*/
/*
for (let i = 0; i <= category.length - 1; i++) {
  category[i].addEventListener("mouseover", () => {
    if (hiddenmenu.classList.contains("on")) {
      hiddenmenu.classList.remove("on");
      hiddenmenu.classList.add("on");
      flag = 1;
    } else {
      hiddenmenu.classList.add("on");
      flag = 1;
    }
  });
  */
  /*
  category[i].addEventListener("mouseout", () => {
    if (hiddenmenu.classList.contains("on")) {
      hiddenmenu.classList.remove("on");
    } else {
      hiddenmenu.classList.add("on");
    }
  });
  */
//}

const categorydiv= document.querySelector("#category");
categorydiv.addEventListener("mouseover",()=>{
  if (hiddenmenu.classList.contains("on")) {
    //hiddenmenu.classList.remove("on");
    //hiddenmenu.classList.add("on");
    
  } else {
    hiddenmenu.classList.add("on");
    
  }
});

categorydiv.addEventListener("mouseleave",()=>{
  if (hiddenmenu.classList.contains("on")) {
    hiddenmenu.classList.remove("on");
  } else {
    hiddenmenu.classList.add("on");
  }
})

hiddenmenu.addEventListener("mouseover",()=>{
  if (hiddenmenu.classList.contains("on")) {
    //hiddenmenu.classList.remove("on");
    //hiddenmenu.classList.add("on");
    
  } else {
    hiddenmenu.classList.add("on");
    
  }
});

hiddenmenu.addEventListener("mouseleave", () => {
  if (hiddenmenu.classList.contains("on")) {
    hiddenmenu.classList.remove("on");
    
  } else {
    //hiddenmenu.classList.add("on");
  }
});

/*
const xlength = hiddenmenu.getBoundingClientRect().left;
const ylength = hiddenmenu.getBoundingClientRect().top;
const xwidth = hiddenmenu.clientWidth;
const yheight = hiddenmenu.clientHeight;
*/
/*
window.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;
  if (
    flag == 1 &&
    xlength <= x &&
    x <= xlength + xwidth &&
    ylength <= y &&
    y <= ylength + yheight
  ) {
    if (hiddenmenu.classList.contains("on")) {
      hiddenmenu.classList.remove("on");
      hiddenmenu.classList.add("on");
    } else {
      hiddenmenu.classList.add("on");
    }
  } else {
    if (hiddenmenu.classList.contains("on")) {
      hiddenmenu.classList.remove("on");
      //if (flag == 1) {
      //flag = 0;
      //}
    } else {
      //hiddenmenu.classList.add("on");
    }
  }
});
*/
//if (hiddenmenu.classList.contains("on")) {
const menutop = document.querySelector("#category > div:nth-child(1) > a");
console.log(menutop);
const menubottom = document.querySelector("#category > div:nth-child(2) > a");
console.log(menubottom);
const menuouter = document.querySelector("#category > div:nth-child(3) > a");
console.log(menuouter);
const menuaccessory = document.querySelector(
  "#category > div:nth-child(4) > a"
);
console.log(menuaccessory);
const firstul = document.querySelectorAll(".hiddenmenu > ul:nth-child(1) > li");
//console.log(firstul);
const secondul = document.querySelectorAll(
  ".hiddenmenu > ul:nth-child(2) > li"
);
//console.log(secondul);
const thirdul = document.querySelectorAll(".hiddenmenu > ul:nth-child(3) > li");
//console.log(thirdul);
const fourthul = document.querySelectorAll(
  ".hiddenmenu > ul:nth-child(4) > li"
);
//console.log(fourthul);
let size = firstul.length;
for (let i = 0; i < size; i++) {
  firstul[i].addEventListener("mouseover", () => {
    menutop.style.color = "skyblue";
  });
  firstul[i].addEventListener("mouseleave", () => {
    menutop.style.color = "black";
  });
  //console.log(firstul[i]);
  secondul[i].addEventListener("mouseover", () => {
    menubottom.style.color = "skyblue";
  });
  secondul[i].addEventListener("mouseleave", () => {
    menubottom.style.color = "black";
  });
  //console.log(secondul[i]);
  thirdul[i].addEventListener("mouseover", () => {
    menuouter.style.color = "skyblue";
  });
  thirdul[i].addEventListener("mouseleave", () => {
    menuouter.style.color = "black";
  });
  //console.log(thirdul[i]);
  fourthul[i].addEventListener("mouseover", () => {
    menuaccessory.style.color = "skyblue";
  });
  fourthul[i].addEventListener("mouseleave", () => {
    menuaccessory.style.color = "black";
  });
  //console.log(fourthul[i]);
}
//}
