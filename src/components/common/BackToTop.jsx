import { useEffect, useState } from "react";
import { BackTop } from "./Icons";
const BackToTop = () => {
  const [isBackToTopVisible, setIsBackToTopVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsBackToTopVisible(true);
      } else {
        setIsBackToTopVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {isBackToTopVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-6 sm:w-[54px] sm:h-[54px] w-[48px] h-[48px] border border-dark-blue shadow-accountCard animate-bounce bg-white text-white flex justify-center items-center rounded-full z-50 transition-all duration-300 ease-linear"
        >
          <BackTop className="rotate-45" />
        </button>
      )}
    </>
  );
};
export default BackToTop;
