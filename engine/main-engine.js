function handleMouseEnter() {
    this.classList.add('s-card--hovered');
    document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave() {
    this.classList.remove('s-card--hovered');
    document.body.id = '';
}
function addEventListenersToCards() {
    const cardElements = document.getElementsByClassName('s-card');
    
    for(let index = 0; index < cardElements.length; index++) {
        const card = cardElements[index];
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
    }
}

function selectCarouselItem(selecteButonId){
    const selectedItemId = selecteButonId.id;
    const carousel = document.querySelector('.s-card-carousel');
    const transform = carousel.style.transform;
    const rotatey = transform.match(/rotatey\((-?\d+)deg\)/i);
    const rotateyDegree = -72 * (Number(selectedItemId) - 1);
    const newTransform = transform.replace(rotatey[0], `rotatey(${rotateyDegree}deg)`);    
    carousel.style.transform = newTransform;


    const selectedButton = document.querySelector('.s-controller__button--active');
    selectedButton.classList.remove('s-controller__button--active');
    selecteButonId.classList.add('s-controller__button--active');


}

document.addEventListener('DOMContentLoaded', addEventListenersToCards, false);