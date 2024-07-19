import { Separator } from "../ui/separator";

const LangMenuLargeScreen = ({setLangSelectedState, contents}) => {
    return (
        <div className="w-[30%] overflow-y-scroll scrollbar-gray-700 hidden sm:block sm:w-[40%] lg:w-[30%]">
            <div className="mt-4 w-[80%] m-auto">
                <button className="text-white font-bold hover:text-yellow-400" onClick={() => setLangSelectedState("default")}>What is uth?</button>

                <Separator className="my-5" />
                <h1 className="font-bold text-white">Languages</h1>

                {contents.map((content) => (
                        <>
                            {
                                content.frontmatter.title === "default" ? null :
                                (
                                    
                                    <div className="flex items-center justify-between"  key={content.frontmatter.title}>
                                        <button
                                            onClick={() => setLangSelectedState(content.frontmatter.title)}
                                            className="hover:text-white cursor-pointer font-semibold block text-stone-400 my-2">
                                        {content.frontmatter.title}
                                        </button>
                                        {
                                            content.frontmatter.status && <p className="text-black bg-green-500 px-1.5 rounded-sm">{content.frontmatter.status}</p>
                                        }
                                    </div>     
                                )
                            }
                        </>     
                    ))}
            </div>
        </div>
    );
}

export default LangMenuLargeScreen;
