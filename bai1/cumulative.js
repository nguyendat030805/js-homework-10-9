var id = 0;
function myFunction(){
    var name = frm.pn.value;
    var price = parseFloat(frm.up.value);
    var quanti = parseInt (frm.qti.value);
    var disc = parseFloat(frm.dis.value);
    var sub = quanti * price *(1-disc/100);
    var row =   "<tr>";
    row+= "<td>"+id+"</td>";
    row+= "<td>"+name+"</td>";
    row+= "<td>"+quanti+"</td>";
    row+= "<td>"+price+"</td>";
    row+= "<td>"+disc+"</td>";
    row+= "<td>"+sub+"</td>";
    row+="</tr>";
    document.getElementById('tbl').innerHTML +=row;
    id++;
}
function cancelFunction(){
    document.getElementById('pn').value = " ";
    document.getElementById('qti').value = 0;
    document.getElementById('up').value = 0;
    document.getElementById('dis').value = 0;
}