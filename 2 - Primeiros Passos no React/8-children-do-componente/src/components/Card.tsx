import { ReactNode } from "react"

type Props = {
    children: ReactNode
}
export const Card = ({children}: Props) => {
    return (
        <div className="rounded-lg p-4 w-80 text-center cursor-pointer bg-red-600 hover:bg-red-500">
            {children}
        </div>
    )
}