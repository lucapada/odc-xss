var img = document.createElement('img');
img.src = 'immaginechenonesiste.png';
img.onerror = function(){
    alert(1);
}
document.body.appendChild(img);