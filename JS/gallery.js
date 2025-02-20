// Gallery Functionality
const gallery = document.querySelectorAll('.gallery-img'),
mainBox = document.querySelector('.main-box'),
previewImg = mainBox.querySelector('img'),
closeIcon = mainBox.querySelector('.icon'),
currentImg = mainBox.querySelector('.current-img'),
totalImg = mainBox.querySelector('.total-img'),
caption = document.getElementById('caption'),
shadow = document.querySelector(".img-shadow");

window.onload = () => {
    for (let i = 0; i < gallery.length; i++) {
        totalImg.textContent = gallery.length;
        let newIndex = i;
        let clickedImgIndex;

        let images = document.querySelectorAll('.gallery img');
        let caption = document.getElementById('caption');
            images.forEach(function(image) {
                image.addEventListener('click', function() {
                    caption.innerHTML = image.getAttribute('alt');
                });
            });

            gallery[i].onclick = () => {
                clickedImgIndex = i;
                function preview() {
                    currentImg.textContent = newIndex + 1;
                    let imageURL = gallery[newIndex].querySelector('img').src;
                    previewImg.src = imageURL;
                    caption.innerHTML = images[newIndex].alt;
                }
                preview();

                const prevBtn = document.querySelector('.prev');
                const nextBtn = document.querySelector('.next');
                if(newIndex == 0) {
                    prevBtn.style.display = 'none';
                }
                if (newIndex >= gallery.length - 1) {
                    nextBtn.style.display = 'none'
                }
                prevBtn.onclick = () => {
                    newIndex--;
                    if(newIndex == 0) {
                        preview();
                        prevBtn.style.display = 'none';
                    } else {
                        preview();
                        nextBtn.style.display = 'block';
                    }
                }
                nextBtn.onclick = () => {
                    newIndex++;
                    if(newIndex >= gallery.length - 1) {
                        preview();
                        nextBtn.style.display = 'none';
                    } else {
                        preview();
                        prevBtn.style.display = 'block';
                    }
                }

                document.querySelector('body').style.overflow = 'hidden';
                mainBox.classList.add('show');
                shadow.style.display = 'block';
                closeIcon.onclick = () => {
                    newIndex = clickedImgIndex;
                    prevBtn.style.display = 'block';
                    nextBtn.style.display = 'block';
                    mainBox.classList.remove('show');
                    shadow.style.display = 'none';
                    document.querySelector('body').style.overflow = 'scroll';
                }
            }
    }
}

