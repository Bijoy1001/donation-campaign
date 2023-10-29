import { Link } from "react-router-dom";


const DonationCard = ({show}) => {
    const {id, picture, title, category, button_bg_color, category_bg_color, text_color, card_bg_color, price} = show;
    return (
     <div className="card lg:card-side" style={{backgroundColor:card_bg_color}}>
        <figure><img className="p-2 rounded-2xl" src={picture} alt="Album"/></figure>
        <div className="card-body">
            <h1 className=" font-normal text-sm h-6 w-16 rounded  text-center" style={{backgroundColor:category_bg_color, color:text_color}} >{category}</h1>
            <h1 className="card-title font-bold">{title}</h1>
            <p className="" style={{color:text_color}}>{price}</p>
            <Link to={`/ShowDetail/${id}`}>
            <div className="card-actions justify-start">
            <button className="btn text-white" style={{background:button_bg_color}}>View Details</button>
            </div>
            </Link>
        </div>
        </div>
    );
};

export default DonationCard;