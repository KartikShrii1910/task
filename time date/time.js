
    var timer= null;
    var date= new Date();
   
   
    function startInterval(){
   
        timer= setInterval(function(){
         const date = new Date();
        document.getElementById('result').innerHTML= date.toLocaleTimeString();
    }, 1000);
    
}

function stopInterval(){

    clearInterval(timer);
}