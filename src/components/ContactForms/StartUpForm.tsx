import React from 'react'
import { InputGroup,  TextareaGroup } from '../Input'
import Button from '../Button'

const StartUpForm = () => {
    return (
        <form className='flex flex-col gap-4'>
            <TextareaGroup label='Share About Your Company In 250 Words' rows={12} placeholder='Message' name="msg" id="msg" />


            <InputGroup
                placeholder='Email' type="email" name="email" id="email"
                label='Email'
            />

            <InputGroup
                placeholder='Mobile' type="mobile" name="mobile" id="mobile"
                label='Mobile'
            />


            <Button className='rounded-l-full rounded-r-full px-12 bg-black text-white font-normal w-full'>
                Submit Now!
            </Button>
        </form>
    )
}

export default StartUpForm
