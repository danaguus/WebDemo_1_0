var obj_buttons = document.querySelector(".btn-group");

if ( obj_buttons != undefined & obj_buttons != null ) {
    var total = obj_buttons.children.length;
    if (total > 1) {
        for (let index = 1; index < total; index++) {
            var btn = obj_buttons.children[index];

            if ( btn != undefined & btn != null ) {
				btn.setAttribute("style", "animation-delay: " + (index/5) + "s;" );
            }
        }
    }
}