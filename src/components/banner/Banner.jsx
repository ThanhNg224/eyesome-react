import { BsArrowDownRightCircle } from "react-icons/bs";

import bannerImg from "../../assets/bannerImg.png";
import { useNavigate } from "react-router";

const Banner = ({ catRef }) => {
  const navigate = useNavigate();

  return (
    <main className="flex justify-between items-center py-1 mb-5 relative">
      <section className="max-w-2xl mx-auto sm:mx-0 w-full py-2 lg:w-2/5">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold py-3 w-full leading-tight">
          Kính Mắt & Tròng Kính
        </h1>
        <p className="py-3 text-md text-gray-600">
          Mua kính mắt chất lượng cao tốt nhất từ chúng tôi.
          <br />
          Hơn 100 loại kính đa dạng.
        </p>
        <section className="flex items-center">
          <button
            className="btn-primary text-sm md:text-base"
            onClick={() => navigate("/products")}
          >
            Bắt Đầu Mua Sắm
          </button>
          <button
            className="p-3 flex items-center"
            onClick={() =>
              catRef.current.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            <span className="mx-2 text-sm md:text-base">Khám Phá Thêm</span>{" "}
            <BsArrowDownRightCircle className="text-lg" />
          </button>
        </section>
      </section>
      <section className="hidden w-1/2 lg:flex justify-end">
        <img src={bannerImg} alt="bannerImg" className="w-2/3 h-full" />
      </section>
    </main>
  );
};

export default Banner;