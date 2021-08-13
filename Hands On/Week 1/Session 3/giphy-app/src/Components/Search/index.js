import { Button} from "@chakra-ui/button";
// import { Stack } from "@chakra-ui/layout";;

const SearchBar =({search,getSearch,handleChange})=>{

    return(
        // <Stack direction="row" spacing={10} align="center">
            <form data-testid="custom-element"  onSubmit={getSearch}>
                
                    <input style={{marginRight:"1vw"}} type="text"id="search"  value={search} name="search" onChange={handleChange} />
                    <Button colorScheme="blue" variant="solid">Search</Button>


            </form>
        // </Stack>    
    );

}

export default SearchBar;