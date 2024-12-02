const imageSelect = document.getElementById("imageSelect");
const selectedImage = document.getElementById("selectedImage");

function changeImage() {
  const selectedOption = imageSelect.value;

  if (selectedOption === "image1") {
    selectedImage.src = "/søt hund.jpg";
    selectedImage.style.display = "block";
  } else if (selectedOption === "image2") {
    selectedImage.src = "/søt hund2.jpg";
    selectedImage.style.display = "block";
  } else if (selectedOption === "image3") {
    selectedImage.src = "/søt hund 3.jpg";
    selectedImage.style.display = "block";
  } else if (selectedOption === "image4") {
    selectedImage.src = "/søt hund 4.jpg";
    selectedImage.style.display = "block";
  } else if (selectedOption === "image5") {
    selectedImage.src = "/søt hund 5.jpg";
    selectedImage.style.display = "block";
  } else {
    selectedImage.style.display = "none";
  }
}

imageSelect.addEventListener("change", changeImage);
