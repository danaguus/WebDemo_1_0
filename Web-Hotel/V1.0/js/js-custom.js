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
      outDuration: 600
    };
    var elems_Modal = document.querySelectorAll('.modal');
    var instances_Modal = M.Modal.init(elems_Modal, options_Modal);
  });
