
// Function triggered when a button is clicked
function buttonClick(e) {
    // Find out which button was clicked
    const button = e.target;

    // The ID of the div containing item information is the same as item button ID but with '-info' on the end
    // Work out the ID of the information div
    const infoDivId = button.id + '-info';

    // Find the information div for the item
    const item = document.getElementById(infoDivId);

    // Make it appear/disappear - toggle the hidden class
    item.classList.toggle('hidden');
}

fetch('projects.json').then(function (response) {
    return response.json()
}).then(function (projects){

    const itemsDiv = document.querySelector ('#name')
    const modalsDiv = document.querySelector ('#projectoverlays')

    let contents = '';
    let modals = '';
  // Add the class .container to the variable contents.
    
  contents += "<div class='container'>";
// Iterate through each of the elements within the array, adding each one for every item
    projects.forEach(projects =>{
// Add the .project_container class to the contents variable and then in turn each element of the object, iterating for every instance
        contents += `<div class='project_container'>
            <h1>${projects.name}</h2>
            <img src=${projects.image}></img>
            <p>${projects.desc}</p>
            <br>
            <div class="jsonlinks">
            <a class="url">${projects.url}</a>
            <button id = "${projects.name}" class="show-item-info">more info</button>
            <a href="https://github.com/bertbigbite/portfolio" class="git">${projects.git}</a>
            </div>
        </div>`

        modals += `<div id="${projects.name}-info" class=" overlay hidden"> 
            <div class = "modalcontents">
                <div class="modalheader">
                    <h2> ${projects.name}</h2>
                    <button class="btn-closed">⨉</button>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div class=gallery>
                    <img class="modalimage" src=${projects.image}></img>
                    <img class="modalimage" src=${projects.image}></img>
                    <img class="modalimage" src=${projects.image}></img>
                </div>
            </div>    
        </div>`

        console.log(contents);
    })
// Add the closing div 
contents += "</div>";

itemsDiv.innerHTML = contents;
modalsDiv.innerHTML = modals;



// Helped by Geoff, Find all of the buttons that have the class 'show-item-info'
const buttons = document.querySelectorAll('.show-item-info');
buttons.forEach(function (button) {
    // For each button, add an 'onclick' even listener that calls the buttonClick function
    button.addEventListener('click', buttonClick);
})


})

// Setting constants for the two main states for the modal
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");


// Setting constants for the open and close buttons
const openContactBtn = document.querySelector(".fourth");
const closeContactBtn = document.querySelector(".btn-close");
const openContactBtnTwo = document.querySelector(".contact");
const closeProjectModalBtn = document.querySelector(".btn-close");

// Creating a function for opening the modal, removes the hidden classes to reveal the modal
// Function used to apply class to multiple elements at a time
const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

// Creating a function for opening the modal, removes the hidden classes to reveal the modal
// Function used to apply class to multiple elements at a time
const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  };

  const closeProjectModal = function () { 
    modal.classList.add("hidden");
  };

  
// event listener, looking for the click, triggers the openModal function
  openContactBtn.addEventListener("click", openModal);
// event listener, looking for the click, triggers the closeModal function
  closeContactBtn.addEventListener("click", closeModal);

  closeProjectModalBtn.addEventListener("click", closeProjectModal);



