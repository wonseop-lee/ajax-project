const $viewForm = document.querySelector('#view-form');
const $addProfileBtn = document.querySelector('#add-prof-btn');
const $addForm = document.querySelector('#add-form');
const $cancelBtn = document.querySelector('#cancel-btn');
const $addImage = document.querySelector('#add-image');
const $img = document.querySelector('img');

// var $main = document.querySelector('main');

function swapView(dataView) {
  // issue 2
}

$viewForm.addEventListener('submit', function (e) {
  e.preventDefault();
  // swapView();
});

$addProfileBtn.addEventListener('click', function (e) {
  // swapView();
});

$addForm.addEventListener('submit', function(e) {
  e.preventDefault();
});

$cancelBtn.addEventListener('click', function(e) {

});

$addImage.addEventListener('keyup', function(e) {
  $img.setAttribute('src', $addImage.value);
});




var form = document.createElement('form');
var profilesDiv = document.createElement('div');
