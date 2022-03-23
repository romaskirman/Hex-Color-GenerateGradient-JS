function changeColor(){
    var hex_numbers = ["0", "1", "2", "3", "4", "5","6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

    var hexcode_1 = '';
    var hexcode_2 = '';
    var random_index = 0;

    for(let i = 0; i < 6; i++){
        random_index = Math.floor(Math.random() * hex_numbers.length);
        hexcode_1 += hex_numbers[random_index];
        random_index = Math.floor(Math.random() * hex_numbers.length);
        hexcode_2 += hex_numbers[random_index];
    }

    document.getElementById("hex-code-1").innerHTML = hexcode_1;
    document.getElementById("hex-code-2").innerHTML = hexcode_2;
    document.getElementsByTagName("body")[0].style.background = `linear-gradient( to right, #${hexcode_1}, #${hexcode_2})`;
}