const generateGallery = () => {
  const galleryContainer = document.getElementById("gallery");
  galleryContainer.innerHTML = "";

  for (let i = 1; i < 11; i++) {
    const img = document.createElement("img");
    img.src = `https://picsum.photos/500/300?random=${i}`;
    img.alt = "Photo " + i;

    const galleryItem = document.createElement("div");
    galleryItem.classList.add("gallery-item");

    const title = document.createElement("h3");
    title.textContent = `Photo ${i + 1}`;

    galleryItem.appendChild(img);
    galleryItem.appendChild(title);

    galleryContainer.appendChild(galleryItem);
  }
};

window.onload = generateGallery;
