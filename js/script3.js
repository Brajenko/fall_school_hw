const BDInput = document.querySelector('.input-date');
const datePicker = document.querySelector('.date-picker');
const monthTranslate = {'Январь': '01',
                        'Февраль': '02',
                        'Март': '03',
                        'Апрель': '04',
                        'Май': '05',
                        'Июнь': '06',
                        'Июль': '07',
                        'Август': '08',
                        'Сентябрь': '09',
                        'Октябрь': '10',
                        'Ноябрь': '11',
                        'Декабрь': '12',
                    }
let pickedDate = {year: 0, month: 0, day: 0};
let dateStage = 0; // 0 - not started, 1 - started
let days

BDInput.addEventListener('click', (el) => {
    field = el.target.className == 'input-date' ? el.target : el.target.parentNode;
    input = field.parentNode
    if (dateStage > 0) {
        dateStage = 0;
        pickedDate = {year: 0, month: 0, day: 0};
        input.querySelectorAll('.date-picker, .year-picker, .month-picker, .day-picker').forEach(element => {
            element.classList.add('hide')
        });;
        return
    }
    dateStage = 1;  
    input.querySelectorAll('.date-picker, .year-picker').forEach(element => {
        element.classList.remove('hide')
    });
})

datePicker.addEventListener('click', (el) => {
    target = el.target;
    if (target.className == 'year-number') {
        pickedDate.year = target.innerHTML;
        datePicker.querySelector('.year-picker').classList.add('hide');
        datePicker.querySelector('.month-picker').classList.remove('hide');
        datePicker.querySelector('.year-switcher p').innerHTML = pickedDate.year;
    }
    else if (target.className == 'month-name') {
        pickedDate.month = target.innerHTML;
        datePicker.querySelector('.month-picker').classList.add('hide')
        datePicker.querySelector('.day-picker').classList.remove('hide')
        datePicker.querySelector('.month-switcher p').innerHTML = pickedDate.month + ' ' + pickedDate.year;
        days = new Date(pickedDate.year, pickedDate.month, 0).getDate()
        console.log(days)
    }
    else if (target.className == 'day-number') {
        pickedDate.day = target.innerHTML;
        datePicker.querySelector('.day-picker').classList.add('hide')
        document.querySelector('input').value = pickedDate.year+'-'+monthTranslate[pickedDate.month]+'-'+pickedDate.day.padStart(2, '0')
        dateStage = 0;
        pickedDate = {year: 0, month: 0, day: 0};
        input.querySelectorAll('.date-picker, .year-picker, .month-picker, .day-picker').forEach(element => {
            element.classList.add('hide')
        });;
    }
})
