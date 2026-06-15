import { supabase } from "../Lib/supabase";

export const GetDataKomentar = async () => {
  const { data, error } = await supabase
    .from("portofolio")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }

  return data;
};

export const CreateKomentar = async ({ nama, deskripsi, image = null }) => {
  let imageUrl = null;

  // upload image jika ada
  if (image) {
    const fileName = `${Date.now()}-${image.name}`;

    const { error: uploadError } = await supabase.storage
      .from("portofolio")
      .upload(fileName, image);

    if (uploadError) {
      throw uploadError;
    }

    const { data } = supabase.storage.from("portofolio").getPublicUrl(fileName);

    imageUrl = data.publicUrl;
  }

  const { data, error } = await supabase
    .from("portofolio")
    .insert([
      {
        nama: nama.trim(),
        deskripsi: deskripsi.trim(),
        image: imageUrl,
      },
    ])
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
};

export const DeleteKomentar = async (id) => {
  const { error } = await supabase.from("portofolio").delete().eq("id", id);

  if (error) throw error;

  return true;
};
