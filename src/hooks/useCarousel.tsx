import { useState } from "react"

interface UseCarouselReturn {
    gonext: () => void;
    goprev: () => void;
    translate: `${number}%`;
    index: number;
}

interface PropTypes {
    cards: number,
    prenext?: () => void;
    preprev?: () => void;
}

const useCarousel = ({ cards, prenext, preprev }: PropTypes): UseCarouselReturn => {
    const [idx, setIdx] = useState<number>(0)

    const gonext = () => {
        if (prenext) prenext()
        setIdx(prev => {
            if (prev === cards - 1) {
                return 0
            }
            return prev + 1
        })
    }
    const goprev = () => {
        if (preprev) preprev()
        setIdx(prev => {
            if (prev === 0) {
                return cards - 1
            }
            return prev - 1
        })
    }

    return { gonext, goprev, translate: `${-100 * idx}%`, index: idx }
}

export default useCarousel
