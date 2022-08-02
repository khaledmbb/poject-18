const headLi = document.querySelectorAll("nav ul li");
headLi.forEach((element) => {
  element.onclick = () => {
    headLi.forEach((ele) => {
      ele.classList.remove("active-link");
    });
    element.classList.add("active-link");
  };
});

const navbar = document.querySelector("nav");
const navbarCont = document.querySelector("nav .container");
window.addEventListener("scroll", () => {
  if (this.scrollY >= 200) {
    navbar.style.backgroundColor = "rgb(88, 70, 249,0.95)";
    navbarCont.style.cssText =
      "padding-top: 0.4rem;padding-bottom: 0.4rem;transition: 0.4s;";
  } else {
    navbar.style.backgroundColor = "transparent";
    navbarCont.style.cssText =
      "padding-top: 0.8rem;padding-bottom: 0.8rem;transition: 0.4s";
  }
});

let add = document.querySelector(".add");
let con = false;
window.addEventListener("scroll", () => {
  let addTop = add.offsetTop;
  let addHeight = add.offsetHeight;
  let wHeight = this.innerHeight;
  let wYPage = this.pageYOffset;
  if (wYPage > addTop + addHeight - wHeight - 200) {
    if (!con) {
      const myAdd = document.querySelectorAll(".add .pt-3");
      myAdd.forEach((element) => {
        const addValue = element.dataset.end;
        const startAddition = setInterval(() => {
          element.textContent++;
          if (element.textContent == addValue) {
            clearInterval(startAddition);
          }
        }, 1);
      });
    }
    con = true;
  }
});

const blogLiL = document.querySelectorAll(".blogs ul li");
const blogLi = Array.from(blogLiL);
const blogs = document.querySelectorAll(".blogs .father .b");
const blogField = Array.from(blogs);

blogLi.forEach((element) => {
  element.onclick = () => {
    blogLi.forEach((ele) => {
      ele.classList.remove("active");
    });
    element.classList.add("active");
    blogField.forEach((el) => {
      el.style.display = "none";
    });
    document.querySelector(element.dataset.blog).style.display = "block";
  };
});

const portLi = document.querySelectorAll(".portfolio ul li");
const portImg = document.querySelectorAll(".portfolio .gallery .i");
portLi.forEach((element) => {
  element.onclick = () => {
    portLi.forEach((elem) => {
      elem.classList.remove("active");
    });
    element.classList.add("active");
    portImg.forEach((ele) => {
      ele.style.display = "none";
    });
    document.querySelectorAll(element.dataset.portfolio).forEach((el) => {
      el.style.display = "block";
    });
  };
});

const service1 = document.querySelector("section");

let headPopup = document.createElement("div");
headPopup.className =
  "text-center popup d-flex justify-content-center align-items-center";
let loadingPopup = document.createElement("div");
loadingPopup.className = "spinner-border text-white";
let textLoading = document.createElement("span");

loadingPopup.appendChild(textLoading);
headPopup.appendChild(loadingPopup);

document.body.appendChild(headPopup);
setTimeout(() => {
  headPopup.classList.add("display");
}, 3000);

let liTake = document.querySelectorAll("nav ul li");

liTake.forEach((element) => {
  let take = element.dataset.take;
  element.onclick = () => {
    document.querySelector(take).scrollIntoView({
      behavior: "smooth",
    });
  };
});

let liTake2 = document.querySelectorAll(".offcanvas ul li");

liTake2.forEach((element) => {
  let take1 = element.dataset.take;
  element.onclick = () => {
    document.querySelector(take1).scrollIntoView({
      behavior: "smooth",
    });
    liTake2.forEach((ele) => {
      ele.classList.remove("active-li");
    });
    element.classList.add("active-li");
  };
});

let liTake3 = document.querySelector(".offcanvas ul .liHidden");
let liTake4 = document.querySelector(".offcanvas ul li .ulHidden");
liTake3.onclick = () => {
  liTake4.classList.toggle("ok");
};
let liTake5 = document.querySelector(".offcanvas ul .liHidden1");
let liTake6 = document.querySelector(".offcanvas ul li .ulHidden1");
liTake5.onclick = () => {
  liTake6.classList.toggle("ob");
};

let liTake22 = document.querySelectorAll("footer ul li");

liTake22.forEach((element) => {
  let take11 = element.dataset.take;
  element.onclick = () => {
    document.querySelector(take11).scrollIntoView({
      behavior: "smooth",
    });
  };
});

let makeDown = document.querySelector(".svg");

makeDown.onclick = () => {
  service1.scrollIntoView({
    behavior: "smooth",
  });
};
let makeUp = document.querySelector(".go-up");

makeUp.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  console.log(makeUp);
};

window.addEventListener("scroll", () => {
  if (this.scrollY >= service1.offsetTop) {
    makeUp.classList.remove("show");
  } else {
    makeUp.classList.add("show");
  }
});
