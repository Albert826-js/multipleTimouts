let a=document.getElementById("index");
let newAll =document.getElementById('im')
 let para=document.getElementById("dev");

 para.style.opacity="0";

newAll.style.height="10px";


function na() {
   
    newAll.style.height="15px";  
    a.style.color="blue";
     
}

 
 
function green() {
   setTimeout(() => {
    a.style.color="green";
     
    newAll.style.height="20px";
    
   }, 1000); 
   
   
   setTimeout(() => {
    
    a.style.color="yellow";
    newAll.style.height="200px";

    newAll.style.transition="15s";
   }, 2000);

   setTimeout(() => {
    a.style.color="pink";  
    newAll.style.height="400px";
    newAll.style.transition="15s";
    para.style.opacity="1";
    para.style.transition="20s"
       
}, 3000);
    
}


 


function hi() {
   

    console.log(na());
    console.log(green());
    

    }
 
 