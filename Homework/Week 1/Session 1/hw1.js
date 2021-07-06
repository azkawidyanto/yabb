const test=()=>{
    console.log("test");
    var title= document.forms["myForm"]["title"].value;
    alert("Judul lagu adalah " +title);
    document.getElementById("myForm").submit();
    var div = document.getElementById('title-song');
    div.innerHTML = div.innerHTML + document.forms["myForm"]["title"].value; 
}



