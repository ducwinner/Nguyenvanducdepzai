function ramdumcolor() {
    var letters = "0123456789ABCDEF";
    var color = '#';
    for ( var i = 0 ; i < 100; i++) {
        color += i + '%' + letters[Math.floor(Math.random()*100)]
    }
    console.log(color);
}
ramdumcolor()