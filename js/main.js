const $viewForm = document.querySelector('#view-form');
const $addProfileBtn = document.querySelector('#add-prof-btn');

const $addForm = document.querySelector('#add-form');
const $img = document.querySelector('img');
const $addImageUrl = document.querySelector('#add-image-url');
const $addVinInput = document.querySelector('#add-vin-input');
const $addCancelBtn = document.querySelector('#add-cancel-btn');

const $views = document.querySelectorAll('main > div');

function swapView(dataView) {
  for (let i = 0; i < $views.length; i++) {
    if ($views[i].dataset.view === dataView) {
      $views[i].setAttribute('class', 'shown');
    } else {
      $views[i].setAttribute('class', 'hidden');
    }
  }
};

$viewForm.addEventListener('submit', function (e) {
  e.preventDefault();
  // swapView('view');
});

$addProfileBtn.addEventListener('click', function (e) {
  swapView('add');
});

$addForm.addEventListener('submit', function(e) {
  e.preventDefault();
  getVehicleInfo($addVinInput.value, '2019');
  // swapView('view');
});

$addCancelBtn.addEventListener('click', function(e) {
  swapView('profiles');
});

$addImageUrl.addEventListener('input', function(e) {
  $img.setAttribute('src', $addImageUrl.value);
});


// var form = document.createElement('form');
// var profilesDiv = document.createElement('div');
// WBXHU7C50K3H44275
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb096ibPU3KBSeNWHnDujBzWakpj5O9hlXdrYbpwgh2_qaqUjQ
