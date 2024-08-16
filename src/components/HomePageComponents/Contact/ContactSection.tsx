import LeftContact from './LeftContact'
import RightContact from './RightContact'

const ContactSection = () => {
  return (
    <section className='flex justify-center'>
      <div className='w-[100%] lg:w-[1100px] flex text-center md:text-left items-center md:items-start md:justify-between p-5 md:flex-row flex-col gap-5'>
        <LeftContact />
        <RightContact />
      </div>
    </section>
  )
}

export default ContactSection
