import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setNames } from "./slices/userSlice";

function Roughpage() {
    const [google, setGoogle] = useState(10000001);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [yahoo, setYahoo] = useState({
        person1: "",
        person2: ""
    });

    // const showNames = () => {
       
    //     setYahoo({
    //         person1: "praveen",
    //         person2: "shivani",
    //     });
    //     dispatch(setNames(yahoo));
    //     navigate("/user");
    // };

    const showNames = () => {
        const updatedYahoo = {
            person1: "praveen",
            person2: "Mithoon",
        };
        setYahoo(updatedYahoo); // Update state
        dispatch(setNames(updatedYahoo)); // Dispatch updated state
        navigate("/user");
        console.log(updatedYahoo);
    };

    //console.log(updatedYahoo);

    const updateGoogle = () => setGoogle((val) => val + 1);

    return (
        <div>
            <h1>Hello Praveen</h1>
            <p>Current Google value: {google}</p>
            <button onClick={updateGoogle}>Update Google</button>
            <button onClick={showNames}>Show Names in Another Page</button>
            <h3>{yahoo.person1}</h3>
            <h3>{yahoo.person2}</h3>
        </div>
    );
}

export default Roughpage;
