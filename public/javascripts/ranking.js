import {Player} from './player.js';

let emily = new Player("Emily", 6900)
let ata = new Player("Ata", 2000);
let ruchit = new Player("Ruchit", 1000);
let jack = new Player("Jack", 1000);
let players = [emily, ata, ruchit, jack, emily, ata, ruchit, jack, emily, ata, ruchit, jack, emily, ata, ruchit, jack, emily];

printRankings();

function printRankings() {
    var body = document.getElementsByTagName("body")[0];  
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");

    var row = document.createElement("tr");
    var cell = document.createElement("th");
    var cell_value = document.createTextNode("Rank");
    cell.appendChild(cell_value);
    row.appendChild(cell);
    var cell = document.createElement("th");
    var cell_value = document.createTextNode("Player");
    cell.appendChild(cell_value);
    row.appendChild(cell);
    var cell = document.createElement("th");
    var cell_value = document.createTextNode("Points");
    cell.appendChild(cell_value);
    row.appendChild(cell);
    tblBody.appendChild(row);
  
    for (var i = 0; i < players.length; i++) {
        var row = document.createElement("tr");  
        var cell_rank = document.createElement("td");
        var cell_rank_value = document.createTextNode(i+1);
        cell_rank.appendChild(cell_rank_value);
        row.appendChild(cell_rank);
        var cell_name = document.createElement("td");
        var cell_name_value = document.createTextNode(players[i].name);
        cell_name.appendChild(cell_name_value);
        row.appendChild(cell_name);
        var cell_points = document.createElement("td");
        var cell_points_value = document.createTextNode(players[i].points);
        cell_points.appendChild(cell_points_value);
        row.appendChild(cell_points);
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    body.appendChild(tbl);
  }