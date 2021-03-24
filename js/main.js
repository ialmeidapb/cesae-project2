/* --------------------------CARDS - BIOGRAFIA--------------------------------- */
function mostrarCard1(){
    escondeTextos();
    document.getElementById('card1').style.display='inline';
 }
 function mostrarCard2(){
    escondeTextos();
    document.getElementById('card2').style.display='inline';
}
function mostrarCard3(){
    escondeTextos();
    document.getElementById('card3').style.display='inline';
}
function mostrarCard4(){
    escondeTextos();
    document.getElementById('card4').style.display='inline';
}
function escondeTextos(){
    document.getElementById('card1').style.display='none';
    document.getElementById('card2').style.display='none';
    document.getElementById('card3').style.display='none';
    document.getElementById('card4').style.display='none';
}

/* --------------------------MODAL/CARDS - BLOG--------------------------------- */

function novoPost(){
    var titulo = document.getElementById('modal_titulo').value
    var texto = document.getElementById('modal_texto').value
    var element = document.getElementById("posts")
    var numPosts = element.getElementsByClassName('card').length + 1
    element.innerHTML+='<div id="post'+numPosts+'" class="card mb-1"><div class="card-body"><h5 class="card-title">'+titulo+'</h5><p class="card-text">'+texto+'</p><button class="btn btn-danger" onclick="eliminarPost(\'post'+numPosts+'\')">Eliminar</button> <button class="btn btn-success" onclick="gostar(\'post'+numPosts+'_likes\')">Gostar</button><span class="ml-5" id="post'+numPosts+'_likes">0</span> <i class="fa fa-thumbs-up" aria-hidden="true"></i></div></div>';
}

function eliminarPost(post){
    document.getElementById(post).remove()
}

function gostar(post){
    var valor = document.getElementById(post).innerText
    document.getElementById(post).innerText = Number(valor)+1
}