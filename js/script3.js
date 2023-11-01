const BDInput = document.querySelector('.input-date-group');

BDInput.addEventListener('click', (el) => {
    field = el.target.className == 'input-date-group' ? el.target : el.target.parentNode
    
})