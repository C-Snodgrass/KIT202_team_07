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

// form validation for create page
function validateForm()
{
    if(document.create.title == "" || document.create.title.value.length >70)
    {
        alert ("Please enter a valid Title for your blog");
        document.create.title.focus();
        return false;
    }

    if(document.create.tags.value == "")
    {
        alert("Please enter a keyword or tag for your blog post");
        document.create.tags.focus();
        return false;
    }
   
    if(document.create.blogPost.value == "")
    {
        alert("Please enter your blog post");
        document.create.blodPost.focus();
        return false;
    }
}

// Toggle light and dark themes
const page = document.querySelector(".page");
const toggleIcon = document.querySelector("toggle-icon");
const toggle = document.querySelector(".toggle-input");

toggle.addEventListener("change", toggleTheme);

function toggleTheme() {

    // check if toggle is checked if so, change the css class to dark
    if (toggle.checked){
        page.classList.replace('light', 'dark');
    } else{
        page.classList.replace('dark', 'light');
    }

    // change the image of the button
    if (page.classList.replace('light')) {
        toggleIcon.src = './images/svg/Moon.svg';
        toggleIcon.alt = 'Switch to Dark Theme';
    }else {
        toggleIcon.src = './images/svg/Sun.svg';
        toggleIcon.alt = 'Switch to Light Theme';

    }
}

// document.querySelector("#showHideBtn2").addEventListener("click", showHidePost);
// document.querySelector("#showHideBtn3)addEventListener("click", showHidePost);
// showHideBtn4.addEventListener("click", showHidePost);
// showHideBtn5.addEventListener("click", showHidePost);
