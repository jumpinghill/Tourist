document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".openMOgnb").addEventListener("click", function () {
    document.querySelector(".header_cont").style.display = "block";
  });

  document.querySelector(".closePop").addEventListener("click", function () {
    document.querySelector(".header_cont").style.display = "none";
  });
});
