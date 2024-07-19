import { IoIosArrowForward } from "react-icons/io";

const DocxContent = ({ langSelectedState, contents }) => {
    return (
        <div className="w-full overflow-auto bg-gray-900 p-4">
            <div className="max-w-5xl mx-auto">
                {contents.map((language) => {
                    if (language.frontmatter.title.toLowerCase() === langSelectedState.toLowerCase()) {
                        return (
                            <div key={language.frontmatter.title} className="bg-gray-800 p-6 rounded-lg shadow-lg mb-10">
                                <h1 className="text-yellow-400 text-3xl mb-6 text-center font-bold">{language.frontmatter.head}</h1>
                            
                                {language.frontmatter.desc && (
                                    <p className="text-white text-lg leading-relaxed text-center mb-6">{language.frontmatter.desc}</p>
                                )}

                                {
                                  language.frontmatter.comingSoonFlag == "true" ? (
                                    <div className="flex justify-center">
                                        <img src="coming-soon.png" alt="Map" className="max-w-full h-auto" />
                                    </div>
                                ): (
                                    <div className="flex justify-center">
                                        <img src={language.frontmatter.map} alt="Map" className="max-w-full h-auto" />
                                    </div>
                                )
                                }
                                
                                {
                                    language.frontmatter.blog && (
                                        <div className="bg-gray-900 p-6 rounded-lg shadow-2xl mt-8 lg:flex lg:justify-between space-y-4 lg:space-y-0">
                                            <p className="text-white font-bold text-center text-wrap text-[12px] md:text-[15px] lg:text-lg">{language.frontmatter.blog}</p>
                                            <a className="flex space-x-2 items-center justify-center cursor-pointer lg:hover:translate-x-4 lg:transition" href={language.frontmatter.blog} target="_blank">
                                                <h1 className="uppercase bg-yellow-400 lg:bg-transparent lg:p-0 p-1.5 rounded-md lg:rounded-none lg:text-white text-[#212121] font-bold lg:hover:text-yellow-400">Blogpost</h1>
                                                <IoIosArrowForward size={20} className="text-white hidden lg:block"/>
                                            </a>

                                        </div>
                                    )
                                }

                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
}

export default DocxContent;
