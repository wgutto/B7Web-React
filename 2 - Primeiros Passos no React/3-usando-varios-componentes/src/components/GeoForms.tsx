import { Circle } from "./Circle"
import { Square } from "./Square"

export const GeoForms = () => {
    return (
        <div>
            <h1 className="pb-2">Formas Geometricas</h1>

            <div className="flex gap-4 flex-col">
                <Square/>
                <Circle/>
            </div>

        </div>
    )
}