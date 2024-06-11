import { createClient } from '@/utils/supabase/server';
import { useEffect, useState } from 'react';

export default async function News() {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('news')
    .select('*');


  // Return the fetched data as props
  return (
    <div className='flex flex-row width-full'>
      {data?.map((newsEl) => (
        <div className='flex flex-col w-1/3 p-5 m-2 border border-slate-300 shadow-lg rounded-md'>
          <h1 className='text-lg font-bold mb-3 leading-6 h-[2lh]'>{newsEl.title}</h1>
          <p className='h-32 text-ellipsis overflow-hidden whitespace-pre-line ...'>{newsEl.text}</p>
          <p className='text-sm text-slate-300 w-full text-right mt-auto'>{
            new Date(newsEl.created_at).getDate() + "." +
            new Date(newsEl.created_at).getMonth() + "." +
            new Date(newsEl.created_at).getFullYear()
            }</p>
        </div>
      ))}
    </div>
  );
}