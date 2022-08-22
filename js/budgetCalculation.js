
function getInputByID(inputID)
{
    const getInput = document.getElementById(inputID);
    const getInputString = getInput.value;
    const getInputNumber =  parseInt(getInputString);
    return getInputNumber;
}

function getOutputByID(outputID)
{
    const getOutput = document.getElementById(outputID);
    return getOutput;
}

document.getElementById('calculate-button').addEventListener('click', function(){
     //get per player cost
    const getPerPlayerCost = getInputByID('per-player-cost');

    if(isNaN(getPerPlayerCost))
    {
          alert("Please Give Valid Input");
          return;
    }

      //get previous expenses
    const previousExpenses = getOutputByID('player-expenses');
    //get updated expenses
    const newExpenses =  playersNameArray.length * getPerPlayerCost;
    previousExpenses.innerText = newExpenses;
})

document.getElementById('calculate-total').addEventListener('click', function(){
    
    //get manager cost
    const getManagerCost = getInputByID('manager-cost');
    //get coach cost
    const getCoachCost = getInputByID('coach-cost');

    if(isNaN(getManagerCost) || isNaN(getCoachCost))
    {
          alert("Please Give Valid Input");
          return;
    }
    // get latest expenses cost
    const latestExpenses = getOutputByID('player-expenses');
    const latestExpensesString = latestExpenses.innerText;
    const latestExpensesNumber = parseInt(latestExpensesString);
     //get previous total cost
    const total = getOutputByID('total-cost');
    //updated total cost 
    const totalCost = getManagerCost + getCoachCost + latestExpensesNumber;
    //set total cost
    total.innerText = totalCost;
})