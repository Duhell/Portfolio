window.addEventListener('AboutLoaded',() => {
    Alpine.data('stream',()=>({
        openResume(path){
            window.open(path);
            return false;
        }
    }));
});