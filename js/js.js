var lesson = document.querySelector(".modal-write-us");
var linklesson = document.querySelector(".js-lesson");
var closelesson = document.querySelector(".modal-content-close-lesson");


linklesson.addEventListener('click', function() {
    lesson.classList.add('modal-content-show');
}
);

closelesson.addEventListener('click', function() {
    lesson.classList.remove('modal-content-show');

}
);
