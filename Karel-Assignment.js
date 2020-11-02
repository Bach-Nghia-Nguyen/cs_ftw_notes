// =====================================//
//  Lab 1: Karel Grows Up               //
// =====================================//


// *********** PICK UP THE BEEPERS *********** //
// Goal: pick up all beepers while running along
// the line
while (frontIsClear()) {
    move();
    while (beepersPresent()) {
        pickBeeper();
    }
}


// *********** POT HOLES *********** //
while (frontIsClear()) {
    move();
    // pot holes are on the right, put a beeper in each one
    if (rightIsClear()) {
        turnRight();
        move();
        putBeeper();
        turnAround();
        move();
        turnRight();
    }
}


// *********** MOVE THE BEEPERS *********** //
// Goal: move the beeper stack
while (frontIsClear()) {
    move();
    // move all the beepers
    while(beepersPresent()){
        pickBeeper();
        move();
        putBeeper();
        turnAround();
        move();
        turnAround();
    }
    // go to the end
    move();
}


// *********** DOUBLE THE BEEPERS *********** //
// move to the beeper stack
while (noBeepersPresent()) {
    move();
}
// pick each beeper and double put it on the 
// next spot
while (beepersPresent()) {
    pickBeeper();
    move();
    putBeeper();
    putBeeper();
    turnAround();
    move();
    turnAround();
}
// move to the doubled stack
move();
// transfer it back to the original spot
while (beepersPresent()) {
    turnAround();
    pickBeeper();
    move();
    putBeeper();
    turnAround();
    move();
}


// *********** HOSPITALS *********** //
// Build some hospitals. Each building is 3 beepers high and 2 beepers wide.
// Move Karel to a beeper which is the location of construction
function moveToConstruct() {
    while (noBeepersPresent()){
  	move();
	}
}
// for loop helps building a column that's 3 beepers high
function build3floors() {
    for (let i = 0; i < 3; i++) {
        putBeeper();
        move();
    }
}
//
for (let i = 0; i < 3; i++) { // build 3 buildings
    moveToConstruct();
	pickBeeper();
    for (let i = 0; i < 2; i++) { // build 2 3-beeper high colums to form the buidling
        turnLeft();
        build3floors();
        turnAround();
        while (frontIsClear()) {
            move();
        }
        turnLeft();
        move();
	}
}


// *********** MIDPOINT *********** //
// Goal: Karel finds the midpoint of the line regardless of its length

// functions

/** Function explanation
 * Pre-condition: 1 beeper in the mid and Karel on the second square of grid facign eastward, with at least 1 more grid space to the wall
 * Post-condition: Karel on the beeper in the mid
 */
function findMid() {
    placeBeeperWall();
    while (noBeepersPresent()) {
        isItMid();
        findBeeper();
    }
}

/** Function explanation
 * Pre-condition: Karel on the beeper in the mid. And other squares are filled with beepers
 * Post-condition: Karel on 1 end facing toward the mid. All beepers except the central one are cleared
 */
function removeExcessBeepers() {
    pickBeeperUpAlg();
    turnAround();
    moveToMid();
    pickBeeperUpAlg();
    turnAround();
}

/** Function explanation
 * Pre-condition: Karel on the beeper in the mid. Facing beepers on every squares to the wall
 * Post-condition: Karel on 1 end facing toward the mid. All beepers except the central one are cleared
 */
function pickBeeperUpAlg() {
    while (frontIsClear()) {
        move();
        pickBeeper();
    }
}

/** Function explanation
 * Pre-condition: 1 beeper in the mid and Karel on 1 end facing the wall
 * Post-condition: Karel on the beeper in the mid
 */
function moveToMid() {
    while (noBeepersPresent()) {
        move();
    }
}

/** Function explanation
 * Pre-condition: 1 beeper in the middle and Karel on the second square of grid facing eastward, with at least 1 more grid till a wall
 * Post-condition: A second Beeper on the grid at the end square next to far wall
 */
function placeBeeperWall() {
    while (frontIsClear()) {
        move();
    }
    putBeeper();
    spinAndMove();
}

/** Function explanation
 * Pre-condition: A empty square behind the last beeper
 * Post-condition: If a beeper is found the next square, turns around and places a beeper where it started
 * the method otherwise findBeeper() executes
 */
function isItMid() {
    move();
    if (beepersPresent()) {
        spinAndMove();
        putBeeper();
    }
}

/** Function explanation
 * Pre-condition: On an empty square 2 grid points in front of a beeper
 * Post-condition: A beeper is placed next to the prior closest one and Karel moves again so new beeper is behind him
 */
function findBeeper() {
    if (noBeepersPresent()) {
        while (noBeepersPresent()) {
            move();
        }
        spinAndMove();
        putBeeper();
        move();
    }
}

/** Function explanation
 * Pre-condition: none
 * Post-condition: Karel has turned around and moved one square
 */
function spinAndMove() {
    turnAround();
    move();
}

// Main
/**
 * Pre-condition: Karel facing east on bottom row
 * Post-condition: Karel on the beeper in the middle point
 */
putBeeper();
if (frontIsClear()) { // If front is blocked, Karel is in a one-square world, the job is done
    move();
    if (frontIsClear()) { // If front is blocked again, Karel is in 2-square world, we don't need to find the midpoint
        findMid(); // dat beeper de do vi tri mid
        removeExcessBeepers(); // sau khi tim duoc mid, xoa het beeper xung quanh tru beeper o mid
        moveToMid(); // di chuyen Karel den mid
    } else {
        turnAround();
        moveToMid();
    }
}


// *********** MAZE *********** //
  // Solution 1:
    //Just move and turn right if you can
    //if front is block, and also rightIsBlock()
    // turn left until you can go
while (noBeepersPresent()) {
    if (rightIsClear()){
        turnRight();
    } else {
        while (frontIsBlocked()) {
            turnLeft();
        }
    }
    move();
}
  // Solution 2:
    //Just move and turn left if you can
    //if front is block, and also leftIsBlock()
    // turn right until you can go
while (noBeepersPresent()) {
    if (leftIsClear()){
        turnLeft();
    } else {
        while (frontIsBlocked()) {
            turnRight();
        }
    }
    move();
}  

 