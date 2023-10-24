


const Card = ({card}) => {
   
const {picture, title, category, category_bg_color} = card;


    return (
        <div className="mt-20">
        
        <div className="card border">
            <figure><img className="w-full" src={card.picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h1 className="card-title font-normal text-sm ">{card.category}</h1>
                <p className="font-bold text-start">{card.title}</p>
            </div>
         </div>
                
        </div>
    );
};

export default Card;