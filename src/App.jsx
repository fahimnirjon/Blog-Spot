import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const [readTime, setReadTime] = useState(0);

        const handleToBm = blog =>{
          const newBookMarks = [...bookmarks, blog];
          setBookmarks(newBookMarks);
        }

        const markAsRead = (id, time) => {
          const newReadTime = readTime+time;
          setReadTime(newReadTime);

          // remove the selective bookmark

          const remainingBookMark = bookmarks.filter(bookmark => bookmark.id !== id);
          setBookmarks(remainingBookMark);
        }

  return (
    <>
    <div className='container mx-auto'>
    <Header></Header>
    <div className='md:flex'>
    <Blogs handleToBm={handleToBm} markAsRead={markAsRead } ></Blogs>
    <Bookmarks bookmarks ={bookmarks} readTime={readTime} ></Bookmarks>
    </div>
    </div>
    </>
  )
}

export default App
