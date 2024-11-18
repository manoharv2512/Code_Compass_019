import React, { useState } from "react";
import DatePage from "../components/DatesPage";
import FinishingTouches from "../components/TripDiscription";

function MainDatePage() {
    const [showFinishingTouches, setShowFinishingTouches] = useState(false);

    const handleContinue = () => {
        setShowFinishingTouches(true);
    };

    const handleBack = () => {
        setShowFinishingTouches(false);
    };

    return (
        <div className="container">
            {!showFinishingTouches ? (
                <DatePage onContinue={handleContinue} />
            ) : (
                <FinishingTouches onBack={handleBack} />
            )}
        </div>
    );
}

export default MainDatePage;
