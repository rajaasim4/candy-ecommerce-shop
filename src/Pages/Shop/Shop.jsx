import React, { useState, useRef } from "react";
import CategorySelector from "../../Components/CategorySelector/CategorySelector";
import ProductCard from "../../Components/ProductCard/ProductCard";
import ShopProduct from "../../Data/ShopProduct";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import Footer from "../../Components/Footer/Footer";

const Shop = () => {
  const [category, setCategory] = useState(ShopProduct);
  const [filterPrice, setFilterPrice] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("allProducts");

  const FilterByCategory = (value) => {
    setSelectedCategory(value);
    let filteredProducts = ShopProduct;

    if (value !== "allProducts") {
      filteredProducts = ShopProduct.filter(
        (product) => product.category === value
      );
    }

    if (filterPrice > 0) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price <= filterPrice
      );
    }

    setCategory(filteredProducts);
  };

  const filterByPrice = () => {
    let filteredProducts = ShopProduct;

    if (selectedCategory !== "allProducts") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (filterPrice > 0) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price <= filterPrice
      );
    }

    setCategory(filteredProducts);
  };

  const ref = useRef();

  // Sorting the Products
  const sortData = () => {
    let value = ref.current;
    let selectedValue = value.options[value.selectedIndex].value;
    let data = "";

    switch (selectedValue) {
      case "highPrice":
        data = [...category].sort((x, y) => y.price - x.price);
        break;
      case "lowPrice":
        data = [...category].sort((x, y) => x.price - y.price);
        break;
      case "aToZ":
        data = [...category].sort((x, y) => x.name.localeCompare(y.name));
        break;
      case "zToA":
        data = [...category].sort((x, y) => y.name.localeCompare(x.name));
        break;
      default:
        data = ShopProduct;
    }

    setCategory(data);
  };

  return (
    <>
      <div className="py-5 xxl:w-[1700px] mx-auto">
        <div className="w-95 bg-breadcrumb bg-cover h-72 mx-auto rounded-2xl bg-no-repeat bg-center"></div>
        <div className="w-95 mt-6 py-5 flex mx-auto relative md:flex-col md:items-center ">
          <div className="w-3/12 py-10 slg:w-5/12 md:w-7/12 sm:w-11/12 ">
            <h3 className="text-3xl font-medium font-pacifico">Category</h3>
            <div>
              <CategorySelector
                title={"All Products"}
                id="allProducts"
                FilterByCategory={FilterByCategory}
              />
              <CategorySelector
                title={"Cake"}
                id="Cake"
                FilterByCategory={FilterByCategory}
              />
              <CategorySelector
                title={"Cup Cake"}
                id="CupCake"
                FilterByCategory={FilterByCategory}
              />
              <CategorySelector
                title={"Donuts"}
                id="Donuts"
                FilterByCategory={FilterByCategory}
              />
              <CategorySelector
                title={"Deserts"}
                id="Deserts"
                FilterByCategory={FilterByCategory}
              />
              <CategorySelector
                title={"Pasteries"}
                id="Pasteries"
                FilterByCategory={FilterByCategory}
              />
            </div>
            <div className="h-1 w-full border-t-[1px] my-5 border-slate-300"></div>
            <h3 className="text-3xl font-medium mt-8 font-pacifico">
              Filter By Price
            </h3>
            <div className="mt-6">
              <h1>${filterPrice}</h1>
              <input
                type="range"
                className="w-8/12 bg-red-200 rangeSlider"
                value={filterPrice}
                onChange={(e) => setFilterPrice(e.target.value)}
                min={0}
                max={Math.max(...ShopProduct.map((item) => item.price))}
              />
              <button
                className="block mt-5 bg-black text-white w-11/12 h-12 rounded-full duration-300 hover:bg-[#f4952c]"
                onClick={filterByPrice}
              >
                Filter
              </button>
            </div>
          </div>
          <div className="w-9/12 slg:w-7/12 md:w-11/12">
            <div className="py-10 flex justify-between items-center gap-x-5 flex-wrap sm:justify-center sm:gap-y-4">
              <h2 className="text-4xl font-medium sm:text-3xl font-pacifico">
                Featured Products
              </h2>
              <div className="bg-black w-44 px-3 h-16 rounded-2xl">
                <select
                  name=""
                  id=""
                  className="text-white text-lg rounded-md w-40 bg-black h-16 cursor-pointer outline-none"
                  ref={ref}
                  onChange={sortData}
                >
                  <option value="Default">Sort By Default </option>
                  <option value="highPrice">High Price </option>
                  <option value="lowPrice">Low Price </option>
                  <option value="aToZ">Alphabetically A-Z </option>
                  <option value="zToA">Alphabetically Z-A </option>
                </select>
              </div>
            </div>
            <div className="flex flex-wrap justify-evenly gap-y-4 slg:justify-center">
              {category.map((item) => {
                return (
                  <React.Fragment key={item.id}>
                    <ProductCard {...item} />
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Shop;
