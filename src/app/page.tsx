import dynamic from "next/dynamic";
import CartPage from "./components/CartPage";
// import InteractiveVideoPlayer from "./components/InteractiveVideoPlayer";
// const InteractiveVideoPlayer = dynamic(
//   () => import("./components/InteractiveVideoPlayer"),
//   { ssr: false }
// );
const InteractiveVideoPlayer = dynamic(
  () => import("./components/InteractiveVideoPlayer"),
  {
    loading: () => <h1>Loading...</h1>,
  }
);
import Items from "./components/items";
import Navbar from "./components/Navbar";

const Home = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) {
    console.error("Failed to fetch products");
    return <p>Failed to load products</p>;
  }
  const products = await res.json();

  return (
    <>
      <Navbar />
      <InteractiveVideoPlayer />
      <Items products={products} />

      <div className=" bg-red-500 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ipsum
        dolores? Numquam necessitatibus porro quos molestiae quasi ad, harum
        saepe delectus nihil laboriosam recusandae fugit! Quo, repellat
        voluptates? Blanditiis necessitatibus eligendi sed accusantium eum
        facere iure asperiores dolorem, sint debitis commodi impedit, nostrum
        optio. Fuga quas aspernatur expedita quisquam officiis vero illum
        debitis necessitatibus obcaecati ad harum, perferendis nostrum eveniet
        doloremque, quae ea vitae nemo quasi veniam fugit praesentium tempore
        temporibus soluta magni. Enim assumenda molestiae facilis, fugit ipsum
        laborum possimus modi esse amet rem quasi voluptates corrupti totam
        dolorum, quis, ipsa dicta sit harum sed consequuntur. Magni, dolorem
        iure.
      </div>

      <CartPage />
    </>
  );
};

export default Home;
