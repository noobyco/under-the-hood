import { FaGithub } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { Separator } from "@/components/ui/separator";
import { RiMenu3Fill } from "react-icons/ri";
import { useState } from "react";

const NavBar = () => {
    const [menuState, setMenuState] = useState(false);
    return (
        <>
            <div className="h-[5rem] flex justify-between items-center">
                <a href="/">
                    <div className="flex items-center gap-4 ml-5 sm:ml-10 hover:opacity-45">
                        <img src="/banana.png" width="40px" alt="Logo" />
                        <h1 className="text-white text-xl">Under The Hood</h1>
                    </div>
                </a>
                <div className="sm:flex sm:gap-4">
                    <button className="" onClick={()=> setMenuState(previousState => !previousState)}>
                        <RiMenu3Fill className="text-white hover:text-yellow-400 text-3xl sm:hidden mr-5 sm:mr-10" />
                    </button>
                    {
                        menuState ? (
                            <div className="transition ease-in-out delay-150 absolute bottom-0 left-0 right-0 flex flex-col gap-4 bg-yellow-400 p-4 rounded-tl-md rounded-tr-md shadow-lg">
                                <a href="https://x.com/noobyco" className="text-black font-bold text-center">Twitter</a>
                                <a href="https://github.com/noobyco/under-the-hood" className="text-black font-bold text-center">Codebase</a>
                            </div>
                        ) : (
                            <div className="translate-y-96 ease-in-out delay-150 transition absolute bottom-0 left-0 right-0 flex flex-col gap-4 bg-yellow-400 p-4 rounded-tl-md rounded-tr-md shadow-lg sm:hidden">
                                <a href="https://x.com/noobyco" className="text-black font-bold text-center">Twitter</a>
                                <a href="https://github.com/noobyco/under-the-hood" className="text-black font-bold text-center">Codebase</a>
                            </div>
                        )
                    }
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