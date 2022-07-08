function validateForm() {
    if( document.ourform.name.value == "" ) {
        alert( "Please provide your name!" );
        document.ourorm.name.focus() ;
        return false;
     }
     if( document.ourform.cname.value == "" ) {
        alert( "Please provide your college name!" );
        document.ourForm.cname.focus() ;
        return false;
     }
     if( document.ourform.yr.value == "" ) {
        alert( "Please provide your year of passing!" );
        document.ourform.yr.focus() ;
        return false;
     }
     if( document.ourform.email.value == "" ) {
        alert( "Please provide your email address!" );
        document.ourform.email.focus() ;
        return false;
     }
     if( document.ourform.phn.value == "" ) {
        alert( "Please provide your phone number!" );
        document.ourform.phn.focus() ;
        return false;
     }
  }

 