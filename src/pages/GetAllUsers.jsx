import React, { useEffect, useState } from "react";

const GetAllUsers = () => {
  const [users, SetUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://api.escuelajs.co/api/v1/users");
        if (!response.ok) {
          throw new Error("Failed to fetch all users");
        }
        const data = await response.json();
        console.log(data);
        SetUsers(data);
      } catch (error) {
        console.log("Error Fetching User : ", error);
      }
    };
    fetchUsers();
  }, []);
  return (
    <div className="flex flex-col justify-between items-center max-w-7xl  mx-auto  p-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
        {users.map((user) => (
          <div
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            key={user.id}
          >
            <img
              className="p-8 rounded-t-lg"
              src={user.avatar}
              alt="user image"
            />

            <div className="px-5 pb-5">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {user?.name}
              </h5>

              <div className="flex items-center mt-2.5 mb-5">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate">
                  {user?.email}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  {user?.role}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetAllUsers;
