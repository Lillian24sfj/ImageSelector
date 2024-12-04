const imageSelect = document.getElementById("imageSelect");
const selectedImage = document.getElementById("selectedImage");

function changeImage() {
  const selectedOption = imageSelect.value;

  if (selectedOption === "image1") {
    selectedImage.src = "./sotHund.jpg";
    selectedImage.style.display = "block";
  } else if (selectedOption === "image2") {
    selectedImage.src = "./sotHund2.jpg";
    selectedImage.style.display = "block";
  } else if (selectedOption === "image3") {
    selectedImage.src = "./sotHund3.jpg";
    selectedImage.style.display = "block";
  } else if (selectedOption === "image4") {
    selectedImage.src = "./sotHund4.jpg";
    selectedImage.style.display = "block";
  } else if (selectedOption === "image5") {
    selectedImage.src = "./sotHund5.jpg";
    selectedImage.style.display = "block";
  } else {
    selectedImage.style.display = "none";
  }
}

imageSelect.addEventListener("change", changeImage);
