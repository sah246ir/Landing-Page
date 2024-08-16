import { Blog, BlogContent, BlogDate, BlogDescription, BlogTitle } from "../../card/Blog"

interface CardPropTypes {
    size?: "l" | "m" | "s",
    className?: string,
    title?: string,
    description?: string,
    dateicon?: boolean,
}

const BlogCard = ({title,description,dateicon,size}:CardPropTypes) => {
    return (
        <Blog size={size}>
            <BlogContent className="w-[97%] bg-white p-2 -translate-y-2 rounded">
                <BlogDate icon={dateicon} />
                <BlogTitle >{title}</BlogTitle>
                <BlogDescription className='text-xs text-gray-600 mb-10'>
                    {description}
                </BlogDescription>
            </BlogContent>
        </Blog>
    )
}

export default BlogCard 