'use client'
import Chat from "@/components/Chat";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { SocketContext } from "@/contexts/SocketContext";
import { useContext, useEffect, useRef } from "react";

export default function Room({ params }: { params: { id: string } }) {
    const { socket } = useContext(SocketContext)
    const localStrem = useRef<HTMLVideoElement>(null)
    const peerConections = useRef<Record<string, RTCPeerConnection>>({})

    useEffect(() => {
        socket?.on('connect', async () => {
            socket?.emit('subscribe', {
                roomId: params.id,
                socketId: socket.id,
            });
            await initCamera()
        })

        socket?.on('new user', (data) => {
            createPeerConnection(data.socketId)
            socket.emit('newUserStart', {
                to: data.socketId,
                sender: socket.id
            })
        })

        socket?.on('newUserStart', (data) => {
            console.log('usuário conectado na sala', data)
        })
    }, [socket, params.id])

    const createPeerConnection = (socketId: string) => {
        const config = {
            iceServers: [
                {
                    urls: 'stun:stun.l.google.com:19302'
                }
            ]
        }

        const peer = new RTCPeerConnection(config)
        //na posição desse id ele recebe a peer que é a conexão rtc
        peerConections.current[socketId] = peer
    }

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
                            <video autoPlay playsInline ref={localStrem} className="h-full w-full mirror-mode"></video>
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