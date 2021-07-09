const test=()=>{
    console.log("test");
    var title= document.forms["myForm"]["title"];
    alert("Judul lagu adalah " +title.value);
    
    // var div = document.getElementById('title-song');
    // div.innerHTML = title.value;
    
    document.getElementById("myForm").submit();
}



const url ="https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json";
const getToDoAsyncAwait = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    
    if (!response.ok){
        throw new Error("cannot fetch data");
    } 
    return data
}

const handleFetch = () => {
    getToDoAsyncAwait('https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json')
        .then(data => console.log('success:', data))
        .catch(error => alert(error.message))
}

