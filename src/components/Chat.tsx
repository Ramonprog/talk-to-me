import { SocketContext } from "@/contexts/SocketContext";
import { Send } from "lucide-react";
import { FormEvent, useContext, useEffect, useRef } from "react";

export default function Chat({ roomId }: { roomId: string }) {
    //usamos useRef no lugar do useState para inputs para evitar que fique renderizando a cada letra
    const currentMessage = useRef<HTMLInputElement>(null)
    const { socket } = useContext(SocketContext)

    useEffect(() => {
        socket?.on('chat', (data) => {
            console.log("🚀 ~ socket?.on ~ data:", data)

        })
    }, [socket])

    function sendMessage(e: FormEvent) {
        e.preventDefault()
        if (currentMessage.current?.value !== '') {
            const sendMsgToServer = {
                message: currentMessage.current?.value,
                userName: 'Ramon',
                roomId,
                time: new Date().toLocaleTimeString()
            }
            socket?.emit('chat', sendMsgToServer)

            currentMessage.current.value = ''
        }
    }

    return (
        <div className="bg-gray-900 px-4 pt-4 md:w-[15%] rounded-md m-3 h-full hidden md:flex">
            <div className="relative h-full w-full">
                <div className="bg-gray-950 rounded-sm p-2">
                    <div className="flex items-center text-blue-400 gap-2">
                        <span>Alisson Ramon</span>
                        <span>19:15</span>

                    </div>
                    <div className="mt-5">
                        <p className="text-sm">text</p>
                    </div>
                </div>

                <form action="" className="absolute bottom-2 w-full" onSubmit={sendMessage}>
                    <div className="relative flex">

                        <input type="text" name="" id="" ref={currentMessage} className='px-3 w-full py-2 rounded-md bg-gray-950' />
                        <Send className="absolute right-2 top-2 cursor-pointer" />
                    </div>
                </form>
            </div>

        </div>
    )
}