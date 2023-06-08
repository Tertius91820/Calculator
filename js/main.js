// required abilities of a calculator:
// -accept user inputs
// -recognize inputs and perform calculations
// -should accept decimal numbers
// -return a Result

// optional features:
// -ability to accept longer arithmetic operations.
// -display the input as its been entered
// -store previous total is star of new operation
// -clear button should clear all entries
// -Should prevent invalid input(ie. operators next to each other, two decimal points)

const keys =document.querySelector(".calculator-buttons")
keys.addEventListener("click",event => {
  const {target} = event;
  const {value} = target;
// event.target.value , value extracted through deconstruction

  if(!target.matches("button")){
    return;
  }else{
    //pass to parse method
    calculator.parseInput(value)

    //console.log(event.target.value)
  }
})

const calculator = {
  displayText: "0",
  prevTotal: null,

  parseInput(value){
if(this.displayText === "0"){
  this.displayText = ""
}
//Have any of the specoal bottons been clicked
  switch (value){
  case '=' :
    //calculate the answer
    break;
  case "C":
    //clear screen and stored value
    break;
  case '.':
    if(this.displayText == 0){
      //pass "0." into add text method
    }else{
      //add value to tect string
    }
    break;
    default:
      //add value to text string
      break;
  }
  },

  addText(value){
    if(this.displayText ==="0"){
      this.displayText = ""
    }else if(this.prevTotal !==null){
      this.displayText = this.prevTotal
      this.prevTotal = null
    }
    if(/*user has entered an invalid sequence dont pass*/){

    }
    this.displayText += value
    //ouput display text to screen

  },
}