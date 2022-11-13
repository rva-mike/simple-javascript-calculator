let displaySection = document.getElementById('display')

// from this collection, create an array 
let buttons = Array.from(document.getElementsByClassName('button'))



// map over buttons to create a new array and listen for click on an individual button, call function doCalculate on the element clicked
buttons.map( button => {
    button.addEventListener('click', el => {
        doCalculate(el)
    })
})

function doCalculate(e) {

    // when any button is clicked, remove the default zero, make it blank and fill it with the functionality assigned from that button
    if(displaySection.innerText === '0'){
        displaySection.innerText = ''
    }

    // console.log(e.target)
    switch ((e.target.innerText)) {
        case 'AC':
            displaySection.innerText = '0'
            break;

        case 'DEL':
            // removes the last character through slice method 
            displaySection.innerText = displaySection.innerText.slice(0, -1);
            break;

        case '=':
            // calculate value of display text using 'eval' , a js function
            displaySection.innerText = eval(displaySection.innerText);
            break;
    
        default:
            displaySection.innerText += e.target.innerText
            break;
    }
}