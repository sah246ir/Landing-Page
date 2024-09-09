import NewsLetterFooter from './NewsLetterFooter'
import FooterContent from './FooterContent'

const Footer = () => {
  return (
    <div className="bg-blue-950 p-5 flex justify-center">
      <div className='w-[100%] lg:w-[1100px]'>
        <NewsLetterFooter />
        <hr className="my-5  border-blue-900 h-[1px]" />
        <FooterContent />
      </div>
    </div>
  )
}

export default Footer
