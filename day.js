document.getElementById('showDayBtn').addEventListener('click', function() {
    let dayIdx = document.getElementById('dayInput').value;
    let resultSpan = document.getElementById('dayResult');
    
    if (dayIdx === "") {
        resultSpan.textContent = "Введіть число!";
        return;
    }
    
    let dayNumber = Number(dayIdx);
    let dayName = "";
    
    switch (dayNumber) {
        case 1:
            dayName = "Понеділок";
            break;
        case 2:
            dayName = "Вівторок";
            break;
        case 3:
            dayName = "Середа";
            break;
        case 4:
            dayName = "Четвер";
            break;
        case 5:
            dayName = "П’ятниця";
            break;
        case 6:
            dayName = "Субота";
            break;
        case 7:
            dayName = "Неділя";
            break;
        default:
            dayName = "Некоректний номер! (має бути 1-7)";
    }
    
    resultSpan.textContent = dayName;
});