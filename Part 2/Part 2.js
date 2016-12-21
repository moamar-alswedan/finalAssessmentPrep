//=============================================================================
/*                                  Part 2                                   */
//=============================================================================
 /*

  Hint: write the function in question (b, c, d) outside the Player scope 

  Note : do not use (for, while, recursion) but you allowed to use the High order function
    like (.map, .each, .filter, .reduce,.....) if you don't know how to use it just Google it 
 
 today we will create a football team using what we learn,

 	a - we need to create the players using OOP the player declaration
    should take the name of the player  	==> var player1 = Player("jony")

  b - after that we need function to add the other info for the player with addInfo function
		==> player1.addInfo(age, position, level, availability );

	c- and create another function to increase the the level for the player by n value 
		==> player1.increaseLevel(4); 

	d - we need another function to check if the player is available or not it should return true or false
		==> player1.isAvailable();  true / false

	e - then we need to create 4 players and add the info for them and put them inside the arrayOfPlayers

	f - write function to iterate over the all players to decrease the level for the player if age larger the 30

  g - sort the players in the arrayOfPlayers by the key
		sortPalyerBy(arrayOfPlayers, "age");
		sortPalyerBy(arrayOfPlayers, "name");
 */

function Player(name) {
	var palyers={}
	palyers.name=name;
	palyers.addInfo=addInfo;
	palyers.increaseLevel=increaseLevel

	return palyers;
}


var addInfo=function(age,position, level, availability){
  this.age=age;
  this.position=position;
  this.level=level;
  this.availability=availability

}


var increaseLevel=function (n) {
	this.level=this.level+n;
}

var player1=Player("player1")
player1.addInfo(31,"defense",2,"availab");

var player2=Player("player2")
player1.addInfo(25,"attack",1,"notavailab");

var player3=Player("player3")
player1.addInfo(30,"defense",4,"availab");

var player4=Player("player4")
player1.addInfo(40,"attack",2,"availab");


var arrayOfPlayers =[player1,player2,player3,player4]

var decrease=function() {
	for (var i = 0; i < arrayOfPlayers.length; i++) {
		if(arrayOfPlayers[i].age>30){
			arrayOfPlayers[i].level=arrayOfPlayers[i].level-1
		}
	}
	return arrayOfPlayers
}
