console.log("Portfolio IFNTI démarré avec succès 🚀");
import "./navbar";
import "./navbar";
import "./hero";
import "./animations";
import "./darkmode";

const savedTheme = localStorage.getItem("theme");

const toggle = document.getElementById("themeToggle");

if (savedTheme === "dark") {
  toggle!.textContent = "☀️";
} else {
  toggle!.textContent = "🌙";
}