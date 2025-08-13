import Link from "next/link";
import React from "react";

function PageHeader({ route ,bg}) {
  return (
    <div
      className="relative bg-black/70 mb-20 bg-cover bg-center h-150"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex flex-col items-center justify-center text-center min-h-[400px] pt-0 lg:pt-20">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-white uppercase mb-4 mt-0 lg:mt-20">
          {route}
        </h1>
        <div className="flex items-center space-x-2 text-white text-sm lg:mb-10">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span>/</span>
          <Link href={`/${route}`} className="hover:underline capitalize">
            {route}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
