alert("Click Anywhere on the screen");
document.addEventListener(('click'), (event) => {
    const bub = document.createElement('div');
    bub.id = 'circle';
    bub.textContent = 'Hola';

    let R = Math.floor(Math.random() * 155) + 150;
    let G = Math.floor(Math.random() * 155) + 150;
    let B = Math.floor(Math.random() * 155) + 150
    bub.style.backgroundColor = `rgb(${R},${G},${B})`;
    let x = event.clientX;
    let y = event.clientY;
    bub.style.top = `${y - 75}px`;
    bub.style.left = `${x - 75}px`;

    document.body.appendChild(bub);


    setInterval(() => {
        bub.remove();
    }, 1000);
});
