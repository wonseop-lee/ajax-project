var $form = document.querySelector('form');
var $addProfileBtn = document.querySelector('.add-btn');
// var $main = document.querySelector('main');

function swapView(dataView) {
  // issue 2
}

$form.addEventListener('submit', function (e) {
  e.preventDefault();
  swapView();
});

$addProfileBtn.addEventListener('click', function (e) {
  swapView();
});

// var form = document.createElement('form');
// var profiles = document.createElement('div');
