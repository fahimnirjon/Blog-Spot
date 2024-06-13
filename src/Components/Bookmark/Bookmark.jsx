import PropTypes from 'prop-types';
const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-slate-300 m-4 p-5 rounded-2xl'>
            <h3 className='text-2xl font-light'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes ={
    bookmark: PropTypes.object
}

export default Bookmark;