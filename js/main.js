// selects all pages
const $views = document.querySelectorAll('main > div');
// profiles page
const $viewForm = document.querySelector('#view-form');
const $profiles = document.querySelector('.profiles');
const $addProfileBtn = document.querySelector('#add-prof-btn');
// view profile page
const $viewHeader = document.querySelector('#view-header');
const $viewProfileImg = document.querySelector('#view-prof-img');
const $viewProfileDetail = document.querySelector('#view-profile-detail');
const $editProfileBtn = document.querySelector('#edit-profile-btn');
const $backMainBtn = document.querySelector('#back-main-btn');
// add profile page
const $addForm = document.querySelector('#add-form');
const $addProfileImg = document.querySelector('#add-prof-img');
const $addImageUrl = document.querySelector('#add-image-url');
const $addVinInput = document.querySelector('#add-vin-input');
const $addYearInput = document.querySelector('#add-year-input');
const $addCancelBtn = document.querySelector('#add-cancel-btn');
// add submit btn?
// edit profile page
const $editForm = document.querySelector('#edit-form');
const $editProfileImg = document.querySelector('#edit-prof-img');
const $editImageUrl = document.querySelector('#edit-image-url');
const $editVinInput = document.querySelector('#edit-vin-input');
const $editYearInput = document.querySelector('#edit-year-input');
const $editDeleteBtn = document.querySelector('#edit-delete-btn');
const $editCancelBtn = document.querySelector('#edit-cancel-btn');

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
// renders list of profiles
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
    // default check on the first radio button on the list
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
// entry point
// render list of profiles as DOM gets loaded
window.addEventListener('DOMContentLoaded', renderList());
// profiles
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
  // request info on the vehicle from api
  addInfo($addVinInput.value, $addYearInput.value);
  swapView('view');
});
$addImageUrl.addEventListener('input', function (e) {
  $addProfileImg.setAttribute('src', $addImageUrl.value);
});
$addCancelBtn.addEventListener('click', function (e) {
  swapView('profiles');
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
$editForm.addEventListener('submit', function (e) {
  e.preventDefault();
  updateProfile($editVinInput.value, $editYearInput.value);
  swapView('view');
});
$editImageUrl.addEventListener('input', function (e) {
  $editProfileImg.setAttribute('src', $editImageUrl.value);
});
$editCancelBtn.addEventListener('click', function (e) {
  swapView('view');
});
$editDeleteBtn.addEventListener('click', function (e) {
  console.log('deleted');
})
