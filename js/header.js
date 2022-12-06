var btnOne = document.getElementsByClassName('btn-header')[0]
var btnTwo = document.getElementsByClassName('btn-close')[0]
var sidebar = document.getElementsByClassName('navegador')[0]

btnOne.addEventListener('click', function(){
    sidebar.classList.add('active')
})

btnTwo.addEventListener('click', function(){
    sidebar.classList.remove('active')
})

