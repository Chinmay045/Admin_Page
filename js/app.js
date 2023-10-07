const arrows = document.querySelector('.left-content');

arrows.addEventListener('click', (e) => {
    const menuclass = e.target.classList;

    const container = document.querySelector('.app');
    leftArrow = document.querySelector('.fa-arrow-left');
    rightArrow = document.querySelector('.fa-arrow-right');

    if (menuclass.containes('fa-arrow-left')) {
        container.classList.add('no-menu');

        e.target.style.display = 'nnone';

        rightArrow.style.display = 'block';
    } else if (menuClass.contains('fa-arrow-right')) {
        // remove the no-menu class
        container.classList.remove('no-menu');
        // hide the right arrow
        e.target.style.display = 'none';
        // display the left arrow
        leftArrow.style.display = 'block';
    }

})