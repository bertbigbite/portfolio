fetch('projects.json').then(function (response) {
    return response.json()
}).then(function (projects){

    const itemsDiv = document.querySelector ('#name')
    // Create a constant to store the first 3 items in the array
    let randomNumber = (Math.random (projects))
    const sampleList = projects.slice(0,3);
    let contents = '';
  // Add the class .container to the variable contents.
    contents += "<div class='container'>";
// Iterate through each of the elements within the constant sampleList, adding each one for every item
sampleList.forEach(projects =>{
// Add the .project_container class to the contents variable and then in turn each element of the object, iterating for every instance
        contents += `<div class='project_container'>
            <h1>${projects.name}</h2>
            <img src=${projects.image}></img>
            <p>${projects.desc}</p>
            <br>
            <div class="jsonlinks">
            <a class="url">${projects.url}</a>
            <a class="open-project">${projects.view}</a>
            <a href="https://github.com/bertbigbite/portfolio" class="git">${projects.git}</a>
            </div>
        </div>`
        console.log(contents);
    })
// Add the closing div 
contents += "</div>";

itemsDiv.innerHTML = contents;

})

// Setting constants for the two main states for the modal
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const projectOne = document.querySelector(".project-one");



// Setting constants for the open and close buttons
const openContactBtn = document.querySelector(".fourth");
const closeContactBtn = document.querySelector(".btn-close");
const openContactBtnTwo = document.querySelector(".contact");
const openProjectOneBtn = document.querySelector(".open-project");

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

  const openProject = function () {
    projectOne.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };
// event listener, looking for the click, triggers the openModal function
  openContactBtn.addEventListener("click", openModal);
// event listener, looking for the click, triggers the closeModal function
  closeContactBtn.addEventListener("click", closeModal);

  openProjectOneBtn.addEventListener("click", openProject);




