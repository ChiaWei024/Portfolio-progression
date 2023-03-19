// active nav bar underline
let navAnchor = document.querySelector(".navAnchor");
navAnchor.querySelectorAll("li").forEach((list) => {
  list.addEventListener("mouseover", () => {
    list.classList.toggle("active");
    //
    chkIsActive(list);
  });
  list.addEventListener("mouseout", () => {
    list.classList.toggle("active");
    //
    chkIsActive(list);
  });
});
// Check is current list "active", if true -> underline, else no underline
function chkIsActive(list) {
  if (!(window.innerWidth <= 800)) {
    if (list.classList.contains("active")) {
      list.style.borderBottom = "2px solid white";
      list.style.transform = "translateY(-15%)";
    } else {
      list.style.borderBottom = "none";
      list.style.transform = "none";
    }
  } else {
    //innerWidth <= 800
    list.style.transition = "none";
    if (list.classList.contains("active")) {
      list.style.boxShadow =
        "0px 1px 2px rgb(26, 26, 26), inset 0px 1px 2px rgb(26, 26, 26)";
      list.style.transform = "translateY(0%)";
    } else {
      list.style.boxShadow = "none";
      list.style.transform = "none";
    }
  }

  // apply for both case
  //
}

// nav collaspe
// init chk (chk when page first start)
let ulHeight = window.getComputedStyle(navAnchor).height;
if (window.innerWidth <= 800) {
  if (!navAnchor.classList.contains("flagCollaspe")) {
    navAnchor.style.display = "none";
    navAnchor.classList.add("flagCollaspe");
  }
  // nav position
  if (!(ulHeight == "0px")) {
    navAnchor.style.height = "0px";
    // update
    ulHeight = window.getComputedStyle(navAnchor).height;
  }
} else {
  if (navAnchor.classList.contains("flagCollaspe")) {
    navAnchor.style.display = "flex";
    navAnchor.classList.remove("flagCollaspe");
  }
  // nav position
  if (!(ulHeight == "32px")) {
    navAnchor.style.height = "2rem";
    //update
    ulHeight = window.getComputedStyle(navAnchor).height;
  }
}
// resize chk
addEventListener("resize", () => {
  if (window.innerWidth <= 800) {
    if (!navAnchor.classList.contains("flagCollaspe")) {
      navAnchor.style.display = "none";
      navAnchor.classList.add("flagCollaspe");
    }
    // nav position
    if (!(ulHeight == "0px")) {
      navAnchor.style.height = "0px";
      // update
      ulHeight = window.getComputedStyle(navAnchor).height;
    }
    // remove nav underline effect
  } else {
    if (navAnchor.classList.contains("flagCollaspe")) {
      navAnchor.style.display = "flex";
      navAnchor.classList.remove("flagCollaspe");
    }
    // nav position
    if (!(ulHeight == "32px")) {
      navAnchor.style.height = "2rem";
      //update
      ulHeight = window.getComputedStyle(navAnchor).height;
    }
  }
});

// menu open and close
let menu = document.querySelector(".material-symbols-outlined");
menu.addEventListener("click", navCollaspe);

// nav collaspe on achor click
navAnchor.querySelectorAll("li").forEach((list) => {
  list.querySelector("a").addEventListener("click", navCollaspe);
});
// nac collaspe function
function navCollaspe() {
  if (navAnchor.classList.contains("flagCollaspe")) {
    navAnchor.style.display = "flex";
  } else {
    navAnchor.style.display = "none";
  }
  navAnchor.classList.toggle("flagCollaspe");
}
