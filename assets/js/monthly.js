var date = new Date();

var days = ["Mon","Tues","Weds","Thur","Fri","Sat","Sun"];

var day = date.getDay();

var month = date.getMonth()+1;

var numDay = date.getDate();

var year = date.getFullYear();

var time = date.getHours();

var min = date.getMinutes();

$(".time").text(time+":"+min);

if (day==1){

    $(".date").text(days[0]+" "+month+"/"+numDay+"/"+year);

} else if (day==2){

    $(".date").text(days[1]+" "+month+"/"+numDay+"/"+year);

} else if (day==3){

    $(".date").text(days[2]+" "+month+"/"+numDay+"/"+year);

} else if (day==4){

    $(".date").text(days[3]+" "+month+"/"+numDay+"/"+year);

} else if (day==5){

    $(".date").text(days[4]+" "+month+"/"+numDay+"/"+year);

} else if (day==6){

    $(".date").text(days[5]+" "+month+"/"+numDay+"/"+year);

} else if (day==7){

    $(".date").text(days[6]+" "+month+"/"+numDay+"/"+year);

} else {

};