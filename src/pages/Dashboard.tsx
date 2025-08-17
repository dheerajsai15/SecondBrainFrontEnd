import { useEffect, useState } from "react"
import { Button } from "../components/ui/Button"
import { Card } from "../components/ui/Card"
import { CreateContentModal } from "../components/ui/CreateContentModal"
import { PlusIcon } from "../icons/PlusIcon"
import { ShareIcon } from "../icons/ShareIcon"
import { Sidebar } from "../components/ui/Sidebar"
import { useContent } from "../hooks/useContent"
import axios from "axios"
import { BACKEND_URL } from "../config"


export function Dashboard() {
  const [modalOpen, useModalOpen] = useState(false);
  const {contents,refresh} = useContent();
  useEffect(()=>{
    refresh();
  },[modalOpen])

  return (
    <div>
      <Sidebar/>
      <div className="p-4 ml-72 min-h-screen border-gray-200 bg-gray-100 border-2">
        <CreateContentModal open={modalOpen} onClose={() => {
          useModalOpen(false)
        }}/>
        <div className="flex justify-end gap-3">
          <Button onClick={() => useModalOpen(true)} startIcon={<PlusIcon size="md"/>} variant="primary" size="md" text="Add Content"></Button>
          <Button onClick={async() => {
            const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, { share: true }, {
              headers: {
                Authorization: localStorage.getItem("token")
              }
            });
            const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
            await navigator.clipboard.writeText(shareUrl);
            alert("Link Copied to clipboard")

          }} startIcon={<ShareIcon size="md"/>} variant="secondary" size="md" text="Share Brain"></Button>
        </div>

        <div className="flex gap-4 flex-wrap">
          {contents.map(({title,link,type}) => {
            return <Card type={type} link={link} title={title}/>
          })}
        </div>
      </div>
    </div>
  )
}
