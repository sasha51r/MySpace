
                                                                            

// function toggleLangOptions() {
//     var langDropdown = document.querySelector('.lang-select-list');
//     var langImg = document.querySelectorAll('.language-img');
//     langDropdown.classList.toggle('hidden'); 

//     langDropdown.style.opacity = '0'; 
//     langDropdown.style.transition = 'opacity 0.4s'; 

//     langImg.forEach(function(langImg){
//         langImg.style.transform = 'rotate(180deg)';
//         langImg.style.transition = 'transform 0.2s';
//     });

//     setTimeout(function() {
//         langDropdown.style.opacity = '1'; 
//         langImg.forEach(function(langImg){
//             langImg.style.transform = 'scale(1.4)';
//         });
//     }, 100); 


//     setTimeout(function() {
//         langImg.forEach(function(langImg){
//             langImg.style.transform = 'scale(0.9)';
//         });
//     }, 500); 
// };
// 



function toggleLangOptions() {
    var langDropdown = document.querySelector('.lang-select-list');
    langDropdown.classList.toggle('hidden'); 

    langDropdown.style.opacity = '0'; 
    langDropdown.style.transition = 'opacity 0.3s'; 

    setTimeout(function() {
        langDropdown.style.opacity = '1'; 
    }, 100); 
 }






function changeLanguageIcon(iconSrc) {
    const languageIcon = document.getElementById('language-icon');
    languageIcon.src = iconSrc;
   toggleLangOptions();

}


window.addEventListener("click", function(event) {
    let elementClass = event.target.className;
    console.log(elementClass)
});



document.addEventListener("click", function(event) {
    let langDropdown = document.querySelector('.lang-select-list');
    let clickClass = event.target.classList;
    if (!langDropdown.classList.contains("hidden") && !clickClass.contains("lang-select-list") && !clickClass.contains("language-icon")){
        langDropdown.classList.toggle('hidden'); 
    };
});


function toggleTheme(){
    const body = document.body;
    body.classList.toggle("light-theme")

}

