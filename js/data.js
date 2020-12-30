/* exported data */

var data = [];

var xhr = new XMLHttpRequest();
var apiLink = '';
var obj = {};

function getVehicleInfo(vin, year) {
  apiLink = 'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/' + vin
          + '?format=json&modelyear=' + year;
  xhr.open('GET', apiLink);
  xhr.responseType = 'json';
  xhr.send();
  xhr.addEventListener('load', function () {
    let city = '';
    let state = '';
    let country = '';
    let result = xhr.response;
    // console.log('response:', result);
    obj.vin = vin;
    obj.year = year;
    obj.photo = $addImageUrl.value;

    for (let i = 0; i < result.Results.length; i++) {
      if (result.Results[i].VariableId === 26) {
        obj.make = result.Results[i].Value;
      };
      if (result.Results[i].VariableId === 28) {
        obj.model = result.Results[i].Value;
      };
      if (result.Results[i].VariableId === 11) {
        obj.displacement = result.Results[i].Value;
      };
      if (result.Results[i].VariableId === 71) {
        obj.hp = result.Results[i].Value;
      };
      if (result.Results[i].VariableId === 31) {
        city = result.Results[i].Value;
      };
      if (result.Results[i].VariableId === 77 && result.Results[i].Value !== null) {
        state = (', ' + result.Results[i].Value);
      };
      if (result.Results[i].VariableId === 75) {
        country = (', ' + result.Results[i].Value);
      };
    };
    obj.factory = city + state + country;
    data.push(obj);
    saveToStorage();
    renderProfile(data.length - 1);
  });
};

function saveToStorage() {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('vehicle-data', dataJSON);
};

var previousProfileData = localStorage.getItem('vehicle-data');
if (previousProfileData !== null) {
  data = JSON.parse(previousProfileData);
};
