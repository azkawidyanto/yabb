import React, { useEffect, useState} from 'react';
import ImageBar from '../../Components/Container';
import SearchBar from '../../Components/Search';
// import { useDispatch,useSelector } from 'react-redux';
// import { storeImage } from '../../redux/gifReducer';
import { getSearch } from '../../gifFetch';
const Search =()=>{
    const images = useSelector((state)=>state.gif.images);
    const dispatch = useDispatch();
    const [search, setSearch]=useState("");
    const [gifs,setGifs]= useState([]);

    const searchSubmit  = (e) =>{
        e.preventDefault();
        // const query = e.target.search.value;
        // getSearch(query).then((data) => {
        //     //render response to state/DOM
        //     dispatch(storeImage(data.data));
        //   });
        fetch(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${search}&limit=12`)
            .then((data)=>data.json());
        
        setGifs({gifs:data});
    };
    
    // useEffect(()=>{
    //     getSearch("").then((data)=>{
    //         dispatch(storeImage(data.data))
    //     });
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // },[dispatch]);

    const handleChange=(e)=>{
        setSearch(e.target.value);
    }
    return(
        <div>
            
            <SearchBar 
                handleChange={handleChange}
                getSearch={searchSubmit}
                search={search}
            />
        <div className="container">
        {gifs?.map((image,index)=>{
                return(
                    <ImageBar
                        key={index}
                        title={image.title}
                        rating={image.rating}
                        url={image.images.original.url}
                    />
                )
                })}
        {/* {images?.map((image,index)=>{
                return(
                    <ImageBar
                        key={index}
                        title={image.title}
                        rating={image.rating}
                        url={image.images.original.url}
                    />
                )
                })} */}
        </div>
    </div>
    );
}

export default Search;