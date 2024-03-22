import React from "react";

export default function NavProfileBuild() {
  return (
    <div className="border-b">
      <div className="container mx-auto lg:px-12 flex px-3 justify-between items-center">
        <h1 className="text-xl font-semibold py-4">Edit Profile</h1>
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-end">
            <h2 className="text-base font-semibold">Profile Visibility</h2>
            <p className="text-xs hidden lg:block">
              You must adequately fill and publish at least one Service & {"'"}
              About
              {"' "}
              information to make your profile public.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <input type="checkbox" className="toggle toggle-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}
