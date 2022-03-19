import React, {useEffect, useState} from "react";
import { useWait as wait } from "../hooks/useWait";
import '../styles/alertBox.css';

export const AlertBox = ({message, clearMessage}) => {
    const keepFor = 2000;
    const velocity = 0.05
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        (async function() {
            await wait(keepFor);
            for(let i = 1; i > 0; i -= velocity){
                setOpacity(i);
                await wait(50);
            }
            clearMessage('');
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="alertBox" style={{opacity}}>
            <p>{message}</p>
        </div>
    );
}