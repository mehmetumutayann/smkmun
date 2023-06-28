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

var sourdegis1 = document.querySelector(".question")






sourdegis1.addEventListener("click", () => {
    sourdegis1.classList.toggle("active");
});
