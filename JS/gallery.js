// Gallery Functionality
const gallery  = document.querySelectorAll(".gallery-img"),
mainBox = document.querySelector(".main-box"),
previewImg = mainBox.querySelector("img"),
closeIcon = mainBox.querySelector(".icon"),
currentImg = mainBox.querySelector(".current-img"),
totalImg = mainBox.querySelector(".total-img"),
caption = document.getElementById("caption"),
shadow = document.querySelector(".img-shadow");

window.onload = () => {
    for (let i = 0; i < gallery.length; i++) {
        totalImg.textContent = gallery.length; //passing total img length to totalImg variable
        let newIndex = i; //passing i value to newIndex variable
        let clickedImgIndex; //creating new variable

        let images = document.querySelectorAll('.gallery img');
                let caption = document.getElementById('caption');
                  images.forEach(function(image) {
                  image.addEventListener('click', function() {
                  caption.innerHTML = image.getAttribute('alt');
               });
           });

           gallery[i].onclick = () => {
            clickedImgIndex = i; //passing cliked image index to created variable (clickedImgIndex)
            function preview() {
                currentImg.textContent = newIndex + 1; //passing current img index to currentImg varible with adding +1
                let imageURL = gallery[newIndex].querySelector("img").src; //getting user clicked img url
                previewImg.src = imageURL; //passing user clicked img url in previewImg src 
                caption.innerHTML = images[newIndex].alt;
            }
            preview(); //calling above function
              
            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");
            if(newIndex == 0){ //if index value is equal to 0 then hide prevBtn
                prevBtn.style.display = "none"; 
            }
            if(newIndex >= gallery.length - 1){ //if index value is greater and equal to gallery length by -1 then hide nextBtn
                nextBtn.style.display = "none"; 
            }
            prevBtn.onclick = () => { 
                newIndex--; //decrement index
                if(newIndex == 0) {
                    preview(); 
                    prevBtn.style.display = "none"; 
                }else{
                    preview();
                    nextBtn.style.display = "block";
                } 
            }
            nextBtn.onclick = () => { 
                newIndex++; //increment index
                if(newIndex >= gallery.length - 1){
                    preview();
                    nextBtn.style.display = "none";
                } else {
                    preview(); 
                    prevBtn.style.display = "block";
                }
            }

            document.querySelector("body").style.overflow = "hidden";
            mainBox.classList.add("show"); 
            shadow.style.display = "block"; 
            closeIcon.onclick = () => {
                newIndex = clickedImgIndex; //assigning user first clicked img index to newIndex
                prevBtn.style.display = "block"; 
                nextBtn.style.display = "block";
                mainBox.classList.remove("show");
                shadow.style.display = "none";
                document.querySelector("body").style.overflow = "scroll";
            }
        }
        
    }
    
}
