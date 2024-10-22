
let animatedLeftElements = document.querySelectorAll('.hidden-left');
let animatedRightElements = document.querySelectorAll('.hidden-right');

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

animatedLeftElements.forEach((element)=>{
    observer.observe(element);
})
animatedRightElements.forEach((element)=>{
    observer.observe(element);
})