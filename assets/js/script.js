// task-1 
const background=document.getElementById('task-1');
const image=document.getElementById('title-img');

function gold(){
    background.style.backgroundColor="gold";
    image.src="./assets/img/gold.png";
    background.style.color="white";
}

function blue(){
    background.style.backgroundColor="blue";
    image.src="./assets/img/blue.png";
    background.style.color="white";
}

function black(){
    background.style.backgroundColor="black";
    image.src="./assets/img/black.png";
    background.style.color="white";
}

function white(){
    background.style.backgroundColor="white";
    image.src="./assets/img/white.png";
    background.style.color="black";
}

function red(){
    background.style.backgroundColor="red";
    image.src="./assets/img/red.png";
    background.style.color="white";
}


// task-2 
const icon=document.getElementById('icon');
const backgroundMode=document.getElementById('task-2');
icon.addEventListener('click',() => {
    if(icon.className=='fa-regular fa-moon') {
        backgroundMode.classList.toggle('dark-mode');
        icon.className='fa-regular fa-sun';
    }

    else {
        backgroundMode.classList.remove('dark-mode')
        icon.className='fa-regular fa-moon';
    }
})

// task-3 
const angle=document.getElementsByClassName('arrow');
const parg=document.getElementsByClassName('answer');
for (let index = 0; index < angle.length; index++) {
    angle[index].addEventListener('click',() =>{
        if (angle[index].classList.contains('fa-angle-down')){
            parg[index].style.display='block';
            angle[index].classList.remove('fa-angle-down');
            angle[index].classList.add('fa-angle-up');
        }
        else {
            parg[index].style.display='none';
            angle[index].classList.remove('fa-angle-up');
            angle[index].classList.add('fa-angle-down');
        }
    })
}

// task-4 
const star=document.getElementsByClassName('fa-star');
for (let index = 0; index < star.length; index++) {
    star[index].addEventListener('click',() =>{
                for (let i = 0; i < star.length; i++) {
                    i<=index ? star[i].style.color='gold' : star[i].style.color='white';
                }
            })
}