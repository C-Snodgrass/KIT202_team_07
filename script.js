const onArchive = document.URL.includes("archive.html") //if on archive.html

let showHideBtn1 = document.querySelector("#showHideBtn1"); //button for post 1
let showHideBtn2 = document.querySelector("#showHideBtn2"); //button for post 2
let showHideBtn3 = document.querySelector("#showHideBtn3"); //button for post 3
let showHideBtn4 = document.querySelector("#showHideBtn4"); //button for post 4
let showHideBtn5 = document.querySelector("#showHideBtn5"); //button for post 5
let showHideContent1 = document.querySelector("#showHideContent1"); //content for post 1
let showHideContent2 = document.querySelector("#showHideContent2"); //content for post 2
let showHideContent3 = document.querySelector("#showHideContent3"); //content for post 3
let showHideContent4 = document.querySelector("#showHideContent4"); //content for post 4
let showHideContent5 = document.querySelector("#showHideContent5"); //content for post 5

//shows/hides archived posts
function showHidePost(content, button, value) {
    if(content.hidden == true) {
        value = 1;
    }
    else if (content.hidden == false) {
        value = 0;
    }
    if (value == 0) {
        content.hidden = true;
        value = 1;
        button.innerHTML = "Show";
    }
    else if (value == 1) {
        content.hidden = false;
        value = 0;
        button.innerHTML = "Hide";
    }
}

//checks that we're on archive.html, and if we are applies the following
if (onArchive) {
showHideContent1.hidden = true;
showHideContent2.hidden = true;
showHideContent3.hidden = true;
showHideContent4.hidden = true;
showHideContent5.hidden = true;

showHideBtn1.addEventListener("click", showHidePost.bind(null, showHideContent1, showHideBtn1));
showHideBtn2.addEventListener("click", showHidePost.bind(null, showHideContent2, showHideBtn2));
showHideBtn3.addEventListener("click", showHidePost.bind(null, showHideContent3, showHideBtn3));
showHideBtn4.addEventListener("click", showHidePost.bind(null, showHideContent4, showHideBtn4));
showHideBtn5.addEventListener("click", showHidePost.bind(null, showHideContent5, showHideBtn5));
}



// document.querySelector("#showHideBtn2").addEventListener("click", showHidePost);
// document.querySelector("#showHideBtn3)addEventListener("click", showHidePost);
// showHideBtn4.addEventListener("click", showHidePost);
// showHideBtn5.addEventListener("click", showHidePost);
