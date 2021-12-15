// Selecting all the required classes from HTML to change 
var body = document.body
var check = document.querySelector('#check')
var box = document.querySelector('.box')
var ball = document.querySelector('.ball')
var navbar = document.querySelector('.navbar')
var big_header = document.querySelector('.big-header')
var hero_poster = document.querySelector('.hero-poster')
var main = document.querySelector('.main')
var logo = document.querySelector('.logo a')
var navbar_nav = document.querySelectorAll('.navbar-nav .nav-item .nav-link')



// Adding an eventListener function to change color everytime var check is changed.(checked & unchecked)

check.addEventListener('change', function() {

    //   conditions to apply when checkbox is checked
    console.log(this.checked)
    if (this.checked == false) {
        box.setAttribute('style', 'background-color:white;')
        ball.setAttribute('style', 'transform:translatex(0%);')
        body.setAttribute('style', 'background-color:#e6e6e6; color:black;')
        navbar.setAttribute('style', 'background-color:#e6e6e6; color:black;')
        big_header.setAttribute('style', 'background-color:#e6e6e6; color:black;')
        hero_poster.setAttribute('style', 'background-color:#e6e6e6; color:black;')
        main.setAttribute('style', 'background-color:#e6e6e6; color:black;')
        logo.setAttribute('style', 'color:black;')
        for (let i = 0; i < navbar_nav.length; i++) {
            navbar_nav[i].setAttribute('style', 'color:black;')
        }


    }

    //   conditions to apply when checkbox is unchecked
    else if (this.checked == true) {
        box.setAttribute('style', 'background-color:black; color:white;border:2px solid #ffc107')
        ball.setAttribute('style', 'transform:translatex(100%);')

        body.setAttribute('style', 'background-color:black; color:white;')
        navbar.setAttribute('style', 'background-color:black; color:white;')
        big_header.setAttribute('style', 'background-color:black; color:white;')
        hero_poster.setAttribute('style', 'background-color:black; color:white;')
        main.setAttribute('style', 'background-color:black; color:white;')
        logo.setAttribute('style', 'color:white;')

        console.log(navbar_nav)

        for (let i = 0; i < navbar_nav.length; i++) {
            navbar_nav[i].setAttribute('style', 'color:white;')
        }


    }
})