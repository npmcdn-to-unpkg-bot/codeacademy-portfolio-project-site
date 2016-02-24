 var MainCharacter = function(name){
    	this.name = name;
    	this.response = {
    		attackOne: "Oh no Yellow Diamond is stronger",
    		attackTwo : "Man we are about evenly matched",
    		attackThree: "This should defeat Yellow Diamond",
    		attack: "You won't survive this! (stabs Yellow Diamond with sword)"
       	}

    }

    var CrystalGem = function(name){
	this.name = name;
	this.response = {
		hurt : " Crystal Gem: Ouch! Yellow Diamond got me good. Give me a minute to heal.",
		scared: "Crystal Gem : I can't... Try someone else!",
		brave : " Grystal Gem: Okay, let's do it! We can take on Yellow Diamond",
		attack :"Crystal Gem: take that! (stabs with weapon)"
		};
	}

	var StevenUniverse = function(){
	this.name = "Steven Universe";
	this.response = {
		run: "Steven: Do you want the Yellow Diamond to win?",
		fight: " Steven: I'm ready let's get Yellow Diamond!",
		protect: "Steven: Here's my shield!",
		protectOne: "Steven: I need my shield",
		advice : "Steven: Try another way to defeat Yellow Diamond!",
		adviceOne: "Steven: You should try or ask a Gem.",
		attack: "Steven: Lights out Yellow Diamond (Steven punches Yellow Diamond)"
		};
	}
	var YellowDiamond = function(){
	this.name = "Yellow Diamond";
	this.response = {
		win: "I got you now! Say goodbye to earth",
		winOne: "Earth is now destroyed",
		lose: "No..how can you defeat me?",
		loseTwo: "You puny earthling. This isn't the last of me."
		};

	}
var Pearl = new CrystalGem('Pearl');
var Garnet = new CrystalGem('Garnet');
var Amethyst = new CrystalGem('Amethyst');
var Steven = new StevenUniverse();
var YellowDiamond = new YellowDiamond();
var UserName = prompt("what is your name?");
