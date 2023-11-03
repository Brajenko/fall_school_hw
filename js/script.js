const dropdowns = document.querySelectorAll('.dropdown');
const drowpdownsElems = document.querySelectorAll('.dropdown-elem');

dropdowns.forEach(e => {
    e.addEventListener('click', (ev) => {
        btn = ev.target.className == 'dropdown' ? ev.target : ev.target.parentNode;
        btn.querySelector('.dropdown-content').classList.toggle('hide');
        btn.querySelector('.dropdown-part').classList.toggle('hide');
        btn.querySelectorAll('.arrow').forEach(e => {e.classList.toggle('hide')});
    })
});

drowpdownsElems.forEach(e => {
    e.addEventListener('click', (ev) => {
        elem = ev.target;
        content = elem.parentNode;
        nowPicked = content.querySelector('.picked');
        if (nowPicked) {nowPicked.classList.remove('picked')};
        elem.classList.add('picked');
        content.parentNode.querySelector('.dropdown-text').innerHTML = elem.innerHTML;
        content.parentNode.style.color = 'black';
    })
})

window.addEventListener('click', (ev) => {
    if (ev.target.className != 'dropdown' && ev.target.parentNode.className != 'dropdown') {
        dropdowns.forEach(element => {
            element.querySelector('.dropdown-content').classList.add('hide');
            element.querySelector('.dropdown-part').classList.add('hide');
            element.querySelector('.arrow-down').classList.remove('hide');
            element.querySelector('.arrow-up').classList.add('hide');
        });
    }
});


const fullnameInput = document.querySelector('#fullname')
const maleInput = document.querySelector('#male')
const femaleInput = document.querySelector('#female')
const birthdayInput = document.querySelector('#birthday')
const aboutInput = document.querySelector('#about-me')

fullnameInput.addEventListener('blur', (ev) => {
    document.querySelector('#fullname-small').innerHTML = fullnameInput.value;
})

maleInput.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        document.querySelector('#gender-small').innerHTML = 'Парень';
    } else {
        document.querySelector('#gender-small').innerHTML = 'Девушка';
    }
  })

femaleInput.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        document.querySelector('#gender-small').innerHTML = 'Девушка';
    } else {
        document.querySelector('#gender-small').innerHTML = 'Парень';
    }
    })


const expandBtn = document.querySelector('.expand__description')
aboutInput.addEventListener('blur', (ev) => {
    el = document.querySelector('#description-small');
    el.innerHTML = aboutInput.value;
    if (el.offsetHeight != el.scrollHeight) {
        expandBtn.style.display = 'flex'
    }
    else {expandBtn.style.display = 'none'}
})

expandBtn.addEventListener('click', (ev) => {
    document.querySelector('#description-small').classList.toggle('collapsed')
    expandBtn.querySelectorAll('.arrow').forEach(e => {e.classList.toggle('hide')});
})