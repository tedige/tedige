function sendData() {
    let nameElement = document.querySelector('#name');
    let name = nameElement.value;
    let p1 = document.querySelector('#nameError');
    console.log(p1);
    if (p1!== null ) {
        document.querySelector('#nameP').removeChild(p1);
    }
    let p3 = document.querySelector('#studentError');
    console.log(p3);
    if (p3!== null ) {
        document.querySelector('#studentP').removeChild(p3);
    }
    let error = false;
    if (name.length < 3) {
        let p = document.createElement('p');
        p.id = "nameError";
        p.innerHTML = 'Вы некорректно ввели название, должно быть от трех символов';
        document.querySelector('#nameP').appendChild(p);
        error = true;
    } 
    let selectElement = document.querySelector('#otvet');
    if (selectElement.value === 'no') {
        let p = document.createElement('p');
        p.id = "studentError";
        p.innerHTML = 'Если нет, то соболезную(';
        document.querySelector('#studentP').appendChild(p);
        error = true;
    }
    if (error === false) {
        window.location.href = "test.html";
    }
}



