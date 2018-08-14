let body = document.querySelector('body');

// Create 16x16 grid of divs
let container = document.createElement('div');
container.classList.add('container');
for (let i = 0; i < 16; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < 16; j++) {
        let col = document.createElement('div');
        col.classList.add('col')
        row.appendChild(col);
    }
    container.appendChild(row);
}
body.appendChild(container);