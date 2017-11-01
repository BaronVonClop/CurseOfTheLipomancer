var pcname = "";
var pcrace = "";
var weight;
var startWeight;
var caloriesInGut;
var caloriesDigested;
var capacity;
var fullness;
var digestionRate;
var pointsRem = 8;
var strength;
var intellect;
var agility;
var stamina;
var wisdom;
var charisma;

function checkPointsRem(){
    strength = document.getElementById("strength").value;
    intellect = document.getElementById("intellect").value;
    agility = document.getElementById("agility").value;
    stamina = document.getElementById("stamina").value;
    wisdom = document.getElementById("wisdom").value;
    charisma = document.getElementById("charisma").value;
    pointsRem = 56 - strength - intellect - agility - stamina - wisdom - charisma;

    document.getElementById("pointsrem").innerHTML = "Points remaining: " + pointsRem

    checkAbilities();
}

function checkAbilities(){
    document.getElementById("abmortalstrike").style.color = "red";
    document.getElementById("abcleave").style.color= "red";

    if (strength >9){
        document.getElementById("abmortalstrike").style.color = "green";
    }
    if (strength > 15){
        document.getElementById("abcleave").style.color= "green";
    }
}

function showMortalStrike(){
    document.getElementById("statdescbox").value = "Mortal Strike\n\nStrike your enemy with a heavy blow. Uses a two handed weapon.";
}

function showExpand(){
    document.getElementById("statdescbox").value = "Expand\n\nUsing magic, you have the ability to expand your armor and clothing to fit you no matter what your size is. You can ignore sizes when looting clothing, and will never outgrow what you are wearing, no matter how much weight is gained.";
}

function showSleightofHand(){
    document.getElementById("statdescbox").value = "Sleight of Hand\n\nYour hands are deft and easily able to grab small objects without anyone noticing. At certain times, you will be able to change or completely bypass events when you have this skill.";
}

function showConsume(){
    document.getElementById("statdescbox").value = "Consume\n\nYour ability to push aside stomach discomfort allows you to eat significantly more. This allows you to more easily bypass certain events, but is a double-edged sword; it also means you can be forced to eat more against your will, as well.";
}

function showStrength(){
    document.getElementById("statdescbox").value = "Strength\n\nStrength represents your physical ability with brute force. Almost all melee attacks use your Strength to determine how much damage is dealt.\n\nStrength also determines how much weight you can carry -- including your body weight. Higher strength allows you to gain more weight before feeling negative penalties, and allows you to remain mobile after being fattened extreme amounts.";
}

function showAgility(){
    document.getElementById("statdescbox").value = "Agility\n\nAgility represents your ability to move quickly and quietly, as well as deftness. Melee attacks with certain weapons use Agility instead of Strength, and while in combat, Agility determines your chance to dodge and enemy's attacks.\n\nAgility is heavily affected by weight; the fatter you are, the lower your agility. Agility also reduces the movement penalty when being too full.";
}

function showIntellect(){
    document.getElementById("statdescbox").value = "Intellect\n\nIntellect represents your book smarts. Magic attacks use your Intellect score to determine damage, and affects your maximum mana.\n\nIntellect is also used to identify magic items.";
}

function showWisdom(){
    document.getElementById("statdescbox").value = "Wisdom\n\nWisdom represents your street smarts. Healing and restorative magics use your Wisdom score to determine their effectiveness. In combat, Wisdom helps you to resist mind-altering effects, such as hunger spells.";
}

function showStamina(){
    document.getElementById("statdescbox").value = "Stamina\n\nStamina represents your endurance and ability to keep going. Your HP is based on stamina, as is your stomach capacity. The higher your stamina, the more you are able to consume in one sitting.";
}

function showCharisma(){
    document.getElementById("statdescbox").value = "Charisma\n\nCharisma represents your ability to talk and be social. Charisma affects your chances with conversation based abilities, used to end combat.\n\nCharisma also affects prices in shops; people naturally like you, and are willing to give lower prices.";
}

function ccdone(){

    pcname = document.getElementById("ccname").value;
    var e = document.getElementById("raceselect");
    pcrace = e.options[e.selectedIndex].value;
    strength = document.getElementById("strength").value;
    agility = document.getElementById("agility").value;
    stamina = document.getElementById("stamina").value;
    intellect = document.getElementById("intellect").value;
    wisdom = document.getElementById("wisdom").value;
    charisma = document.getElementById("charisma").value;

    document.getElementById("strengthdisplay").innerHTML = "Strength: " + strength;
    document.getElementById("agilitydisplay").innerHTML = "Agility: " + agility;
    document.getElementById("staminadisplay").innerHTML = "Stamina: " + stamina;
    document.getElementById("intellectdisplay").innerHTML = "Intellect: " + intellect;
    document.getElementById("wisdomdisplay").innerHTML = "Wisdom: " + wisdom;
    document.getElementById("charismadisplay").innerHTML = "Charisma: " + charisma;

    // if (pcname === ""){
    //     alert("You didn't type a name!")
    // } else if (pointsRem > 0){
    //     alert("You haven't spent all your points!")
    // } else if (pointsRem <0){
    //     alert("You have spent too many attribute points.")
    // } else {
    //     document.getElementById("charcreate").style.display = "none";
    //     begingame();
    // }
    document.getElementById("charcreate").style.display = "none";
    begingame();
}

function begingame(){
    document.getElementById("statusname").innerHTML = pcname;
    document.getElementById("game").style.display="block";
}