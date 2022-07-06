let section1 = document.querySelector(".section1");
const hiddenmenu = document.querySelector(".hiddenmenu");

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
  //console.log(windowlength);

  if (section1length < windowlength) {
    section1.classList.add("fixedsection1");
    hiddenmenu.classList.add("fixedhidden");
  } else {
    section1.classList.remove("fixedsection1");
    hiddenmenu.classList.remove("fixedhidden");
  }
});

//const category = document.querySelectorAll("#category div a");

//let flag = 0;
/*
마우스가 카테고리에 닿은다음에 마우스 커서가 히든메뉴 영역에 올동안 사라지지않고 유지하게.
*/
/*
for (let i = 0; i <= category.length - 1; i++) {
  category[i].addEventListener("mouseover", () => {
    if (hiddenmenu.classList.contains("on")) {
      //hiddenmenu.classList.remove("on");
      //hiddenmenu.classList.add("on");
      flag = 1;
    } else {
      hiddenmenu.classList.add("on");
      flag = 1;
    }
  });

  
  category[i].addEventListener("mouseleave", () => {
    if (hiddenmenu.classList.contains("on")) {
      hiddenmenu.classList.remove("on");
    } else {
      hiddenmenu.classList.add("on");
    }
  });
  
}
*/
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


//aside 화살표 이동
const flowdesk = document.querySelector("#flowdesk > div");
const flowitem = document.querySelectorAll("#flowdesk > div > div");
const itemsize = flowitem[0].clientWidth;

const beforearrow = document.getElementById("beforearrow");
const afterarrow = document.getElementById("afterarrow");
let count = 0;

let banner = setInterval(() => {
  if (count < flowitem.length - 1) {
    count++;
    flowdesk.style.transform = "translateX(" + -itemsize * count + "px)";
  } else if (count === flowitem.length - 1) {
    count = 0;
    flowdesk.style.transform = "translateX(" + -itemsize * count + "px)";
  }
}, 5000);
afterarrow.addEventListener("click", () => {
  clearInterval(banner);
  banner = setInterval(() => {
    if (count < flowitem.length - 1) {
      count++;
      flowdesk.style.transform = "translateX(" + -itemsize * count + "px)";
    } else {
      count = 0;
      flowdesk.style.transform = "translateX(" + -itemsize * count + "px)";
    }
  }, 5000);
  if (count < flowitem.length - 1) {
    count++;
    flowdesk.style.transform = "translateX(" + -itemsize * count + "px)";
  } else {
    count = 0;
    flowdesk.style.transform = "translateX(" + -itemsize * count + "px)";
  }
});

beforearrow.addEventListener("click", () => {
  clearInterval(banner);
  banner = setInterval(() => {
    if (count < flowitem.length - 1) {
      count++;
      flowdesk.style.transform = "translateX(" + -itemsize * count + "px)";
    } else {
      count = 0;
      flowdesk.style.transform = "translateX(" + -itemsize * count + "px)";
    }
  }, 5000);
  if (count > 0) {
    count--;
    flowdesk.style.transform = "translateX(" + -itemsize * count + "px)";
  } else {
    count = flowitem.length - 1;
    flowdesk.style.transform = "translateX(" + -itemsize * count + "px)";
  }
});

//main newproduct 화살표 이동
const main_flowdesk = document.querySelector("#main_flowdesk > div");
const main_flowitem = document.querySelectorAll("#main_flowdesk > div > div");
const main_itemsize = main_flowitem[0].clientWidth;

const main_beforearrow = document.getElementById("main_beforearrow");
const main_afterarrow = document.getElementById("main_afterarrow");
let main_count = 0;
//총 4개에서 한번에 2개씩 보이게 하려면 이동횟수가 총 3번이다.
let main_max_count = main_flowitem.length - 1;

let main_banner = setInterval(() => {
  if (main_count < main_max_count - 1) {
    main_count++;
    main_flowdesk.style.transform =
      "translateX(" + (450 + -(main_itemsize + 50) * main_count) + "px)";
  } else if (main_count === main_max_count - 1) {
    main_count = 0;
    main_flowdesk.style.transform =
      "translateX(" + (450 + -(main_itemsize + 50) * main_count) + "px)";
  }
}, 5000);
main_afterarrow.addEventListener("click", () => {
  clearInterval(main_banner);
  main_banner = setInterval(() => {
    if (main_count < main_max_count - 1) {
      main_count++;
      main_flowdesk.style.transform =
        "translateX(" + (450 + -(main_itemsize + 50) * main_count) + "px)";
    } else if (main_count === main_max_count - 1) {
      main_count = 0;
      main_flowdesk.style.transform =
        "translateX(" + (450 + -(main_itemsize + 50) * main_count) + "px)";
    }
  }, 5000);
  //이동횟수 인덱스는 0인덱스부터 시작하니까 하나가 작아야한다
  if (main_count < main_max_count - 1) {
    main_count++;
    //숫자부분들을 또 괄호로 묶어줘야지 제대로 인식

    main_flowdesk.style.transform =
      "translateX(" + (450 + -(main_itemsize + 50) * main_count) + "px)";
  } else {
    main_count = 0;
    /*
      그러면 translatex(0px)가 되는데요. 그 마지막 인덱스여서 엄청난 - 큰수에서 0px이동하는게 아니라 원래 자리에서 0px 이동한다
    
      속성으로 이동시킨거니까 원래위치가 기준이다.
      */
    main_flowdesk.style.transform =
      "translateX(" + (450 + -(main_itemsize + 50) * main_count) + "px)";
  }
});

main_beforearrow.addEventListener("click", () => {
  clearInterval(main_banner);
  main_banner = setInterval(() => {
    if (main_count < main_max_count - 1) {
      main_count++;
      main_flowdesk.style.transform =
        "translateX(" + (450 + -(main_itemsize + 50) * main_count) + "px)";
    } else if (main_count === main_max_count - 1) {
      main_count = 0;
      main_flowdesk.style.transform =
        "translateX(" + (450 + -(main_itemsize + 50) * main_count) + "px)";
    }
  }, 5000);
  if (main_count > 0) {
    main_count--;
    main_flowdesk.style.transform =
      "translateX(" + (450 + -(main_itemsize + 50) * main_count) + "px)";
  } else {
    main_count = main_max_count - 1;
    main_flowdesk.style.transform =
      "translateX(" + (450 + -(main_itemsize + 50) * main_count) + "px)";
  }
});


//오른쪽 상단바 화살표 누를시 페이지 위아래 이동
// 윗 상단 정의한 변수 let header = document.getElementsByTagName("header");
//이상하게 offsetTop은 쿼리셀렉터로 하면 먹고 겟엘리먼트 태그 네임으로 하면 안먹는다?
let header2=document.querySelector("header");
const uparrow= document.querySelector("#aside2 > div > div:nth-child(1)");
const downarrow=document.querySelector("#aside2 > div > div:nth-child(2)");
const bottom=document.querySelector("#bottom");
let headerTop_position=header2.offsetTop;
console.log(header);
console.log(header2.offsetTop);
let bottom_position=bottom.offsetTop;

uparrow.addEventListener("click",()=>{
  console.log("test");
  window.scroll({top:0, behavior:"smooth"});
});

downarrow.addEventListener("click",()=>{
  window.scroll({top:bottom_position, behavior:"smooth"});
});