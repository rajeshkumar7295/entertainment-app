// from installed packages
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'

// importing media components 
import MediaImage from './MediaImage';
import MediaBookmark from './MediaBookmark';
import MediaBookmarked from './MediaBookmarked';
import MediaInfo from './MediaInfo';
import MediaPlay from './MediaPlay';

// context 7 base url 
import MyContext from '../../context/MyContext';
import baseUrl from '../../utils/baseUrl'



// media components 
function Media({ mediaData }) {
    const token=localStorage.getItem("token");

    const {  setToast, setToastMessage } = useContext(MyContext)
    const [isHovered, setIsHovered] = useState(null)
    const [bookmarkedIds, setBookmarkedIds] = useState([]);
    const [bookmarkStatus, setBookmarkStatus] = useState(null)

    // fetching bookmark data to find id 
    useEffect(() => {
        if (token) {
            const fetchData = async () => {
                try {
                    const { data } = await axios.get(`${baseUrl}/media/bookmark/get`, {
                        headers: {
                            "Content-Type": "application/json",
                            authorization: document.cookie,
                        }, withCredentials:true
                    });
                 
                    setBookmarkedIds(data.data.map((bookmark) => bookmark.id));
                } catch (error) {
                    // console.error("Error fetching media data:", error);
                }
            }
            fetchData();
        }
    }, [bookmarkStatus, token]);


    // deleting bookmark 
    const deleteBookmark = async (id) => {
        try {
            await axios.delete(`${baseUrl}/media/bookmark/delete/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: document.cookie,
                },
                withCredentials:true
            });
            setBookmarkStatus(id)
            setToast(true)
            setToastMessage("Bookmark Deleted Successfully")
            window.location.reload();
        } catch (error) {
            setToast(true)
            setToastMessage("Error Happened")
          
        }
    }


    // adding bookmark
    const postData = async (singleMediaData) => {

        if (token) {
            try {
                // taking data from singleMediaData 
                console.log("adding bookmark")
                const { id, title, image, isAdult, mediaType, releaseDate } = singleMediaData;
                              console.log(singleMediaData,"singleMediaData....")
                await axios.post(`${baseUrl}/media/bookmark/add`, {
                    id: id,
                    title: title,
                    image: image,
                    isAdult: isAdult,
                    mediaType: mediaType,
                    releaseDate: releaseDate,
                }, {
                    headers: {
                        "Content-Type": "application/json",
                        authorization: document.cookie,
                    },
                    withCredentials:true,
                });

                setBookmarkStatus(id)
                setToast(true)
                setToastMessage("Bookmark added Successfully")
                // window.alert("Bookmark added ")
            } catch (error) {
                setToast(true)
                setToastMessage("Error Happened")
               
            }
        } else {
            setToast(true)
            setToastMessage("No Account Found")
        }
    }

    // render media
    return (
        <>
            {
                mediaData && mediaData.map((singleMediaData) => (
                    <div
                        key={singleMediaData.id}
                        className="flex flex-col gap-2"
                    >
                        <div
                            className="relative"
                            onMouseEnter={() => setIsHovered(singleMediaData.id)}
                            onMouseLeave={() => setIsHovered(null)}
                        >
                            {/* media image  */}
                            <MediaImage
                                singleMediaData={singleMediaData}
                                mediaType={"Movie"}
                            />

                            {
                                // media bookmark 
                                bookmarkedIds.includes(singleMediaData.id) ? (
                                    <MediaBookmarked
                                        onClick={() => { deleteBookmark(singleMediaData.id) }}
                                    />
                                ) : (
                                    <MediaBookmark
                                        onClick={() => { postData(singleMediaData); }}
                                    />
                                )
                            }

                            {
                                // media play button 
                                isHovered === singleMediaData.id && (
                                    <MediaPlay singleMediaData={singleMediaData} />
                                )
                            }

                        </div>

                        {/* media info */}
                        <MediaInfo singleMediaData={singleMediaData} />
                    </div>
                ))
            }

        </>
    )
}

export default Media