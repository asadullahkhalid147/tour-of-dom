const sections = document.querySelectorAll('section');
console.log(sections);

for(const section of sections){
    section.style.border='2px solid red'
    section.style.margin='5px';
    section.style.borderRadius='3px'
    section.style.backgroundColor='lightgray'
    
}

const need = document.getElementById('money');
need.classList.add('yellow-bg');



