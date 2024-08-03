import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Data() {
    const [data, setData] = useState("");
    const [userData, setUserData] = useState(null);

    const BASE_URL = "https://jsonplaceholder.typicode.com";

    const getUser = async (id) => {

        try {
            const response = await axios.get(`${BASE_URL}/photos/${id}`);
            setUserData(response.data);
        } catch (error) {
            console.error("Error", error);
        }

    }

    useEffect(() => {
        getUser(data);
    }, [data]);

    const onChange = (e) => {
        setData(e.target.value);
    }

    return (
        <div>
            <input type="text" onChange={onChange} />
            {userData && (
                <div>
                    <h2>{userData.id}</h2>
                    <img src={userData.url} />
                </div>
            )}
        </div>
    )
}

export default Data;
