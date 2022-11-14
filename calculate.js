let displaySection = document.getElementById('display')
// from this collection, create an array 
let buttons = Array.from(document.getElementsByClassName('button'))


// map over buttons to create a new array and listen for click on an individual button, call function doCalculate on the element clicked
buttons.map(button => {
    button.addEventListener('click', el => {
        doCalculate(el)
    })
})

function doCalculate(e) {
    let allButtons = document.getElementsByClassName('button');

    // when any button is clicked, remove the default zero, make it blank and fill it with the functionality assigned from that button
    if (displaySection.innerText === '0') {
        displaySection.innerText = ''
    }

    // console.log(e.target)
    switch ((e.target.innerText)) {
        case 'AC':
            displaySection.innerText = '0'
            break;

        case 'DEL':
            if (displaySection.innerText !== 'error') {
                // removes the last character through slice method 
                displaySection.innerText = displaySection.innerText.slice(0, -1);
            } else {
                displaySection.innerText = '0'
            }
            
            if (displaySection.innerText == '') {
                displaySection.innerText = '0'
            }

            break;


        case '=':
            // try executing, if unable to, catch and display error
            try {
                // calculate value of display text using 'eval' , a js function
                displaySection.innerText = eval(displaySection.innerText);
            } catch {
                displaySection.innerText = "error"
            }
         
            break;

        default:
            displaySection.innerText += e.target.innerText
            break;
    }
}