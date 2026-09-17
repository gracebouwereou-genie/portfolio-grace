const toggle = document.getElementById("themeToggle") as HTMLButtonElement;
const body = document.body;

// charger état sauvegardé
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.classList.add("dark");
}

// toggle mode
toggle?.addEventListener("click", () => {

  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggle.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    toggle.textContent = "🌙";
  }

});