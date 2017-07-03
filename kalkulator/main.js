function c(val){
  
    document.getElementById("screen").value = val;
}

function math(val){
  
    document.getElementById("screen").value += val;
}


function e() { 
  
    try { 
      
      c(eval(document.getElementById("screen").value)) 
    } 
    
    catch(e) {
      
      c('Error') 
    } 
}


