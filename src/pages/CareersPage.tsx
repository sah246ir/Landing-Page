import React from 'react'
import MainHeadingSection from '../components/MainHeadingSection'
import Testimonial from '../components/CareerPageComponents/Testimonial'

const CareersPage = () => {
    return (
        <div>
            <MainHeadingSection title='Testimonial' description='it to make a type specimen book. It has survived not only five centuries, but also the leap intoelectronic typesetting, remaining essentially unchanged'>
                {/* <div className="flex w-full overflow-hidden mt-5"> */}
                    <Testimonial />
                {/* </div> */}
            </MainHeadingSection>
        </div>
    )
}

export default CareersPage
