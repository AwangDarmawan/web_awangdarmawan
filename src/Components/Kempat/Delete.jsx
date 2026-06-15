import { useEffect, useState } from "react";
import {
  GetDataKomentar,
  DeleteKomentar,
} from "../Services/DataHub";

import {
  FaUser,
  FaTrash,
  FaComments,
} from "react-icons/fa";

import { toast } from "react-toastify";

function Delete() {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await GetDataKomentar();
        setDatas(result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Yakin ingin menghapus komentar ini?"
    );

    if (!confirmDelete) return;

    try {
      await DeleteKomentar(id);

      setDatas((prev) =>
        prev.filter((item) => item.id !== id)
      );

      toast.success("Komentar berhasil dihapus");
    } catch (error) {
      console.error(error);
      toast.error("Gagal menghapus komentar");
    }
  };

  return (
    <section
    className="
      py-16
      sm:py-20
      lg:py-24
      px-4
      sm:px-6
      lg:px-10
      min-h-screen
      bg-[#050014]
     
      relative
      overflow-hidden">
     
     {/* HEADER */}
<div className="text-center mb-8 ">
  <h2
    className="
      text-3xl
      sm:text-4xl
      font-black
      bg-gradient-to-r
from-[#6366f1]
            via-[#6226d3]
            to-[#cc207c]
      bg-clip-text
      text-transparent
    "
  >
    Kelola Komentar
  </h2>

  <p className="text-zinc-400 mt-2 text-sm sm:text-base">
    Kelola dan hapus komentar pengunjung
  </p>

  <div
    className="
      mt-4
      inline-flex
      items-center
      gap-2
      px-4
      py-2
      rounded-xl
      border
      border-violet-500/20
      bg-violet-500/5
    "
  >
    <FaComments className="text-violet-400" />
    <span className="text-zinc-300">
      {datas.length} Komentar
    </span>
  </div>
</div>
 <div
  className="
    relative
    rounded-3xl
    border
    border-violet-500/20
    
    p-4
    sm:p-6
    shadow-[0_0_40px_rgba(139,92,246,0.15)]
  "
>
  {/* Glow */}
  <div
    className="
      absolute
      inset-0
      rounded-3xl
      bg-[#0d1329]
      pointer-events-none
    "
  />
      {/* LOADING */}
      {loading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="
                h-28
                rounded-2xl
                bg-white/5
                animate-pulse
              "
            />
          ))}
        </div>
      ) : datas.length === 0 ? (
        <div
          className="
            flex
            flex-col
            items-center
            justify-center
            gap-3
            py-16
            rounded-3xl
            border
            border-white/10
            bg-white/5
          "
        >
          <FaComments
            size={40}
            className="text-zinc-500"
          />

          <h3 className="text-lg font-semibold text-white">
            Belum Ada Komentar
          </h3>

          <p className="text-zinc-400 text-sm">
            Komentar yang masuk akan muncul di sini.
          </p>
        </div>
      ) : (
        <div className="space-y-5 bg-[#0d1329]">
          {datas.map((item) => (
            <div
              key={item.id}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-[#11162f]
                p-5
                transition-all
                duration-300
                hover:border-violet-500/30
                hover:-translate-y-1
                hover:shadow-[0_0_40px_rgba(139,92,246,0.25)]
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute
                  inset-0
                  bg-[radial-gradient(circle_at_top_left,#6366f120,transparent_40%)]
                  pointer-events-none
                "
              />

              {/* Delete Button */}
              <button
                onClick={() =>
                  handleDelete(item.id)
                }
                className="
                  absolute
                  top-4
                  right-4
                  w-10
                  h-10
                  flex
                  items-center
                  justify-center
                  rounded-xl
                  bg-red-500/10
                  text-red-400
                  hover:bg-red-500/20
                  hover:scale-110
                  transition-all
                "
              >
                <FaTrash size={14} />
              </button>

              <div className="flex gap-4">
                {/* Avatar */}
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.nama}
                    className="
                      w-14
                      h-14
                      rounded-full
                      object-cover
                      border-2
                      border-violet-500/30
                      shrink-0
                    "
                  />
                ) : (
                  <div
                    className="
                      w-14
                      h-14
                      rounded-full
                      flex
                      items-center
                      justify-center
                      border-2
                      border-violet-500/30
                      bg-white/5
                      shrink-0
                    "
                  >
                    <FaUser
                      size={18}
                      className="text-zinc-300"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="flex-1 pr-12">
                  <h3
                    className="
                      text-white
                      font-bold
                      text-base
                      sm:text-lg
                      break-words
                    "
                  >
                    {item.nama}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-zinc-300
                      text-sm
                      leading-relaxed
                      break-words
                    "
                  >
                    {item.deskripsi}
                  </p>

                  <div
                    className="
                      mt-4
                      flex
                      flex-wrap
                      items-center
                      gap-2
                    "
                  >
                    <span
                      className="
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        bg-violet-500/10
                        text-violet-300
                      "
                    >
                      Pengunjung
                    </span>

                    <span className="text-xs text-zinc-500">
                      {new Date(
                        item.created_at
                      ).toLocaleDateString(
                        "id-ID",
                        {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        }
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
          ))}
        </div>
        
      )}
      </div>
    </section>
  );
}

export default Delete;