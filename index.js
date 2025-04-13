const images = [
    "image/img1.jpeg",
    "image/img2.jpeg",
    "image/img3.jpeg",
    "image/img4.jpeg"
  ];
  
  let currentIndex = 0;
  const currentImage = document.getElementById("current-image");
  
  function showImage(index) {
    currentImage.src = images[index];
  }
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }
  
  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }
  