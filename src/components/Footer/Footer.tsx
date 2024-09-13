import FooterContent from './FooterContent'

const Footer = () => {
  return (
    <div className="bg-blue-900 p-5 flex justify-center">
      <div className='w-[100%] lg:w-[1100px] py-5'>
        {/* <NewsLetterFooter /> */}
        {/* <hr className="my-5  border-blue-900 h-[1px]" /> */}
        <FooterContent />
      </div>
    </div>
  )
}

export default Footer
