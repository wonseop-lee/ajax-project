/* exported data */

var data = {
  entries: 0,
  profile: [{
    vin: '',
    make: '',
    model: '',
    year: '',
    trim: '',
    displacement: '',
    hp: ''
  }]
};

var xhr = new XMLHttpRequest();
var apiLink = '';

function getVehicleInfo(vin, year) {
  apiLink = 'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/'
    + vin + '?format=json&modelyear=' + year;
  xhr.open('GET', apiLink);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log('response:', xhr.response);
  });
  xhr.send();
};

window.addEventListener('beforeunload', function(e) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('vehicle-data', dataJSON);
});

var previousProfileData = localStorage.getItem('vehicle-data');
if (previousProfileData !== null) {
  data = JSON.parse(previousProfileData);
};
