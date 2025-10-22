import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY as string;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL and Key must be provided!");
}

const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

export async function DistributionData(level: number) {

  try {
    const levelString: string = level.toString();
    const { data, error } = await supabase
      .from("annual_distribution0" + levelString)
      .select("*")
      .order("Weeks", { ascending: true });

    if (error) {
      throw new Error(error.message);
    }

    if (!data) {
      return null;
    }
    
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
