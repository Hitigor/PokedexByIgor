
/*class toggle*/
function changeClass() {

    var el = document.getElementById('d-Form');
    if (el.classList) {
        console.log(el.classList);
        el.classList.toggle('description__form');
        console.log(el.classList);
    } else {
        var classes = el.className.split(' ');
        var existingIndex = classes.indexOf('description__form');

        if (existingIndex >= 0)
            classes.splice(existingIndex, 1);
        else
            classes.push('description__form ');

        el.className = classes.join(' ');
    }
}

function changeClass1() {

    var el = document.getElementById('d-Form');
    if (el.classList) {
        console.log(el.classList);
        el.classList.toggle('description__form');
        console.log(el.classList);
    } else {
        var classes = el.className.split(' ');
        var existingIndex = classes.indexOf('description__form');

        if (existingIndex >= 0)
            classes.splice(existingIndex, 1);
        else
            classes.push('description__form ');

        el.className = classes.join(' ');
    }
}

function changeClass_fav() {

    var el = document.getElementById('d-Form-fav');
    if (el.classList) {
        console.log(el.classList);
        el.classList.toggle('description__form');
        console.log(el.classList);
    } else {
        var classes = el.className.split(' ');
        var existingIndex = classes.indexOf('description__form');

        if (existingIndex >= 0)
            classes.splice(existingIndex, 1);
        else
            classes.push('description__form ');

        el.className = classes.join(' ');
    }
}


function locStorDel_IN() {


        localStorage.removeItem('ngStorage-fav');

}



