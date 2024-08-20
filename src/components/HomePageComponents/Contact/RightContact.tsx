import Button from '../../Button'
import { InputGroup } from '../../Input'

const RightContact = () => {
  return (
    <form className='flex flex-col gap-4'>
      <div className='flex gap-4 flex-col sm:flex-row'>
        <InputGroup
          placeholder='First name' type="text" name="firstname" id="firstname"
          label='First name'
        />

        <InputGroup
          placeholder='Last name' type="text" name="lastname" id="lastname"
          label='Last name'
        />
      </div>

      <div className='flex gap-4 flex-col sm:flex-row'>
        <InputGroup
          placeholder='Email' type="email" name="email" id="email"
          label='Email'
        />

        <InputGroup
          placeholder='Mobile' type="mobile" name="mobile" id="mobile"
          label='Mobile'
        />
      </div>

      <textarea rows={5} className='border border-black px-2 py-1.5 w-full' placeholder='Message' name="msg" id="msg"></textarea>

      <div className="">
        <Button className='rounded-l-full rounded-r-full px-12 bg-black text-white font-normal'>
          Submit
        </Button>
      </div>
    </form>
  )
}

export default RightContact
