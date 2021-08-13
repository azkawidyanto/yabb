import { Button} from "@chakra-ui/button";
// import { Stack } from "@chakra-ui/layout";;

const SearchBar =({search,getSearch,handleChange}:{search:string,getSearch:(arg0: string)=>void,handleChange:()=>void})=>{

    return(
        // <Stack direction="row" spacing={10} align="center">
            <form onSubmit={getSearch}>
                
                    <input style={{marginRight:"1vw"}} type="text" value={search} name="search" onChange={handleChange} />
                    <Button colorScheme="blue" variant="solid">Search</Button>


            </form>
        // </Stack>    
    );

}

export default SearchBar;