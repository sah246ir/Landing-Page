import React from 'react'
import { InputGroup,  TextareaGroup } from '../Input'
import Button from '../Button'

const CorporateForm = () => {
  const handleSubmit = (event:React.FormEvent) => {
    event.preventDefault();
  
    const myForm = event.target as HTMLFormElement;
    const formData = new FormData(myForm);
    const formDataParams = new URLSearchParams();
    
    formData.forEach((value, key) => {
      formDataParams.append(key, value.toString());
    });
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formDataParams.toString()
    })
      .then(() => alert("/thank-you/"))
      .catch(error => alert(error));
  };
  
  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4' name="contact" data-netlify="true" netlify-honeypot="bot-field" method='post'>
          <input type="hidden" name="form-name" value="contact" />
        <InputGroup
          placeholder='First name' type="text" name="firstname" id="firstname"
          label='First name'
        />

        <InputGroup 
          placeholder='Last name' type="text" name="lastname" id="lastname"
          label='Last name'
        />

        <InputGroup
          placeholder='Email' type="email" name="email" id="email"
          label='Email'
        />

        <InputGroup
          placeholder='Mobile' type="mobile" name="mobile" id="mobile"
          label='Mobile'
        />

      <TextareaGroup label='Message' rows={5} placeholder='Message' name="msg" id="msg" /> 

        <Button className='rounded-l-full rounded-r-full px-12 bg-black text-white font-normal w-full'>
            Submit Now!
        </Button>
    </form>
  )
}

export default CorporateForm
