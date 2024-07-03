const DocxContent = ({langSelectedState, contents}) => {
    return (
        <div className="w-full mt-10 overflow-auto">
                    <div className="w-[90%] sm:w-[80%] m-auto">
                        {contents.map((language) => {
                            if (language.frontmatter.title === langSelectedState.toLowerCase()) {
                                return (
                                    <div key={language.frontmatter.title}>
                                        <h1 className="text-yellow-400 text-2xl mb-10 text-center">{language.frontmatter.head}</h1>
                                        {
                                            language.frontmatter.title == "default" && <h1 className="text-2xl text-white mb-4">What is Under the hood?</h1>
                                        }
                                        {
                                            language.frontmatter.desc && <p className="text-white text-xl">{language.frontmatter.desc}</p>
                                        }
                                        <img src={language.frontmatter.map} width="1000px"></img>
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
