import { useState } from "react"
import { CrossIcon } from "../../icons/CrossIcon"
import { Button } from "./Button"

export const CreateContentModal = ({open,onClose}) => {
    
    return <div>
        {open && <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center items-center">
                <div className="bg-white p-4 rounded">
                    <div className="flex justify-end">
                        <div onClick={onClose} className="cursor-pointer">
                            <CrossIcon />
                        </div>
                    </div>
                    <div>
                        <Input placeholder={"Title"}/>
                        <Input placeholder={"Link"}/>
                    </div>
                    <div className="flex justify-center">
                        <Button variant="primary" text="Submit" size="md"></Button>
                    </div>
                </div>
        </div>}
    </div>
}

function Input({onChange,placeholder}: {onChange: () => void, placeholder: string}){
    return <div>
        <input type={"text"} className="px-4 py-2 border rounded m-2" onChange={onChange} placeholder={placeholder}/>
    </div>
}