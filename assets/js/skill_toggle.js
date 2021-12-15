// external js: isotope.pkgd.js

// init Isotope
var $grid = $('.skill-style').isotope({
    itemSelector: '.skill-type'
});

console.log("toogle file found")

// store filter for each group
var filters = [];

window.onload = function() {
    document.getElementById('skills-list').click();

}


$('.toggle-switch-btn').on('click', 'input', function(event) {
    console.log("button clicked")
    var $target = $(event.currentTarget);
    console.log($target)
    var filter_obj = document.querySelector('input[name="skillstype"]:checked');
    console.log(filter_obj)
    var filter_value = filter_obj.value;
    console.log(filter_value)
        // addFilter(filter_value);


    // $target.toggleClass('is-checked');
    // var isChecked = $target.hasClass('is-checked');
    // var filter = $target.attr('data-filter');

    addFilter(filter_value);


    if (filter_value == ".tools") {
        removeFilter(".skills")
    } else {
        removeFilter(".tools")
    }





    // filter isotope
    // group filters together, inclusive
    $grid.isotope({ filter: filters.join(',') });
});

function addFilter(filter) {
    if (filters.indexOf(filter) == -1) {
        filters.push(filter);
    }
}

function removeFilter(filter) {
    var index = filters.indexOf(filter);
    if (index != -1) {
        filters.splice(index, 1);
    }
}



// change is-checked class on buttons