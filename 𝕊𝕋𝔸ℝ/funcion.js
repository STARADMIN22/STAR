const cursorCircle = document.createElement("div");
cursorCircle.className = "cursor-circle";
document.body.appendChild(cursorCircle);

document.addEventListener("mousemove", (e) => {
  cursorCircle.style.top = `${e.clientY - 250}px`;
  cursorCircle.style.left = `${e.clientX - 250}px`;
});