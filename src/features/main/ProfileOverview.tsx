import Overview from "./Overview";
import Profile from "./Profile";

const ProfileOverview = () => {
  return (
    <div className="p-6">
      <Profile />
      <Overview />
    </div>
  );
};

export default ProfileOverview;
