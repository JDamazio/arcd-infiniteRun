

const character = document.querySelector('.character')
const obstacle = document.querySelector('.obstacle')


const jump = () =>{

    character.classList.add('jump');

    setTimeout(() => {
        character.classList.remove('jump')
    },1000);

}

const loop = setInterval(() => {

    const obstaclePosition = obstacle.offsetLeft;
    const characterPosition = +window.getComputedStyle(character).bottom.replace('px','');


    if (obstaclePosition <=160 && obstaclePosition >0 && characterPosition <80){

        obstacle.style.animation = 'none';
        obstacle.style.left = `${obstaclePosition}px`;

        character.style.animation = 'none';
        character.style.bottom = `${characterPosition}px`;

        character.src = './mario-jump-images/game-over.png';
        character.style.width='90px';
        character.style.marginLeft = '50px'

        clearInterval(loop)
    }

},10)
document.addEventListener('keydown', jump)


// Insert coin

document.querySelector('#reload').addEventListener('click',() =>{
    window.location.reload(true);
})