import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const ShowDetail = () => {

    // const { picture, title, category, category_bg_color, text_color, card_bg_color} = card;

    const [show, setShow] = useState({});
    const {id} = useParams();
 
    const Show = useLoaderData();

   
    useEffect(() => {
        const findshow = Show?.find((Show) => Show.id == id);
        setShow(findshow);
    },[id,Show]);
     
    console.log(show);
    return (
        <div className="mt-20">
          <div className="card w-full">
            <figure><img className="w-[1320px] h-[700px] rounded-3xl" src={show.detail_pic} alt="Shoes" /></figure>
            </div>
            <div>
                <button className="btn relative mt-4 text-white" style={{backgroundColor: show.text_color}}>Donate $290</button>
            </div>
            <div>
                <h1 className="text-3xl font-bold mt-8">{show.title}</h1>
                <p className="mt-4">{show.description}</p>
            </div>
         </div>
    );
};

export default ShowDetail;