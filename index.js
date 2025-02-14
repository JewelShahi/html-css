const generateGallery = () => {
  const galleryContainer = document.getElementById("gallery");
  galleryContainer.innerHTML = "";

  for (let i = 1; i < 21; i++) {
    const img = document.createElement("img");
    img.src = `https://picsum.photos/500/300?random=${i}`;
    img.alt = "Photo " + i;

    const galleryItem = document.createElement("div");
    galleryItem.classList.add("gallery-item");

    const title = document.createElement("h3");
    title.classList.add("image-text");
    title.textContent = `Photo ${i}`;

    const description = document.createElement("div");
    description.classList.add("description");
    description.textContent = `Description for Photo ${i}: A beautiful scene captured during a spontaneous moment.`;

    galleryItem.appendChild(img);
    galleryItem.appendChild(title);
    galleryItem.appendChild(description);

    galleryContainer.appendChild(galleryItem);
  }
};

window.onload = generateGallery;
