let btn = document.getElementById("calculate")
btn.addEventListener("click", () => {
  let people = document.getElementById("people")
  let amount = document.getElementById("bill")
  let final = document.getElementById("final")

  let billAmount = amount.value
  let noOfPeople = people.value
  let feedbackOfPeople = document.querySelector('input[name="feedback"]:checked').value


  //For Awesome Feeback
  if (feedbackOfPeople == 1) {
    if (billAmount > 1000) {
      let amt = billAmount * (14 / 100)
      let finalAmount = amt / noOfPeople
      final.innerHTML = "Amount per person is " + Math.floor(finalAmount);
    }
    else {
      let amt = billAmount * (9 / 100)
      let finalAmount = amt / noOfPeople
      final.innerHTML = "Amount per person is " + Math.floor(finalAmount);
    }
  }

  //For good feedback
  if (feedbackOfPeople == 2) {
    if (billAmount > 1000) {
      let amt = billAmount * (13 / 100)
      let finalAmount = amt / noOfPeople
      final.innerHTML = "Amount per person is " + Math.floor(finalAmount);
    }
    else {
      let amt = billAmount * (8 / 100)
      let finalAmount = amt / noOfPeople
      final.innerHTML = "Amount per person is " + Math.floor(finalAmount);
    }
  }

  //For Average feedback
  if (feedbackOfPeople == 3) {
    if (billAmount > 1000) {
      let amt = billAmount * (12 / 100)
      let finalAmount = amt / noOfPeople
      final.innerHTML = "Amount per person is " + Math.floor(finalAmount);
    }
    else {
      let amt = billAmount * (7 / 100)
      let finalAmount = amt / noOfPeople
      final.innerHTML = "Amount per person is " + Math.floor(finalAmount);
    }
  }

  //For poor feedback
  if (feedbackOfPeople == 4) {
    if (billAmount > 1000) {
      let amt = billAmount * (8 / 100)
      let finalAmount = amt / noOfPeople
      final.innerHTML = "Amount per person is " + Math.floor(finalAmount);
    }
    else {
      let amt = billAmount * (5 / 100)
      let finalAmount = amt / noOfPeople
      final.innerHTML = "Amount per person is " + Math.floor(finalAmount);
    }
  }

}); 