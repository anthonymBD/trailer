
const models = {
    1: {
        title: "Find your fit",
        subtitle: "Built for how you actually adventure",
        items: [
            {
                name: "Essential",
                tag: "THE WEEKEND WARRIOR",
                price: "$31K",
                weekly: "From $48/week",
                desc: "For the 'let's just go' types. Simplicity is the luxury.",
                button: "Explore Essential",
                image: "/images/ctaOne.jpg",
                featured: false,
                slug: "essential",
            },
            {
                name: "Plus",
                tag: "⚡ MOST POPULAR",
                price: "$38K",
                weekly: "From $58/week",
                desc: "Freedom to go off-grid. Comfort to stay there.",
                button: "Explore Plus",
                image: "/images/breathPlus.jpg",
                featured: true,
                slug: "plus",
            },
            {
                name: "Ultra",
                tag: "THE WEEKLONG ESCAPE",
                price: "$46K",
                weekly: "From $71/week",
                desc: "Every comfort. Without the compromise.",
                button: "Explore Ultra",
                image: "/images/ultra.jpg",
                featured: false,
                slug: "ultra",
            },
            {
                name: "Max",
                tag: "FULL COMFORT",
                price: "$39K",
                weekly: "From $79/week",
                desc: "Stand-up living in a tow-anywhere footprint.",
                button: "Explore Max",
                image: "/images/max.jpg",
                featured: false,
                slug: "max",
            },
        ],
    },
};

// =========================
// MODEL DETAIL PAGES
// =========================

