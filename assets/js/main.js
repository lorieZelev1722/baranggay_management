function hideLoader(){
  $('#preloader').fadeOut('slow');
}


var responsive=function()
{
   var screen_width=$(window).width();
     var screen_height=$(window).height();
     //console.log(screen_width);
     if(screen_width<850)
     {
        $('.navbar-toggler').show();
        $('#desktop_menu').hide();
        $('#navbarMobile').hide();
        $('.navbar-brand').find('span').css('font-size','1rem');
        $('.navbar-brand').find('span').show();

        if(screen_width<=296)
        {
          $('.navbar-brand').find('span').hide();
        }
     }
     else
     {
        $('.navbar-toggler').hide();
        $('#desktop_menu').show();
        $('.navbar-brand').find('span').css('font-size','1.5rem');
        $('.navbar-brand').find('span').show();
     }
}

$('#contact-form').on('submit',function(event){
  event.preventDefault();
  let name=$('#name').val();
  alert("Hi!"+name+", welcome to Ibabao Cordova Cebu!");
});


$(document).on('click','.navbar-toggler',function(event){
  event.preventDefault();
 
  let open=$(this).attr('data-id');
  
  if(open=="false"){
  $('#navbarMobile').slideDown();
  $(this).attr('data-id',"true");
    }
    else{
    $('#navbarMobile').slideUp(); 
  $(this).attr('data-id',"false");
    }

    
});






