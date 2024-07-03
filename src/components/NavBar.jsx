import { FaGithub } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { Separator } from "@/components/ui/separator";
import { RiMenu3Fill } from "react-icons/ri";

const NavBar = () => {
    return (
        <>
            <div className="h-[5rem] flex justify-between items-center">
                <a href="/">
                    <div className="flex items-center gap-4 ml-5 sm:ml-10 hover:opacity-45">
                        <img src="/banana.png" width="40px" alt="Logo" />
                        <h1 className="text-white text-xl">under-the-hood</h1>
                    </div>
                </a>
                <div className="sm:flex sm:gap-4">
                    <RiMenu3Fill className="text-white hover:text-yellow-400 text-3xl sm:hidden mr-5 sm:mr-10" />
                    <a href="https://x.com/noobyco" className="hidden sm:block">
                        <RiTwitterXLine className="text-white hover:text-yellow-400 text-3xl" />
                    </a>
                    <a href="https://github.com/noobyco/under-the-hood" className="hidden sm:block">
                        <FaGithub className="text-white hover:text-yellow-400 text-3xl mr-10" />
                    </a>
                </div>
            </div>
            <Separator />
        </>
    );
};

export default NavBar;