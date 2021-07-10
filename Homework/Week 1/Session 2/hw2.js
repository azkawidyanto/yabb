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
    // var song_title= document.getElementsById("title-song");
    // var song_artist= document.getElementsById("song-artist");
    // var song_album= document.getElementsById("song-album");

    if (!response.ok){
        throw new Error("cannot fetch data");
    } else{
        // song_title.innerText = data.name;
        // song_artist.innerText = data.artists[0].name;
        // song_album.innerText = data.album.name;
        return data;

    }

}

const handleFetch = () => {
    getToDoAsyncAwait('https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json')
        .then(data => console.log('success:', data))
        .catch(error => alert(error.message))
}

