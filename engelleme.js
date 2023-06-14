window.addEventListener('load', function() {
  var preloader = document.querySelector('.preloader');
  preloader.addEventListener('animationend', function() {
    preloader.style.display = 'none';
  });
});


