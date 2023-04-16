const $subLinks1 = document.querySelector('.sub-link1');
$subLinks1.addEventListener('click',function() {
  document.querySelector(".checkbox").click();
})

const $subLinks2 = document.querySelector('.sub-link2');
$subLinks2.addEventListener('click',function() {
  document.querySelector(".checkbox").click();
})

const $subLinks3 = document.querySelector('.sub-link3');
$subLinks3.addEventListener('click',function() {
  document.querySelector(".checkbox").click();
})






/*
const sub-link = document.querySelector(".sub-link");
let show = true;

sub-link.addEventListener("click", (event) => {
    event.stopPropagation();

    show = !show;

    if(event.target.tagName === 'A' && !show)
    menu.style.display = 'none';
})
/*

function clickMenu() {
    if( menu-items.style.display === 'block'){
        menu-items.style.display = 'none'  
    } else {
      menu-items.style.display = 'block'
    }
  }*/
