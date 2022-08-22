const checkbox = document.querySelector("#theme-selector");
const root = document.querySelector(":root");
const sliderRound = document.querySelector(".slider-round");
const overviewTitle = document.querySelector("div>h1");

function changeTheme() {
  if (checkbox.checked) {
    root.style.setProperty("--color-theme-background", "var(--color-dark-theme-blue1)");
    root.style.setProperty("--color-theme-top-background", "var(--color-dark-theme-blue2)");
    root.style.setProperty("--color-theme-card-background", "var(--color-dark-theme-blue3)");
    root.style.setProperty("--color-theme-text1", "var(--color-dark-theme-blue4)");
    root.style.setProperty("--color-theme-text2", "white");
    sliderRound.classList.replace("slider-round-light", "slider-round-dark");
    overviewTitle.classList.replace("overview-title-light", "overview-title-dark");
  } else {
    root.style.setProperty("--color-theme-background", "white");
    root.style.setProperty("--color-theme-top-background", "var(--color-light-theme-blue1)");
    root.style.setProperty("--color-theme-card-background", "var(--color-light-theme-blue2)");
    root.style.setProperty("--color-theme-text1", "var(--color-light-theme-blue3)");
    root.style.setProperty("--color-theme-text2", "var(--color-light-theme-blue4)");
    sliderRound.classList.replace("slider-round-dark", "slider-round-light");
    overviewTitle.classList.replace("overview-title-dark", "overview-title-light");
  }
}