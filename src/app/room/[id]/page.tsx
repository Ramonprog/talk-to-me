import Chat from "@/components/Chat";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Room({ params }: { params: { id: string } }) {
    return (
        <div className="h-screen">
            <Header />
            <div className="flex h-[80%]">
                <div className="w-[80%]">
                    <h1>Room</h1>
                </div>
                <Chat />
            </div>

            <Footer />
        </div>
    )
}