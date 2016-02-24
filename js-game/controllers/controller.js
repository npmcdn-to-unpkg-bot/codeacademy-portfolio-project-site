   

MainCharacter.prototype.attackResponse = function(){
	var randomNum = Math.floor((Math.random() * 3) + 1);
	var fight = prompt("You will not defeat the Crystal Gems! Yellow Diamond. Choose an attack: Steven's attack, Crystal Gem's attack, Your attack").toLowerCase();
	if(fight == "steven's attack"){
		alert("Go Steven!");
		if(randomNum === 1){			
			alert(NewUser.response.attackOne);
			alert(Steven.response.advice);
			GemHelpPrompt();
						
		}else if(randomNum === 2){
			alert(NewUser.response.attackTwo);
			alert(Steven.response.protectOne);
			alert(Steven.response.adviceOne);
			GemHelpPrompt();
				
		}else if(randomNum === 3) {
			alert(Steven.response.attack);
			gameLoop();
			alert(YellowDiamond.response.lose);
			alert(YellowDiamond.response.loseTwo);
			GameOver();

				
		}
	}else if(fight == "crystal gem's attack"){
		alert("Go Crystal Gem");
		if(randomNum === 1){
			alert(NewUser.response.attackOne);
			alert(Steven.response.advice);
			GemHelpPrompt();
						
		}else if(randomNum === 2){
			alert(NewUser.response.attackTwo);
			alert(Steven.response.protect);
			alert(Steven.response.advice);
			GemHelpPrompt();
				
		}else if(randomNum === 3) {
			alert(CrystalGem.response.attack);
			gameLoop();
			alert(YellowDiamond.response.lose);
			alert(YellowDiamond.response.loseTwo);
			GameOver();
				
		}
	}else if(fight == "your attack"){
		alert("Go you!");
		if(randomNum === 1){
			alert(NewUser.response.attackOne);
			alert(Steven.response.advice);
			GemHelpPrompt();
						
		}else if(randomNum === 2){
			alert(NewUser.response.attackTwo);
			alert(Steven.response.protect);
			alert(Steven.response.advice);
			GemHelpPrompt();
				
		}else if(randomNum === 3) {
			alert(NewUser.response.attack);
			gameLoop();
			alert(YellowDiamond.response.lose);
			alert(YellowDiamond.response.loseTwo);
			
			GameOver();
				
		}
	}else {
		alert ("be sure to type in the reponses correctly!");
		newGame();
	}

}
CrystalGem.prototype.randomResponse = function(){
	var randomNum = Math.floor((Math.random() * 3) + 1);
	if(randomNum === 1){
		alert(this.response.hurt)
		GemHelpPrompt();				
	}else if(randomNum === 2){
		alert(this.response.scared);
		GemHelpPrompt();
	}else if(randomNum === 3) {
		alert(this.response.brave);
		alert('Crystal Gem: We Are ready to attack Yellow Diamond');
		NewUser.attackResponse();
	}
}

var GameOver = function(){
	alert("You win!");
}


var GemHelpPrompt = function(){
	var GemHelp = prompt("do you need help from a Gem? Pearl, Garnet or Amethyst?").toLowerCase();
			if(GemHelp == 'pearl'){
				Pearl.randomResponse();				
			}else if(GemHelp == 'amethyst'){
				Amethyst.randomResponse();
			}else if(GemHelp == 'garnet'){
				Garnet.randomResponse();
			}else{
				var GemHelp = prompt("did not make the right choice").toLowerCase();
				alert(Steven.response.run);
			alert(YellowDiamond.response.win);
			alert(YellowDiamond.response.winOne);
			newGame();
			}
}

var NewUser = new MainCharacter(UserName);

function newGame(){
var userChoice = prompt("Ready to begin? " + NewUser.name + "Yes or No?").toLowerCase();
if(userChoice == 'yes'){
	var StevenHelp = prompt("do you want help from Steve? Yes or No").toLowerCase();
		if(StevenHelp == 'yes'){
			alert(Steven.response.fight);
			GemHelpPrompt();
		}else{
			alert(Steven.response.run);
			alert(YellowDiamond.response.win);
			alert(YellowDiamond.response.winOne);
			newGame();
		}
		
}else if(userChoice == 'no'){
	var enemyResponse = alert(YellowDiamond.response.win);
	var enemyResponse2 = alert(YellowDiamond.response.winOne);
}else{
	console.log('did not type the right words');
	newGame();
}
}
var backDown = false;
function gameLoop() {
while (backDown === false) {
var userMove = confirm("Yellow Diamond won't back down! Try again!");
var DiamondStatus = Math.floor((Math.random() * 5) + 1);
if (DiamondStatus === 4) {
alert("Yellow Diamond backed down -- Nice work!");
backDown = true;
}else if (DiamondStatus === 3){
	alert(Steven.response.attack);
	alert("Yellow Diamond backed down -- Nice work!");
	alert("Game Over. You win!");
	backDown = true;
}else if(DiamondStatus === 2){
	alert(NewUser.response.attack);
	alert("Yellow Diamond backed down -- Nice work!");
	alert("Game Over. You win!");
	backDown = true;
}else if(DiamondStatus === 1){
	alert(CrystalGem.response.attack);
	alert("Yellow Diamond backed down -- Nice work!");
	backDown = true;
}
};
};
