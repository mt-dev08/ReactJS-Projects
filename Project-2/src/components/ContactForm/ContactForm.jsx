import Button from "../Button/Button";
import styles from "./ContactForm.module.css"
import {MdMessage} from "react-icons/md";
import {FaPhoneAlt} from "react-icons/fa";
import {HiMail} from "react-icons/hi";
import { useState } from "react";

const ContactForm = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [text,setText] = useState("");


  const formSubmit=(event)=>{

    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);

  }

  const handleChat =()=>{
    alert("WhatsApp : +923456211158 ")
  }
  const handleCall=()=>{
    alert("Call At : 15 ")
  }
  const handleEmail=()=>{
    alert("Email At : MoyeMoye@gamil.com ")
  }
  
  return (
    <section className={`${styles.container}`}>

    <div className={`${styles.contact_form}`}>
      
      <div className={`${styles.top_btn}`}>
        <Button onClick={handleChat} text="VIA SUPPORT CHAT" icons={<MdMessage fontSize="24px"/>}/>
        <Button onClick={handleCall} text="VIA CALL" icons={<FaPhoneAlt fontSize="24px"/>}/>
      </div>

      <Button onClick={handleEmail} isOutline={true} text="VIA EMAIL FROM" icons={<HiMail fontSize="24px" />}/>

      <form onSubmit={formSubmit}>

        <div className={styles.form_control}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
        </div>

        <div className={styles.form_control}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>

        <div className={styles.form_control}>
          <label htmlFor="text">Text</label>
          <textarea name="text" rows="8"/>
        </div>

        <div style={{display:"flex", justifyContent:"end"}}>
          <Button text="SUBMIT BUTTON"/>
        </div>

        <div>
          {name+" "+email+" "+text}
        </div>
      </form>


    </div>

    <div className={`${styles.contact_image}`}>

    <img src="./images/contact.svg" alt="contact-img" />
        
    </div>

      
    </section>
  )
}

export default ContactForm;
