import React, {useState, useEffect} from 'react'
import { PopulerIcon } from '../icons/Icon'
import pp from '../images/pp.jpg'
import TweetBox from '../components/TweetBox'
import Divider from '../components/Divider'
import FeedList from '../components/FeedList';
import db from '../firebase';
const Content = () => {
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
      db.collection("feed")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setTweets(snapshot.docs.map((doc) => doc.data()))
        );
    }, []);
    return (
        <main className="flex-1 flex flex-col border-r border-l border-gray-extralight">
            <header className="sticky top-0 z-10 flex justify-between items-center p-4 border-b border-gray-extralight bg-white">
                <span className="font-bold text-xl text-gray-900">Home</span>
                <PopulerIcon className="w-6 h-6 text-primary-base"/>
            </header>
            <div className="flex space-x-4 px-4 py-3">
            <img
                src={pp}
                alt="Profile"
                className="w-11 h-11 rounded-full"
            />
               <TweetBox/>
            </div>
            <Divider/>
            {/* Feed */}
            <FeedList tweets={tweets} />
        </main>
    )
}

export default Content
