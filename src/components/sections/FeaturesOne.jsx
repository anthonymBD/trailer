import React from "react";

const FeaturesOne = ({ className = "" }) => {
    return (
        <section className={`mt-24 md:mt-40 ${className}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-20">

                {/* Main 2 column layout */}
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                    {/* LEFT CONTENT */}
                    <div className="flex-1 space-y-10">

                        {/* Heading */}
                        <div className="space-y-6 max-w-xl">
                            <span className="text-primary font-bold">Rethink</span>

                            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-primary leading-tight">
                                Built for the escapes you'll actually take
                            </h2>

                            <p className="text-lg sm:text-xl text-primary/80">
                                The teardrop trailer that fits your garage, your budget, and your Friday afternoon
                            </p>
                        </div>

                        {/* Features */}
                        <div className="grid sm:grid-cols-2 gap-10">

                            <div className="space-y-4">
                                <img
                                    src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/1yCqfujAIQ/7866gqu0_expires_30_days.png"
                                    className="w-12 h-12"
                                />
                                <h3 className="text-xl md:text-2xl text-primary">
                                    You're not alone in this
                                </h3>
                                <p className="text-primary/80">
                                    Caravans or RV’s cost a fortune and sit idle most of the year,
                                    so you're basically paying for a parked car — plus gas and parking fees.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <img
                                    src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/1yCqfujAIQ/04wzzyq1_expires_30_days.png"
                                    className="w-12 h-12"
                                />
                                <h3 className="text-xl md:text-2xl text-primary">
                                    Your new weekend
                                </h3>
                                <p className="text-primary/80">
                                    Lightweight, affordable, tows behind almost any car, stores anywhere,
                                    and makes spontaneous trips easy without hidden costs.
                                </p>
                            </div>

                        </div>

                        {/* CTA */}
                        <div className="flex items-center gap-6 pt-4">
                            <button className="px-6 py-3 rounded-md border border-primary text-primary">
                                View
                            </button>

                            <button className="flex items-center gap-3 text-primary">
                                Explore
                                <img
                                    src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/1yCqfujAIQ/dul2j9o4_expires_30_days.png"
                                    className="w-5 h-5"
                                />
                            </button>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex-1 w-full">
                        <img
                            src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/1yCqfujAIQ/1wqizyab_expires_30_days.png"
                            className="w-full h-[380px] sm:h-[480px] md:h-[620px] object-cover rounded-xl"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FeaturesOne;
