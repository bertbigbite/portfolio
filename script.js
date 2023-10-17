fetch('projects.json').then(function (response) {
    return response.json()
}).then(function (projects){

    const itemsDiv = document.querySelector ('#name')

    let contents = '';

   contents += "<div class='container'>";
    projects.forEach(projects => {
        contents += "<div class='project_container'>" + projects.name + "<br>";
        contents += projects.desc + "<br>";
        contents += projects.image + "<br>";
        contents += projects.url + "<br>";
        contents += projects.git + "<br>";
        contents += "</div>"
    })


contents += "</div>";

    

    itemsDiv.innerHTML = contents;
    


})

    



