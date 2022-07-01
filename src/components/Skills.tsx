import TypeScript from '../assets/TypeScript.svg'

export function Skills() {
    return (
        <div className="grid gap-8 lg:grid-cols-2">
            <div className="flex flex-col gap-4 px-20 py-8 bg-purple-700 rounded-lg hover:bg-purple-400 transition-colors">
                <img src={TypeScript} alt="" />

                <span className="text-xl font-medium">TypeScript</span>
            </div>
            <div className="flex flex-col gap-4 px-20 py-8 bg-purple-700 rounded-lg hover:bg-purple-400 transition-colors">
                <img src={TypeScript} alt="" />

                <span className="text-xl font-medium">TypeScript</span>
            </div>
        </div>
        
    )
}