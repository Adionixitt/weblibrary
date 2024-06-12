import { createClient } from '@/utils/supabase/server';

export default async function News() {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('news')
    .select('*');


  // Return the fetched data as props
  return (
    <div className='grid grid-cols-2 gap-5'>
      {data?.map((row) => (
        <div className='flex flex-col w-full p-5 m-2 border border-slate-300 shadow-lg rounded-md'>
          <h1 className='text-lg font-bold mb-3 leading-6 h-[2lh]'>{row.title}</h1>
          <p className='h-32 text-ellipsis overflow-hidden whitespace-pre-line ...'>{row.text}</p>
          <p className='text-sm text-white w-full text-right mt-auto'>{
            new Date(row.created_at).getDate() + "." +
            new Date(row.created_at).getMonth() + "." +
            new Date(row.created_at).getFullYear()
            }
          </p>
        </div>
      ))}
    </div>
  );
}