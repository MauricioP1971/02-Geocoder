const injectCoordinates = (coordinates) => {
  const whateverList = document.querySelector('.whatever');
  whateverList.insertAdjacentHTML('beforeend', `<li>${coordinates.lng}, ${coordinates.lat}</li>`);
};

export { injectCoordinates };
