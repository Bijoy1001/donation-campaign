import { Link } from "react-router-dom";

const Card = ({card}) => {
   
const {id, picture, title, category, category_bg_color, text_color, card_bg_color} = card;


    return (
        <div className="mt-20" style={{backgroundColor:card.card_bg_color}}>
        
       <Link to={`/ShowDetail/${id}`}>
       
       <div className="card border rounded" style={{color:card.text_color}}>
            <figure><img className="w-full" src={card.picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h1 className=" font-normal text-sm h-6 w-16 rounded  text-center" style={{backgroundColor: card.category_bg_color}}>{card.category}</h1>
                <p className="font-bold text-start">{card.title}</p>
            </div>
         </div>
       
       </Link>
                
        </div>
    );
};

export default Card;