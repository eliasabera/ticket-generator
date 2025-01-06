const uploadBtn = document.querySelector(".image-upload-btn");
const fileinput = document.querySelector(".image-upload");
const displayimage = document.querySelector(".imagepreview");
const displaybox = document.querySelector(".image-container");
const form = document.querySelector(".form");
const removeBtn = document.querySelector(".removeImage");
const changeBtn = document.querySelector(".changeImage");
const text = document.querySelector(".text");
const finalBtn = document.querySelector(".btn-generate");
const final = document.querySelector(".final");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
uploadBtn.addEventListener("click", () => {
  fileinput.click();
});

const validExtension = ["jpg", "png"];
const imageSize = 5 * 1024 * 1024;
fileinput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  uploadBtn.style.display = "none";
  removeBtn.style.display = "block";
  changeBtn.style.display = "block";
  displaybox.style.display = "block";
  text.style.display = "none";
  if (file) {
    const fileExtension = file.name.split(".").pop().toLowerCase();
    if (validExtension.includes(fileExtension)) {
      if (file.size <= imageSize) {
        const reader = new FileReader();
        reader.onload = function (event) {
          displayimage.src = event.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        console.log("invalid size");
      }
    } else {
      console.log("invalid");
    }
  } else {
    console.log("please choose a photo");
  }
});
removeBtn.addEventListener("click", () => {
  fileinput.value = "";
  displayimage.src = "";
  uploadBtn.style.display = "block";
  removeBtn.style.display = "none";
  changeBtn.style.display = "none";
});
changeBtn.addEventListener("click", () => {
  fileinput.click();
});

finalBtn.addEventListener("click", () => {
  form.style.display = "none";
  final.classList.add("show");
});
