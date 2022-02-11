/*
* Excercise 1
*
*/



/*
* Then write a function that changes the text and the color inside the div
*
*/

let colorBlock = document.getElementById("color-block")
let color = document.getElementById("color-name")

function changeColor(){
    //Write a condition determine what color it should be changed to
    if(color.innerText == '#F08080'){
        //change the background color using JS
        color.innerText = '#4571c4'
        colorBlock.style.backgroundColor = '#4571c4'
        //Change the text of the color using the span id color-name

    }
    else{
        //change the background color using JS
        color.innerText ='#F08080'
        colorBlock.style.backgroundColor = '#F08080'
        //Change the text of the color using the span id color-name


    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/

colorBlock.addEventListener('click', ()=>{changeColor()},false);

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
**To convert temperatures in degrees Fahrenheit to Celsius, subtract 32 and multiply by 5/9.
*/
let F = document.getElementById("f-input")
let C = document.getElementById('c-output')
let covertbtn = document.getElementById('covertbtn')
function convertTemp(){
    //Calculate the temperature here
    
    let Celcius = (F.value - 32)*5/9
    //Send the calculated temperature to HTML
    C.innerHTML = Celcius;
}

convertbtn.addEventListener('click', ()=>{convertTemp()},false);



