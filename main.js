// Dice Roll Simulator

// Add Event Listeners
document.getElementById("rollBtn").addEventListener("click", rollDie);
document.getElementById("roll5Btn").addEventListener("click", function() {roll(5);});
document.getElementById("roll10Btn").addEventListener("click", function() {roll(10);});
document.getElementById("roll100Btn").addEventListener("click", function() {roll(100);});


// Global Variables
let total1 = 0;
let total2 = 0;
let total3 = 0;
let total4 = 0;
let total5 = 0;
let total6 = 0;
let totalRolls = 0;

// Event Function
function rollDie() {
    // Simulate a single roll of a six-sided die.  Display result and totals.

    // Get a random roll number 1 - 6
    let rollNum = Math.floor(Math.random() * 6) + 1;
    totalRolls++;

    // Update totals & roll result
    document.getElementById("rollResult").innerHTML = rollNum;
    
    let percentString;
    if (rollNum == 1) {
        total1++;
        percentString = " (" + (total1 / totalRolls * 100) + "%)";
        document.getElementById("total1").innerHTML = total1 + percentString;
    } else if (rollNum == 2) {
        total2++;
        percentString = " (" + (total2 / totalRolls * 100) + "%)";
        document.getElementById("total2").innerHTML = total2 + percentString;
    } else if (rollNum == 3) {
        total3++;
        percentString = " (" + (total3 / totalRolls * 100) + "%)";
        document.getElementById("total3").innerHTML = total3 + percentString;
    } else if (rollNum == 4) {
        total4++;
        percentString = " (" + (total4 / totalRolls * 100) + "%)";
        document.getElementById("total4").innerHTML = total4 + percentString;
    } else if (rollNum == 5) {
        total5++;
        percentString = " (" + (total5 / totalRolls * 100) + "%)";
        document.getElementById("total5").innerHTML = total5 + percentString;
    } else if (rollNum == 6) {
        total6++;
        percentString = " (" + (total6 / totalRolls * 100) + "%)";
        document.getElementById("total6").innerHTML = total6 + percentString;
    }

}

function roll(totalRolls) {
    // Perform dice sim 'totalRolls' times
    for (let n = 0; n < totalRolls; n++) {
        // Roll a single die
        rollDie();
    }
}
