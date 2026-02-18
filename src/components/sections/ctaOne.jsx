import React from "react";

const CtaOne = ({ variant = "simple", data, images = [] }) => {
    /* ---------------- SIMPLE CTA (old school) ---------------- */
    if (variant === "simple") {
        const bgImage = images && images.length > 0 ? images[0] : "";
        return (
            <section
                className="py-28"
                style={{
                    backgroundImage: bgImage ? `url(${bgImage})` : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="max-w-5xl mx-auto px-6 space-y-8 py-28">
                    <h2 className="text-4xl md:text-5xl font-semibold text-white">
                        {data.headline}
                    </h2>
                    <p className="text-xl max-w-2xl opacity-80 text-white">
                        {data.description}
                    </p>
                </div>
            </section>
        );
    }

    /* ---------------- FEATURE CTA (your RELAX one) ---------------- */
    if (variant === "feature") {
        return (
            <section className="bg-white text-primary py-24">
                {/* RELAX word - full bleed */}
                <div className="overflow-hidden mb-12">
                    <strong
                        className={`block font-black leading-none tracking-tight select-none
              text-[50vw] sm:text-[45vw] md:text-[35vw] lg:text-[30vw]
              text-primary/15`}
                    >
                        {data.word}
                    </strong>
                    <div className="space-y-4">
                        <h3 className="text-3xl md:text-4xl font-semibold text-primary">
                            {data.headline}
                        </h3>
                        <p className="text-lg text-primary max-w-sm">
                            {data.description}
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8 items-stretch">
                        {/* Left: Large image with text overlay */}
                        <div className="md:col-span-2 relative">
                            <img
                                src={images[0]}
                                alt=""
                                className="w-full h-[500px] object-cover rounded-2xl"
                            />
                        </div>

                        {/* Right: Small image */}
                        <div>
                            <img
                                src={images[1]}
                                alt=""
                                className="w-full h-[500px] object-cover rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return null;
};

export default CtaOne;