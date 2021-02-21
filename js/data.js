/* exported data */

let data = [];

let previousProfileData = localStorage.getItem('vehicle-data');
if (previousProfileData !== null) {
  data = JSON.parse(previousProfileData);
};

function saveToStorage() {
  let dataJSON = JSON.stringify(data);
  localStorage.setItem('vehicle-data', dataJSON);
};

function getInfo(vin, year) {
  const xhr = new XMLHttpRequest();
  const obj = {};
  const apiLink = 'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/' + vin
        + '?format=json&modelyear=' + year;
  xhr.open('GET', apiLink);
  xhr.responseType = 'json';
  xhr.send();
  xhr.addEventListener('load', function () {
    let city = '', state = '', country = '';
    let result = xhr.response;
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
    return obj;
  })
}

function addInfo(vin, year) {
  const obj = getInfo(vin, year);
  obj.photo = $addImageUrl.value;

  data.push(obj);
  saveToStorage();
  renderProfile(data.length - 1);

};

function updateProfile(vin, year) {
  const obj = getInfo(vin, year);
  obj.photo = $editImageUrl.value;

  data.push(obj); /////////
  saveToStorage();
  renderProfile(data.length - 1);
}

function deleteProfile() {

}

// WBXHU7C50K3H44275
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb096ibPU3KBSeNWHnDujBzWakpj5O9hlXdrYbpwgh2_qaqUjQ

// 19XFC2F50GE234074
// https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS0ffAuLvtMqmlj8s7UiroOuJYAoC-zj_5fG_1kBNSkwPpPUD5c

// WBS2U7C02M7H08082
// https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQW8CEr0ek6HSuMpVJeNnWBDW_BtAdwCBw2KkIsZj4fjTS0xwhW

// function addInfo(vin, year) {
//   const xhr = new XMLHttpRequest();
//   const obj = {};
//   const apiLink = 'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/' + vin
//     + '?format=json&modelyear=' + year;

//   xhr.open('GET', apiLink);
//   xhr.responseType = 'json';
//   xhr.send();
//   xhr.addEventListener('load', function () {
//     let city = '', state = '', country = '';
//     let result = xhr.response;
//     obj.vin = vin;
//     obj.year = year;
//     obj.photo = $addImageUrl.value;

//     for (let i = 0; i < result.Results.length; i++) {
//       if (result.Results[i].VariableId === 26) {
//         obj.make = result.Results[i].Value;
//       };
//       if (result.Results[i].VariableId === 28) {
//         obj.model = result.Results[i].Value;
//       };
//       if (result.Results[i].VariableId === 11) {
//         obj.displacement = result.Results[i].Value;
//       };
//       if (result.Results[i].VariableId === 71) {
//         obj.hp = result.Results[i].Value;
//       };
//       if (result.Results[i].VariableId === 31) {
//         city = result.Results[i].Value;
//       };
//       if (result.Results[i].VariableId === 77 && result.Results[i].Value !== null) {
//         state = (', ' + result.Results[i].Value);
//       };
//       if (result.Results[i].VariableId === 75) {
//         country = (', ' + result.Results[i].Value);
//       };
//     };
//     obj.factory = city + state + country;
//     data.push(obj);
//     saveToStorage();
//     renderProfile(data.length - 1);
//   });
// };
