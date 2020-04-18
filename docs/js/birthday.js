(function(){
    lit = document.getElementById("lit");
    lit.hidden = false;
    blown = document.getElementById("blown");
    blown.hidden = true;

    function blow() {
        lit.hidden = true;
        blown.hidden = false;
    };

    document.body.addEventListener("keydown", function(e){
        if (e.keyCode === 32) {// a space is pressed
            blow();
        }
    });
})();