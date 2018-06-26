function ShowDetailsMessage() {
  var elem = document.getElementById("details1");
  var modal = M.Modal.getInstance(elem);
  modal.close();
  M.toast({html: "<i class='material-icons'>check_circle</i> Mensaje de exito.", classes: 'rounded success'});
  M.toast({html: "<i class='material-icons'>cancel</i> Mensaje de fallo.", classes: 'rounded error'});
  M.toast({html: "<i class='material-icons'>info</i> Mensaje informativo.", classes: 'rounded information'});
}

document.addEventListener("DOMContentLoaded", function() {
    var options_DropDown = {
      hover: true
    };
    var dropDown = document.querySelectorAll(".dropdown-trigger");
    var instances_dropDown = M.Dropdown.init(dropDown, options_DropDown);

    var options_Slider = {
      indicators: true,
      height: 500,
      duration: 500,
      interval: 6000
    };
    var slider = document.querySelectorAll(".slider");
    var instances_slider = M.Slider.init(slider, options_Slider);

    var options_Modal = {
      inDuration: 600,
      outDuration: 400
    };
    var elems_Modal = document.querySelectorAll('.modal');
    var instances_Modal = M.Modal.init(elems_Modal, options_Modal);

    var options_Carousel = {
      indicators: true,
      dist: -230,
      onActivedItem: function(elem) {

      }
    };
    var elems_Carousel = document.querySelectorAll('.carousel');
    var instances_Carousel = M.Carousel.init(elems_Carousel, options_Carousel);

    var elems_scrollSpy = document.querySelectorAll('.scrollspy');
    var instances_scrollSpy = M.ScrollSpy.init(elems_scrollSpy, undefined);

    document.getElementById("reserve").onclick = ShowDetailsMessage;
  });
