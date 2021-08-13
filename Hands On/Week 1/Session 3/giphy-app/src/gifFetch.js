
export const  getSearch  =async(search) =>{
    const response = await fetch(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${search}&limit=12`)
    .then((data)=>data.json());


    return response;
};

export const getTrending = async() =>{
    const response = await fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&offset=10&limit=10&rating=g`)
        .then((data)=>data.json());

    return response
}