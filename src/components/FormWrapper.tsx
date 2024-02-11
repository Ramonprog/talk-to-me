'use client'
import { useRef, useState } from "react";
import Button from "./Button";
import Container from "./Container";
import { Input } from "./Input";

export default function FormWapper() {
    const [selectRoom, setSelectRoom] = useState<'join' | 'create'>('join')

    const handleSelectRoom = (room: 'join' | 'create') => {
        setSelectRoom(room)
    }

    const nameJoin = useRef<HTMLInputElement>(null)
    const nameCreate = useRef<HTMLInputElement>(null)
    const idRoom = useRef<HTMLInputElement>(null)

    return (
        <Container>
            <div className="max-w-[580px] w-full mx-auto">
                <div className="flex items-center text-center">
                    <span className={` w-1/2 p-4 cursor-pointer ${selectRoom === 'join' && ' bg-secondary rounded-t-lg text-primary'}`} onClick={() => handleSelectRoom('join')}>Ingressar</span>
                    <span className={` w-1/2 p-4 cursor-pointer ${selectRoom === 'create' && ' bg-secondary rounded-t-lg text-primary'}`} onClick={() => handleSelectRoom('create')}>Nova reunião</span>
                </div>
                <div className="space-y-4 bg-secondary p-4 rounded-b-lg">
                    {selectRoom === 'join' && (
                        <>
                            <Input placeholder="Digite seu nome" type="text" ref={nameJoin} />
                            <Input placeholder="ID da reunião" type="text" ref={idRoom} />
                        </>
                    )}

                    {selectRoom === 'create' && (
                        <>
                            <Input placeholder="Digite seu nome" type="text" ref={nameCreate} />
                        </>
                    )}

                    <Button title="Entrar" type="submit" />
                </div>
            </div>

        </Container>
    )

}