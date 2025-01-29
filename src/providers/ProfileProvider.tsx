import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useState
} from "react";

import { Profile } from "../types/api/profile";

//   type LoginUser = User & { isAdmin: boolean };

export type ProfileContextType = {
    changedProfile: Profile | null;
    setChangedProfile: Dispatch<SetStateAction<Profile | null>>
};

export const ProfileContext = createContext<ProfileContextType>({} as ProfileContextType);

// 変更、登録したプロフィール情報を保持するcontext
export const ProfileProvider = (props: { children: ReactNode }) => {
    const { children } = props;
    const [changedProfile, setChangedProfile] = useState<Profile | null>(null);

    return (
        <ProfileContext.Provider value={{ changedProfile, setChangedProfile }}>
            {children}
        </ProfileContext.Provider>
    );
};