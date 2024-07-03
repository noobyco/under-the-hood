import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { Separator } from "../ui/separator";

const LangMenuBurgerBox = ({ isOpen, onClick }) => {
    return (
        <div>
            <div onClick={onClick} className="cursor-pointer w-fit sm:hidden h-[2rem]">
                {isOpen ? (
                    <RxCross1 className="text-white hover:text-yellow-400 text-3xl ml-5 z-[20]" />
                ) : (
                    <HiOutlineMenuAlt2 size={30} className="text-white hover:text-yellow-400 ml-5 z-[20]" />
                )}
            </div>
            <Separator className="sm:hidden text-[0.1px]" />
        </div>
    );
}

export default LangMenuBurgerBox;
