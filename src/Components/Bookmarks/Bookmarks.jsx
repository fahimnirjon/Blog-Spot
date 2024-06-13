import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks , readTime}) => {
    return (
        <div className="md:w-1/3 p-5 ml-4">
            <div>
                <h3 className="text-3xl">Reading Time: {readTime} </h3>
            </div>
            <h2 className="text-3xl font-semibold">Bookmarked Blogs: {bookmarks.length} </h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes ={
    bookmarks: PropTypes.array,
    readTime: PropTypes.number
}

export default Bookmarks;