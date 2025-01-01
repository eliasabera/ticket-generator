const uploadBtn = document.querySelector(".image-upload-btn");
const fileinput = document.querySelector(".image-upload");
const displayimage = document.querySelector(".imagepreview");
const displaybox = document.querySelector(".image-prev");
const text = document.querySelector(".text");

uploadBtn.addEventListener("click", () => {
  fileinput.click();
});
fileinput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      displayimage.src = event.target.result;
    };
    reader.readAsDataURL(file);
  } else {
    console.log("hi");
  }
});
