import React from "react";

function TestimonialItem({ profile, username, body }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex items-center mb-4">
        <img
          src={profile}
          alt={username}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div className="ml-4">
          <h4 className="text-lg font-semibold text-gray-800">{username}</h4>
          <span className="text-sm text-gray-500 italic">User</span>
        </div>
      </div>
      <p className="text-gray-700">{body}</p>
    </div>
  );
}

export default TestimonialItem;