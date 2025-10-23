import { createClient, SupabaseClient } from "@supabase/supabase-js";

// =======================================================
// 🔹 إعداد Supabase Client
// =======================================================

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY as string;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL and Key must be provided!");
}

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

// =======================================================
// 🔸 دالة جلب بيانات التوزيع السنوي (كما هي)
// =======================================================

export async function DistributionData(level: number) {
  try {
    const levelString: string = level.toString();
    const { data, error } = await supabase
      .from("annual_distribution0" + levelString)
      .select("*")
      .order("Weeks", { ascending: true });

    if (error) throw new Error(error.message);
    return data || null;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

// =======================================================
// 🔸 دوال إدارة التعليقات (Comments)
// =======================================================

// 🟢 جلب جميع التعليقات
export async function getComments() {
  try {
    const { data, error } = await supabase
      .from("comments")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw new Error(error.message);
    return data || [];
  } catch (error) {
    console.error("Error fetching comments:", error);
    return [];
  }
}

// 🟢 إضافة تعليق جديد
export async function addComment(content: string, userToken: string) {
  try {
    const { error } = await supabase
      .from("comments")
      .insert([{ content, likes: 0, user_token: userToken }]);

    if (error) throw new Error(error.message);
  } catch (error) {
    console.error("Error adding comment:", error);
    throw error;
  }
}

// 🟢 تحديث عدد الإعجابات
export async function likeComment(id: number, newLikes: number) {
  try {
    const { error } = await supabase
      .from("comments")
      .update({ likes: newLikes })
      .eq("id", id);

    if (error) throw new Error(error.message);
  } catch (error) {
    console.error("Error updating likes:", error);
    throw error;
  }
}

// 🟢 حذف تعليق
export async function deleteComment(id: number) {
  try {
    const { error } = await supabase.from("comments").delete().eq("id", id);
    if (error) throw new Error(error.message);
  } catch (error) {
    console.error("Error deleting comment:", error);
    throw error;
  }
}
