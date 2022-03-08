import React from "react";

const Covid = () => {


    return (
        <section>
            <div className="checking-form">
                <h2>how would you prefer to work?</h2>
                <div className="checking-grid mt-2 mb-4">
                    <input type="radio" id="fso" name="prefer_work" value="" />
                    <label htmlFor="fso">From Sairme Office</label>

                    <input type="radio" id="from_home" name="prefer_work" value="" />
                    <label htmlFor="from_home">From Home</label>

                    <input type="radio" id="hybrid" name="prefer_work" value="" />
                    <label htmlFor="hybrid">Hybrid</label>
                </div>

                <h2>Did you contact covid 19? :(</h2>
                <div className="checking-grid mt-2 mb-4">
                    <input type="radio" id="hadCovid" name="contact_covid" value="" />
                    <label htmlFor="hadCovid">Yes</label>

                    <input type="radio" id="hadNotCov" name="contact_covid" value="" />
                    <label htmlFor="hadNotCov">No</label>
                </div>

                <h2>When?</h2>
                <input type="text" className="mt-3" placeholder="Date" onFocus={this.type = 'date'} />
            </div>
        </section >
    )
}

export default Covid;