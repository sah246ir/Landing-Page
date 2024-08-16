import { useState } from "react"

interface UseCarouselReturn {
    gonext: () => void;
    goprev: () => void;
    translate: `${number}%`;
}

const useCarousel = ({cards}:{cards:number}): UseCarouselReturn => {
    const [idx, setIdx] = useState<number>(0)

    const gonext = () => {
        setIdx(prev => {
            if (prev === cards- 1) {
                return 0
            }
            return prev + 1
        })
    }
    const goprev = () => {
        setIdx(prev => {
            if (prev === 0) {
                return cards- 1
            }
            return prev - 1
        })
    }

    return { gonext, goprev, translate: `${-100 * idx}%` }
}

export default useCarousel
