const imageSelect = document.getElementById("imageSelect");
const selectedImage = document.getElementById("selectedImage");

function changeImage() {
  const selectedOption = imageSelect.value;

  if (selectedOption === "image1") {
    selectedImage.src = "./chihuahua.jpg";
    selectedImage.style.display = "block";
  } else if (selectedOption === "image2") {
    selectedImage.src = "./briller.jpg";
    selectedImage.style.display = "block";
  } else if (selectedOption === "image3") {
    selectedImage.src = "./hatt.jpg";
    selectedImage.style.display = "block";
  } else if (selectedOption === "image4") {
    selectedImage.src = "./tenner.jpg";
    selectedImage.style.display = "block";
  } else if (selectedOption === "image5") {
    selectedImage.src = "./skinn.jpg";
    selectedImage.style.display = "block";
  } else {
    selectedImage.style.display = "none";
  }
}

imageSelect.addEventListener("change", changeImage);
