const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
  button.addEventListener('click', e => {
    switch(e.target.innerText){
      case '=':
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Invalid Operation";
        }
        break;
      case 'CE':
        display.innerText = '';
        break;
      default:
        display.innerText += e.target.innerText;
    }
  })
});