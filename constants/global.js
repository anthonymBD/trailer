const navLinks = [
    {
        id: "home",
        title: "Home",
        path: "/"
    },
    {
        id: "about",
        title: "About Us",
        path: "/about"
    },
    {
        id: "services",
        title: "Services",
        "path": "/services"
    },
    {
        id: "booking",
        title: "Booking",
        "path": "tel:17313880181"
    }
    ,

];

const logo = {
    id: "logo",
    title: "breath trailers",
    image: "/images/svgs/logo.svg",
}

const testimonials = {
    1: {
        eyebrow: "Real stories",
        subtitle: "Owners who get it",
        items: [
            {
                ratingImg:
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/1yCqfujAIQ/0x70c5cr_expires_30_days.png",
                quote:
                    "We've done more in three months than we did in three years of talking about it.",
                avatar:
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/1yCqfujAIQ/jaaa7x28_expires_30_days.png",
                name: "Sarah Mitchell",
                title: "Marketing director, Sydney",
            },
            {
                ratingImg:
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/1yCqfujAIQ/d5wlnujr_expires_30_days.png",
                quote:
                    "My kids actually want to come on weekends now. That's worth everything.",
                avatar:
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/1yCqfujAIQ/jj7keqp5_expires_30_days.png",
                name: "James Chen",
                title: "Father of two, Melbourne",
            },
            {
                ratingImg:
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/1yCqfujAIQ/6giop1vf_expires_30_days.png",
                quote:
                    "It's the best decision we made. No regrets, just sunrises.",
                avatar:
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/1yCqfujAIQ/vk8dip6y_expires_30_days.png",
                name: "Emma Russo",
                title: "Accountant, Brisbane",
            },
        ],
    },
};

export const footer = {
    description:
        "Premium teardrop trailers that make weekends feel like weekends again. Australian made, adventure tested.",

    columns: [
        {
            title: "Models",
            links: [
                { label: "Breath Essential", href: "/models/essential" },
                { label: "Breath Plus", href: "/models/plus" },
                { label: "Breath Ultra", href: "/models/ultra" },
                { label: "Breath Max", href: "/models/max" },
                { label: "Compare Models", href: "/compare" },
            ],
        },
        {
            title: "Company",
            links: [
                { label: "Our Story", href: "/about" },
                { label: "Ambassador Network", href: "/ambassadors" },
                { label: "Press & Awards", href: "/press" },
                { label: "Sustainability", href: "/sustainability" },
                { label: "Careers", href: "/careers" },
            ],
        },
        {
            title: "Support",
            links: [
                { label: "FAQ", href: "/faq" },
                { label: "Owner's Manual", href: "/manual" },
                { label: "Financing", href: "/financing" },
                { label: "Warranty", href: "/warranty" },
                { label: "Contact Us", href: "/contact" },
            ],
        },
    ],

    bottom: {
        copyright: "© 2025 Breath Trailer. All rights reserved.",
        social: [
            { label: "Instagram", href:"#"},
            { label: "facebook", href: "#" },
            { label: "youtube", href: "#" }
        ]

    },
};



export { navLinks, logo, testimonials }