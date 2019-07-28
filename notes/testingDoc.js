let one = document.querySelector(".on");

function change(a){
    a.preventDefault(); 
    one.innerHTML = "Hell"
}

one.onclick = change;

