"use client";

import { useAuthStore } from "@/zustand/auth.store";
import { useRouter } from "next/navigation";
import { ComponentProps, useRef } from "react";

function SignUpPage() {
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

	const inputEmailRef = useRef<HTMLInputElement | null>(null);
	const inputPasswordRef = useRef<HTMLInputElement | null>(null);
	const passwordConfirmRef = useRef<HTMLInputElement | null>(null);
	const router = useRouter();

	const logIn = useAuthStore((state) => state.logIn);

	const handleClickSignUp: ComponentProps<"form">["onSubmit"] = (e) => {
		e.preventDefault();

		const email = inputEmailRef.current?.value;
		if (!email) return alert("이메일을 입력해주세요");
		const emailCheck = emailRegex.test(email);
		if (!emailCheck) return alert("이메일 양식을 맞춰주세요");

		const password = inputPasswordRef.current?.value;
		const passwordConfirm = passwordConfirmRef.current?.value;
		if (password !== passwordConfirm)
			return alert("비밀번호 일치하지 않음");

		logIn();
		return alert("축하합니다 회원가입에 성공하셨습니다"), router.push("/");
	};
	return (
		<div className="px-5 lg:px-8 py-6 lg:py-10 mx-auto max-w-screen-lg data-[full-width=true]:max-w-none flex flex-col grow w-full items-stretch">
			<h2 className="font-bold text-center text-3xl my-5">회원가입</h2>
			<form
				onSubmit={handleClickSignUp}
				className="flex flex-col items-center gap-y-4 max-w-sm mx-auto w-full"
			>
				<label htmlFor="email">이메일</label>
				<input
					ref={inputEmailRef}
					type="text"
					id="email"
					className="border w-full py-3 rounded-sm px-4"
				/>
				<label htmlFor="password">비밀번호</label>
				<input
					ref={inputPasswordRef}
					type="password"
					id="password"
					className="border w-full py-3 rounded-sm px-4"
				/>
				<label htmlFor="passwordCheck">비밀번호 확인</label>
				<input
					ref={passwordConfirmRef}
					type="password"
					id="passwordCheck"
					className="border w-full py-3 rounded-sm px-4"
				/>
				<button className="w-full border py-4 mt-6 rounded-md border-blue-500 text-blue-500">
					회원가입 하기
				</button>
			</form>
		</div>
	);
}

export default SignUpPage;
