import { useState, useEffect } from "react";
import { Separator } from "../ui/separator";


const LangMenuLargeScreen = ({setLangSelectedState}) => {
    const languages = [
        "Java", "C#", "C", "C++", "Carbon", "Rust", "Golang", "Zig",
        "Vlang", "Nim", "Kotlin", "Swift", "Julia", "OCaml", "Python", "JavaScript", "Ruby"
    ];


    return (
        <div className="w-[30%] overflow-y-scroll scrollbar-gray-700 hidden sm:block sm:w-[40%] lg:w-[30%]">
            <div className="mt-4 w-[80%] m-auto">
                <button className="text-white font-bold hover:text-yellow-400" onClick={() => setLangSelectedState("default")}>Overview</button>

                <Separator className="my-5" />
                <h1 className="font-bold text-white">Languages</h1>

                {languages.map((language) => {
                    return (
                            <button
                            key={language}
                            onClick={() => setLangSelectedState(language)}
                            className="hover:text-white cursor-pointer font-semibold block text-stone-400 my-3">
                                {language}
                            </button>
                        )
                    }
                )}
            </div>
        </div>
    );
}

export default LangMenuLargeScreen;
