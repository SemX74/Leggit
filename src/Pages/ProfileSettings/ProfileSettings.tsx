import { FC } from "react";
import Post from "../../Components/Post/Post";
import { useAppSelector } from "../../Hooks/ReduxHook";
import { useAuth } from "../../Hooks/useAuth";
import "./ProfileSettings.css";
interface ProfileSettingsProps {}

const ProfileSettings: FC<ProfileSettingsProps> = () => {
    const Auth = useAuth()
  return (
    <main className="ProfileSettings-main">
      <h1>Profile Settings</h1>
      <section>
        <form className="settings" action="">
          <label htmlFor="">
            Change usename:
            <input defaultValue={Auth?.user?.username} type="text" />
            <button className="button">Apply</button>
          </label>
          <label htmlFor="">
            Change password:
            <input type="text" defaultValue={Auth?.user?.password}/>
            <button className="button">Apply</button>
          </label>
          <label htmlFor="">
            Change email:
            <input type="text" defaultValue={Auth?.user?.email} />
            <button className="button">Apply</button>
          </label>
        </form>
      </section>
    </main>
  );
};

export default ProfileSettings;
