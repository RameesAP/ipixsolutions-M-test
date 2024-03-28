import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CategoryListing = () => {
  const [catgorys, setCategorys] = useState([]);
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/categories"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch all Category");
        }
        const data = await response.json();
        console.log(data, "dataa");
        setCategorys(data);
      } catch (error) {
        console.log("Error fetching category : ", error);
      }
    };
    fetchCategory();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-3">
      <h1 className="text-3xl font-bold mb-5">Category Listing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {catgorys?.map((category) => (
          <div
            key={category?.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm"
          >
            <Link to={`/category-products/${category?.id}`}>
              <img
                className="rounded-t-lg"
                src={category?.image}
                alt={category?.name}
              />
            </Link>
            <div className="p-5">
              <Link to={`/category-products/${category?.id}`}>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
                  {category?.name}
                </h5>
              </Link>

              <Link
                to={`/category-products/${category?.id}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Get more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryListing;
