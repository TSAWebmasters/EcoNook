let sections = document.querySelectorAll('.appearUp');

window.onScroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if(top >= offset && top <= offset + height){
            sec.classList.add('animateUp');
        } else{
            sec.classList.remove('animateUp');
        }
    })
}