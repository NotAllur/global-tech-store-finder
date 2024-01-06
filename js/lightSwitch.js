function lightSwitch() {
  const themeLink = document.getElementById("theme");
  const lightSwitch = document.getElementById("lightSwitch");

  if (themeLink.getAttribute("href") === "css/dark.css") {
    setTheme("light", themeLink, lightSwitch);
  } else {
    setTheme("dark", themeLink, lightSwitch);
  }
}

function setTheme(theme, themeLink, lightSwitch) {
  if (theme === "light") {
    themeLink.setAttribute("href", "css/light.css");
    lightSwitch.src = "media/moon-svgrepo-com.svg";
    localStorage.setItem("theme", "light");
  } else {
    themeLink.setAttribute("href", "css/dark.css");
    lightSwitch.src = "media/day-sunny-svgrepo-com.svg";
    localStorage.setItem("theme", "dark");
  }
}

function loadTheme() {
  const themePreference = localStorage.getItem("theme");

  if (
    themePreference === "light" ||
    (themePreference === null &&
      window.matchMedia("(prefers-color-scheme: light)").matches)
  ) {
    setTheme(
      "light",
      document.getElementById("theme"),
      document.getElementById("lightSwitch")
    );
  } else {
    setTheme(
      "dark",
      document.getElementById("theme"),
      document.getElementById("lightSwitch")
    );
  }
}

document.getElementById("lightSwitch").addEventListener("click", lightSwitch);
window.onload = loadTheme;
