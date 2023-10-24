import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Home = () => {

    const [card, setCard] =useState([]);

    useEffect (() => {
        fetch ('cardDetail.json')
        .then(res => res.json())
        .then(data => setCard(data));
    }, []) 


    return (
        <div className="text-center ">
           <div>
             <h1 className="font-bold text-5xl mt-24" >I Grow By Helping People In Need</h1>
           </div>


     <div>
         <div className="join mt-20">
        <input className="input input-bordered join-item" placeholder="Search here...."/>
        <button className="btn join-item rounded bg-[#FF444A] text-white">Search</button>
        </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
            {
               card.map(card => <Card key={card.id} card={card}></Card>) 
            }
        </div>
      </div>
            
     
    );
};

export default Home;