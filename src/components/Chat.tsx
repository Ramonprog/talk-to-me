import { Send } from "lucide-react";

export default function Chat() {
    return (
        <div className=" bg-gray-900 px-4 pt-4 w-[20%] rounded-md m-3 h-full">
            <div className="relative h-full">
                <div className="bg-gray-950 rounded-sm p-2">
                    <div className="flex items-center text-blue-400 gap-2">
                        <span>Alisson Ramon</span>
                        <span>19:15</span>

                    </div>
                    <div className="mt-5">
                        <p className="text-sm">text</p>
                    </div>
                </div>

                <form action="" className="absolute bottom-2 w-full">
                    <div className="relative flex">

                        <input type="text" name="" id="" className='px-3 w-full py-2 rounded-md bg-gray-950' />
                        <Send className="absolute right-2 top-2 cursor-pointer" />
                    </div>
                </form>
            </div>

        </div>
    )
}