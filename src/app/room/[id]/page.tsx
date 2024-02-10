import Chat from "@/components/Chat";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Room({ params }: { params: { id: string } }) {
    return (
        <div className="h-screen">
            <Header />
            <div className="flex h-[80%]">
                <div className="md:w-[85%] w-full m-3 ">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
                        <div className="bg-gray-950 h-full rounded-md w-full p-2  relative">
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
                        <div className="bg-gray-950 h-full rounded-md p-2  w-full relative">
                            <video></video>
                            <span className="absolute bottom-2">Alisson Ramon</span>
                        </div>
                    </div>

                </div>
                <Chat />
            </div>

            <Footer />
        </div>
    )
}