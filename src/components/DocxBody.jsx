import { useState } from "react";
import LangMenuBurgerBox from "@/components/DocxChildrens/LangMenuBurgerBox";
import LangMenuMobile from "@/components/DocxChildrens/LangMenuMobile";
import LangMenuLargeScreen from "@/components/DocxChildrens/LangMenuLargeScreen";
import DocxContent from "@/components/DocxChildrens/DocxContent";
import { Separator } from "./ui/separator";

const DocxBody = (props) => {
    const [langMenuState, setLangMenuState] = useState(false);
    const [langSelectedState, setLangSelectedState] = useState("default");

    return (
        <div>
            <LangMenuBurgerBox isOpen={langMenuState} onClick={() => setLangMenuState((prevToggle) => !prevToggle)} client:load />
            {
            langMenuState ? <LangMenuMobile client:load setLangSelectedState={setLangSelectedState} contents={props.contents} /> : <LangMenuMobile client:load setLangSelectedState={setLangSelectedState} className="-translate-x-96" contents={props.contents} />
            }
            <div className="flex h-[calc(100vh-7rem-2px)] sm:h-[calc(100vh-5rem-1px)] w-screen">
                <LangMenuLargeScreen setLangSelectedState={setLangSelectedState} contents={props.contents} client:load />
                <DocxContent langSelectedState={langSelectedState} contents={props.contents} />
            </div>
        </div>
    );
}

export default DocxBody;
