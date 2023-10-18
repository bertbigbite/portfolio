fetch('projects.json').then(function (response) {
    return response.json()
}).then(function (projects){

    const itemsDiv = document.querySelector ('#name')
    let contents = '';
  contents += "<div class='container'>";
    projects.forEach(projects =>{
        contents += `<div class='project_container'>
            <h1>${projects.name}</h2>
            <img src=${projects.image}></img>
            <p>${projects.desc}</p>
            <br>
            <div class="jsonlinks">
            <a class="url">${projects.url}</a>
            <a href="https://github.com/bertbigbite/portfolio" class="git">${projects.git}</a>
            </div>
        </div>`
        console.log(contents);
    })
contents += "</div>";

    itemsDiv.innerHTML = contents;

})
