import React from "react";

const RedberrianInsights = () => {

    return (
        <section>
            <div className="checking-form">
                <h2>Would you attend Devtalks and maybe also organize your own?</h2>
                <div className="checking-grid mt-1 mb-3">
                    <input type="radio" id="Vaccinated" name="vaccinated" value={true} />
                    <label htmlFor="Vaccinated">Yes</label>

                    <input type="radio" id="NotVaccinated" name="vaccinated" value={false} />
                    <label htmlFor="NotVaccinated">No</label>
                </div>

                <div className="mb-3">
                    <h2>What would you speak about at Devtalk?</h2>
                    <textarea className="mt-2 h-2" placeholder="I would..."></textarea>
                </div>

                <div className="mb-3">
                    <h2>Tell us something special</h2>
                    <textarea className="mt-2 h-1" placeholder="I..."></textarea>
                </div>
            </div>
        </section>
    );
}

export default RedberrianInsights;