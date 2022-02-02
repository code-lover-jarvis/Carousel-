let prev =  document.querySelector('.prev');
let next = document.querySelector('.next');
let rev = 0;
carousel(rev);

prev.addEventListener('click',()=>{
    rev = rev - 1;
    carousel(rev);
})

next.addEventListener('click',()=>{
    rev = rev + 1;
    carousel(rev);
})


function carousel(container) {
    let reviews = document
        .getElementsByClassName("profile-container");

    if (container >= reviews.length) {
        container = 0;
        rev = 0;
    }
    if (container < 0) {
        container = reviews.length - 1;
        rev = reviews.length - 1;
    }
    for (let i = 0; i < reviews.length; i++) {
        reviews[i].style.display = "none";
    }
    reviews[container].style.display = "block";
}




