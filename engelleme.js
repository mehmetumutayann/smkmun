var popup = null;
var timeout = null;

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  showMessage(e.clientX, e.clientY);
});

document.addEventListener('mousemove', function(e) {
  if (popup) {
    movePopup(e.clientX, e.clientY);
  }
});

function showMessage(x, y) {
  if (popup) {
    clearTimeout(timeout);
    document.body.removeChild(popup);
    popup = null;
  }

  var message = "Disabled due to copyright, thank you for your understanding.";
  popup = document.createElement('div');
  popup.setAttribute('id', 'popup');
  popup.style.opacity = '0';
  popup.innerHTML = message;
  document.body.appendChild(popup);

  movePopup(x, y);

  setTimeout(function() {
    popup.style.opacity = '1';
  }, 10);

  timeout = setTimeout(function() {
    popup.style.opacity = '0';
    setTimeout(function() {
      document.body.removeChild(popup);
      popup = null;
    }, 300);
  }, 3000);
}

function movePopup(x, y) {
  popup.style.left = x + 'px';
  popup.style.top = y + 'px';
}
