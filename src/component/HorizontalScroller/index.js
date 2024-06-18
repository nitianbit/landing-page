

import "./styles.css";

import { useState, useRef } from "react";
import gsap from "gsap";


export default function HorizontalScroller() {
    let scrl = useRef(null);
    const [scrollX, setscrollX] = useState(0);
    const [scrolEnd, setscrolEnd] = useState(false);

    //Slide click
    const slide = (shift) => {
        scrl.current.scrollLeft += shift;
        setscrollX(scrollX + shift);

        if (
            Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
            scrl.current.offsetWidth
        ) {
            setscrolEnd(true);
        } else {
            setscrolEnd(false);
        }
    };

    //Anim
    const anim = (e) => {
        gsap.from(e.target, { scale: 1 });
        gsap.to(e.target, { scale: 1.5 });
    };
    const anim2 = (e) => {
        gsap.from(e.target, { scale: 1.5 });
        gsap.to(e.target, { scale: 1 });
    };

    const scrollCheck = () => {
        setscrollX(scrl.current.scrollLeft);
        if (
            Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
            scrl.current.offsetWidth
        ) {
            setscrolEnd(true);
        } else {
            setscrolEnd(false);
        }
    };

    return (
        <div className="scroller mx-5 d-flex flex-row justify-content-center align-items-center">
            {scrollX !== 0 && (
                <button
                    className="prev bg-light p-3 border-0"
                    onClick={() => slide(-50)}
                    onMouseEnter={(e) => anim(e)}
                    onMouseLeave={(e) => anim2(e)}
                >
                    {'<'}
                </button>
            )}
            <ul ref={scrl} onScroll={scrollCheck}>
                {Array.from({ length: 10 }).map((d, i) => (
                    <li>
                        <div className="card col-6" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h5 className="card-title">Card title1</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            {!scrolEnd && (
                <button
                    className="next bg-light p-3  border-0"
                    onClick={() => slide(+50)}
                    onMouseEnter={(e) => anim(e)}
                    onMouseLeave={(e) => anim2(e)}
                >
                    {'>'}
                </button>
            )}
        </div>
    );
}
