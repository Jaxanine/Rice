//Load answer key
const riceCooker = () => {
  //Get current correct answer
  let unanswered = true;
  let addAnsText = document.getElementsByClassName("card-title")[0].innerHTML;
  let ansText = aKey[document.getElementsByClassName("card-title")[0].innerHTML];
  let choices = document.getElementsByClassName("card-button");
  console.log("e");
  //Determine correct answer for current question
  for(let i = 0; i < choices.length && unanswered; i++){
    if(choices[i].innerHTML == ansText){
	  choices[i].click();
 	  unanswered = false;
	  console.log("Answer correct!");
    				       }
    else
    {
        //If question cannot be found in answer key, fall back to choosing the first option and notify the user.
        console.log("Answer undefined for: " + addAnsText);
  	choices[0].click();
	
	addAns(unanswered,aKey,addAnsText,ansText);
        
    };
  setTimeout(riceCooker, 2000 + (Math.random()*500 - 250));

                                                         }

  


var aKey = {
"What does バス mean?": "bus",
"What does コート mean?": "coat",
"What does と mean?": "and",
"What does まい mean?": "every",
"What does にち mean?": "day",
"What does いつ mean?": "When",
"What does どこ mean?": "where",
"What does はち mean?": "eight",
"What does いぬ mean?": "dog",
"What does きゅう or く mean?": "nine",
"What does えん mean?": "yen",
"What does はん mean?": "half past",
"What does いそがしい mean?": "busy",
"What does こんばんは mean?": "Good evening",
"What does こんにちは mean?": "Good afternoon",
"What does すみません mean?": "Excuse me, sorry",
"What does だいじょうぶ mean?": "all right, no problem",
"What does きいろ mean?": "Yellow",
"What does たべます mean?": "to eat",
"What does やすみのひ mean?": "a day off; Holiday",
"What does きます mean?": "to come",
"What does あいます mean?": "to meet",
"What does かえります mean?": "to return",
"What does いきます mean?": "to go",
"What does おやすみなさい mean?": "Good night",
"What does みます mean?": "to watch",
"What does のみます mean?": "to drink"
}

this.addAns = function(unanswered,aKey,addAnsText,ansText,correctAns) 
{
console.log(addAnsText);
  if(addAnsText != undefined)
	{
    var correctAns;
    Array.from(document.getElementsByClassName("fade-appear-done")).forEach(
    function (curr,index){
    if(Array.from(curr.firstChild.classList).indexOf("correct")!=-1)
    correctAns=curr.firstChild.innerText;
                         })	
         
	aKey[addAnsText] = correctAns;
	console.log(addAnsText,correctAns)
	    
	}		                              
								     };

  setTimeout(riceCooker, 2000 + (Math.random()*500 - 250));
				
