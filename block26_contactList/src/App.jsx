import "./App.css"
import { useState } from "react"
import ContactList from "./components/ContactList"
import SelectedContact from "./components/SelectedContact"

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)
  const [contact, setContact] = useState(null)

  return (
    <div>
      {selectedContactId ? (
        <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId} contact={contact} setContact={setContact}/>
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </div>
  )
}