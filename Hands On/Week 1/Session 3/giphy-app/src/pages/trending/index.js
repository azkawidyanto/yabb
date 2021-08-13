import { useEffect } from "react";
import { useDispatch,useSelector } from 'react-redux';
import { storeTrending } from '../../redux/gifReducer';
import { getTrending } from '../../gifFetch';
import ImageBar from '../../Components/Container';

const Trending =()=>{
     const trending = useSelector((state)=>state.gif.trending);
     const dispatch = useDispatch();

     // const handleClick=()=>{
     //      getTrending().then((data)=>{
     //           dispatch(storeTrending(data))
     //       });
     // }

     useEffect(()=>{
          getTrending().then((data)=>{
              dispatch(storeTrending(data))
          });
          console.log(trending)
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[]);

     return(
          <div className="trending">
          {trending.data?.map((image,index)=>{
               return(
                    <ImageBar
                         key={index}
                         title={image.title}
                         rating={image.rating}
                         url={image.url}
                    />
               )
               })
          }
          </div>

     );
}

export default Trending;