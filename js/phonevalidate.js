$("#phone").on('input', function() {  //this is use for every time input change.
        var inputValue = getInputValue(); //get value from input and make it usefull number
        var length = inputValue.length; //get lenth of input

        if (inputValue < 1000)
        {
            inputValue = '1('+inputValue;
        }else if (inputValue < 1000000) 
        {
            inputValue = '1('+ inputValue.substring(0, 3) + ')' + inputValue.substring(3, length);
        }else if (inputValue < 10000000000) 
        {
            inputValue = '1('+ inputValue.substring(0, 3) + ')' + inputValue.substring(3, 6) + '-' + inputValue.substring(6, length);
        }else
        {
            inputValue = '1('+ inputValue.substring(0, 3) + ')' + inputValue.substring(3, 6) + '-' + inputValue.substring(6, 10);
        }       
        $("#phone").val(inputValue); //correct value entered to your input.
        inputValue = getInputValue();//get value again, becuase it changed, this one using for changing color of input border
       if ((inputValue > 2000000000) && (inputValue < 9999999999))
      {
          $("#phone").css("border","#d2d8d8 solid 1px");//if it is valid phone number than border will be black.
      }else
      {
          $("#phone").css("border","red solid 1px");//if it is invalid phone number than border will be red.
      }
  });

    function getInputValue() {
         var inputValue = $("#phone").val().replace(/\D/g,'');  //remove all non numeric character
        if (inputValue.charAt(0) == 1) // if first character is 1 than remove it.
        {
            var inputValue = inputValue.substring(1, inputValue.length);
        }
        return inputValue;
}

