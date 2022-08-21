const checkbox = document.querySelector("#theme-selector");
const root = document.querySelector(":root");
const body = document.querySelector("body");
const bodyBackground = document.querySelector(".body-background");
const headerTitle = document.querySelector("header>h1");
const h2 = document.querySelector("h2");
const sliderRound = document.querySelector(".slider-round");
const backgroundCover = document.querySelector(".background-cover");
const socials = document.querySelector(".socials");
const followersText = document.querySelector(".followers-text");
const overviewTitle = document.querySelector("div>h1");
const cardSecondary = document.querySelector(".card-secondary");
const accountAction = document.querySelector(".account-action");
const accountActionNumber = document.querySelector(".account-action-number");
const footer = document.querySelector("footer");

function changeTheme() {
  if (checkbox.checked) {
    root.style.setProperty("--color-theme-card-background", "var(--color-dark-theme-blue3)");


  } else {
    root.style.setProperty("--color-theme-card-background", "var(--color-light-theme-blue2)");

  }
}