import React from 'react'
import { InputGroup, Textarea, TextareaGroup } from '../Input'
import Button from '../Button'

const CorporateForm = () => {
  return (
    <form className='flex flex-col gap-4'>
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
