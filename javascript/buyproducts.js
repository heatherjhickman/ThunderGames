

window.addEventListener("load", function() {
   calcCart();
   document.getElementById("submitButton").onclick = checkSelected;   
   document.getElementById("productBox").onchange = calcCart;   
   document.getElementById("prodQuantity").onblur = calcCart; 
});




function checkSelected() {
   var prodSelect = document.getElementById("productBox");
   if (prodSelect.selectedIndex === -1) {
      prodSelect.setCustomValidity("Select a game to purchase!");
   } else {
      prodSelect.setCustomValidity("");
   }
}




function calcCart() {
   sessionStorage.numGames = document.forms.thorForm.elements.gameQuantity.value;
   sessionStorage.numGamesCost = document.forms.thorForm.elements.gameQuantity.value*1;    
   
   
   var selectedSession = document.getElementById("productBox").selectedIndex;
   if (selectedSession !== -1) {
      sessionStorage.prodSelect = document.forms.thorForm.elements.productBox[selectedSession].text;
      sessionStorage.prodSelectCost = document.forms.thorForm.elements.productBox[selectedSession].value;
   } else {
      sessionStorage.prodSelect = "";
      sessionStorage.prodSelectCost = 0;
   }
   
   
   sessionStorage.gameTotal = parseFloat(sessionStorage.prodSelectCost) * 
                              parseFloat(sessionStorage.numGamesCost);
							  
							  
	sessionStorage.taxTotal = parseFloat(sessionStorage.gameTotal*.11);
	
	sessionStorage.overallTotal = parseFloat(sessionStorage.gameTotal) + 
                                  parseFloat(sessionStorage.taxTotal);
   
   writeSessionValues(); 
}







function writeSessionValues() {
    
   document.getElementById("productView").textContent = sessionStorage.prodSelect; 
   document.getElementById("numGamesView").textContent = sessionStorage.numGames;
   document.getElementById("gameTotalView").textContent = "$" + sessionStorage.gameTotal;
   document.getElementById("taxTotalView").textContent = "$" + sessionStorage.taxTotal;
   document.getElementById("overallTotalView").textContent = "$" + sessionStorage.overallTotal;
}

