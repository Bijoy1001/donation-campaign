import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ShowDetail = () => {
 

    const heldleClick = ()  => {
       
      // console.log(show);
      const addedDonation = [];
      const DonationItems = JSON.parse(localStorage.getItem('donation'));

      if(!DonationItems) {
        addedDonation.push(show);
        localStorage.setItem('donation', JSON.stringify(addedDonation));
        toast('Your Donation is successfull');
      }

      else{
          const isExits = DonationItems.find(show => show.id == id)
          
          if(!isExits){
            addedDonation.push(...DonationItems, show)
            localStorage.setItem('donation', JSON.stringify(addedDonation));
            toast('Your Donation is successfull');
          }
          
          else{
            toast('Allready Donated');
          }
       
      }
    }

  

    const [show, setShow] = useState({});
    const {id} = useParams();
 
    const Show = useLoaderData();

   
    useEffect(() => {
        const findshow = Show?.find((Show) => Show.id == id);
        setShow(findshow);
    },[id,Show]);
     
    // console.log(show);
    return (
        <div className="mt-20">
          <div className="card w-full">
            <figure><img className="w-[1320px] h-[700px] rounded-3xl" src={show.detail_pic} alt="Shoes" /></figure>
            </div>
            <div>
                <button onClick={heldleClick} className="btn relative mt-4 text-white" style={{backgroundColor: show.text_color}}>Donate $290</button>
            </div>
            <div>
                <h1 className="text-3xl font-bold mt-8">{show.title}</h1>
                <p className="mt-4">{show.description}</p>
            </div>
            <ToastContainer />
         </div>
    );
};

export default ShowDetail;