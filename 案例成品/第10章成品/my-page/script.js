// 单击筛选按钮后，只显示对应分类的作品
var buttons = document.querySelectorAll(".filter-btn");
var works = document.querySelectorAll(".work");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    var filter = button.getAttribute("data-filter");

    buttons.forEach(function (b) { b.classList.remove("active"); });
    button.classList.add("active");

    works.forEach(function (work) {
      var match = filter === "all" || work.getAttribute("data-category") === filter;
      work.classList.toggle("hidden", !match);
    });
  });
});
