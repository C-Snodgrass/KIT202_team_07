

const onIndex = document.URL.includes("index.html") //if on about.html
const onAbout = document.URL.includes("about.html") //if on about.html
const onArchive = document.URL.includes("archive.html") //if on archive.html
const onCreate = document.URL.includes("create.html") //if on about.html
const onLogin = document.URL.includes("login.html") //if on about.html
const onRegister = document.URL.includes("register.html") //if on about.html

//archive page varaibles
let archiveBtn1 = document.querySelectorAll(".archiveBtn")[0]; //button for post 1
let archiveBtn2 = document.querySelectorAll(".archiveBtn")[1]; //button for post 2
let archiveBtn3 = document.querySelectorAll(".archiveBtn")[2]; //button for post 3
let archiveBtn4 = document.querySelectorAll(".archiveBtn")[3]; //button for post 4
let archiveBtn5 = document.querySelectorAll(".archiveBtn")[4]; //button for post 5

let archiveBox1 = document.querySelectorAll(".archiveBox")[0];
let archiveBox2 = document.querySelectorAll(".archiveBox")[1];
let archiveBox3 = document.querySelectorAll(".archiveBox")[2];
let archiveBox4 = document.querySelectorAll(".archiveBox")[3];
let archiveBox5 = document.querySelectorAll(".archiveBox")[4];

//about page variables
let aboutBtn1 = document.querySelectorAll(".aboutBtn")[0];
let aboutBtn2 = document.querySelectorAll(".aboutBtn")[1];
let aboutBtn3 = document.querySelectorAll(".aboutBtn")[2];
let aboutBtn4 = document.querySelectorAll(".aboutBtn")[3];
let aboutBtn5 = document.querySelectorAll(".aboutBtn")[4];

let aboutBox1 = document.querySelectorAll(".aboutBox")[0];
let aboutBox2 = document.querySelectorAll(".aboutBox")[1];
let aboutBox3 = document.querySelectorAll(".aboutBox")[2];
let aboutBox4 = document.querySelectorAll(".aboutBox")[3];
let aboutBox5 = document.querySelectorAll(".aboutBox")[4];

function showHideBox(box, button) {
    if(box.classList.contains('show')) {
        box.classList.remove('show');
        box.classList.add('hide');
        button.innerHTML = "Show";
    }
    else if(box.classList.contains('hide')) {
        box.classList.add('show');
        box.classList.remove('hide');
        button.innerHTML = "Hide";
    }
}

if (onAbout) {
    aboutBtn1.addEventListener("click", showHideBox.bind(null, aboutBox1, aboutBtn1));
    aboutBtn2.addEventListener("click", showHideBox.bind(null, aboutBox2, aboutBtn2)); 
    aboutBtn3.addEventListener("click", showHideBox.bind(null, aboutBox3, aboutBtn3)); 
    aboutBtn4.addEventListener("click", showHideBox.bind(null, aboutBox4, aboutBtn4));
    aboutBtn5.addEventListener("click", showHideBox.bind(null, aboutBox5, aboutBtn5));     
}

if (onArchive) {
    archiveBtn1.addEventListener("click", showHideBox.bind(null,archiveBox1, archiveBtn1));
    archiveBtn2.addEventListener("click", showHideBox.bind(null,archiveBox2, archiveBtn2));
    archiveBtn3.addEventListener("click", showHideBox.bind(null,archiveBox3, archiveBtn3));
    archiveBtn4.addEventListener("click", showHideBox.bind(null,archiveBox4, archiveBtn4));
    archiveBtn5.addEventListener("click", showHideBox.bind(null,archiveBox5, archiveBtn5));
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

// Dark them switcher
const body= document.querySelector("body");
const toggle = document.querySelector('.toggle-input');
// check the state of the dark mode box on page load
setCheckedState();

function setCheckedState(){
  // checks if localStorage has a "checked" value set at all
  if (localStorage.checked != undefined) {
    // if it does, it sets the state of the toggle accordingly
    toggle.checked = isTrue(localStorage.getItem('checked'));
    // after setting the toggle state, the theme is adjusted according to the checked state
    toggleTheme();
    }
}

function toggleTheme(){
    // check if the toggle is checked if so chang to dark theme
    if (toggle.checked){
        body.classList.replace("light", "dark");
    }else {
        body.classList.replace('dark', 'light');
    }

    // adjust class attatched to page / body element
    // if we are in light theme, make the picture the moon
    if(body.classList.contains('light')) {
        document.getElementById("toggle-icon").src = "./images/svg/Moon.svg"
    } else {
        document.getElementById("toggle-icon").src = "./images/svg/Sun.svg"
    }

    localStorage.setItem('checked', toggle.checked);
}

function isTrue(value){
    // convert string to boolean
    return value === 'true';
}

// save the state of the check box on local storage, so it has
// persistance


toggle.addEventListener("change", toggleTheme);

// take me to the top
function toTop() {
  document.documentElement.scrollTop = 0; // For Chrome, etc
} 


