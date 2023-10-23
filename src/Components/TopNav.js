import React from 'react';

const TopNav = ({
  onTextAdToggle,
  onMediaAdToggle,
  textAdChecked,
  mediaAdChecked,
}) => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex items-center justify-between">
        <div className="text-white text-2xl font-bold">Your App Name</div>
        <div className="space-x-4">
          <a href="/dashboard" className="text-white">
            Dashboard
          </a>
          <a href="/create-ad" className="text-white">
            Create Ad
          </a>
          <label className="text-white">
            <input
              type="checkbox"
              checked={textAdChecked}
              onChange={onTextAdToggle}
            />
            Text Ad
          </label>
          <label className="text-white">
            <input
              type="checkbox"
              checked={mediaAdChecked}
              onChange={onMediaAdToggle}
            />
            Media Ad
          </label>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;