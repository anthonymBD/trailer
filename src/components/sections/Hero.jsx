import React from "react";

const Hero = () => {
    return (
        <section className="bg-primary text-white">
            <div className="max-w-7xl mx-auto px-6 pt-28 pb-20">

                {/* GRID LAYOUT */}
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* LEFT SIDE */}
                    <div className="max-w-xl">

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95]">
                            Your weekends
                            <br />
                            start <span className="text-accent relative">
                                now
                                <span className="absolute left-0 -bottom-3 w-full h-2 bg-accent opacity-90"></span>
                            </span>
                        </h1>

                        <p className="mt-8 text-lg text-white/80 leading-relaxed">
                            Stop planning escapes and start taking them. A Breath trailer is
                            lightweight, affordable, and ready to go whenever you are.
                        </p>

                        {/* BUTTONS */}
                        <div className="mt-8 flex gap-4">
                            <button className="bg-secondary text-primary px-6 py-3 rounded-md font-semibold hover:brightness-110 transition">
                                Reserve
                            </button>

                            <button className="border border-white/40 px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-primary transition">
                                Learn
                            </button>
                        </div>

                        {/* BADGES */}
                        <div className="mt-12 flex gap-10 text-sm text-white/80">
                            <div>
                                <div className="h-1 w-24 bg-accent mb-2"></div>
                                Gold Award Winner
                            </div>

                            <div>
                                <div className="h-1 w-24 bg-secondary mb-2"></div>
                                Australian Made
                            </div>
                        </div>

                    </div>

                    {/* RIGHT SIDE IMAGE */}
                    <div className="relative flex justify-center md:justify-end">

                        {/* placeholder gradient card */}
                        <div className="absolute inset-6 bg-gradient-to-br from-[#12354a] to-[#001426] rounded-3xl blur-2xl opacity-40"></div>

                        <img
                            src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/1yCqfujAIQ/qjtiv13d_expires_30_days.png"
                            alt="Breath trailer"
                            className="relative w-full max-w-md md:max-w-lg rounded-3xl object-cover shadow-2xl"
                        />

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
