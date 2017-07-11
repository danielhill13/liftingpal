var submit   = document.getElementById('#submitnew');

document.getElementById('add').addEventListener('click', toggleHide);

function toggleHide(){
    newliftform.classList.toggle('hidden');
    if(document.getElementById("add").textContent=="Add Exercise"){
        document.getElementById("add").textContent="Cancel";
        } else{
            document.getElementById("add").textContent="Add Exercise";
        }
}

