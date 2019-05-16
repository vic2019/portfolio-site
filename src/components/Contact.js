import React from 'react';

export default function Contact() {
  return (
    <div id='contact'>
      <h1>Contact</h1>
      <hr style={{width: '90px', fontWeight: 'bold'}}/>
      <form className='contact-form'>
        <input 
          type='text' 
          className='contact-form-name' 
          name='name'
          placeholder=' Name'
        /><br/>
        <input 
          type='text' 
          className='contact-form-email' 
          name='contact'
          placeholder=' Email or Phone'
        /><br/>
        <textarea 
          type='text' 
          className='contact-form-message' 
          name='message'
          placeholder=' Your Message'
          rows='7'
        /><br/>
        <input
          className='contact-form-btn'
          type='button'
          value='Send'
          onClick={()=>alert('Send!')}
        />
      </form>
    </div>
  );
}