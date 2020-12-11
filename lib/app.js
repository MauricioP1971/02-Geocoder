// TODO: Write your JS code in here
import { injectCoordinates } from './map';

const button = document.querySelector(".button");
const userInput = document.querySelector(".mapbox");
button.addEventListener("click", (event) => {
  fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${userInput.value}.json?access_token=pk.eyJ1IjoibWF1cm9wcCIsImEiOiJja2RpbHhneDYwNjk2MzBtcnZrNGZ4d3BjIn0.S85nyhEPbl9AlGqinfKnpQ`)
    .then(response => response.json())
    .then((data) => {
      const coordinates = {
        lng: data.features[0].geometry.coordinates[0],
        lat: data.features[0].geometry.coordinates[1],
      };
      injectCoordinates(coordinates);
    });
});
