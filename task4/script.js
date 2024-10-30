document.querySelector('#testText').onclick = function() {
    const userText = prompt('Введите новый текст ссылки:');
    const testText = document.querySelector('#testText');
    testText.textContent = userText;
}