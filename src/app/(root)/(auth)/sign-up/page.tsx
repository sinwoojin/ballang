import React from "react";

function SignUp() {
	return (
		<div className="px-5 lg:px-8 py-6 lg:py-10 mx-auto max-w-screen-lg data-[full-width=true]:max-w-none flex flex-col grow w-full items-stretch">
			<h2 className="font-bold text-center text-3xl my-5">회원가입</h2>
			<form className="flex flex-col items-center gap-y-4 max-w-sm mx-auto w-full">
				<label htmlFor="email">이메일</label>
				<input
					type="text"
					id="email"
					className="border w-full py-3 rounded-sm"
				/>
				<label htmlFor="password">비밀번호</label>
				<input
					type="password"
					id="password"
					className="border w-full py-3 rounded-sm"
				/>
				<label htmlFor="passwordCheck">이메일</label>
				<input
					type="password"
					id="passwordCheck"
					className="border w-full py-3 rounded-sm"
				/>
				<button className="w-full border py-4 mt-6 rounded-md bg-black text-white">
					회원가입 하기
				</button>
			</form>
		</div>
	);
}

export default SignUp;
