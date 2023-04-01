import React, {useEffect, useMemo} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./review.scss";
import {ReactComponent as Star} from "../assets/full_star.svg";
import {ReactComponent as HalfStar} from "../assets/half_star.svg";

type ReviewProps = {
    review: string;
    // We only get the best rating
    star: 4 | 4.5 | 5;
    image: string;
    name: string;

    direction: "left" | "right";
};

const Review = ({review, star, image, direction, name}: ReviewProps) => {
    useEffect(() => {
        AOS.init();
    }, []);

    const stars = useMemo(() => {
        if (star % 1 !== 0) {
            return [...Array(star - 0.5).fill(<Star/>), <HalfStar/>];
        }

        return Array(star).fill(<Star/>);
    }, [star]);

    return (
        <div className={`review ${direction}`} data-aos={`fade-${direction}`}>
            <p>{review}</p>
            <img src={image} alt={""}/>
            <span>{name}</span>
            <div className="stars">{stars}</div>
        </div>
    );
};

export default Review;
