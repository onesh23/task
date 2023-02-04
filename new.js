document.getElementById('toggle_one').style.display = 'none'

let toggle = document.getElementById('toggle')

toggle.addEventListener('click',close_nav)
function close_nav(){
    document.getElementById('sidebar').style.width = '78px'
    document.getElementById('toggle').style.display = 'none'
    document.getElementById('logo_name').style.display = 'none'
    document.getElementById('main_tb').style.marginLeft = '160px'
    document.getElementById('grid_dis').style.marginLeft = '0px'
    document.getElementById('grid_dis2').style.marginLeft = '0px'
    let nav_name = document.getElementsByClassName('nav_name')
    for(let i = 0; i < nav_name.length; i++){
        nav_name[i].style.display = 'none'
    }
    let ico = document.getElementsByClassName('ico')

    for(let i = 0; i < ico.length; i++){
        ico[i].style.marginRight = "25px";}

    let a = document.getElementById('toggle_one').style.display = 'block'
    document.getElementById('main_content').setAttribute('class','fun_main_content')
   console.log(a)
}

let toggle_open1 = document.getElementById('toggle_one')

toggle_open1.addEventListener('click',open_nav)
function open_nav(){
    document.getElementById('sidebar').style.width = '240px'
    document.getElementById('toggle').style.display = 'block'
    document.getElementById('logo_name').style.display = 'block'
    document.getElementById('toggle_one').style.display = 'none'

    let nav_name = document.getElementsByClassName('nav_name')
    for(let i = 0; i < nav_name.length; i++){
        nav_name[i].style.display = 'block'
    }
    document.getElementById('main_content').setAttribute('class','main_content')

}
