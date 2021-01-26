import RadioTag from './RadioTag.js';
import ColorRadio from './ColorRadio.js';
window.addEventListener('load', (event) => {
    RadioTag.parse();
    // <radio id="color">にchangeイベントを実装する
    RadioTag.addChangeEventListener('color', ColorRadio.onChange);
    // チェックボックスに応じてイベント追加・解除する
    document.querySelector('#is-add-event').addEventListener('change', (event) => {
        if (event.target.checked) {
            console.log('add-event', event);
            RadioTag.addChangeEventListener('color', ColorRadio.onChange);
        } else {
            console.log('remove-event', event);
            RadioTag.removeChangeEventListener('color', ColorRadio.onChange);
        }
    });
});
