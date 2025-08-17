import axios from "axios";
import { useParams } from "react-router-dom"
import { BACKEND_URL } from "../config";
import { Sidebar } from "../components/ui/Sidebar";
import { Button } from "../components/ui/Button";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Card } from "../components/ui/Card";
import { use, useEffect, useState } from "react";

export const SharedBrain = () => {
    const [contents, setContents] = useState([]);
    const { shareLink } = useParams();

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/brain/${shareLink}`)
            .then((response) => {
                setContents(response.data.content);
            })
    }, [])
    
    return <div>
        <Sidebar />
        <div className="p-4 ml-72 min-h-screen border-gray-200 bg-gray-100 border-2">
            <div className="flex justify-end gap-3 pb-4">            
                <Button startIcon={<PlusIcon size="md"/>} variant="primary" size="md" text="Add Content" loading={true}></Button>
                <Button startIcon={<ShareIcon size="md"/>} variant="secondary" size="md" text="Share Brain" loading={true}></Button>
            </div>

            <div className="flex gap-4 flex-wrap">
                      {contents.map(({title,link,type}) => {
                        return <Card type={type} link={link} title={title}/>
                      })}
                    </div>
        </div>
    </div>
}