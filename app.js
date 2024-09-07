let date = prompt("tarixi YYYY.MM.DD formatinda daxil edin");
let month = date.split(".")[1];
let monthName;
if(month === "01"){
    monthName = "Jan"
}else if(month === "02"){
    monthName = "Feb"
}else if(month === "03"){
    monthName = "March"
}else if(month === "04"){
    monthName = "April"
}else if(month === "05"){
    monthName = "May"
}else if(month === "06"){
    monthName = "June"
}else if(month === "07"){
    monthName = "July"
}else if(month === "08"){
    monthName = "Auq"
}else if(month === "09"){
    monthName = "Sept"
}else if(month === "10"){
    monthName = "Okt"
}else if(month === "11"){
    monthName = "Nov"
}else if(month === "12"){
    monthName = "Dec"
}
console.log(date.split(".")[2] + " " + monthName + " " + date.split(".")[0]+"-cu il");
