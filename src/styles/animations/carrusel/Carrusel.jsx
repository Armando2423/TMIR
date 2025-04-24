import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
// icons
import { FaBrain, FaTools } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { MdOutlineError, MdOutlineTimelapse  } from "react-icons/md";

import { useLanguage } from "../../../configuration/languages/GlobalLanguages";

import "./Carrusel.css";

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

export default function Carousel({
    items,
    baseWidth = 300,
    autoplay = false,
    autoplayDelay = 3000,
    pauseOnHover = false,
    loop = false,
    round = false,
}) {
    const { texts } = useLanguage(); // ✅ Hook llamado dentro del componente

    const DEFAULT_ITEMS = [
        {
            title: texts.skills.skill_1.title,
            description: texts.skills.skill_1.skill_txt,
            id: 1,
            icon: <FaBrain className="carousel-icon" />,
        },
        {
            title: texts.skills.skill_2.title,
            description: texts.skills.skill_2.skill_txt,
            id: 2,
            icon: <FaTools className="carousel-icon" />,
        },
        {
            title: texts.skills.skill_3.title,
            description: texts.skills.skill_3.skill_txt,
            id: 3,
            icon: <RiTeamFill className="carousel-icon" />,
        },
        {
            title: texts.skills.skill_4.title,
            description: texts.skills.skill_4.skill_txt,
            id: 4,
            icon: <MdOutlineError className="carousel-icon" />,
        },
        {
            title:texts.skills.skill_5.title,
            description: texts.skills.skill_5.skill_txt,
            id: 5,
            icon: <MdOutlineTimelapse className="carousel-icon" />,
        },
    ];

    const containerPadding = 16;
    const itemWidth = baseWidth - containerPadding * 2;
    const trackItemOffset = itemWidth + GAP;

    const carouselItems = loop ? [...(items || DEFAULT_ITEMS), (items || DEFAULT_ITEMS)[0]] : (items || DEFAULT_ITEMS);
    const [currentIndex, setCurrentIndex] = useState(0);
    const x = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isResetting, setIsResetting] = useState(false);

    const containerRef = useRef(null);

    useEffect(() => {
        if (pauseOnHover && containerRef.current) {
            const container = containerRef.current;
            const handleMouseEnter = () => setIsHovered(true);
            const handleMouseLeave = () => setIsHovered(false);
            container.addEventListener("mouseenter", handleMouseEnter);
            container.addEventListener("mouseleave", handleMouseLeave);
            return () => {
                container.removeEventListener("mouseenter", handleMouseEnter);
                container.removeEventListener("mouseleave", handleMouseLeave);
            };
        }
    }, [pauseOnHover]);

    useEffect(() => {
        if (autoplay && (!pauseOnHover || !isHovered)) {
            const timer = setInterval(() => {
                setCurrentIndex((prev) => {
                    if (prev === carouselItems.length - 1 && loop) {
                        return prev + 1;
                    }
                    if (prev === carouselItems.length - 1) {
                        return loop ? 0 : prev;
                    }
                    return prev + 1;
                });
            }, autoplayDelay);
            return () => clearInterval(timer);
        }
    }, [autoplay, autoplayDelay, isHovered, loop, pauseOnHover, carouselItems.length]);

    const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

    const handleAnimationComplete = () => {
        if (loop && currentIndex === carouselItems.length - 1) {
            setIsResetting(true);
            x.set(0);
            setCurrentIndex(0);
            setTimeout(() => setIsResetting(false), 50);
        }
    };

    const handleDragEnd = (_, info) => {
        const offset = info.offset.x;
        const velocity = info.velocity.x;
        if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
            if (loop && currentIndex === carouselItems.length - 1) {
                setCurrentIndex(currentIndex + 1);
            } else {
                setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
            }
        } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
            if (loop && currentIndex === 0) {
                setCurrentIndex(carouselItems.length - 2);
            } else {
                setCurrentIndex((prev) => Math.max(prev - 1, 0));
            }
        }
    };

    const dragProps = loop
        ? {}
        : {
              dragConstraints: {
                  left: -trackItemOffset * (carouselItems.length - 1),
                  right: 0,
              },
          };

    return (
        <div className="container-main-c">
            <div
                ref={containerRef}
                className={`carousel-container ${round ? "round" : ""}`}
                style={{
                    width: `${baseWidth}px`,
                    ...(round && { height: `${baseWidth}px`, borderRadius: "50%" }),
                }}
            >
                <motion.div
                    className="carousel-track"
                    drag="x"
                    {...dragProps}
                    style={{
                        width: itemWidth,
                        gap: `${GAP}px`,
                        perspective: 1000,
                        perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
                        x,
                    }}
                    onDragEnd={handleDragEnd}
                    animate={{ x: -(currentIndex * trackItemOffset) }}
                    transition={effectiveTransition}
                    onAnimationComplete={handleAnimationComplete}
                >
                    {carouselItems.map((item, index) => {
                        const range = [
                            -(index + 1) * trackItemOffset,
                            -index * trackItemOffset,
                            -(index - 1) * trackItemOffset,
                        ];
                        const outputRange = [90, 0, -90];
                        const rotateY = useTransform(x, range, outputRange, { clamp: false });

                        return (
                            <motion.div
                                key={index}
                                className={`carousel-item ${round ? "round" : ""}`}
                                style={{
                                    width: itemWidth,
                                    height: round ? itemWidth : "100%",
                                    rotateY: rotateY,
                                    ...(round && { borderRadius: "50%" }),
                                }}
                                transition={effectiveTransition}
                            >
                                <div className={`carousel-item-header ${round ? "round" : ""}`}>
                                    <span className="carousel-icon-container">{item.icon}</span>
                                </div>
                                <div className="carousel-item-content">
                                    <div className="carousel-item-title">{item.title}</div>
                                    <p className="carousel-item-description">{item.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <div className={`carousel-indicators-container ${round ? "round" : ""}`}>
                    <div className="carousel-indicators">
                        {(items || DEFAULT_ITEMS).map((_, index) => (
                            <motion.div
                                key={index}
                                className={`carousel-indicator ${
                                    currentIndex % (items?.length || DEFAULT_ITEMS.length) === index
                                        ? "active"
                                        : "inactive"
                                }`}
                                animate={{
                                    scale:
                                        currentIndex % (items?.length || DEFAULT_ITEMS.length) === index
                                            ? 1.2
                                            : 1,
                                }}
                                onClick={() => setCurrentIndex(index)}
                                transition={{ duration: 0.15 }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
