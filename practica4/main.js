function show_information() {
    alert("ФИО Группа ИКПИ-21 Практическая №3");
}

function show_information2(elem) {
    let x = parseFloat(elem.value);
    if (!isNaN(x) && 3.00 <= x && x <= 5.00) {
        alert("Ваш средний балл – " + elem.value + " балла");
    } else {
        alert("Нет данных!");
    }
}

function send(family, radio1, radio2, radio3) {
    let markProg = parseInt(radio1.value);
    let markMath = parseInt(radio2.value);
    let markPhyz = parseInt(radio3.value);
    
    document.write("<h2>Фамилия: " + family.value + "</h2>");
    document.write("<h2>Оценка по дисциплине «Программирование»: " + markProg + "</h2>");
    document.write("<h2>Оценка по дисциплине «Математика»: " + markMath + "</h2>");
    document.write("<h2>Оценка по дисциплине «Физика»: " + markPhyz + "</h2>");
    document.write("<h2>Рейтинг: " + ((markProg + markMath + markPhyz) / 3) + "</h2>");
}
