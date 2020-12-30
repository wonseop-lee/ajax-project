const $viewForm = document.querySelector('#view-form');
const $addProfileBtn = document.querySelector('#add-prof-btn');

const $addForm = document.querySelector('#add-form');
const $addProfileImg = document.querySelector('#add-prof-img');
const $addImageUrl = document.querySelector('#add-image-url');
const $addVinInput = document.querySelector('#add-vin-input');
const $addYearInput = document.querySelector('#add-year-input');
const $addCancelBtn = document.querySelector('#add-cancel-btn');

const $views = document.querySelectorAll('main > div');

const $profiles = document.querySelector('.profiles');

const $editProfileBtn = document.querySelector('#edit-profile-btn');
const $backMainBtn = document.querySelector('#back-main-btn');

const $viewProfileImg = document.querySelector('#view-prof-img');
const $viewProfileDetail = document.querySelector('#view-profile-detail');
const $viewHeader = document.querySelector('#view-header');

function swapView(dataView) {
  for (let i = 0; i < $views.length; i++) {
    if ($views[i].dataset.view === dataView) {
      $views[i].setAttribute('class', 'shown');
    } else {
      $views[i].setAttribute('class', 'hidden');
    }
  }
};

function renderProfile(id) {

  $viewProfileImg.setAttribute('src', data[id].photo);
  $viewProfileDetail.innerHTML = "";

  let $vin = document.createElement('h4');
  let $year = document.createElement('h4');
  let $make = document.createElement('h4');
  let $model = document.createElement('h4');
  let $displacement = document.createElement('h4');
  let $hp = document.createElement('h4');
  let $factory = document.createElement('h4');

  $vin.textContent = 'VIN: ' + data[id].vin;
  $year.textContent = 'Year: ' + data[id].year;
  $make.textContent = 'Make: ' + data[id].make;
  $model.textContent = 'Model: ' + data[id].model;
  let dispDecimal = data[id].displacement.split('.');
  $displacement.textContent = 'Displacement: ' + dispDecimal[0] + ' cc';
  $hp.textContent = 'Horsepower: ' + data[id].hp + ' hp';
  $factory.textContent = 'Factory: ' + data[id].factory;

  $viewProfileDetail.append($vin, $year, $make, $model, $displacement, $hp, $factory);

  $viewHeader.textContent = data[id].year + ' ' + data[id].make + ' ' + data[id].model;
};

function renderList() {
  $profiles.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    let $entryDiv = document.createElement('div');
    let $input = document.createElement('input');
    let $label = document.createElement('label');

    $entryDiv.setAttribute('class', 'entry');

    $input.setAttribute('type', 'radio');
    $input.setAttribute('id', 'entry' + i);
    $input.setAttribute('name', 'profile');
    $input.setAttribute('value', i);

    if (i === 0) {
      $input.setAttribute('checked', "");
    };

    $label.setAttribute('for', 'entry' + i);
    $label.textContent = data[i].year + ' ' + data[i].make + ' ' + data[i].model
      + ' ' + data[i].vin;

    $entryDiv.append($input, $label);
    $profiles.append($entryDiv);
  };
};

// profiles
window.addEventListener('DOMContentLoaded', renderList());

$viewForm.addEventListener('submit', function (e) {
  e.preventDefault();
  let viewFormData = new FormData($viewForm);
  let entryToView = viewFormData.get('profile');
  renderProfile(entryToView);
  swapView('view');
});

$addProfileBtn.addEventListener('click', function (e) {
  swapView('add');
});

// add
$addForm.addEventListener('submit', function (e) {
  e.preventDefault();
  getVehicleInfo($addVinInput.value, $addYearInput.value);


  //
  swapView('view');
});

$addCancelBtn.addEventListener('click', function (e) {
  swapView('profiles');
});

$addImageUrl.addEventListener('input', function (e) {
  $addProfileImg.setAttribute('src', $addImageUrl.value);
});

// view
$editProfileBtn.addEventListener('click', function (e) {
  swapView('edit');
});

$backMainBtn.addEventListener('click', function (e) {
  renderList();
  swapView('profiles');
});

// edit
// issue 4

// delete
// issue 5

// WBXHU7C50K3H44275
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb096ibPU3KBSeNWHnDujBzWakpj5O9hlXdrYbpwgh2_qaqUjQ

// 19XFC2F50GE234074
// https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS0ffAuLvtMqmlj8s7UiroOuJYAoC-zj_5fG_1kBNSkwPpPUD5c

// WBS2U7C02M7H08082
// https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQW8CEr0ek6HSuMpVJeNnWBDW_BtAdwCBw2KkIsZj4fjTS0xwhW
