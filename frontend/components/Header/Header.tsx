// Custom components
import { MobileMenu } from "../MobileMenu/MobileMenu";
import { ToggleThemeButton } from "../ToggleThemeButton/ToggleThemeButton";

// Next imports
import Link from "next/link";

export function Header() {
  return (
    <header className="flex justify-between items-center py-10 md:py-0">
      <Link href="/">
        <h2 className="text-2xl font-bold">dn.</h2>
      </Link>
      <div className="flex items-center gap-6 md:hidden">
        <ToggleThemeButton />
        <MobileMenu />
      </div>
      <nav className={`hidden md:block`}>
        <ul className="flex flex-col gap-6 w-screen py-10 pl-8 items-center md:w-full md:flex-row md:min-h-0">
          <li>
            <ToggleThemeButton />
          </li>
          <li className="hover:opacity-70 duration-100 ease-out transition-opacity">
            <Link href="#latestposts">All posts</Link>
          </li>
          <li className="hover:opacity-70 duration-100 ease-out transition-opacity">
            <Link href="/contacts">Our developers</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
