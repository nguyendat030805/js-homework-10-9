var id = 1;
var sum =0;
function myAdd(){
    var name = frm.ten.value;
    var quanti =parseInt(frm.qti.value);
    var price = parseFloat(frm.pri.value);
    
    
    if (isNaN(quanti)||isNaN(price)||frm.qti.value.trim()===""||frm.pri.value.trim()===""){
        alert("Bạn đã nhập sai, vui lòng nhập lại");
        return;
    }
        var sub = quanti * price;
        sub = parseFloat(sub);
        var row = "<tr>";
        row += "<td>" + id + "</td>";
        row += "<td>" + name + "</td>";
        row += "<td>" + quanti + "</td>";
        row += "<td>" +price+ '$' + "</td>";
        row += "<td>" + sub + '$' +"</td>";
        row += "</tr>";
        document.getElementById('tbl').innerHTML +=row;
        sum+=sub
        id++; 
        document.getElementById('totalAmount').innerHTML =sum+"$";
    
}   