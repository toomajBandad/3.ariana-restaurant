import React from "react";
import * as MdIcons from "react-icons/md"; // Import all Material Design icons

function ServiceItem({ title, desc, img, icon }) {
  const IconComponent = MdIcons[icon]; // Dynamically select the icon

  return (
    <div className="mb-10">
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <div className="sm:w-2/5 w-full">
          <img className="w-full h-auto rounded-md" src={img} alt={title} />
        </div>
        <div className="sm:w-3/5 w-full">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-[#da9f5b] rounded-full h-10 w-10 flex items-center justify-center text-white text-2xl p-0">
              {IconComponent ? <IconComponent /> : <MdIcons.MdInsertEmoticon />}
            </div>
            <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
          </div>
          <p className="text-gray-600">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceItem;