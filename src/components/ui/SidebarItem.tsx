import type { ReactElement } from "react"

export const SidebarItem = ({text, icon}: {
    text: string,
    icon: ReactElement
}) => {
    return <div className="flex items-center text-grey-600 py-2 cursor-pointer hover:bg-gray-200 rounded max-w-48 pl-4
    trainsition-all duration-200">
        <div className="pr-2">
            {icon}
        </div>
        <div >
            {text}
        </div>
    </div>
} 