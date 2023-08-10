import React from "react";

function AvatarGroup({ avatars }) {
  return (
    <div className="flex">
      {avatars.map((x, i, arr) => {
        return (
          <>
            {i < 5 ? (
              <img
                key={i}
                class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                src={`https://randomuser.me/api/portraits/men/${i}.jpg`}
                alt=""
              />
            ) : (
              arr.length > 5 &&
              i === 5 && (
                <div className="text-[12px] w-6 h-6 bg-gray-200 flex items-center justify-center rounded-full text-gray-600">
                  +{arr.length - 5}
                </div>
              )
            )}
          </>
        );
      })}
    </div>
  );
}

export default AvatarGroup;
