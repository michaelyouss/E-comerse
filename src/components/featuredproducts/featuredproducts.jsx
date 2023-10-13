/** @format */

import axios from "axios";
import {useQuery} from "react-query";
import {CirclesWithBar} from "react-loader-spinner";
import {Link} from "react-router-dom";
import {useContext} from "react";
// import {cartContext} from "../../Context/cartContext";
import CategorySlider from "../CategorySlider/CategorySlider";
import MainSlider from "../MainSlider/MainSlider";
import {CardContext} from "../../Context/CardContext";
import toast from "react-hot-toast";

export default function Featuredproducts() {
  let {addToCard} = useContext(CardContext);

  async function addProductToCart(id) {
    let response = await addToCard(id);
    if (response.data.status === "success") {
      toast.success("product successfully added", {
        duration: 2000,
        position: "top-center",
      });
    } else {
      toast.error("Error adding product", {
        duration: 2000,
        position: "top-center",
      });
    }
  }

  // let goLogin = useNavigate ();

  // add cart
  // const {addProductTocart} = useContext(cartContext);

  // async function addProduct(productId) {
  //   const res = await addProductTocart(productId);

  //   console.log(res);

  //   // if (res.status === 'success') {
  //   //   // goLogin('/cart')
  //   // } else {
  //   //   console.log("no");
  //   // }
  // }

  function getFeaturedproducts() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/products");
  }

  let {isLoading, data} = useQuery("featuredproducts", getFeaturedproducts, {
    // cacheTime:3000,
    // refetchOnMount:true,
    // staleTime:30000,
    // refetchInterval:3000,
    // enabled: false,
  });
  // console.log("isLoading", isLoading);
  // console.log("isFetched", isFetched);

  // const[products, setProducts]=useState([])
  // const[isLoding, setIsLoding]=useState(false)
  //    async function getFeaturedproducts(){
  //     setIsLoding(true)
  //     let {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/products')
  //     console.log(data.data);
  //     setProducts(data.data);
  //     setIsLoding(false)
  // }
  // useEffect(()=>{
  //     getFeaturedproducts()
  // },[])

  return (
    <>
      {isLoading ? (
        <div className='w-100 py-5 d-flex justify-content-center align-items-center w-100 vh-100'>
          <CirclesWithBar
            height='100'
            width='100'
            color='#4fa94d'
            wrapperStyle={{}}
            wrapperClass=''
            visible={true}
            outerCircleColor=''
            innerCircleColor=''
            barColor=''
            ariaLabel='circles-with-bar-loading'
          />
        </div>
      ) : (
        <div className='container py-2'>
          <MainSlider />
          <CategorySlider />

          <div className=''>
            <div className='row'>
              {data?.data.data.map((product) => (
                <div
                  key={product.id}
                  className=' col-6 col-md-3 '>
                  <div className='product cursor-pointer py-3 px-2'>
                    <Link to={`/ProductDetails/${product.id}`}>
                      <img
                        className='w-100'
                        src={product.imageCover}
                        alt={product.title}
                      />
                      <span className='text-mine  font-sm fw-bolder'>
                        {product.category.name}
                      </span>
                      <h3 className='h5'>
                        {product.title.split(" ").slice(0, 2).join(" ")}
                      </h3>
                      {/* <h4>{product.id}</h4> */}
                      <div className='d-flex justify-content-between'>
                        <span>{product.price}EGP</span>
                        <span>
                          <i className='fas fa-star rating-color'></i>
                          {product.ratingsAverage}
                        </span>
                      </div>
                    </Link>
                    <Link
                      to={`/ProductDetails/${product.id}`}
                      className='btn bg-main text-white w-100 btn-sm mt-2'>
                      Product Show
                    </Link>
                    <button
                      // onClick={() => addProduct()}
                      onClick={() => addProductToCart(product.id)}
                      className='btn bg-main text-white w-100 btn-sm mt-2'>
                      + Add
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
