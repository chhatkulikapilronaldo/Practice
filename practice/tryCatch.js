// try {

//     console.log('Start of try runs'); 
  
//     lalala; 
  
//     console.log('End of try (never reached)');  
  
//   } catch (err) {
  
//     console.log(`Error has occurred!`); 
  
//   }

  //
  setTimeout(function() {
    try {
        console.log("error occccccc");
    } catch {
        console.log( "error is caught" );
    }
}, 3000);