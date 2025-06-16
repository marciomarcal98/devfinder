import { Moon } from "@phosphor-icons/react"
import devfinderLogo from "/devfinder.svg"
import { Search } from "./Search"

export function Header() {
    return (
        <header>
            <div className="flex justify-between mb-9">
                <img src={devfinderLogo} alt="devfinder logo" />

                <button className="flex gap-4 items-center">
                    <span className="text-sm font-bold text-text-secondary tracking-1">DARK</span>
                    <Moon size={20} weight="fill" color="#4B6A9B" />
                </button>
            </div>

            <Search />
        </header>
    )
}