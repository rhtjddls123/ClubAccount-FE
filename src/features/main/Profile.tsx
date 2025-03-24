import ArrowRightIcon from "../../icons/ArrowRightIcon";

const Profile = () => {
  return (
    <>
      <div className="flex items-center gap-4 mx-auto max-w-80">
        <img
          src="https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=13262118&filePath=L2Rpc2sxL25ld2RhdGEvMjAyMC8yMS9DTFMxMDAwNi82MmZhMWExMy03ZjRmLTQ1NWMtYTZlNy02ZTk2YjhjMjBkYTk=&thumbAt=Y&thumbSe=b_tbumb&wrtTy=10006"
          alt="프로필 이미지"
          className="object-cover w-12 h-12 border-2 rounded-full"
        />
        <div className="flex items-center flex-1 gap-1">
          <p className="text-gray-01 body-bold-16">김파산 님</p>
          <ArrowRightIcon />
        </div>
        <p className="caption-med-12 text-gray-03">로그아웃</p>
      </div>
    </>
  );
};

export default Profile;
