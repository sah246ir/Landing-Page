import NewsLetterFooter from './NewsLetterFooter'
import FooterContent from './FooterContent'

const Footer = () => {
  return (
    <div className="bg-gray-100 p-5 flex justify-center">
      <div className='w-[100%] lg:w-[1100px]'>
        <NewsLetterFooter />
        <hr className="my-5 bg-gray-400 h-[1px]" />
        <FooterContent />
      </div>
    </div>
  )
}

export default Footer
