$('a').click(function() {
          $('section').hide();
          $($(this).attr('herf')).show();
        return false;
     });
