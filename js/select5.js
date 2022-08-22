//players name array
const playersNameArray = [];
//display player name in the list
function displayPlayerName(playerArray)
{
    const playerList = document.getElementById('player-name-list');
    playerList.innerHTML = "";
    for(let i=0 ; i<playerArray.length ; i++)
    {
        //creating a list item of player
        const li = document.createElement("li");
        li.innerHTML =  `
        <li>${i+1} : ${playerArray[i]}</li>
        `;
        playerList.appendChild(li);
    }
}
 //taking player name by clicking select button
function getPlayerName(element)
{   
    const playerName = element.parentNode.children[1].innerText;
    if(playersNameArray.length < 5)
    {
         //push players name in PlayerArray
         playersNameArray.push(playerName);
         // console.log(element);
         element.disabled = true;
         element.style.backgroundColor = 'gray';
    }
    else{
        alert("Please Choose Only 5")
    }
    //displaying selected player name
    displayPlayerName(playersNameArray);
}
