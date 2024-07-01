import { FaGithub } from "react-icons/fa";
import { Separator } from "@/components/ui/separator"

const NavBar = () => {
    return (
        <div>
            <div className="h-[5rem] flex justify-between items-center">
                <a href="/">
                    <div className="flex items-center gap-4 ml-10 hover:opacity-45">
                        <img src="/banana.png" width="40px"></img>
                        <h1 className="text-white text-xl">under-the-hood</h1>
                    </div>
                </a>
                <a href="https://github.com/noobyco">
                    <FaGithub className="text-white hover:text-yellow-400 text-3xl mr-10" />
                </a>
            </div>
            <Separator />
        </div>
    );
}

export default NavBar;
