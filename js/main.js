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
    this.calcAnswer(this.displayText)
    break;
  case "c":
    //clear screen and stored value
    this.clearAll()
    break;
  case '.':
    if(this.displayText == 0){
      //pass "0." into add text method
      this.addText("0.")
    }else{
      //add value to text string
      this.addText(value)
    }
    break;
    default:
      //add value to text string
      this.addText(value)
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

      /*check if user has entered an invalid sequence dont pass*/
    if(isNaN(+(value)) && isNaN(+(this.displayText))){
      if(isNaN(this.displayText.slice(-1))){
        return;
      }
    }
    this.displayText += value
    //ouput display text to screen
    this.outputText(this.displayText)

  },

  outputText(text){
    document.querySelector(".calculator-screen").value = text
  },

  calcAnswer(equation) {
      let result = Function ("return " + equation)()
      this.outputText(result)
  },

  clearAll(){
    this.displayText ="0",
    this.prevTotal = null,
    this.outputText(this.displayText)
  }
  
}

// get the input working with "." working 