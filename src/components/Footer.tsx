'use client'
import { Camera, CameraOff, Mic, MicOff, MonitorOff, MonitorUp, Phone } from "lucide-react";
import Container from "./Container";
import { useState } from "react";

export default function Footer() {

    const [isMuted, setIsMuted] = useState(false)
    const [isCameraOff, setIsCameraOff] = useState(false)
    const [isScreenSharing, setIsScreenSharing] = useState(false)

    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')

    return (
        <div className="fixed bottom-0 bg-black py-2 w-full">
            <Container>
                <div className="grid grid-cols-3 items-center">
                    <span>{hours}:{minutes}</span>
                    <div className="flex space-x-6 justify-center ">
                        {!isMuted ?
                            <Mic onClick={() => setIsMuted(!isMuted)}
                                className="h-12 w-16 p-2 bg-gray-950 rounded-md cursor-pointer" />
                            :
                            <MicOff onClick={() => setIsMuted(!isMuted)}
                                className="h-12 w-16 p-2 bg-red-500 rounded-md cursor-pointer" />
                        }

                        {!isCameraOff ? <Camera onClick={() => setIsCameraOff(!isCameraOff)}
                            className="h-12 w-16 p-2 bg-gray-950 rounded-md cursor-pointer" />
                            :
                            <CameraOff onClick={() => setIsCameraOff(!isCameraOff)}
                                className="h-12 w-16 p-2 bg-red-500 rounded-md cursor-pointer" />
                        }

                        {!isScreenSharing ? <MonitorUp onClick={() => setIsScreenSharing(!isScreenSharing)}
                            className="h-12 w-16 p-2 bg-gray-950 rounded-md cursor-pointer" />
                            :
                            <MonitorOff onClick={() => setIsScreenSharing(!isScreenSharing)}
                                className="h-12 w-16 p-2 bg-red-500 rounded-md cursor-pointer" />
                        }

                        <Phone className="h-12 w-16 p-2 bg-primary hover:bg-red-500 rounded-md cursor-pointer" />
                    </div>
                </div>
            </Container>
        </div>
    )
}