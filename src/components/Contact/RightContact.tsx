import Button from '../Button'

const RightContact = () => {
  return (
    <form className='flex flex-col gap-4'>
      <div className='flex gap-4 flex-col sm:flex-row'>
        <div className='flex flex-col gap-1'>
          <label className='text-md text-gray-700 font-light' htmlFor="firstname">First Name</label>
          <input className='border border-black px-2 py-1.5' placeholder='First name' type="text" name="firstname" id="firstname" />
        </div>

        <div className='flex flex-col gap-1'>
          <label className='text-md text-gray-700 font-light' htmlFor="lastname">Last Name</label>
          <input className='border border-black px-2 py-1.5' placeholder='Last name' type="text" name="lastname" id="lastname" />
        </div>
      </div>

      <div className='flex gap-4 flex-col sm:flex-row'>
        <div className='flex flex-col gap-1'>
          <label className='text-md text-gray-700 font-light' htmlFor="email">Email</label>
          <input className='border border-black px-2 py-1.5' placeholder='abc@company.com' type="text" name="email" id="email" />
        </div>

        <div className='flex flex-col gap-1'>
          <label className='text-md text-gray-700 font-light' htmlFor="mobile">Mobile</label>
          <input className='border border-black px-2 py-1.5' placeholder='xxx-xxx-xxxx' type="text" name="phone" id="phone" />
        </div>
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
