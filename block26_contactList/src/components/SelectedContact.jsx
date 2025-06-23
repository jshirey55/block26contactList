import { useState } from "react";
import { useEffect } from "react";

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
const [contact, setContact] = useState(null)

useEffect(() => {
  async function selectContact() {
    try {
      const response = await fetch(
        `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
      )
      const result = await response.json()
      setContact(result)
    } catch (error) {
      console.error(error)
    }
  }
  if (selectedContactId){
    selectContact()
  }
  
}, [selectedContactId])

if (!contact) {
    return <p></p>
  }

return (
        <div>
            <h2>{contact.name}</h2>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
            <button onClick={() =>setSelectedContactId(null)}>Back</button>
        </div>
    )
}