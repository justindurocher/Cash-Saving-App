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
}
$(".calcButton").click(calculate);
function calculate(){
    var hours = $(".hoursWorked").val();
    var wage = $(".hourlyRate").val();
    var tips = $(".tips").val();
    var food = $(".foodExpense").val();
    var bills = $(".billsPaid").val();
    var etc = $(".otherExpense").val();
    var theIncome = hours*wage;
    var finalDaily = parseInt(theIncome)+parseInt(tips-food-bills-etc);
    if (finalDaily>0){
        $(".dailyIncome").addClass("positive");
        $(".yearlyIncome").addClass("positive");
        $(".portfolio").addClass("positive");
    } else{
        $(".dailyIncome").addClass("negative");
        $(".yearlyIncome").addClass("negative");
        $(".portfolio").addClass("negative");
    }
    $(".dailyIncome").text("$"+finalDaily);
    $(".yearlyIncome").text("$"+finalDaily);
    $(".portfolio").text("$"+finalDaily);
}