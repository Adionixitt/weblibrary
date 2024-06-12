import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import BookBrowser from "../components/book-browser";

export default async function HomePage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="w-full max-w-7xl flex py-10 gap-12 flex flex-col">
      <BookBrowser/>
    </div>
  );
}
