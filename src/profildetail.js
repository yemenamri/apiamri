import Profil from './profil'
function Profildetail({person}){
  
    return(
        
            <div>
       <table>
     <thead>
      <tr>
      <td style={{color:'Black', fontWeight: 'bold'}}>FullName</td>
    <td style={{color:'Black', fontWeight: 'bold'}}>Bio</td>
    <td style={{color:'Black', fontWeight: 'bold'}}>Profession</td>
    <td style={{color:'Black', fontWeight: 'bold'}}>Image</td>
    </tr>
    </thead>
 <tbody>
   
   

 { person.map((detailperson)=> (<Profil  personne= {detailperson}/>))}

   </tbody>
  
    </table>
</div>  


    )
}

export default Profildetail