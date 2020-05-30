window.addEventListener("load", writeSessionValues);

function writeSessionValues() {
   
   document.getElementById("productView").textContent = sessionStorage.prodSelect; 
   document.getElementById("numGamesView").textContent = sessionStorage.numGames;
   document.getElementById("gameTotalView").textContent = "$" + sessionStorage.gameTotal;
   document.getElementById("taxTotalView").textContent = "$" + sessionStorage.taxTotal;
   document.getElementById("overallTotalView").textContent = "$" + sessionStorage.overallTotal;
}window.addEventListener("load", writeSessionValues);