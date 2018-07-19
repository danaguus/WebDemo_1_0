var obj_smoke = document.querySelector(".smoke-letters");

if ( obj_smoke != undefined & obj_smoke != null ) {
    var total = obj_smoke.children.length;
    if (total > 1) {
        for (let index = 1; index < total; index++) {
            var letter = obj_smoke.children[index];

            if ( letter != undefined & letter != null ) {
				letter.setAttribute("style", "animation-delay: " + (index/10) + "s;" );
            }
        }
    }
}