import { ArrowButton } from '../../Button'
const img = require("../../../img/swiss2.webp")

const ServiceCard = () => {
    return (
        <div className="w-[100%] relative">
            <div className="absolute bottom-0 left-0">
                <ArrowButton
                    size={35}
                    direction='r'
                    className='-rotate-45'
                />
            </div>
            <img className='w-full' src={img} alt="" />
            <h1 className='font-medium my-2 text-gray-800'>Investment</h1>
            <p className='text-xs text-gray-600 mb-10'>Having collaborated with this team for over a decade, I can
                attest to his exceptional r a decade strategic.</p>
        </div>
    )
}

export default ServiceCard
