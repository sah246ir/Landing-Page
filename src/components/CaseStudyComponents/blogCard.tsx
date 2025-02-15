import { Blog, BlogAction, BlogContent, BlogDate, BlogDescription, BlogTitle } from "../card/Blog"

interface CardPropTypes {
    size?: "l" | "m" | "s" | "xs", 
    className?: string,
    ContentclassName?: string,
    title?: string,
    description?: string,
    dateicon?: boolean,
}

const CaseStudyBlogCard = ({ title, description, dateicon=true, size, className, ContentclassName }: CardPropTypes) => {
    return (
        <Blog className={className} size={size}>
            <BlogContent className={ContentclassName || "w-[97%] bg-white p-2 -translate-y-2 rounded "}>
                <BlogDate icon={dateicon} />
                <BlogTitle className={size==="xs"?"text-md":"text-xl"} >{title}</BlogTitle>

                {description && <BlogDescription className='text-xs text-gray-600 mb-2'>
                    {description}
                </BlogDescription>}

                <BlogAction>

                </BlogAction>
            </BlogContent>
        </Blog>
    )
}


export const HorizontalBlogCard = ({ title, description, dateicon, size, className, ContentclassName }: CardPropTypes) => {
    return (
        <Blog horizontal className={"gap-4 " + className} size={size}>
            <BlogContent className={ContentclassName || ""}>
                <BlogDate className="" icon={dateicon} />
                <BlogTitle className="text-sm my-0" >{title}</BlogTitle>

                {description && <BlogDescription className='text-xs text-gray-600 mb-2'>
                    {description}
                </BlogDescription>}

                <BlogAction className="text-xs"> 
                </BlogAction>
            </BlogContent>
        </Blog>
    )
}
 
export default CaseStudyBlogCard 