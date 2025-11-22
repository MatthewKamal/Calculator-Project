const input = document.querySelector(".screen");

// Buttons
const del = document.querySelector(".but1");
const root = document.querySelector(".but2");
const division = document.querySelector(".but3");
const undo = document.querySelector(".but4");
const Num1 = document.querySelector(".but5");
const Num2 = document.querySelector(".but6");
const Num3 = document.querySelector(".but7");
const Mult = document.querySelector(".but8");
const Num4 = document.querySelector(".but9");
const Num5 = document.querySelector(".but10");
const Num6 = document.querySelector(".but11");
const sub = document.querySelector(".but12");
const Num7 = document.querySelector(".but13");
const Num8 = document.querySelector(".but14");
const Num9 = document.querySelector(".but15");
const sum = document.querySelector(".but16");
const decimal = document.querySelector(".but17");
const Num0 = document.querySelector(".but18");
const Equal = document.querySelector(".but19");

function addToScreen(value) {
  input.value += value;
}

[Num0, Num1, Num2, Num3, Num4, Num5, Num6, Num7, Num8, Num9].forEach(
  (btn, i) => {
    btn.addEventListener("click", () => addToScreen(i.toString()));
  }
);

sum.addEventListener("click", () => addToScreen("+"));
sub.addEventListener("click", () => addToScreen("-"));
Mult.addEventListener("click", () => addToScreen("*"));
division.addEventListener("click", () => addToScreen("/"));
decimal.addEventListener("click", () => addToScreen("."));

root.addEventListener("click", () => {
  if (input.value === "") return;
  input.value = Math.sqrt(input.value);
});

undo.addEventListener("click", () => {
  input.value = input.value.slice(0, -1);
});

del.addEventListener("click", () => {
  input.value = "";
});

Equal.addEventListener("click", () => {
  if (input.value === "") return;

  try {
    input.value = eval(input.value);
  } catch {
    input.value = "Error";
  }
});
