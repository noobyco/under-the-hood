import { Separator } from "../ui/separator";
const LangMenuMobile = ({setLangSelectedState, className}) => {
    const languages = [
        "Java", "C#", "C", "C++", "Carbon", "Rust", "Golang", "Zig", "Vlang", "Nim", 
        "Kotlin", "Swift", "Julia", "OCaml", "Python", "JavaScript", "Ruby"
    ];

    return (
            <div className={`transition w-[40%] top-[calc(7rem+2px)] overflow-auto absolute bottom-0 bg-[#212121] sm:hidden ${className}`} >
                <div className="ml-10 text-stone-400 mr-10 mt-4">
                    <button className="text-white font-bold hover:text-yellow-400" onClick={() => setLangSelectedState("default")}>Overview</button>
                    <Separator className="my-5" />
                    <h1 className="my-2 font-bold text-white">Languages</h1>
    
                    {languages.map((lang, index) => (
                        <button key={index} onClick={() => setLangSelectedState(lang)} className="hover:text-white cursor-pointer font-semibold block">{lang}</button>
                    ))}
                </div>
            </div>
       
        );
};

export default LangMenuMobile;
