window.addEventListener("DOMContentLoaded", () => {
  console.log("ready");
});

document.getElementById("desc-btn-purple")
    .addEventListener("click", () => {
      toggleStates()
    });

function toggleStates() {
  const purpleBg = document.getElementById("container-purple");
  const blackBg = document.getElementById("container-black");

  purpleBg.style.display = (
      purpleBg.style.display === "block" ? "none" : "block");

  blackBg.style.display = (
      blackBg.style.display === "none" ? "block" : "none");
}

document.getElementById("desc-btn-black")
    .addEventListener("click", () => {
      toggleStates();
    });

