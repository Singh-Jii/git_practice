//prime or not//

function prime(number){
  var count = 0;
  for(var i=1; i<=number; i++){
  if(number%i==0){
    count++;
  }
  }
  if(count==2){
    console.log("Prime")
  }
  else{
    console.log("not");
  }
}
prime(3);
prime(6);


//palindrome or not//

function checkPalindrome(str) {
var bag = "";
  for(var i = str.length-1; i>=0 ; i--){
      bag = bag + str[i];
  }
  
  if(bag==str){
      console.log("Yes");
  }
  else{
      console.log("No");
  }
  
}
checkPalindrome("naman");