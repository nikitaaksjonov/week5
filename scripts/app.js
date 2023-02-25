/* console.log('Hi! I am so horny!') */
/* Select movie original poster */
let moviePoster = document.querySelector('.poster');

/* Select modal window layer */
let modal = document.querySelector('#myModale');

/* Select close bottom */
let closeBtm = document.querySelector('.closebtm');

/* Select modal window image */
let modalImage = document.querySelector('.movie-poster-modal');

moviePoster.addEventListener('click',()=>{
    modal.style.display= 'block'
    modalImage.src=moviePoster.src
});
closeBtm.addEventListener('click',()=>{
    modal.style.display= 'none'
});
window.addEventListener('click', (event)=> {
    if(event.target===modal){
        modal.style.display= 'none'
    }
});

