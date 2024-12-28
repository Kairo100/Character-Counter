
/*first get referece of html element by declaring with const value 
second the function which doing your work
*/

const textarea = document.getElementById("textarea");
const counter = document.querySelector(".counter");
function countingCharacter(){

    const textLength = textarea.value.length;
    
    counter.innerHTML=textLength;
}