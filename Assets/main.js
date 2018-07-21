$(window).ready(function() {
    //***************************************************************/
    
        $('#flipbook').turn({
            display: 'double',
            acceleration: true,
            gradients: true,
           
            elevation:50,
            when:   {
                        turned: function(e, page) {
                        /*console.log('Current view: ', $(this).turn('view'));*/
                        }
                    }
         });
    });
    $(window).bind('keydown', function(e){
        //***************************************************************/
        
            if (e.keyCode==37)
                $('#flipbook').turn('previous');
            else if (e.keyCode==39)
                $('#flipbook').turn('next');
        });