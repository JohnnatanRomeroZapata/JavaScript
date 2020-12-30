'use strict';

class WorkOut {
  id = (Date.now() + '').slice(-10);
  date = new Date();
  clicks = 0;

  constructor(coords, distance, duration) {
    this.coords = coords; //[lat,lng]
    this.distance = distance;
    this.duration = duration;
  }

  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }

  click() {
    this.clicks++;
  }
}

class Running extends WorkOut {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    //min/Km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends WorkOut {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    //Km/h
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

///////////////////////////////////////////////////////////////////////////
//APPLICATION ARCHITECTURE

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class App {
  #map;
  #mapEvent;
  #arrayOfWorkouts = [];
  #mapZoomLevel = 14;

  constructor() {
    //Get user's position
    this._getPosition();

    //Get dat adfrom local storage
    this._getLocalStorage();

    //Attach event handlers
    form.addEventListener('submit', this._newWorkout.bind(this));

    inputType.addEventListener('change', this._toggleElevationField);

    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
  }

  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        //loadMap is treated as a regular function not as a method. In regular functions call the "this" key word is set as undefined. That is why we have to bind the "this" key word
        this._loadMap.bind(this),
        function () {
          alert('Could not get your position');
        }
      );
    }
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(`https://www.google.ca/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude];

    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    //   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    //Handling clicks on map
    this.#map.on('click', this._showForm.bind(this));

    //Rendering markers
    this.#arrayOfWorkouts.forEach(theWorkout =>
      this._renderWorkoutMarker(theWorkout)
    );
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _newWorkout(e) {
    const validatingInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));

    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    e.preventDefault();

    //Get data form FORM
    const type = inputType.value;
    const distance = Number(inputDistance.value);
    const duration = Number(inputDuration.value);

    //If workout running, create running object
    if (type === 'running') {
      const cadence = Number(inputCadence.value);

      //Check if data is valid
      if (
        !validatingInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        //The Number.isFinite() method determines whether a value is a finite number.
        return alert('Inputs have to be positive numbers');
      workout = new Running([lat, lng], distance, duration, cadence);
    }

    //If workout cycling, create cycling object
    if (type === 'cycling') {
      const elevation = Number(inputElevation.value);

      //Check if data is valid
      if (
        !validatingInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        //The Number.isFinite() method determines whether a value is a finite number.
        return alert('Inputs have to be positive numbers');

      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    //Add new object to workout array
    this.#arrayOfWorkouts.push(workout);

    //Render workout on map as markek
    this._renderWorkoutMarker(workout);

    //Render workout on list
    this._renderWorkoutList(workout);

    //Hide form and Clear input fields
    this._hideForm();

    //Set local storage to all workouts
    this._setLocalStorage();
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️ ' : '🚴‍♀️ '}${workout.description}`
      )
      .openPopup();
  }

  _renderWorkoutList(workout) {
    let html = `
      <li class="workout workout--${workout.type}" data-id="${workout.id}">
        <h2 class="workout__title">${workout.description}</h2>
        <div class="workout__details">
          <span class="workout__icon">${
            workout.type === 'running' ? '🏃‍♂️ ' : '🚴‍♀️ '
          }</span>
          <span class="workout__value">${workout.distance}</span>
          <span class="workout__unit">km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⏱</span>
          <span class="workout__value">${workout.duration}</span>
          <span class="workout__unit">min</span>
        </div>
      `;

    if (workout.type === 'running') {
      html += `
        <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.pace.toFixed(1)}</span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.cadence}</span>
            <span class="workout__unit">spm</span>
          </div>
      </li>
      `;
    }

    if (workout.type === 'cycling') {
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.speed}</span>
          <span class="workout__unit">km/h</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⛰</span>
          <span class="workout__value">${workout.elevationGain}</span>
          <span class="workout__unit">m</span>
        </div>
      </li>
      `;
    }

    form.insertAdjacentHTML('afterend', html);
  }

  _hideForm() {
    //Empty inputs
    inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value =
      '';

    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }

  _moveToPopup(e) {
    const workoutEl = e.target.closest('.workout');

    if (!workoutEl) return;

    const workout = this.#arrayOfWorkouts.find(
      w => w.id === workoutEl.dataset.id
    );

    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });

    //using the public interface
    //workout.click();
  }

  _setLocalStorage() {
    /*
      The read-only localStorage property allows you to access a Storage object for the Document's origin; the stored data is saved across browser sessions. 
      localStorage is similar to sessionStorage, except that while data stored in localStorage has no expiration time, data stored in sessionStorage gets 
      cleared when the page session ends — that is, when the page is closed.

      The setItem(keyname, value) method of the Storage interface, when passed a key name and value, will add that key to the given Storage object, or update that key's 
      value if it already exists.

      The JSON.stringify() method converts a JavaScript object or value to a JSON string,
    */
    localStorage.setItem('workouts', JSON.stringify(this.#arrayOfWorkouts));
  }

  /*
  The getItem() method of the Storage interface, when passed a key name, will return that key's value, or null if the key does not exist, in the given 
  Storage object
  */
  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));

    if (!data) return;

    this.#arrayOfWorkouts = data;

    this.#arrayOfWorkouts.forEach(theWorkout =>
      this._renderWorkoutList(theWorkout)
    );
  }

  reset() {
    localStorage.removeItem('workouts');
    location.reload();
  }
}

const app = new App();
