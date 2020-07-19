$(function() {
    $(".item1").click(function() {
        $(".submenu1").slideToggle(500);
        $('.m1 .submenu2').hide();
        $('.m1 .submenu3').hide();
    });
  $(".item2").click(function() {
        $(".submenu2").slideToggle(500);
        $('.menu .submenu1').hide();
        $('.m1 .submenu3').hide();
    });
   $(".item3").click(function() {
        $(".submenu3").slideToggle(500);
        $('.menu .submenu1').hide();
        $('.m1 .submenu2').hide();
    });
});