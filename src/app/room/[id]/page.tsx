'use client'
import Chat from "@/components/Chat";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { SocketContext } from "@/contexts/SocketContext";
import { useContext, useEffect, useRef } from "react";

export default function Room({ params }: { params: { id: string } }) {
    const { socket } = useContext(SocketContext)
    const localStrem = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        socket?.on('connect', async () => {
            console.log('connected')
            socket?.emit('subscribe', {
                roomId: params.id,
                socketId: socket.id,
            });
            await initCamera()
        })
    }, [socket, params.id])

    const initCamera = async () => {
        const video = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: {
                noiseSuppression: true,
                echoCancellation: true
            }
        })
        if (localStrem.current) localStrem.current.srcObject = video

    }


    return (
        <div className="h-screen">
            <Header />
            <div className="flex h-[80%]">
                <div className="md:w-[85%] w-full m-3 ">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
                        <div className="bg-gray-950 h-full rounded-md w-full p-2  relative">
                            <video autoPlay playsInline ref={localStrem}></video>
                            <span className="absolute bottom-2">Alisson Ramon</span>
                        </div>
                        <div className="bg-gray-950 h-full rounded-md p-2  w-full relative">
                            <video></video>
                            <span className="absolute bottom-2">Alisson Ramon</span>
                        </div>
                        <div className="bg-gray-950 h-full rounded-md p-2  w-full relative">
                            <video></video>
                            <span className="absolute bottom-2">Alisson Ramon</span>
                        </div>
                        <div className="bg-gray-950 h-full rounded-md p-2  w-full relative">
                            <video></video>
                            <span className="absolute bottom-2">Alisson Ramon</span>
                        </div>
                    </div>

                </div>
                <Chat roomId={params.id} />
            </div>

            <Footer />
        </div>
    )
}