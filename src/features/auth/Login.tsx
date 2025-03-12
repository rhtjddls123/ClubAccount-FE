const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center w-11/12 mx-auto h-fit px-5 py-16 rounded-xl shadow-[0px_3px_10.8px_2px_rgba(0,_0,_0,_0.07)]">
      <h1 className="text-3xl font-extrabold text-primary">띵부</h1>

      <div className="flex flex-col w-full gap-3 mt-16">
        <input
          className="w-full px-4 py-3 rounded-lg text-gray-03 bg-warm-gray-03 body-med-14"
          type="text"
          placeholder="이메일"
        />
        <input
          className="w-full px-4 py-3 rounded-lg text-gray-03 bg-warm-gray-03 body-med-14"
          type="password"
          placeholder="비밀번호"
        />
      </div>

      <div className="flex flex-col items-center w-full gap-4 mt-12">
        <button className="w-full px-4 py-3 rounded-lg bg-primary title-semi-18 text-gray-01">
          로그인
        </button>

        <div className="flex gap-8 caption-med-12 text-grey-03">
          <button>
            <span>아이디 찾기</span>
          </button>
          <button>
            <span>비밀번호 찾기</span>
          </button>
          <button>
            <span>회원가입</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
