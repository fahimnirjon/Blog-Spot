import PropTypes from 'prop-types';
import { CiBookmarkPlus } from "react-icons/ci";


const Blog = ({blog, handleToBm, markAsRead }) => {

    const {id, title, cover_pic, author, author_pic, reading_time,post_date, post_time, hashtags } = blog;

    return (
        <div className='mt-5 mb-20 space-y-4 border-2 border-purple-400 rounded-2xl'>
            <img className='w-full mb-8 rounded-lg' src={cover_pic} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4 '>
                <div className='flex gap-4'>
                    <img className='w-14 rounded-s-full' src={author_pic} alt="" />
                    <div>
                        <h3 className="text-2xl">{author}</h3>
                        <p>{post_date}</p>
                        <p>{post_time}</p>
                    </div>
                </div>
                <div className=''>
                    <span> {reading_time} min read</span>
                    <button onClick={ ()=> handleToBm(blog)} className='ml-2 text-2xl text-purple-500 mb-4'>
                    <CiBookmarkPlus />
                    </button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>{
            hashtags.map((hash, idx) => <span key={idx} ><a href="">#{hash}</a></span>)
            }</p>
            <button onClick={ ()=> markAsRead (id, reading_time)}  className='font-bold underline text-blue-400'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleToBm: PropTypes.func,
    markAsRead: PropTypes.func
}

export default Blog;