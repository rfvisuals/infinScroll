//
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');
//using 'let' since photosArray will change each request
let photosArray = [];
//Unsplash API
const count = 10;
const apiKey = "4XRvofhAC2DZaStu1ONz3-r0IH0cSgoJ4LTflTROM7k";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
//Helper function to set attributes on DOM elements
function setAttributes(element, attributes) {
  for(const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}
//Create Elements for Links & Photo, add to DOM
const displayPhotos = () => {
  console.log(photosArray)
  photosArray.forEach((photo) => {
    //Create <a> link to Unsplah
    const item = document.createElement('a');
    setAttributes(item, {
      href: photo.links.html,
      target: "_blank",
    });
    //Create <img> for photo
    const img = document.createElement('img');
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    //Append img inside <a>, append both to imageContaienr
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

//Fetch Unsplash API
const getPhotos = async function() {
  try {
    const res = await fetch(apiUrl);
    photosArray = await res.json();
    displayPhotos()
  } catch(error) {

  }
}

getPhotos();