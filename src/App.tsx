import { useState } from "react"
import { Button } from "./components/ui/Button"
import { Card } from "./components/ui/Card"
import { CreateContentModal } from "./components/ui/CreateContentModal"
import { PlusIcon } from "./icons/PlusIcon"
import { ShareIcon } from "./icons/ShareIcon"


function App() {
  const [modalOpen, useModalOpen] = useState(true);

  return (
    <div className="p-4">
      <CreateContentModal open={modalOpen} onClose={() => {
        useModalOpen(false)
      }}/>
      <div className="flex justify-end gap-3">
        <Button onClick={() => useModalOpen(true)} startIcon={<PlusIcon size="md"/>} variant="primary" size="md" text="Add Content"></Button>
        <Button startIcon={<ShareIcon size="md"/>} variant="secondary" size="md" text="Share Brain"></Button>
      </div>

      <div className="flex gap-4">
        <Card type="twitter" link="https://x.com/rnshrutii/status/1955844799166341492" title="First Tweet"/>
        <Card type="youtube" link="https://www.youtube.com/watch?v=0dZwOXhoTCA" title="First Youtube"/>
      </div>
    </div>
  )
}

export default App
