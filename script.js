function handleSubmit() {
  // Lấy giá trị của input email và chuyển sang dạng in thường
  const emailValue = document.getElementById("email").value.toLowerCase();

  // Lấy element của thẻ p hiển thị lỗi
  const errorEmail = document.getElementById("error-email");

  // Điều kiện để là 1 email đúng
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Dùng match để kiểm tra với email được nhập
  const check = emailValue.match(regex);

  // Lấy phần chứa thông tin user
  const sectionContent = document.querySelector(
    "#personal-info .section-content"
  );

  // Lấy element để kiểm soát submit
  const submitControl = document.querySelector(".form-email");

  if (check) {
    sectionContent.style.display = "block";
    submitControl.style.display = "none";
    errorEmail.innerHTML = "";
  } else {
    errorEmail.innerHTML = "Hãy nhập đúng định dạng email";
  }
}

// Dùng DOM thiết kế phần ẩn hiện View more/view less //

document.addEventListener("DOMContentLoaded", function () {
  const skillTitles = document.querySelectorAll(".job-box-grid .job-title");

  skillTitles.forEach(function (title) {
    title.addEventListener("click", function () {
      const content = this.parentElement.querySelector(".job-content");

      // Tùy chỉnh class để hiển thị/ẩn thông tin
      content.classList.toggle("expanded");
      this.classList.toggle("expanded");
    });
  });
});
