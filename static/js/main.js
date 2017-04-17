$("#open-menu-button").click(function(){
   // $("#menu-overlay").removeClass("dn")
    $("#open-menu-button").addClass("dn")
    $("#close-menu-button").removeClass("dn")

    //$("#open-menu-button").velocity("fadeOut", { delay: 200, duration: 1500  });
    //$("#close-menu-button").velocity("fadeIn", { delay: 200, duration: 1500  });


    $("#menu-overlay").velocity("fadeIn", { duration: 1000  })
       }
)
$("#close-menu-button").click(function(){
    //$("#menu-overlay").addClass("dn")
    $("#open-menu-button").removeClass("dn")
    $("#close-menu-button").addClass("dn")

    //$("#open-menu-button").velocity("fadeIn", { delay: 200, duration: 1500  });
    //$("#close-menu-button").velocity("fadeOut", { delay: 200, duration: 1500  });


    $("#menu-overlay").velocity("fadeOut", { delay: 200, duration: 1500  });

}
)
