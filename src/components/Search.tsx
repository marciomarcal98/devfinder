import { MagnifyingGlass, MagnifyingGlassIcon } from "@phosphor-icons/react"

export function Search() {
    return (
        <div className="flex bg-bg-secondary p-2 justify-between rounded-[10px] items-center">
            <MagnifyingGlass size={20} className="text-branding"/>
            <input type="text" placeholder="Search GitHub username..." className="text-sm outline-none text-text-secondary" />
            <button className="bg-branding py-3 px-4 rounded-[10px] text-sm text-white font-bold">Search</button>
        </div>
    )
}