import React from "react"

const Card = ({ username }) => {
  // console.log("props object:", props);

  return (
    <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100 mx-auto mt-10">
      <img
        src="https://images.pexels.com/photos/32001393/pexels-photo-32001393/free-photo-of-colorful-tree-bark-with-textured-patterns.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt="Card image"
        className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{username}</h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum
            soluta amet corporis accusantium aliquid consectetur eaque!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
