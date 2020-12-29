/* exported data */

var data = {
  entries: 0,
  profile: []
};

var xhr = new XMLHttpRequest();
var apiLink = '';
var obj = {};

function getVehicleInfo(vin, year) {
  apiLink = 'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/'
    + vin + '?format=json&modelyear=' + year;
  xhr.open('GET', apiLink);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    let result = xhr.response;
    console.log('response:', result);
    obj.vin = vin;
    obj.make = result.Results[6].Value;
    obj.model = result.Results[12].Value;
    obj.year = year;
    obj.factory = result.Results[10].Value + ', ' + result.Results[14].Value;
    obj.displacement = result.Results[71].Value;
    obj.hp = result.Results[82].Value;
    data.profile.push(obj);
    data.entries++;
  });
  xhr.send();
  console.log(data);
};

window.addEventListener('beforeunload', function(e) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('vehicle-data', dataJSON);
});

var previousProfileData = localStorage.getItem('vehicle-data');
if (previousProfileData !== null) {
  data = JSON.parse(previousProfileData);
};
