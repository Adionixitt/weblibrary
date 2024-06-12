import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import Link from "next/link";

export default async function BookBrowser(){
    const supabase = createClient();
    const { data, error } = await supabase
    .from('books')
    .select('*');
    console.log(error);

    return (
        <div className="border rounded-md border-slate-300 w-full p-5 mt-5 grid grid-cols-3 gap-5">
            {data?.map((row) => (
                <Link href={row.file} className='flex flex-col justify-center items-center w-full p-5 m-2 transition-colors border-2 border-slate-200 hover:border-slate-500 shadow-sm rounded-md'>
                    <div className={"w-[282px] h-[360px] bg-slate-200 rounded-lg mb-3 overflow-hidden"}>
                        <img src={row.cover_image} className="w-full h-full"></img>
                    </div>
                    <h1 className='text-lg font-bold text-slate-700 text-center leading-6 h-[2lh]'>{row.title}</h1>
                    <p className='text-slate-400'>{row.author}</p>
                </Link>
            ))}
        </div>
    );
};