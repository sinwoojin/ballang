"use client";

import { useAuthStore } from "@/zustand/auth.store";
import { useModalStore } from "@/zustand/modal.store";
import { useRef } from "react";
import Modal from "./Modal";

function LogInModal() {
	const logIn = useAuthStore((state) => state.logIn);
	const closeModal = useModalStore((state) => state.closeModal);
	const emailInputRef = useRef<HTMLInputElement>(null);
	const passwordInputRef = useRef<HTMLInputElement>(null);

	const handleClickLogin = async () => {
		const email = emailInputRef.current?.value;
		const password = passwordInputRef.current?.value;

		if (!email || !password)
			return alert("이메일과 비밀번호를 입력해 주세요");

		const data = { email, password };
		const isLogInSuccess = logIn();

		if (data) {
			logIn();
			closeModal();
		} else {
			alert("로그인에 실패하였습니다");
		}
	};

	return (
		<Modal>
			<input
				ref={emailInputRef}
				type="text"
				placeholder="email 입력해 주세요"
			/>
			<input
				ref={passwordInputRef}
				type="password"
				placeholder="password 입력해 주세요"
			/>

			<button
				onClick={handleClickLogin}
				className="bg-black p-5 text-white"
			>
				로그인하기
			</button>
		</Modal>
	);
}

export default LogInModal;
