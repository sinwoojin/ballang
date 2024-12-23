"use client";

import { logOut } from "@/api/api";
import LogInModal from "@/components/LogInModal";
import { useAuthStore } from "@/zustand/auth.store";
import { useModalStore } from "@/zustand/modal.store";
import Link from "next/link";
import {} from "react";

function Header() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const openModal = useModalStore((state) => state.openModal);

  const handleClickLogOut = async () => {
    logOut();
  };

  return (
    <header className="border-b px-6 h-16  flex items-center justify-between">
      <div className="flex gap-x-7">
        <Link href={"/"} className="font-bold text-2xl ">
          발랑
        </Link>
        <Link href={"/brands"}>Brands</Link>
      </div>

      {!isLoggedIn ? (
        <div className="flex gap-x-4">
          <Link href={"/sign-up"}>회원가입</Link>
          <button onClick={() => openModal(<LogInModal />)}>로그인</button>
        </div>
      ) : (
        <div className="flex gap-x-3">
          <Link href={"/cart"}>장바구니</Link>
          <button onClick={handleClickLogOut}>로그아웃</button>
        </div>
      )}
    </header>
  );
}

export default Header;
