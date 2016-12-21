//=============================================================================
/*                                  Part 1                                   */
//=============================================================================
/* (1) Think of some way to represent all of the students in RBK cohort2, if you know
		that each one have the following attributs:
		- name - age - education - nationality

	a- represent 2 of your frineds in rbk using the model that you have made and name them as your frineds name

	b- create a function called showFriend() that accepts one parameter, and output representation of your 
	frined like the following
		showFriend(frinedData) // "Fatema with the age of 26 and with computer engineering education" 

	c- create a function called avergeStudents() to calculate the average age of your class students, 
	is it possible to pass all your class students one by one ? think of a way to pass them in your function
*/
 var makeStudent =function (name,age,education,nationality) {
 	return {
 	name:name,
 	age:age,
 	education:education,
 	nationality:nationality,
    }
 }
var mohamad=makeStudent ("Mohamad",35,"Engineer","Srian");
var waleed=makeStudent ("Waleed",20,"Student","Jordan");

var students=[mohamad,waleed];

function showFriend(name){
	return name.name + " with the age of " + name.age + " and with " + name.education + " education"
}

function avergeStudents(){
	var avg=0;
	for (var i = 0; i < students.length; i++) {
		avg=avg+students[i].age/students.length
	}
	return avg;
}



/*
 b-create a function called rangeSquared in which it will accept two parameters, and will output the squared 
    numbers between these two parameter if the number is even 
	in order to square the numbers create a function called square and call it inside rangeSquared function
	rangeSquared(2)// [4];
	rangeSquared(3) // null
	rangeSquared(2,10)// [4,16,36,64,100];
*/
function range(start, end){
  var arr=[];
  if(start<end){
	  for (var i = start; i <=end; i++) {
	  	arr.push(i)
	  }
  }
  else {
	  for (var i = end; i <=start; i++) {
	  	arr.push(i)
      }
  }
  return arr;
}


function rangeSquared(a,b) {
  var arrRes=[]
  var arr=range(a,b)
  for (var i = 0; i < arr.length; i++) {
	 if(arr[i]%2===0){
	 arrRes.push(Math.pow(arr[i],2))
	 }
  }
	return arrRes;
}




/* c- Find all leaders in an array. A leader is an element larger than all elements to the right of it.
 	Example:
	leader([98, 20, 30, 5, 11, 27]) // output: [98, 30, 27]
*/

function leader(array) {
	var arr=[];
    var max=0;
	for (var i = 0; i < array.length; i++) {
		if(max<array[i]){
			arr.push(array[i])
			array.splice(0,i+1)
			max=array[0]
		}
	}
	return arr;
}
		