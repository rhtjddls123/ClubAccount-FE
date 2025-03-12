import AuthButton from "../../components/AuthButton";
import AuthInput from "../../components/AuthInput";
import AuthLink from "../../components/AuthLink";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center w-11/12 mx-auto h-fit px-5 py-16 rounded-xl shadow-[0px_3px_10.8px_2px_rgba(0,_0,_0,_0.07)]">
      <h1 className="text-3xl font-extrabold text-primary">띵부</h1>

      <div className="flex flex-col w-full gap-3 mt-16">
        <AuthInput type="text" placeholder="이메일" />
        <AuthInput type="password" placeholder="비밀번호" />
      </div>

      <div className="flex flex-col items-center w-full gap-4 mt-12">
        <AuthButton>로그인</AuthButton>

        <div className="flex gap-8">
          <AuthLink>아이디 찾기</AuthLink>
          <AuthLink>비밀번호 찾기</AuthLink>
          <AuthLink>회원가입</AuthLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
