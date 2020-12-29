const $viewForm = document.querySelector('#view-form');
const $addProfileBtn = document.querySelector('#add-prof-btn');

const $addForm = document.querySelector('#add-form');
const $img = document.querySelector('img');
const $addImageUrl = document.querySelector('#add-image-url');
const $addVinInput = document.querySelector('#add-vin-input');
const $addYearInput = document.querySelector('#add-year-input');
const $addCancelBtn = document.querySelector('#add-cancel-btn');

const $views = document.querySelectorAll('main > div');

const $profiles = document.querySelector('.profiles');

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
  console.log('This function will swap view to profile view in issue 3');
});

$addProfileBtn.addEventListener('click', function (e) {
  swapView('add');
});

$addForm.addEventListener('submit', function(e) {
  e.preventDefault();
  getVehicleInfo($addVinInput.value, $addYearInput.value);
  swapView('view');
});

$addCancelBtn.addEventListener('click', function(e) {
  swapView('profiles');
});

$addImageUrl.addEventListener('input', function(e) {
  $img.setAttribute('src', $addImageUrl.value);
});

for (let i = 0; i < data.length; i++) {
  let $entryDiv = document.createElement('div');
  let $input = document.createElement('input');
  let $label = document.createElement('label');

  $entryDiv.setAttribute('class', 'entry');
  $input.setAttribute('type', 'radio');
  $input.setAttribute('id', 'entry' + i);
  $input.setAttribute('name', 'profile');
  $label.setAttribute('for', 'entry' + i);
  $label.textContent = data[i].year + ' ' + data[i].make + ' ' + data[i].model  + ' ' + data[i].vin;

  $entryDiv.append($input, $label);
  $profiles.append($entryDiv);
}

// WBXHU7C50K3H44275
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb096ibPU3KBSeNWHnDujBzWakpj5O9hlXdrYbpwgh2_qaqUjQ

// 19XFC2F50GE234074
// https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS0ffAuLvtMqmlj8s7UiroOuJYAoC-zj_5fG_1kBNSkwPpPUD5c
