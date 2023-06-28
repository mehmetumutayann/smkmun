window.addEventListener('load', function() {
    var questions = document.getElementsByClassName('question');
    for (var i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', function() {
            var answer = this.nextElementSibling;
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    }
});
var sourdegisler = document.querySelectorAll(".question");

sourdegisler.forEach((sourdegis) => {
  sourdegis.addEventListener("click", () => {
    sourdegis.classList.toggle("active");
  });
});
