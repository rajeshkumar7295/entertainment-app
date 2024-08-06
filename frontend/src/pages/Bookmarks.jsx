// importing installed packages 
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// importing custom packages  
import Loading from '../components/CssComponents/Loading'
import Media from '../components/MediaComponents/Media'
import baseUrl from '../utils/baseUrl'



// bookmark media 
function Bookmarks() {
    const token=localStorage.getItem("token");

    const [mediaData, setMediaData] = useState([]);

    // bookmark media data fetching 
    useEffect(() => {
        if (token) {
            const fetchData = async () => {
                try {
                    const { data } = await axios.get(`${baseUrl}/media/bookmark/get`, {
                        headers: {
                            "Content-Type": "application/json"
                        },
                        withCredentials: true,

                    });
                    console.log("data........bookmark",data);
                    setMediaData(data.data);
                } catch (error) {
                    console.log("Error fetching media data:", error);
                }
            }
            fetchData();
        }
    }, [token]);


    // css style 
    const containerStyle = "p-4 mt-2 flex flex-col gap-6";
    const headingStyle = "text-2xl md:text-4xl font-bold";
    const wrapperStyle = "grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"


    return (
        <div className={containerStyle}>
            <h1 className={headingStyle}> Bookmarks </h1>

            {
                token ? <>
                    {
                        // render bookmark media 
                        mediaData && mediaData.length > 0 ? (
                            <div className={wrapperStyle}>
                                <Media mediaData={mediaData} />
                            </div>

                        ) : (
                            // render loading
                            <div className='text-white'>
                                no bookmark yet
                            </div>
                        )
                    }
                </> : <>
                    <div className='flex flex-col gap-4'>
                        <div>No Account Found </div>
                        <Link
                            to="/user/register"
                            className="px-6 py-3 w-32 text-center bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition duration-300"
                        >
                            Visit Here
                        </Link>
                    </div>
                </>
            }

        </div>
    )
}

export default Bookmarks