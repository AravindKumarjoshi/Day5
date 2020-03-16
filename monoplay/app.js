var board = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 120, 130, 140, 150, 160];
const player1_button = document.getElementById("player1");
const player2_button = document.getElementById("player2");
//console.log(player1_button);
//console.log(player2_button);

//for player_1
player1_button.addEventListener('click', rollDice_1);
player2_button.addEventListener('click', rollDice_2);
var player_1 = ["joshi", 0, 1000];
var player_2 = ["pk", 0, 1000];
function rollDice_1() {
    let position1 = math.floor(math.random(1) * 6);
    console.log(position1)
    updateposition_1(player_1[1], position1);
}
function updateposition_1(old, newposition) {
    var new_position = old + newposition;
    player_1[1] = new_position;
    console.log(player_1[1]);
    updatemoney_1(player_1[1]);
}
function updatemoney_1(p1) {
    var updatemoney1 = 0;
    if (p1 < board.length) {
        updatemoney1 = player_1[2] - board[p1 - 1];
    }
    else {
        p1 = p1 % 15;
        updatemoney1 = player_1[2] - board[p1 - 1];
    }
    console.log(updatemoney1);
}
//for player_2
function rollDice_2() {
    let position_2 = math.floor(mth.random(1) * 6);
    console.log(position_2)
    updateposition_2(player_2[1], position2);
}
function updateposition_2(old, newposition) {
    var new_position = old + newposition;
    player_2[1] = new_position;
    console.log(player_2[1]);
    updatemoney_2(player_1[1]);
}
function updatemoney_2(p2) {
    var updatemoney2 = 0;
    if (p2 < board.length) {
        updatemoney2 = player_2[2] - board[p1 - 1];
    }
    else {
        p2 = p2 % 15;
        updatemoney2 = player_2[2] - board[p1 - 1];
    }
    console.log(updatemoney2);
}
