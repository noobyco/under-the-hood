import { Separator } from "../ui/separator";
const LangMenuMobile = (props) => {
    const languages = [
        "Java", "C#", "C", "C++", "Carbon", "Rust", "Golang", "Zig", "Vlang", "Nim", 
        "Kotlin", "Swift", "Julia", "OCaml", "Python", "JavaScript", "Ruby"
    ];

    return (
            <div className={`transition w-[50%] top-[calc(7rem+1px)] overflow-auto absolute bottom-0 bg-[#212121] sm:hidden ${props.className}`} >
                <div className="text-stone-400 mt-4 mx-5">
                    <button className="text-white font-bold hover:text-yellow-400" onClick={() => props.setLangSelectedState("default")}>What is uth?</button>
                    <Separator className="my-5" />
                    <h1 className="my-2 font-bold text-white">Languages</h1>
    
                    {props.contents.map((content, index) => (
                        <>
                        {
                            content.frontmatter.title === "default" ? null :
                            <div key={index} className="flex items-center justify-between my-3">
                                <button  onClick={() => props.setLangSelectedState(content.frontmatter.title)} className="hover:text-white cursor-pointer font-semibold block">{content.frontmatter.title}</button>
                                {
                                    content.frontmatter.status && <p className="text-black bg-green-500 px-1.5 rounded-sm">{content.frontmatter.status}</p>
                                }
                            </div>
                        }
                        </>
                    ))}
                </div>
            </div>
       
        );
};

export default LangMenuMobile;
