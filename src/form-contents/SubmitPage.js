import React from "react";

const SubmitPage = ({ sendData, prevPage }) => {



    return (
        <section>
            <div className="container-submit">
                <button onClick={sendData} className="btn circled">Submit</button>
                <button onClick={prevPage} className="btn link">go back</button>
            </div>
        </section>
    )
}

export default SubmitPage;