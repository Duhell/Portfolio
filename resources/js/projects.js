window.addEventListener('ProjectsLoaded',() => {
    Alpine.store('AllProjects', {
        projects: [],
        fetchData(){
            fetch('/public/projects.json')
            .then( res => res.json())
            .then( data => {
                this.projects = data;
            })
            .catch( err => {
                console.error(err);
            })
        }
    })
    setTimeout(function(){
        Alpine.store('AllProjects').fetchData();
    },1000)
})