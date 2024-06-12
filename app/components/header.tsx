import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Header() {
    const supabase = createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    const signOut = async () => {
        "use server";
        const supabase = createClient();
        await supabase.auth.signOut();
        return redirect("/login");
    };

    return user ? (
        <div className="w-full flex justify-center border-b border-b-foreground/10 h-16">
            <div className="w-full max-w-7xl flex justify-between items-center p-3 text-sm">
                <Link href="/">
                    <Logo />
                </Link>
                <nav className="flex items-center gap-10">
                    <Link href={"/"}>Главная</Link>
                    <Link href={"/home"}>Библиотека</Link>
                    <div className="flex items-center">
                        <form action={signOut} className="flex items-center border-slate-300 border rounded-md overflow-hidden" >
                            <div className="bg-slate-100 text-slate-500 p-2">{user.email}</div>
                            <Button className="shadow-none">Выйти</Button>
                        </form>
                    </div>
                </nav>
            </div>
        </div>
    ) : (
        <div className="w-full flex justify-center border-b border-b-foreground/10 h-16">
            <div className="w-full max-w-7xl flex justify-between items-center p-3 text-sm">
                <Link href="/">
                    <Logo />
                </Link>
                <nav className="flex items-center gap-10">
                    <Link href="/">Главная</Link>
                    <Link href="/login">Войти</Link>
                </nav>
            </div>
        </div>
    );
}
