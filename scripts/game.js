import {init} from "/scripts/initBoard.js";
import {startListening} from "/scripts/moveTracker.js";
import {refresh} from "/scripts/refreshBoard.js";
// TEMPORARY BOARD REFRESH

init("white");
startListening();
refresh();