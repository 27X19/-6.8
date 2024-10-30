const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода инвормации в консоль');
})

const Alert = document.querySelector('#Alert');

Alert.addEventListener('click', () => {
    alert('Отображает всплывающее окно с сообщением и единственной кнопкой');
})

const Prompt = document.querySelector('#Prompt');

Prompt.addEventListener('click', () => {
    alert('Позволяет запрашивать у пользователя какие-либо данные с помощью диалогового окна.');
});
