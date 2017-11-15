var pcname = "";
var pcrace = "";
var weight = 180;
var weightGained = 0;
var startWeight = 180;
var caloriesInGut = 100000;
var caloriesDigested = 0;
var capacity = 100;
var fullness = 25;
var digestionRate = 6.25;
var time = 8;
var day = 1;
var pointsRem = 8;
var strength;
var intellect;
var agility;
var stamina;
var wisdom;
var charisma;
var charScreenOpen = false;
var storedDesc;
var storedTitle;
var playerLocation;
var playerLocationJSON = $.getJSON("js/playerLocation.json", function(response){
    playerLocation = response;
});
var locations = {
    //<Orgrimmar>
    "ValleyOfHonor":{
        "south":"TheDrag",
        "east":"WyvernsTail",
        "title":"Valley Of Honor",
        "desc":"It's really fucking dusty, thanks Orgrimmar"
        },
    "TheDrag":{
        "north":"ValleyOfHonor",
        "title":"The Drag",
        "desc":"IT FUCKIN DARK HOMIE"
        },
    "WyvernsTail":{
        "west":"ValleyOfHonor",
        "title":"Wyvern's Tail",
        "desc":"A shitty tavern."
    },
    //</Orgrimmar>
    //<Stormwind>
    "BlueRecluse":{
        "sw":"MageQuarter",
        "title":"Blue Recluse",
        "desc":"Situated in the northern part of the Mage Quarter, the Blue Recluse is the main diner and tavern for" +
        " the district."
    },
    "MageQuarter":{
        "ne":"BlueRecluse",
        "north":"LionsRest",
        "east":"TradeDistrict",
        "sw":"SlaughteredLamb",
        "title":"Mage Quarter",
        "desc":"Stormwind's Mage Quarter. Magic and shit, homie."
    },
    "LionsRest":{
        "south":"MageQuarter",
        "title":"Lion's Rest",
        "desc":"The resting place for King Variyn Wrynn."
    },
    "SlaughteredLamb":{
        "ne":"MageQuarter",
        "title":"The Slaughtered Lamb",
        "desc":"The dark, spooky alternative to the Blue Recluse."
    },
    "TradeDistrict":{
        "west":"MageQuarter",
        "title":"Trade District",
        "desc":"The main hub for Stormwind's traders, you can find all manner of shops here."
    }
    //</Stormwind>
};
function checkPointsRem(){
    strength = $("#strengthI").val();
    intellect = $("#intellectI").val();
    agility = $("#agilityI").val();
    stamina = $("#staminaI").val();
    wisdom = $("#wisdomI").val();
    charisma = $("#charismaI").val();
    pointsRem = 56 - strength - intellect - agility - stamina - wisdom - charisma;

    $("#pointsrem").html("Points remaining: " + pointsRem);

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
function showCCDesc(id){

    if (id == "ccstrength"){
        document.getElementById("statdescbox").value = "Strength\n\nStrength represents your physical ability with" +
            " brute force. Almost all melee attacks use your Strength to determine how much damage is dealt.\n\n" +
            "Strength also determines how much weight you can carry -- including your body weight. Higher strength " +
            "allows you to gain more weight before feeling negative penalties, and allows you to remain mobile after " +
            "being fattened extreme amounts.";
    } else if (id == "ccagility"){
        document.getElementById("statdescbox").value = "Agility\n\nAgility represents your ability to move quickly" +
            " and quietly, as well as deftness. Melee attacks with certain weapons use Agility instead of Strength," +
            " and while in combat, Agility determines your chance to dodge and enemy's attacks.\n\nAgility is heavily" +
            " affected by weight; the fatter you are, the lower your agility. Agility also reduces the movement" +
            " penalty when being too full.";
    } else if (id == "ccintellect"){
        document.getElementById("statdescbox").value = "Intellect\n\nIntellect represents your book smarts. Magic" +
            " attacks use your Intellect score to determine damage, and affects your maximum mana.\n\nIntellect is" +
            " also used to identify magic items.";
    } else if (id == "ccwisdom"){
        document.getElementById("statdescbox").value = "Wisdom\n\nWisdom represents your street smarts. Healing and" +
            " restorative magics use your Wisdom score to determine their effectiveness. In combat, Wisdom helps you" +
            " to resist mind-altering effects, such as hunger spells.";
    } else if (id == "ccstamina"){
        document.getElementById("statdescbox").value = "Stamina\n\nStamina represents your endurance and ability to" +
            " keep going. Your HP is based on stamina, as is your stomach capacity. The higher your stamina, the" +
            " more you are able to consume in one sitting.";
    } else if (id == "cccharisma"){
        document.getElementById("statdescbox").value = "Charisma\n\nCharisma represents your ability to talk and be" +
            " social. Charisma affects your chances with conversation based abilities, used to end combat.\n\n" +
            "Charisma also affects prices in shops; people naturally like you, and are willing to give lower prices.";
    } else {
        document.getelementById("statdescbox").value = "???";
    }
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

    document.getElementById("weightdisplay").innerHTML = "Weight: " + weight;
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
    loadRoom("BlueRecluse");
}
function loadRoom(room){
    var WButton = document.getElementById("WButton");
    var EButton = document.getElementById("EButton");
    var NButton = document.getElementById("NButton");
    var SButton = document.getElementById("SButton");
    document.getElementById("deschead").innerHTML = locations[room]["title"];
    document.getElementById("descbody").innerHTML = locations[room]["desc"];

    if(locations[room]["west"]){
        WButton.innerHTML = locations[locations[room]["west"]]["title"];
        WButton.dataset.goto = locations[room]["west"];
        WButton.disabled = false;
    } else {
        WButton.innerHTML = "W";
        WButton.dataset.goto = "NOWHERE";
        WButton.disabled = true;
    }
    if(locations[room]["east"]){
        EButton.innerHTML = locations[locations[room]["east"]]["title"];
        EButton.dataset.goto = locations[room]["east"];
        EButton.disabled = false;
    } else {
        EButton.innerHTML = "E";
        EButton.dataset.goto = "NOWHERE";
        EButton.disabled = true;
    }
    if(locations[room]["north"]){
        NButton.innerHTML = locations[locations[room]["north"]]["title"];
        NButton.dataset.goto = locations[room]["north"];
        NButton.disabled = false;
    } else {
        NButton.innerHTML = "N";
        NButton.dataset.goto = "NOWHERE";
        NButton.disabled = true;
    }
    if(locations[room]["south"]){
        SButton.innerHTML = locations[locations[room]["south"]]["title"];
        SButton.dataset.goto = locations[room]["south"];
        SButton.disabled = false;
    } else {
        SButton.innerHTML = "S";
        SButton.dataset.goto = "NOWHERE";
        SButton.disabled = true;
    }
    if(locations[room]["ne"]){
        NEButton.innerHTML = locations[locations[room]["ne"]]["title"];
        NEButton.dataset.goto = locations[room]["ne"];
        NEButton.disabled = false;
    } else {
        NEButton.innerHTML = "NE";
        NEButton.dataset.goto = "NOWHERE";
        NEButton.disabled = true;
    }
    if(locations[room]["nw"]){
        NWButton.innerHTML = locations[locations[room]["nw"]]["title"];
        NWButton.dataset.goto = locations[room]["nw"];
        NWButton.disabled = false;
    } else {
        NWButton.innerHTML = "NW";
        NWButton.dataset.goto = "NOWHERE";
        NWButton.disabled = true;
    }
    if(locations[room]["se"]){
        SEButton.innerHTML = locations[locations[room]["se"]]["title"];
        SEButton.dataset.goto = locations[room]["se"];
        SEButton.disabled = false;
    } else {
        SEButton.innerHTML = "SE";
        SEButton.dataset.goto = "NOWHERE";
        SEButton.disabled = true;
    }
    if(locations[room]["sw"]){
        SWButton.innerHTML = locations[locations[room]["sw"]]["title"];
        SWButton.dataset.goto = locations[room]["sw"];
        SWButton.disabled = false;
    } else {
        SWButton.innerHTML = "SW";
        SWButton.dataset.goto = "NOWHERE";
        SWButton.disabled = true;
    }

}
function moveRoom(clicked){
    loadRoom(clicked.dataset.goto);
}
function showCharacter(){
    var deschead = document.getElementById("deschead");
    var descbody = document.getElementById("descbody");
    if (charScreenOpen === true) {
        charScreenOpen = false;
        deschead.innerHTML = storedTitle;
        descbody.innerHTML = storedDesc;
        enableNav();
    } else {
        charScreenOpen = true;
        storedTitle = deschead.innerHTML;
        storedDesc = descbody.innerHTML;
        deschead.innerHTML = pcname;
        descbody.innerHTML = "You're a fat idiot, LOL."
        disableNav();
    }
}
function disableNav(){
    NButton.disabled = true;
    EButton.disabled = true;
    WButton.disabled = true;
    SButton.disabled = true;
}
function enableNav(){
    NButton.disabled = false;
    EButton.disabled = false;
    WButton.disabled = false;
    SButton.disabled = false;
}
function wait(){
    time ++;
    if (time = 24){
        time = 0;
        day ++;
    }
    digest();

}
function digest(){
    fullness -= digestionRate;
    if (fullness < 0.01){
        fullness = 0.01;
    }
    var fullnessPercentage = fullness / capacity * 100;
    var fPString = "" + fullnessPercentage + "%";
    document.getElementById("fullnessbar").style.width = fPString;

    caloriesToCalc = caloriesInGut / digestionRate;
    caloriesDigested += caloriesToCalc;
    caloriesInGut -= caloriesToCalc;
    calcWeight();
}
function calcWeight(){
    weightGained = caloriesDigested / 3500;
    weight = weightGained + startWeight;
    document.getElementById("weightdisplay").innerHTML = "Weight: " + weight;
}

//EXPERIMENTAL WORLDGEN SHIT HO

var randomWorld = {};

function generateWorld(x, y){
    for (var h = 0; h < x; h++){
        randomWorld[h] = {};
        for (var w = 0; w < y; w++){
            randomWorld[h][w] = {};
        }
    }
}