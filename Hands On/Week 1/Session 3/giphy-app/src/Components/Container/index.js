import { Box } from "@chakra-ui/layout";


const SearchBar =(props)=>{
    return( 
      
        <Box borderWidth="5px" borderRadius="md" ml="5" > 
          <div className="search-bar">
            <h2>{props.title}</h2>
            <p>Rating: {props.rating}</p>
            <img src={props.url} alt={`${props.title}`} />
          </div>
        </Box>

        
    );

}

export default SearchBar;