import React from "react";

const StarRating = ({ rating = 5 }) => {
    return (
        <div className="flex gap-1 text-yellow-400">
            {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-lg">
                    {star <= rating ? "★" : "☆"}
                </span>
            ))}
        </div>
    );
};

export default StarRating;

