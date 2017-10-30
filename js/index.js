
submit();
        function submit(){
          $('#tabOneSubmit').click(function(){
            var status=true;
            $('.required').each(function(){

              var element=$(this);
              var elementVal=$(this).val();
              var errorMsgId=element.attr('data-errorMsg');
              if(elementVal==''){
                $('.'+errorMsgId).show();
                $('#phonenumber').hide();
                element.addClass('errorField');
                status=false;
              }
              else{
                $('.'+errorMsgId).hide();
                element.removeClass('errorField');
              }
            });

            if(status) {
              $('.alert-success').show();
              $('#basicInfo').hide();
            }

          });
        }
