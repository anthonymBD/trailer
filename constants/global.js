import { FiInstagram, FiFacebook, FiYoutube, FiCalendar } from "react-icons/fi";

/* ---------------- NAVIGATION ---------------- */
/* Clean real navigation structure (no dropdown yet — just scalable) */

export const navLinks = [
    {
        id: "models",
        label: "Models",
        href: "#models",
    },
    {
        id: "compare",
        label: "Compare",
        href: "#compare",
    },
    {
        id: "about",
        label: "About",
        href: "#about",
    },
    {
        id: "faq",
        label: "FAQ",
        href: "#faq",
    },
    {
        id: "contact",
        label: "Contact",
        href: "#contact",
    },

    // CTA item (special styling later)
    {
        id: "book",
        label: "Book appointment",
        href: "#book",
        icon: FiCalendar,
        isCta: true,
    },
];

/* ---------------- LOGO ---------------- */

export const logo = {
    id: "logo",
    title: "Breath Trailers",
    image: "/svgs/logo.svg",
};

/* ---------------- FOOTER ---------------- */

export const footer = {
    description:
        "Premium teardrop trailers designed for real weekends — compact, towable, and ready for adventure.",

    columns: [
        {
            title: "Models",
            links: [
                { label: "Essential", href: "/models/essential" },
                { label: "Plus", href: "/models/plus" },
                { label: "Ultra", href: "/models/ultra" },
                { label: "Max", href: "/models/max" },
                { label: "Compare Models", href: "#" },
            ],
        },
        {
            title: "Company",
            links: [
                { label: "About", href: "#" },
                { label: "Ambassadors", href: "#" },
                { label: "Press", href: "#" },
                { label: "Careers", href: "#" },
            ],
        },
        {
            title: "Support",
            links: [
                { label: "FAQ", href: "#" },
                { label: "Financing", href: "#" },
                { label: "Warranty", href: "#" },
                { label: "Contact", href: "#" },
            ],
        },
    ],

    bottom: {
        copyright: "© 2026 Breath Trailer",

        // ICON BASED SOCIALS
        social: [
            { icon: FiInstagram, href: "#" },
            { icon: FiFacebook, href: "#" },
            { icon: FiYoutube, href: "#" },
        ],
    },
};