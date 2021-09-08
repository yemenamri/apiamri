function Profil({personne}){
    const handleName=()=>{alert(personne.fullName)}
    return (
     <tr>
     
     
    
    <td>{personne.fullName}</td>
    <td>{personne.bio}</td>
    <td>{personne.profession}</td>
    <td><img src = {personne.img} onClick={handleName}/></td>
    
      </tr>
        )
    }
    export default Profil;