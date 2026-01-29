"use client";
import UserSvg from "@/svgs/user.svg";
import CaretDownSvg from "@/svgs/caretdown.svg";

function UserBlock() {
  return (
    <div className="pr-11 w-75 flex justify-end items-center">
      <UserSvg></UserSvg>
      <span className="leading-none text-white text-base mx-2.5">用户名</span>
      <CaretDownSvg></CaretDownSvg>
    </div>
  );
}

export default UserBlock;
