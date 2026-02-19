import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const Hero = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Parallax effect for mountain - moves down slower than scroll
    const mountainY = useTransform(scrollYProgress, [0, 1], [-190, 150]);

    return (
        <section 
            ref={sectionRef}
            className="bg-primary text-white relative z-0 overflow-hidden pt-24"
        >
            {/* PARALLAX MOUNTAIN */}
            <motion.div 
                className="absolute -bottom-1 left-0 w-full z-0 pointer-events-none overflow-hidden"
                style={{ y: mountainY }}
            >
                <svg
                    viewBox="0 0 1440 303"
                    className="w-full h-auto mix-blend-multiply opacity-30"
                    preserveAspectRatio="none" 
                    id="mountain"
                >
                    <g>
                        <path d="M-77 299.844L219.613 160.872L288.166 170.099L488.815 81.9716L603.464 120.198L793.209 9.32385L937.154 89.693L982.6 64.9624L1054.93 104.38L1100.73 93.0827L1290.47 190.25L1342.82 172.951L1545.65 299.844H-77Z" fill="#36565F" />
                        <path d="M793.937 0L884.794 44.6424L937.154 89.4082L989.872 60.158L1029.31 83.2141L1054.93 104.095L978.593 136.211L902.987 83.3579V113.889L844.581 51.1815L821.176 70.508L866.637 110.499V127.445L820.108 91.2908L810.302 106.592L833.194 134.979L843.372 166.802L793.209 110.499L786.665 79.9919L763.404 104.095L744.501 119.161L728.509 83.3579L702.358 130.037L650.768 152.051L632.382 186.951L632.545 152.303L665.985 133.472L713.161 66.78L650.768 106.592L610.959 137.992L455.157 186.951L592.033 119.888L714.335 38.0068L793.937 0Z" fill="#6B9C9C" />
                        <path d="M180.354 285.624L223.924 256.386L257.919 243.766L322.013 209.176L371.706 199.954L460.851 160.043L641.672 224.487L772.128 261.521L998.948 299.559L773.58 275.078L705.245 266.794L603.464 263.781L693.611 287.884L642.721 284.117L589.651 269.806L503.141 244.196L532.219 266.041L562.752 299.559L514.771 276.585L491.507 255.307L455.157 241.936L430.441 260.767L427.531 241.936L299.582 276.585L315.574 258.507L180.354 285.624Z" fill="#548370" />
                        <path d="M632.381 243.1L755.04 206.536L807.022 197.497L844.824 178.666L943.695 147.784L987.316 129.705L1029.48 105.979L1100.73 77.7323L1162.69 108.787L1208.24 147.853L1251.94 157.575L1291.2 179.419L1340.63 166.802L1420.6 211.056L1491.14 265.461L1403.15 226.872L1371.17 211.056H1330.46L1288.29 204.276L1243.22 181.679L1262.12 211.056L1221.41 195.237L1199.6 166.802L1154.53 143.264L1150.16 166.802L1199.6 211.056L1228.68 279.598L1181.75 212.185L1150.92 193.761H1115.27L1062.6 152.051L1006.22 148.536L952.831 157.427L905.893 205.029L840.465 228.379L811.384 232.899L840.465 216.328L872.45 192.977L846.279 195.237L807.022 221.6L755.04 238.924L702.334 249.47L632.381 243.1Z" fill="#6B9C9C" />
                        <path d="M-77 299.559L84.3921 214.068L146.913 186.951L257.08 119.913L299.089 147.024L354.298 109.711L438.311 77.7321L505.523 34.2297L635.145 95.8526L610.958 122.53L544.202 104.76L526.402 126.693L500.231 120.668L490.055 109.369L468.243 118.406L455.157 136.484L421.717 166.802L427.531 147.783L417.452 119.913L346.769 144.076L325.753 178.666L266.139 211.055L293.765 186.951L256.327 192.977L235.606 182.433L165.816 211.055L171.63 194.484L85.8442 244.196L87.2991 229.885L-77 299.559Z" fill="#6B9C9C" />
                        <path d="M101.839 291.65L164.361 263.027H180.353L229.789 228.379L168.722 255.307H126.556L49.4941 279.598L117.832 269.054L101.839 291.65Z" fill="#548370" />
                        <path d="M604.904 228.379L697.973 188.645L766.311 119.913L755.041 151.55L743.047 178.666L747.408 186.951L783.758 161.342V172.666L810.302 204.861L707.604 235.466L604.904 228.379Z" fill="#548370" />
                        <path d="M1078.92 137.991V172.201L1017.85 199.756L989.039 288.84L878.268 272.066L955.329 219.34L950.967 260.014L991.679 212.185L998.948 183.938L1045.48 166.802L1078.92 137.991Z" fill="#548370" />
                        <path d="M1225.77 219.34L1257.76 255.307L1283.93 260.014L1321.73 310.48H1398.79L1289.74 247.963L1269.39 243.443L1225.77 219.34Z" fill="#548370" />
                        <path d="M1307.19 228.379L1369.72 264.911L1390.07 268.301L1432.24 310.48H1504.94L1398.79 260.014L1374.08 255.307L1307.19 228.379Z" fill="#548370" />
                        <path d="M1028.03 315L1024.01 264.911L1054.93 236.664H1073.1L1078.92 181.678L1139.61 235.466V259.005L1195.2 313.011L1028.03 315Z" fill="#548370" />
                    </g>
                </svg>
            </motion.div>
            

            {/* CONTENT WRAPPER */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* LEFT SIDE */}
                    <div className="max-w-xl">
                        <motion.h1 
                            className="text-[50vw] md:text-7xl lg:text-8xl font-extrabold leading-[0.95]"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ 
                                duration: 0.8, 
                                ease: [0.25, 0.1, 0.25, 1],
                                staggerChildren: 0.1
                            }}
                        >
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                Your weekends
                            </motion.span>
                            <br />
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                start <span className="text-accent relative">
                                    now
                                    <motion.span
                                        id="blink"
                                        className="absolute left-0 -bottom-3 w-full h-2 bg-accent"
                                        // Keyframes: Start at 90%, go to 20%, back to 90%
                                        animate={{ opacity: [0.9, 0.2, 0.9] }}
                                        transition={{
                                            duration: 2.5,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    />
                                </span>
                            </motion.span>
                        </motion.h1>

                        <motion.p 
                            className="mt-8 text-lg text-white/80 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                        >
                            Stop planning escapes and start taking them. A Breath trailer is
                            lightweight, affordable, and ready to go whenever you are.
                        </motion.p>

                        <motion.div 
                            className="mt-8 flex gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                        >
                            <button className="bg-secondary text-primary px-6 py-3 rounded-md font-semibold hover:brightness-110 transition">
                                Reserve
                            </button>
                            <button className="border border-white/40 px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-primary transition">
                                Learn
                            </button>
                        </motion.div>

                        <motion.div 
                            className="mt-12 flex gap-10 text-sm text-white/80"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                        >
                            <div>
                                <p>Gold Award Winner</p>
                                <div className="mt-2 h-1 w-42 bg-accent mb-2"></div>
                            </div>
                            <div>
                                <p>Australian Made</p>
                                <div className="mt-2 h-1 w-42 bg-secondary mb-2"></div>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT SIDE IMAGE */}
                    <motion.div 
                        className="relative flex justify-center md:justify-end"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ 
                            duration: 0.9, 
                            delay: 0.3,
                            ease: [0.25, 0.1, 0.25, 1]
                        }}
                    >
                        <motion.div 
                            className="absolute inset-6 bg-gradient-to-br from-[#12354a] to-[#001426] rounded-3xl blur-2xl opacity-40"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 0.4, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.4 }}
                        ></motion.div>

                        <motion.img
                            src="/images/hero.jpg"
                            alt="Breath trailer"
                            className="relative w-full max-w-md md:max-w-lg rounded-3xl object-cover shadow-2xl"
                            initial={{ opacity: 0, scale: 0.96 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ 
                                duration: 1, 
                                delay: 0.5,
                                ease: [0.25, 0.1, 0.25, 1]
                            }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;