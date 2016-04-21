/*This is what the tree needs to look like*/
//       *
//      ***
//     *****
//    *******
//   *********
//  ***********
// *************


/*This section takes HTML fieldsets and turns them
into variables*/

var height = document.getElementById("height");
var character = document.getElementById("character");
var submit = document.getElementById("submit");
function christmasTree () {
};


/*This section does both the event listeners */
submit.addEventListener("click", treeGrowth); /* <-- Event Listener for clicking button*/
height.addEventListener("keypress", keypress); /* <-- Event listener for pressing enter starts here*/
character.addEventListener("keypress", keypress);

function keypress(event) {
    if (event.which === 13) { /* <-- check key code which is code that I got from the event list master when I consoled logged it*/
        treeGrowth()
    }
} /* <--Event listener for pressing enter ends here*/


/*This function sets up an alert popup if someone doesn't fill out all the fieldsets*/
function treeGrowth(){
    var tree = {};
    tree.height = height.value;
    tree.character = character.value;
    if (tree.height === "" || tree.character === "") {
        alert ("Both fields must have a value!")
    } else {
        math (tree)

    }

}


/*This function is the for loop. The math of the tree states that as the tree goes down, it's 1
    less space. Also, as the tree goes down, the charactors go up by 2*/
function math(everything){
    var spaces = everything.height - 1
    var stars = 1
    for (var i = 0; i < everything.height; i++) {
        var row = ""
        for (var c = 0; c < spaces; c++) {
            row += " "
        }
        for (var f = 0; f < stars; f++) {
            row += everything.character
        }
        console.log(row);
        spaces --
        stars += 2
    }
}