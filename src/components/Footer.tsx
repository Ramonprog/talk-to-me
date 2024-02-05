import { Camera, Mic, MonitorUp, Phone } from "lucide-react";

export default function Footer() {
    return (
        <div className="fixed bottom-0 bg-black py-2 w-full">
            <div className="grid grid-cols-3 items-center">
                <span>10:35</span>
                <div className="flex space-x-6 justify-center ">
                    <Mic className="h-12 w-16 p-2 bg-gray-950 rounded-md cursor-pointer" />
                    <Camera className="h-12 w-16 p-2 bg-gray-950 rounded-md cursor-pointer" />
                    <MonitorUp className="h-12 w-16 p-2 bg-gray-950 rounded-md cursor-pointer" />
                    <Phone className="h-12 w-16 p-2 bg-primary rounded-md cursor-pointer" />
                </div>
            </div>
        </div>
    )
}