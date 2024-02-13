import { SocketContext } from "@/contexts/SocketContext";
import { Send } from "lucide-react";
import { FormEvent, useContext, useEffect, useRef, useState } from "react";

interface IChatMessage {
    message: string;
    userName: string;
    roomId: string;
    time: string;
}


export default function Chat({ roomId }: { roomId: string }) {
    //usamos useRef no lugar do useState para inputs para evitar que fique renderizando a cada letra
    const currentMessage = useRef<HTMLInputElement>(null)
    const { socket } = useContext(SocketContext)

    const [chat, setChat] = useState<IChatMessage[]>([])

    useEffect(() => {
        socket?.on('chat', (data) => {
            console.log("🚀 ~ socket?.on ~ data:", data)
            setChat([...chat, data])
        })
    }, [socket])

    function sendMessage(e: FormEvent) {
        e.preventDefault()
        if (currentMessage.current && currentMessage.current?.value !== '') {
            const sendMsgToServer = {
                message: currentMessage.current?.value,
                userName: 'Ramon',
                roomId,
                time: new Date().toLocaleTimeString()
            }
            socket?.emit('chat', sendMsgToServer)
            setChat(prev => [...prev, sendMsgToServer])
            currentMessage.current.value = ''
        }
    }

    return (
        <div className="bg-gray-900 px-4 pt-4 md:w-[15%] rounded-md m-3 h-full hidden md:flex">
            <div className="relative h-full w-full">
                {
                    chat.map((chat, index) => (
                        <div className="bg-gray-950 rounded-sm p-2 mb-4" key={index}>
                            <div className="flex items-center text-blue-400 gap-2">
                                <span>{chat.userName}</span>
                                <span>{chat.time}</span>
                            </div>
                            <div className="mt-5">
                                <p className="text-sm">{chat.message}</p>
                            </div>
                        </div>
                    ))
                }


                <form action="" className="absolute bottom-2 w-full" onSubmit={sendMessage}>
                    <div className="relative flex">

                        <input type="text" name="" id="" ref={currentMessage} className='px-3 w-full py-2 rounded-md bg-gray-950' />
                        <button type="submit" >
                            <Send className="absolute right-2 top-2 cursor-pointer" />
                        </button>

                    </div>
                </form>
            </div>

        </div>
    )
}