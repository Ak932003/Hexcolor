let changeColor = () => {
    let hexNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexCode = '';

    for (let i = 0; i < 6; i++){
        let randIndex = Math.floor(Math.random() * hexNumbers.length);
        hexCode += hexNumbers[randIndex];
    }
    console.log(hexCode)
    document.body.style.backgroundColor = `#${hexCode}`;
    document.querySelector('#hex-code').innerText = hexCode;
}