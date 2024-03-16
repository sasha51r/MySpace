document.addEventListener("DomContentLoaded", function() {
    const canvas = document.getElementById('workspace');
    const ctx = canvas.getContext('2d');
}
    canvas.width = window.innerWidth;
    canvas.hight = window.innerHeight;

    canvas.addEventListener('click', function(event) {
        const x = event.clientX -
    }