function createImageHtml({ link, alt }) {
  return `
    <a class="images__item__link" href="${link}">
      <img class="images__item__src" src="${link}" alt="${alt}"></img>
    </a>
  `;
}

function createImage({ link, alt }) {
  const newNode = document.createElement("div");
  newNode.classList.add("images__item");
  newNode.innerHTML = createImageHtml({ link, alt });
  return newNode;
}

function addNewImage(item, container) {
  const newNode = createImage(item);
  item.ref = newNode;
  container.appendChild(newNode);
}

function translateLeft(ref, index, left) {
  ref.style.left = `${(index + left) * 70}rem`;
}

function removeFirstImage() {
  const removeItem = images.shift();
  removeItem.ref.remove();
}

const images = [
  {
    link: "src/dan-smedley-FLQeze-RKWU-unsplash.jpg",
    alt: "autumn and mirror",
    left: 0
  },
  {
    link: "src/nong-vang-8fcqlEJzWP4-unsplash.jpg",
    alt: "medieval hideout",
    left: 0
  },
  {
    link: "src/perry-kibler-wUjn6UsYzqw-unsplash.jpg",
    alt: "furniture, tabletop, coffee",
    left: 0
  },
  {
    link: "src/sydney-angove-Qe-yvVDYx0k-unsplash.jpg",
    alt: "Moraine Lake in Baniff",
    left: 0
  },
  {
    link: "src/perry-kibler-wUjn6UsYzqw-unsplash.jpg",
    alt: "furniture, tabletop, coffee",
    left: 0
  },
  {
    link: "src/sydney-angove-Qe-yvVDYx0k-unsplash.jpg",
    alt: "Moraine Lake in Baniff",
    left: 0
  }
];

const container = document.getElementById("images");
images.forEach(item => {
  addNewImage(item, container);
});

const interval = setInterval(() => {
  images.forEach((item, index) => {
    translateLeft(item.ref, index, item.left);
    item.left--;
    // Придумать механизм удаления и добавления фоточки
    // if (item.left + index < -2) {
    //   removeFirstImage();
    //   addNewImage(images[0], container);
    // }
  });
}, 32000);
const timeout = setTimeout(() => {
  clearInterval(interval);
  clearTimeout(timeout);
}, 2000000000);