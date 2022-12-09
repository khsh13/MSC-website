const timer = ms => new Promise(res => setTimeout(res, ms));
var slidePage = 0
var slidePageNumber = 0

function active(position){
    var activing = document.getElementsByClassName('active')[0]
    if(activing){
    activing.className = activing.className.replace("active","")
}
    document.getElementsByClassName("pageNumber")[position].className += " active"
}

async function to_right(){
    var a = document.getElementsByClassName('slider')[0]
    var position = a.scrollLeft
    for(var i = position; i <= position + 840; i+=10){
        a.scrollLeft = i
        await timer(1)
    }
    if(slidePage < slidePageNumber - 1){
    slidePage += 1
    active(slidePage)
}






}
async function to_left(){
    var a = document.getElementsByClassName('slider')[0]
    var position = a.scrollLeft
    for(var i = position; i >= position - 840; i-=10){
        a.scrollLeft = i
        await timer(1)
    }
    if(slidePage > 0){
    slidePage -= 1
    active(slidePage)
}

}
function page(){
    var a = document.getElementsByClassName("slide")
    var length = a.length
    var du = length % 3
    var count = (length - du)/3
    if(du >= 1){
        count += 1
    }
    slidePageNumber = count
    for(var i = 0; i < count; i++){
        var html = '<div class="pageNumber"></div>';
        document.getElementsByClassName('page')[0].insertAdjacentHTML('beforeend', html);
        var element = document.querySelector('.page')
        var style = getComputedStyle(element)
        var left = style.marginLeft
        var number = left.replace("px","")
        number = Number(number)
        number -= 7
        document.getElementsByClassName("page")[0].style.marginLeft = number+"px"
    }
    //...
}
async function autoshow(){
    i = 0
    while(1){
    await timer(2000)
    to_right()
    i += 1
    var a = document.getElementsByClassName('slider')[0]
    var position = a.scrollLeft
    if(slidePage == slidePageNumber-1){
        i = 0
    for(var j = position; j >= 0; j-=10){
        a.scrollLeft = j
        await timer(0)
    }
    slidePage = 0
    active(0)
    }
}
}
page()
active(0)
autoshow()