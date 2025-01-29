/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from "react";

import { Profile } from "../types/api/profile";
// import { useMessage } from "./useMessage";

type Props = {
    id: number | null;
    profiles: Array<Profile>;
    onOpen: () => void;
};

// 選択したユーザー情報を特定しモーダルを表示するカスタムフック
export const useSelectProfile = () => {
    //   const { showMessage } = useMessage();

    const [selectedProfile, setSelectedProfile] = useState<Profile>();

    const onSelectProfile = useCallback((props: Props) => {
        const { id, profiles, onOpen } = props;
        const targetProfile = profiles.find(obj => obj.id === id);
        if (!targetProfile) {
            // showMessage({ title: "ユーザーが見つかりません", status: "error" });

            const newProfile: Profile = {
                id: 0,
                name: "",
                nickName: "",
                groupName: "",
                age: 0,
                birthDay: "",
                gender: "",
                address: "",
                email: "",
                favoriteFood: "",
                favoriteDrink: "",
                hobby: ""
            }

            setSelectedProfile(newProfile);
            onOpen();
        } else {
            setSelectedProfile(targetProfile);
            onOpen();
        }
    }, []);
    return { onSelectProfile, selectedProfile };
};