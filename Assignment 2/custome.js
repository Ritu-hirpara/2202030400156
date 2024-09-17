$("#formvalidation").validate({
    rules:{
        name: {
          minlength: 2
        },
        phone:{
          minlength:10
        },
        email:{
          email:true
        },
        forMessage:{
          minlength:10
        },

    },
    message: {
      name:{
        required: "Please enter your name..",
        minlength:"Name at least 2 characters"
      },
      email:"Please enter your email..",
      phone:"Please enter at least 10 numbers..",
      forMessage:"Please give your feedback.."
    },
      
    submitHandler: function(form) {
      form.submit();
    }
});