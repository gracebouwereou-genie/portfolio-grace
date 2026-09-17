import { typeWriter } from "./utils";

const typingElement = document.querySelector(".typing") as HTMLElement;

if (typingElement) {

    typeWriter(typingElement, "Développeur Web | Étudiante IFNTI", 80);

}