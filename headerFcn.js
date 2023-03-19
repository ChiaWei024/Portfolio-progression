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
let eventAdded = false;
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
    //
    if (!eventAdded) {
      eventAdded = true;
      // add event
      // nav collaspe on achor click *only when innerWidth <= 800px*
      navAnchor.querySelectorAll("li").forEach((list) => {
        list.querySelector("a").addEventListener("click", navCollaspe);
      });
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
    //
    // remove collaspe event when innerWidth > 800px
    if (eventAdded) {
      eventAdded = false;
      navAnchor.querySelectorAll("li").forEach((list) => {
        list.querySelector("a").removeEventListener("click", navCollaspe);
      });
    }
  }
});

// menu open and close
let menu = document.querySelector(".material-symbols-outlined");
menu.addEventListener("click", navCollaspe);

// // nav collaspe on achor click *only when innerWidth <= 800px*
// navAnchor.querySelectorAll("li").forEach((list) => {
//   list.querySelector("a").addEventListener("click", navCollaspe);
// });
// naV collaspe function
function navCollaspe() {
  if (navAnchor.classList.contains("flagCollaspe")) {
    navAnchor.style.display = "flex";
  } else {
    navAnchor.style.display = "none";
  }
  navAnchor.classList.toggle("flagCollaspe");
}
