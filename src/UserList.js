import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';


function Recherche (){

    const [data,setData] = useState([]);
    
    //similaire à component DidMount et DidUpdate
    
    useEffect (() => {
      const fetchData = async () =>{
    const result = await axios(
    'https://jsonplaceholder.typicode.com/users',
    
    );
    
    setData(result.data);
    
    
      }
      fetchData();
    },[])
    
    
      return(
    <Fragment>
      
    <ul >
      {
        data.map(item =>(
          <li key={item.id}>
            <p>{item.name}</p>
            <p>{item.username}</p>
            <p>{item.email}</p>
            <p>{item.address.street + " ," + item.address.suite + " ,"+ item.address.city + " ," + item.address.zipcode }</p>
            <p>{item.address.geo.lat + " ," + item.address.geo.lng}</p>
            <p>{item.phone}</p>
            <p>{item.website}</p>
            <p>{item.company.name + " ," + item.company.catchPhrase+ " ," + item.company.bs}</p>
            </li>
        ))
      }
    </ul>
      
    
    </Fragment>
    
    
      )
    
    }
    
    export default Recherche;