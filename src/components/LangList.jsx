import { Separator } from "@/components/ui/separator"

const LangList = () => {
    return (
        <div className="h-screen w-[20%] overflow-auto">
            <div className="ml-10 text-stone-400 mr-10">
                <h1 className="my-2 font-bold">Languages</h1>
                <Separator className="mb-2 h-[0.1px]" />
                <h1 className="hover:text-white cursor-pointer font-semibold">Java</h1>
                <h1 className="hover:text-white cursor-pointer font-semibold">C#</h1>
                <h1 className="hover:text-white cursor-pointer font-semibold">C</h1>
                <h1 className="hover:text-white cursor-pointer font-semibold">C++</h1>
                <h1 className="hover:text-white cursor-pointer font-semibold">Carbon</h1>
                <h1 className="hover:text-white cursor-pointer font-semibold">Rust</h1>
                <h1 className="hover:text-white cursor-pointer font-semibold">Golang</h1>
                <h1 className="hover:text-white cursor-pointer font-semibold">Zig</h1>
                <h1 className="hover:text-white cursor-pointer font-semibold">Vlang</h1>
                <h1 className="hover:text-white cursor-pointer font-semibold">Nim</h1>
                <h1 className="hover:text-white cursor-pointer font-semibold">Kotlin</h1>
                <h1 className="hover:text-white cursor-pointer font-semibold">Swift</h1>
                <h1 className="hover:text-white cursor-pointer font-semibold">Julia</h1>
                <h1 className="hover:text-white cursor-pointer font-semibold">OCaml</h1>
                <h1 className="hover:text-white cursor-pointer font-semibold">Python</h1>
                <h1 className="hover:text-white cursor-pointer font-semibold">JavaScript</h1>
                <h1 className="hover:text-white cursor-pointer font-semibold">Ruby</h1>  
            </div>
        </div>
    );
}

export default LangList;
