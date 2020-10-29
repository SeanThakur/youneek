import {IonButton, IonContent, IonItem, IonPage, IonSearchbar } from '@ionic/react';
import React ,{useEffect} from 'react';
import './Home.css';

let map: google.maps.Map;
let infoWindow: google.maps.InfoWindow;
const myLatLng = { lat: 19.108781, lng: 432.870351 };
const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let labelIndex = 0;

const showMap = () => {
  const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: myLatLng,
    zoom: 12,
    disableDefaultUI: true,
  });
  setMarkers(map);
  infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");
  locationButton.textContent = "Current Location";
  locationButton.classList.add("custom-map-control-button");

  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);

  locationButton.addEventListener("click", () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: Position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(
  browserHasGeolocation: boolean,
  infoWindow: google.maps.InfoWindow,
  pos: google.maps.LatLng
) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

const beaches: [string, number, number, number][] = [
  ["kohinoor", 19.116625, 72.862358, 4],
  ["Bombay Cambridge", 19.1054, 72.8622, 5],
  ["Persian Darbar", 19.1082, 72.8841, 3],
  ["Sakinaka Police Station", 19.1116107, 72.8957298, 1],
];

const setMarkers = (map: google.maps.Map) => {
  // Shapes define the clickable region of the icon. The type defines an HTML
  // <area> element 'poly' which traces out a polygon as a series of X,Y points.
  // The final coordinate closes the poly by connecting to the first coordinate.

  let contentString;

  for(let i = 0; i < beaches.length; i++) {
    let b = beaches[i][0];
    contentString = b.toString()
  }

  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 200,
  });

  for (let i = 0; i < beaches.length; i++) {
    const beach = beaches[i];
    const marker = new google.maps.Marker({
      position: { lat: beach[1], lng: beach[2] },
      map,
      label: labels[labelIndex++ % labels.length],
      zIndex: beach[3]
    });
    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });
  }
}

const Home: React.FC = () => {

  useEffect(() => {
    showMap();
  }, [showMap]);

  return (
    <IonPage>
       <IonContent>
          <IonItem>
            <IonSearchbar id="searchBar"></IonSearchbar>
              <IonButton href='/chat' size="default">
                Chat
              </IonButton>
          </IonItem>
         
            <div id="map"></div>
          
       </IonContent>
    </IonPage>
  );
};

export default Home;
