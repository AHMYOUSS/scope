var time = new Date() ,
    hours = time.getHours() ;
    hours = (hours < 10)? hours = "0"+hours: hours = hours ;
var minutes = time.getMinutes() ;
    minutes = ( minutes < 10)? minutes = "0"+minutes : minutes ;
var seconds = time.getSeconds(),
    seconds = (seconds < 10 )? "0"+seconds : seconds ;
    prepan = (hours > 12 )? " PM" : " AM" ;
    hours = (hours >= 12)? hours = hours - 12 : hours = hours ;

    if ( hours === 0 && minutes === 0) {
        if ( seconds === 0 && prepan === "AM" ) {  hours = 12 ; prepan = "Noon"    } 
        else { hours = 0 ; prepan = "PM" } ;
        if ( hours === 0 && minutes === 0 ) {
            if ( seconds===0 && prepan === "PM" )
            { hours = 12 ; prepan = "Midnight" } else { hours = 0 ; prepan = "AM" }
        }
    }
    var now = hours +":"+ minutes +":"+ seconds +prepan ;   
    console.log(now) 