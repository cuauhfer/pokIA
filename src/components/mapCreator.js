import React, { useState } from "react";
import { GridGenerator } from "./gridGenerator";

export const MapCreator = () => {

    const [status, setStatus] = useState(0);

    return(
        <>
            {(status === 0) && <GridGenerator nextStep={setStatus} />}
            {(status === 1) && <p>Step 1</p>}
        </>
    );
}