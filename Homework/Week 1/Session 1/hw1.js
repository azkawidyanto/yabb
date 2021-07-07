const test=()=>{
    console.log("test");
    var title= document.forms["myForm"]["title"];
    alert("Judul lagu adalah " +title.value);
    
    // var div = document.getElementById('title-song');
    // div.innerHTML = title.value;
    
    document.getElementById("myForm").submit();
}



