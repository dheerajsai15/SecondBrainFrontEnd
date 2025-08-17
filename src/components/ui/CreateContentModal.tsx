import { useRef, useState } from "react"
import { CrossIcon } from "../../icons/CrossIcon"
import { Button } from "./Button"
import { Input } from "./Input"
import axios from "axios"
import { BACKEND_URL } from "../../config"

enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter"
}

export const CreateContentModal = ({open,onClose} : {open: boolean, onClose: () => void}) => {
    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const [type, setType] = useState(ContentType.Youtube);
    
    async function addContent(){
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;
        await axios.post(`${BACKEND_URL}/api/v1/content`,{
            link,
            title,
            type
        }, {
            headers:{
                "Authorization": localStorage.getItem("token")
            }
        });
        alert("Content Successfully added!")
        onClose();
    }
    
    return <div>
        {open && <div>
            <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60"></div>
            <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center">
                <div className="bg-white p-4 rounded">
                        <div className="flex justify-end">
                            <div onClick={onClose} className="cursor-pointer">
                                <CrossIcon />
                            </div>
                        </div>
                        <div>
                            <Input placeholder={"Title"} ref={titleRef}/>
                            <Input placeholder={"Link"} ref={linkRef}/>
                        </div>
                        <div className="flex justify-center pb-2 gap-2 pt-1">
                            <Button text="Youtube" size="md" variant={type === ContentType.Youtube ? "primary" : "secondary"}
                            onClick={() => setType(ContentType.Youtube)}/>
                            <Button text="Twitter" size="md" variant={type === ContentType.Twitter ? "primary" : "secondary"}
                            onClick={() => setType(ContentType.Twitter)}/>
                        </div>    
                        <div className="flex justify-center">
                            <Button variant="primary" onClick={addContent} text="Submit" size="md"></Button>
                        </div>
                </div>
            </div>    
        </div>}
    </div>
}