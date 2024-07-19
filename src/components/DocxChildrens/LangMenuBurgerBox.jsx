import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";

const LangMenuBurgerBox = ({ isOpen, onClick }) => {
    return (
        
            <div onClick={onClick} className="cursor-pointer w-fit sm:hidden h-[2rem] shadow-2xl">
                {isOpen ? (
                    <RxCross1 className="text-white hover:text-yellow-400 text-3xl ml-5 z-[20]" />
                ) : (
                    <HiOutlineMenuAlt2 size={30} className="text-white hover:text-yellow-400 ml-5 z-[20]" />
                )}
            </div>
    );
}

export default LangMenuBurgerBox;
