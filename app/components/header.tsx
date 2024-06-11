import AuthButton from "@/components/AuthButton";
import Logo from "@/components/logo";
import Link from "next/link";

export default async function Header() {
    return (
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
            <div className="w-full max-w-7xl flex justify-between items-center p-3 text-sm">
                <Link href="/">
                    <Logo />
                </Link>
                <AuthButton/>
            </div>
        </nav>
    );
}
