fetch('projects.json').then(function (response) {
    return response.json()
}).then(function (projects){

    const itemsDiv = document.querySelector ('#name')
    let contents = '';
  contents += "<div class='container'>";
    projects.forEach(projects =>{
        contents += `<div class='project_container'>
            <h1>${projects.name}</h2>
            <p>${projects.desc}</p>
            <img>${projects.image}</img>
            <a>${projects.url}</a>
            <a>${projects.git}</a>
        </div>`
        console.log(contents);
    })
contents += "</div>";

    itemsDiv.innerHTML = contents;


})
