import "./App.css";
import { useState } from "react";
import contacts from "./contacts.json";

function App() {
  let data = [...contacts];
  let fiveContacts = data.slice(0, 5);
  let newArray = data.slice(5);
  const [celebs, setCelebs] = useState(fiveContacts);
  


  function addRandom() {
    let randomContact = newArray[Math.floor(Math.random() * newArray.length)];
    setCelebs([...celebs, randomContact]);
  }

 function sortPopularity (){
    let populatirySorted = [...celebs].sort((a, b) =>
    console.log('hello')
     
    );
    setCelebs(populatirySorted);
 }
  

  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <div>
        <button onClick={addRandom}>Add Random Contact</button>
        <button onClick={sortPopularity}>>Sort by Populatiry</button>
        <button>Sort by Name</button>
      
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Populatiry</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {celebs.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt="" />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              {contact.wonOscar ? <td>🏆</td> : <td></td>}
              {contact.wonEmmy ? <td>🏆</td> : <td></td>}
              <td>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
