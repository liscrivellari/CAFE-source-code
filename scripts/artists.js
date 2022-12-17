let imgs = document.querySelector(".artImg");



    for(var i = 0; i < imgs.length; i++){
        imgs.addEventListener("click", function(){
         imgs[i].style.transform = "scale(13)";
        })
     }



//   imgs.addEventListener("click", function(){
//     imgs.style.transform = "scale(13)";

//   })
 