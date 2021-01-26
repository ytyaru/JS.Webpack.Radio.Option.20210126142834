import RadioTag from './RadioTag.js';
window.addEventListener('load', (event) => {
    RadioTag.parse();
    // <radio id="color">にchangeイベントを実装する
    RadioTag.addChangeEventListener('color', ColorRadio.onChange);
    // チェックボックスに応じてイベント追加・解除する
    document.querySelector('#is-add-event').addEventListener('change', (event) => {
        console.log('is-add-event', event);
        if (event.target.checked) {
            RadioTag.addChangeEventListener('color', ColorRadio.onChange);
        } else {
            RadioTag.removeChangeEventListener('color', ColorRadio.onChange);
        }
    });
});