const modelPages = {
    essential: {
        title: "Breath Essential",
        price: "From $19,990",
        hero: "/images/models/essential.jpg",

        description:
            "The Breath Essential is our budget-friendly entry model designed to maximise value and flexibility while keeping a compact footprint. Includes a comfortable double bed and is ideal for limited garage space.",

        sections: [
            {
                title: "Dimensions",
                items: [
                    "Body: 2900mm × 1500mm × 1200mm",
                    "Overall: 3900mm × 2000mm × 1600mm",
                    "Weight: Tare 700kg | GTM 1380kg | ATM 1500kg",
                ],
            },
            {
                title: "Comfort",
                items: [
                    "140x200cm premium mattress bed",
                    "Customisable exterior & cabinetry colors",
                    "Foldable dining/work table",
                ],
            },
            {
                title: "Kitchen",
                items: [
                    "Stainless steel counter & sink",
                    "Slide-out stove compartment",
                ],
                
            },
            {
                title: "Construction",
                items: [
                    "Steel chassis with hot-dipped zinc galvanisation",
                    " Galvanised sheet body & plastic honeycomb floor",
                ],
            },
            {
                title: "Access and lighting",
                items: [
                    " Two side doors – lockable & screened",
                    " Internal & external 12V lighting",
                ],
            },
            {
                title: "Access and lighting",
                items: [
                    " Two side doors – lockable & screened",
                    " Internal & external 12V lighting",
                ],
            },
            {
                title: "Water and Power",
                items: [
                    " 80L water tank",
                    " 24Ah lithium battery",
                    " USB ports + 12V outlet",
                ],
            },
            {
                title: "Safety and Traction",
                items: [
                    " Coupling, traction ball & safety chains",
                    " Leaf spring system with torsion suspension",
                    " Electric & hand brake",
                    " 15” alloy wheels",
                ],
            },
        ],
       
    },

    plus: {
        title: "Breath Plus",
        price: "From $24,990",
        hero: "/images/models/plus.jpg",

        description:
            "Ready for adventure the instant you make it yours. Built for longer off-grid trips while staying compact and easy to tow.",

        sections: [
            {
                title: "Dimensions",
                items: [
                    "Body: 2900mm × 1500mm × 1200mm",
                    "Overall: 3900mm × 2000mm × 1600mm",
                    "Tare: 800kg | GTM: 1380kg | ATM: 1500kg",
                ],
            },
            {
                title: "Comfort",
                items: [
                    "Premium mattress bed",
                    "Customisable colours",
                    "Foldable dining/work table",
                ],
            },
            {
                title: "Kitchen",
                items: [
                    "Fridge included",
                    "Double stove",
                    "Overhead storage shelf",
                ],
            },
            {
                title: "Access and Lighting",
                items: [
                    "Two side access doors, screened and lockable.",
                    "Internal and external lighting, 12V hard-wired.",
                    "Overhead storage shelf",
                ],
            },
            {
                title: "Construction",
                items: [
                    "Steel chassis with hot-dipped zinc galvanisation for durability.",
                    "I Galvanised sheet body.",
                    "Plastic honeycomb floor.",
                ],
            },
            {
                title: "Water and Power",
                items: [
                    " 80L water tank",
                    " 120Ah lithium battery",
                    " Bat Box: Includes a solar controller, battery box, and controller for optimal power management.",
                    " 2 USB ports, a cigarette lighter port, and cabin lighting.",
                ],
            },
            {
                title: "Safety and Traction",
                items: [
                    "  Coupling, traction ball, and safety chains for secure towing.",
                    " Leaf spring system with torsion suspension for a smooth ride",
                    "  Electric brake and hand brake.",
                    "15-inch aluminum alloy tires.",
                ],
            },
            {
                title: "More Features",
                items: [
                    "   Fridge: Keep your food and beverages cool and fresh during your travels.",
                    "  Lithium 120Ah Battery: Provides long-lasting power for all your electrical needs.",
                    " Double Stove: Cook delicious meals with ease on the efficient double stove.",
                    "Bat Box: Includes a solar controller, battery box, and controller for optimal power management.",
                    "15-inch aluminum alloy tires.",
                    "Solar Panel Installed: Harness the power of the sun to keep your battery charged and ready.",
                    "Extra Double Window: Enjoy natural light and ventilation inside your trailer.",
                    "Inverter: Allows you to use standard plugs in the trailer even while off-road.",
                    "External Shower: Convenient cold-water shower for outdoor hygiene.",
                ],
            },
        ],
    },

    ultra: {
        title: "Breath Ultra",
        price: "From $30,290",
        hero: "/images/models/ultra.jpg",

        description:
            "The pinnacle of off-grid teardrop travel trailers. Includes every feature of the Plus and adds premium upgrades for comfort and independence.",

        sections: [
            {
                title: "Power & Water",
                items: [
                    "2× 80L water tanks",
                    "120Ah lithium battery",
                    "Solar panel installed",
                    "Inverter for 240V appliances",
                ],
            },
            {
                title: "Comfort",
                items: [
                    "Pop-up living room table",
                    "Additional storage cupboards",
                    "Kitchen LED lighting",
                ],
            },
            {
                title: "Water and Power",
                items: [
                    " 80L water tank",
                    " 120Ah lithium battery",
                    " Bat Box: Includes a solar controller, battery box, and controller for optimal power management.",
                    " 2 USB ports, a cigarette lighter port, and cabin lighting.",
                ],
            },
            {
                title: "Safety and Traction",
                items: [
                    "  Coupling, traction ball, and safety chains for secure towing.",
                    " Leaf spring system with torsion suspension for a smooth ride",
                    "  Electric brake and hand brake.",
                    "15-inch aluminum alloy tires.",
                ],
            },
            {
                title: "More Features",
                items: [
                    "   Fridge: Keep your food and beverages cool and fresh during your travels.",
                    "  Lithium 120Ah Battery: Provides long-lasting power for all your electrical needs.",
                    " Double Stove: Cook delicious meals with ease on the efficient double stove.Bat Box: Includes a solar controller, battery box, and controller for optimal power management.",
                    "15-inch aluminum alloy tires.",
                    "Solar Panel Installed: Harness the power of the sun to keep your battery charged and ready.",
                    "Extra Double Window: Enjoy natural light and ventilation inside your trailer.",
                    "Inverter: Allows you to use standard plugs in the trailer even while off-road.",
                    "External Shower: Convenient cold-water shower for outdoor hygiene.",
                ],
            },
        ],
    },

    max: {
        title: "Breath Max",
        price: "From $39,000",
        hero: "/images/models/max.jpg",

        description:
            "Stand-up teardrop camper with a full bathroom, indoor table, and real living space in a compact towable footprint.",

        sections: [
            {
                title: "Power & Water",
                items: [
                    "2× 80L water tanks",
                    "120Ah lithium battery",
                    "Solar panel installed",
                    "Inverter for 240V appliances",
                ],
            },
            {
                title: "Comfort",
                items: [
                    "Pop-up living room table",
                    "Additional storage cupboards",
                    "Kitchen LED lighting",
                ],
            },
            {
                title: "Water and Power",
                items: [
                    " 80L water tank",
                    " 120Ah lithium battery",
                    " Bat Box: Includes a solar controller, battery box, and controller for optimal power management.",
                    " 2 USB ports, a cigarette lighter port, and cabin lighting.",
                ],
            },
            {
                title: "Safety and Traction",
                items: [
                    "  Coupling, traction ball, and safety chains for secure towing.",
                    " Leaf spring system with torsion suspension for a smooth ride",
                    "  Electric brake and hand brake.",
                    "15-inch aluminum alloy tires.",
                ],
            },
            {
                title: "More Features",
                items: [
                    "   Fridge: Keep your food and beverages cool and fresh during your travels.",
                    "  Lithium 120Ah Battery: Provides long-lasting power for all your electrical needs.",
                    " Double Stove: Cook delicious meals with ease on the efficient double stove.",
                    "Bat Box: Includes a solar controller, battery box, and controller for optimal power management.",
                    "15-inch aluminum alloy tires.",
                    "Solar Panel Installed: Harness the power of the sun to keep your battery charged and ready.",
                    "Extra Double Window: Enjoy natural light and ventilation inside your trailer.",
                    "Inverter: Allows you to use standard plugs in the trailer even while off-road.",
                    "External Shower: Convenient cold-water shower for outdoor hygiene.",
                ],
            },
        ],
    },
};

export { models, modelPages };
