import React, { useEffect } from 'react';

function DelayedAlert() {
    useEffect(()=> {
        const timer=setTimeout(()=>{
            alert("hello after 1 seconds");
        },1000);

        return ()=> clearTimeout(timer);
    },[]);

    return <h2>wait for the alert...</h2>;

}
export default DelayedAlert;