const CLASSON = 'on';
var suggestLike = [];

suggestLike = document.getElementsByName('suggestLike');

function handleClassOn() {
    if(!this.classList.contains(CLASSON)) {
        this.classList.add(CLASSON);
    } else {
        this.classList.remove(CLASSON);
    }
}


suggestLike.forEach(val => {
    val.addEventListener('click', handleClassOn);
})