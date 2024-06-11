import { Button } from "@/components/ui/button"
import Link from "next/link";
import News from "./components/news";


export default async function Index() {
    return (
        <div className="w-full max-w-7xl flex py-10 gap-12 flex flex-col">
        <div className="flex flex-row justify-between items-center gap-10">
            <div className="flex flex-col justify-center items-center w-1/2">
                <div className="flex flex-col justify-center items-center gap-1 mb-2">
                    <h3 className="text-md text-slate-400">Кузнецкий индустриальный техникум</h3>
                    <h1 className="text-3xl text-slate-700 font-black">Электронная библиотека</h1>
                </div>
                <p className="text-md text-slate-500">Перед тем как начать пользования электронной библиотекой техникума, необходимо войти в аккаунт, нажмите на кнопку снизу, чтобы начать.</p>
                <Button asChild className="p-7 mt-7" variant={"outline"}>
                    <Link href={"/login"}>Приступить</Link>
                </Button>
            </div>
            <img className="rounded-xl overflow-hidden" src="https://www.novsu.ru/upload/medialibrary/5d7/%D0%91%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B0%20%D0%9D%D0%BE%D0%B2%D0%93%D0%A3%20(5).jpg"/>
        </div>
        <section className="flex flex-col gap-4 [&_p]:text-slate-500">
            <h1 className="text-3xl font-extrabold text-slate-700">О библиотеке</h1>
            <div className="flex flex-row width-full">
                <p>Библиотека Кузнецкого индустриального техникума хранит в себе огромнейшее количество полезной литературы, которая может пригодиться в процессе обучения. Для удобства студентов был создан данный сайт, который поможет пользоваться книгами без похода в библиотеку, а также ускорит поиск необходимой литературы. Приятного пользования!</p>
            </div>
        </section>
        <section className="flex flex-col gap-4 [&_p]:text-slate-500">
            <h1 className="text-3xl font-extrabold text-slate-700">Последние новости</h1>
            <News/>
        </section>
    </div>
    );
}
