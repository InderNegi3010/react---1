import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

function Github() {
const data = useLoaderData();

//   const [data, setData] = useState(null);
//   useEffect(() => {
//     fetch("https://api.github.com/users/InderNegi3010")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

  // Check if data is still loading
  
  return (
    <div className="m-4 text-center bg-gray-700 text-white p-4 rounded-lg">
      <p className="text-3xl mb-4">GitHub followers: {data.followers}</p>
      <img
        className="mx-auto rounded-full border-4 border-white"
        src={data.avatar_url}
        alt="GitHub Avatar"
        width={200}
        height={200}
      />
      <p className="text-xl mt-4">{data.name}</p>
    </div>
  );
}

export default Github;

export const githubInfoData = async () => {
    const response = await fetch("https://api.github.com/users/InderNegi3010");
    return response.json();
}