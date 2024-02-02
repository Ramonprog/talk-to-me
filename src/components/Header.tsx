import Image from "next/image";

export default function Header() {
    return (
        <>
            <div className="flex justify-between bg-gray-1000 p-4">
                <Image
                    alt="Talk to me"
                    src='/logo.svg'
                    width={110}
                    height={110}
                />
                <Image
                    alt="hero"
                    src='/hero.svg'
                    width={50}
                    height={50}
                />
            </div>
        </>
    )
}