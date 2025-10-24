import { createClient } from "@/lib/supabase/server";

export default async function page(){
const supabase = await createClient();
let { data: restaurants, error } = await supabase
  .from('restaurants')
  .select('id')


    return (
    <main>
        <h1>singa solina</h1>
        
        <p>{}</p>
    </main>
    )
}