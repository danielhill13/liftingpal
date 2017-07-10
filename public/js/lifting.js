var liftForm = document.getElementById('#newliftform');
var add      = document.getElementById('#add');

document.getElementById('add').addEventListener('click', toggleHide);

function toggleHide(){
    newliftform.classList.toggle('hidden');
}