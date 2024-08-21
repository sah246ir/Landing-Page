import Button from "../Button"
import { InputGroup, Textarea } from "../Input"

const CareerForm = () => {
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
          placeholder='Mobile' type="tel" name="mobile" id="mobile"
          label='Mobile'
        />

        
      </div>

      <Textarea rows={5} className='border border-black px-2 py-1.5 w-full' placeholder='Message' name="msg" id="msg"></Textarea>
      <InputGroup
          placeholder='Resume' type="file" name="resume" id="resume"
          label='Resume'
        />
      <div className="">
        <Button className='rounded-l-full rounded-r-full px-12 bg-black text-white font-normal'>
          Submit
        </Button>
      </div>
    </form>
  )
}

export default CareerForm
