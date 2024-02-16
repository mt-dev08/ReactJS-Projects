
import Navigation from "./components/Navigation/Navigation.jsx";
import ContactHeader from "./components/ContactHeader/ContactHeader.jsx";
import './App.css';
import ContactForm from "./components/ContactForm/ContactForm.jsx";

function App() {
  

  return (
    <>
      <Navigation/>
      
      <main className="main_container">
        <ContactHeader/>
        <ContactForm/>
      </main>
      
    </>
  )
}

export default App
