// Slide Script

function initSlideScript(){
    
    function changeImage(){
        
        const allSlides = document.querySelectorAll('.slideJs');
        allSlides.forEach((item)=>{
            item.classList.remove('ativo');
        });
        
        document.querySelector('.'+this.getAttribute('data-IdSlide')).classList.add('ativo');
        
        botoesSlide.forEach((item) => {
            item.classList.remove('ativo');
        });
        
        this.classList.add('ativo');
    }

    const botoesSlide = document.querySelectorAll('#circleButtons div');
    botoesSlide.forEach((item) => {
        item.addEventListener('click', changeImage);
    })
}
initSlideScript();

function initSectionMenuDisplay(){
    const liArray = document.querySelectorAll('.menu nav ul li');
    liArray[0].classList.add('ativo');
    
    function sectionMenu(){
        liArray.forEach((item)=>{
            item.classList.remove('ativo');
        })
        this.classList.add('ativo');
    }
    
    liArray.forEach((item)=>{
        
        item.addEventListener('click', sectionMenu);
    });
}
initSectionMenuDisplay();

