var pw_comp1 = "";
var pw_comp2 = "";
var pw_comp3 = "";
var pw_comp4 = "";
var newpw = "";

var availablechars1 = "1234567890";
var availablechars2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var availablechars3 = "abcdefghijklmnopqrstuvwxyz";
var availablechars4 = "!@#$%&*";

// Construct Component 1
for(var x = 0; x < 2; x++) {
   randomNumber1 = Math.floor(Math.random() * availablechars1.length);
   pw_comp1 += availablechars1[randomNumber1];
}

// Construct Component 2
for(var x = 0; x < 2; x++) {
   randomNumber2 = Math.floor(Math.random() * availablechars2.length);
   pw_comp2 += availablechars2[randomNumber2];
}

// Construct Component 3
for(var x = 0; x < 2; x++) {
   randomNumber3 = Math.floor(Math.random() * availablechars3.length);
   pw_comp3 += availablechars3[randomNumber3];
}

// Construct Component 4
for(var x = 0; x < 2; x++) {
   randomNumber4 = Math.floor(Math.random() * availablechars4.length);
   pw_comp4 += availablechars4[randomNumber4];
}

newpw = pw_comp1 + pw_comp2 + pw_comp3 + pw_comp4;

//EH Mod - Hardcoded newpw to meet password complexity standards
//newpw = "TWT4ever!";

workflow.scratchpad.randompassword = newpw;
