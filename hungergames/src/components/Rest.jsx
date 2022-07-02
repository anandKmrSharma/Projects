import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './rest.css';
const Resturant = ()=>{

    const [data,setData]= useState([]);
    const [page,setPage]= useState(1);

    useEffect(()=>{
      axios.get("http://localhost:8000/details")
        .then((response)=>{
            // console.log(response.data);
            setData(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })

    },[]);

    const sorting= ()=>{
        if(data.rating >3){
          setData(data);
          console.log(data);
        }  
    }

    return(
        <>
<h1>Find your best resturants</h1>  
<div>

<button onClick={sorting()}>1 start</button><br></br>
<button onClick={sorting}>2 start</button><br></br>
<button onClick={sorting}>3 start</button><br></br>
<button onClick={sorting}>4 start</button><br></br>

</div>

<div className='container'>
    {
      data.map((el)=>{
        return(
            <>
            <div className='single'>
            <img src={el.image} alt="" />
            <h1> {el.name} </h1>
            <h1 style={{color:'green', borderRadius:'2px'}}  > {el.rating} </h1>
            <h1> {el.category} </h1>
            </div>
            
            </>
        )

      })

    }
</div>

<div className='btn'>
    
<button onClick={ ()=>  setPage((p)=> p-1) } >prev</button>
<button onClick={ ()=>  setPage((p)=> p+1) }>next</button>
<p>{page}</p>
</div>





        </>
    )
}

export default Resturant;




{
	"details": [
		{
		  "name": "The Potbelly",
		  "rating": "4.2",
		  "image": "https://b.zmtcdn.com/data/pictures/2/18806832/677a7f69650910fb483deab17901a5b4.jpg?output-format=webp&fit=around|318.75:231.25&crop=318.75:231.25;*,*",
		  "category": "seafood",
		  "payment_methods": { "card": true, "cash": true, "upi": true }
		},
		{
		  "name": "La pino'z pizza",
		  "rating": "3.1",
		  "image": "https://b.zmtcdn.com/data/pictures/1/20169241/7468bcc7993a3fd144ea1a1287f40b9b.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*",
		  "category": "Fats food",
		  "payment_methods": { "card": true, "cash": true, "upi": true }
		},
		{
		  "name": "Batio The shake paradise",
		  "rating": "4.1",
		  "image": "https://b.zmtcdn.com/data/pictures/chains/6/18672816/24e53bdd738ae019eab1eaa03dafe9b1.jpeg?fit=around|318.75:231.25&crop=318.75:231.25;*,*",
		  "category": "Fast food",
		  "payment_methods": { "card": true, "cash": true, "upi": true }
		},
		{
		  "name": "The orange family restaurant",
		  "rating": "3.7",
		  "image": "https://b.zmtcdn.com/data/pictures/4/19294864/4e66da306f49cc1cf82bfb386b2e2513.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*",
		  "category": "Fats food",
		  "payment_methods": { "card": true, "cash": true, "upi": true }
		},
		{
		  "name": "The broger",
		  "rating": "4.8",
		  "image": "https://b.zmtcdn.com/data/pictures/5/19612485/24992ddd321ce5963976aac70038cedb.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*",
		  "category": "Fats food",
		  "payment_methods": { "card": true, "cash": true, "upi": true }
		},
		{
		  "name": "The Potbelly",
		  "rating": "4.2",
		  "image": "https://b.zmtcdn.com/data/pictures/2/18806832/677a7f69650910fb483deab17901a5b4.jpg?output-format=webp&fit=around|318.75:231.25&crop=318.75:231.25;*,*",
		  "category": "seafood",
		  "payment_methods": { "card": true, "cash": true, "upi": true }
		},
		{
		  "name": "La pino'z pizza",
		  "rating": "3.1",
		  "image": "https://b.zmtcdn.com/data/pictures/1/20169241/7468bcc7993a3fd144ea1a1287f40b9b.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*",
		  "category": "Fats food",
		  "payment_methods": { "card": true, "cash": true, "upi": true }
		},
		{
		  "name": "Batio The shake paradise",
		  "rating": "4.1",
		  "image": "https://b.zmtcdn.com/data/pictures/chains/6/18672816/24e53bdd738ae019eab1eaa03dafe9b1.jpeg?fit=around|318.75:231.25&crop=318.75:231.25;*,*",
		  "category": "Fast food",
		  "payment_methods": { "card": true, "cash": true, "upi": true }
		},
		{
		  "name": "The orange family restaurant",
		  "rating": "3.7",
		  "image": "https://b.zmtcdn.com/data/pictures/4/19294864/4e66da306f49cc1cf82bfb386b2e2513.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*",
		  "category": "Fats food",
		  "payment_methods": { "card": true, "cash": true, "upi": true }
		},
		{
		  "name": "The broger",
		  "rating": "4.8",
		  "image": "https://b.zmtcdn.com/data/pictures/5/19612485/24992ddd321ce5963976aac70038cedb.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*",
		  "category": "Fats food",
		  "payment_methods": { "card": true, "cash": true, "upi": true }
		},
		{
		  "name": "The Potbelly",
		  "rating": "4.2",
		  "image": "https://b.zmtcdn.com/data/pictures/2/18806832/677a7f69650910fb483deab17901a5b4.jpg?output-format=webp&fit=around|318.75:231.25&crop=318.75:231.25;*,*",
		  "category": "seafood",
		  "payment_methods": { "card": true, "cash": true, "upi": true }
		},
		{
		  "name": "La pino'z pizza",
		  "rating": "3.1",
		  "image": "https://b.zmtcdn.com/data/pictures/1/20169241/7468bcc7993a3fd144ea1a1287f40b9b.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*",
		  "category": "Fats food",
		  "payment_methods": { "card": true, "cash": true, "upi": true }
		},
		{
		  "name": "Batio The shake paradise",
		  "rating": "4.1",
		  "image": "https://b.zmtcdn.com/data/pictures/chains/6/18672816/24e53bdd738ae019eab1eaa03dafe9b1.jpeg?fit=around|318.75:231.25&crop=318.75:231.25;*,*",
		  "category": "Fast food",
		  "payment_methods": { "card": true, "cash": true, "upi": true }
		},
		{
		  "name": "The orange family restaurant",
		  "rating": "3.7",
		  "image": "https://b.zmtcdn.com/data/pictures/4/19294864/4e66da306f49cc1cf82bfb386b2e2513.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*",
		  "category": "Fats food",
		  "payment_methods": { "card": true, "cash": true, "upi": true }
		},
		{
		  "name": "The broger",
		  "rating": "4.8",
		  "image": "https://b.zmtcdn.com/data/pictures/5/19612485/24992ddd321ce5963976aac70038cedb.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*",
		  "category": "Fats food",
		  "payment_methods": { "card": true, "cash": true, "upi": true }
		}
	  ]
	 
	  
}