/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import logo from 'assets/logo.png';
import { useEffect, useRef } from 'react';



export default function FormContact() {

  return (
    <section id="contact-form" style={{marginBottom:'3vh'}}>
    <h2 className="h2-form-contact">Contact</h2>
    <form id="contact" name="contact" accept-charset="utf-8">
      <label className="label-form-contact"><span>Name</span><input name="name" type="text" placeholder="Name"/></label>
      <label className="label-form-contact"><span>Email</span><input name="email" type="email" placeholder="Email"/></label>
      <label className="label-form-contact"><span>Message</span><textarea name="message" placeholder="Message"></textarea></label>
      <input name="submit" type="submit" value="Send"/>
    </form>
    <aside>
      <p></p>
      
    </aside>
  </section>

  );
}



    