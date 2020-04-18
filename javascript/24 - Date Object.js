var todaydate = new Date();

var date_to_string = todaydate.toDateString();

var year = todaydate.getFullYear() ;

var year2 = todaydate.setFullYear(20);




document.write(todaydate + "      ");

/*  // Date()  to find todays date with capital D
    // obj which converts into object */

document.write(date_to_string+ "  ");


/* // convert the date to shortform */


document.write(year+ " ");

document.write(year2);
