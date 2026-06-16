import { useState } from "react";
import {

  FaImage,
  FaPaperPlane,
  FaSpinner,
  FaTimes
} from "react-icons/fa";
import { toast } from "react-toastify";
import { CreateKomentar} from "../Services/DataHub";

const FormHub = ({ setDatas}) => {
     const [nama, setNama] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();

  // VALIDASI WAJIB
  if (!nama.trim() || !deskripsi.trim()) {
    toast.error("Nama dan deskripsi wajib diisi ✍️");
    return;
  }

  try {
    setLoading(true);

    const newData = await CreateKomentar({
      nama,
      deskripsi,
      image,
    });

    setDatas((prev) => [newData, ...prev]);

    setNama("");
    setDeskripsi("");
    setImage(null); // lebih tepat null daripada ""

    toast.success("Komentar berhasil ditambahkan 🚀");
  } catch (error) {
    console.error(error);
    toast.error("Mohon maaf, terjadi kesalahan 📸");
  } finally {
    setLoading(false);
  }
};
  return (
    <>
        <form   onSubmit={handleSubmit}
            className="space-y-4 font-space">
              <input
                  value={nama}
        onChange={(e) => setNama(e.target.value)}
                placeholder="Enter your name"
                className="
                w-full
                h-12
                px-4
                rounded-xl
                border
                border-white/10
                bg-white/5
                outline-none
                "
              />

              <textarea
                rows={4}
                value={deskripsi}
        onChange={(e) => setDeskripsi(e.target.value)}
                placeholder="Write your message here..."
                className="
                w-full
                rounded-xl
                border
                border-white/10
                bg-white/5
                p-4
                resize-none
                outline-none
                "
              />
              <div className="space-y-2">
  <label className="text-sm text-zinc-300 font-medium">
    Profile Photo <span className="text-zinc-500">(Opsional)</span>
  </label>
  

  <label
    className="
      flex
      flex-col
      items-center
      justify-center
      gap-2
      h-32
      rounded-2xl
      border
      border-dashed
      border-white/10
      bg-white/5
      cursor-pointer
      hover:border-violet-500/40
      transition-all
    "
  >
    <input
      type="file"
      accept="image/*"
      className="hidden"
    
      onChange={(e) => setImage(e.target.files[0])}
    />

{image ? (
  <div className="relative flex flex-col items-center gap-2">
    
    {/* Tombol Hapus */}
    <button
     
      type="button"
      onClick={(e) => {
        e.preventDefault();
        setImage(null);
      }}
      className="
        absolute
        -top-2
        -right-2
        w-7
        h-7
        rounded-full
        bg-red-500
        text-white
        flex
        items-center
        justify-center
        hover:bg-red-600
        transition
        shadow-lg
      "
    >
      <FaTimes size={12} />
    </button>

    {/* Preview */}
    <img
      src={URL.createObjectURL(image)}
      alt="Preview"
      className="
        w-20
        h-20
        sm:w-24
        sm:h-24
        rounded-full
        object-cover
        border-2
        border-violet-500/40
      "
    />

    <span className="text-xs text-zinc-400 truncate max-w-[180px]">
      {image.name}
    </span>
  </div>
) : (
  <>
    <FaImage
      className="text-violet-400"
      size={24}
    />

    <span className="text-sm text-zinc-400">
      Choose Profile Photo
    </span>
    <span className="text-xs text-zinc-500">
      Format Jpeg/Jpg/Png 
    </span>
    <span className="text-xs text-zinc-500">
       Max file size: 5MB 
    </span>
  </>
)}
  </label>
</div>


    <button
  type="submit"
  disabled={loading}
  className="
    w-full
    h-12
    rounded-xl
    bg-gradient-to-r
    from-[#6366f1]
    via-[#6226d3]
    to-[#b806ff]
    flex
    items-center
    justify-center
    gap-2
    text-white
    font-space
    font-black
    transition-all
    duration-300
    hover:scale-[1.02]
    hover:shadow-[0_0_25px_rgba(139,92,246,0.4)]
    disabled:opacity-70
    disabled:cursor-not-allowed
    disabled:hover:scale-100
  "
>
  {loading ? (
    <>
      <FaSpinner
        size={16}
        className="animate-spin"
      />
      Mengirim...
    </>
  ) : (
    <>
      <FaPaperPlane size={16} />
      Kirim komentar
    </>
  )}
</button>
            </form>
    </>
  )
}

export default FormHub
