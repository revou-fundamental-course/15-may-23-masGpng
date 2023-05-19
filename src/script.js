const navItem = document.querySelector('.nav-item a');

navItem.addEventListener('click', (e) => {
    console.log(e.target.closest(".nav-item").classList.contains('active'));
});