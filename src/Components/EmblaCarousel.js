"use client";

import React, { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { NextButton, PrevButton, usePrevNextButtons } from "./EmblaCarouselArrowButtons";

const TWEEN_FACTOR_BASE = 0.2;

const EmblaCarousel = ({ slides, options }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const tweenFactor = useRef(0);
    const tweenNodes = useRef([]);

    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

    const setTweenNodes = useCallback((api) => {
        tweenNodes.current = api.slideNodes().map((slideNode) => slideNode.querySelector(".embla__parallax__layer"));
    }, []);

    const setTweenFactor = useCallback((api) => {
        tweenFactor.current = TWEEN_FACTOR_BASE * api.scrollSnapList().length;
    }, []);

    const tweenParallax = useCallback((api, eventName) => {
        const engine = api.internalEngine();
        const scrollProgress = api.scrollProgress();
        const slidesInView = api.slidesInView();
        const isScrollEvent = eventName === "scroll";

        api.scrollSnapList().forEach((scrollSnap, snapIndex) => {
            let diffToTarget = scrollSnap - scrollProgress;
            const slidesInSnap = engine.slideRegistry[snapIndex];

            slidesInSnap.forEach((slideIndex) => {
                if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

                if (engine.options.loop) {
                    engine.slideLooper.loopPoints.forEach((loopItem) => {
                        const target = loopItem.target();
                        if (slideIndex === loopItem.index && target !== 0) {
                            const sign = Math.sign(target);
                            if (sign === -1) {
                                diffToTarget = scrollSnap - (1 + scrollProgress);
                            }
                            if (sign === 1) {
                                diffToTarget = scrollSnap + (1 - scrollProgress);
                            }
                        }
                    });
                }

                const translate = diffToTarget * -1 * tweenFactor.current * 100;
                const tweenNode = tweenNodes.current[slideIndex];
                tweenNode.style.transform = `translateX(${translate}%)`;
            });
        });
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        setTweenNodes(emblaApi);
        setTweenFactor(emblaApi);
        tweenParallax(emblaApi);

        emblaApi.on("reInit", setTweenNodes).on("reInit", setTweenFactor).on("reInit", tweenParallax).on("scroll", tweenParallax).on("slideFocus", tweenParallax);
    }, [emblaApi, setTweenNodes, setTweenFactor, tweenParallax]);

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((element, i) => (
                        <div className="embla__slide" key={i}>
                            <div className="embla__parallax">
                                <div className="embla__parallax__layer">{element}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
            </div>
        </div>
    );
};

export default EmblaCarousel;
