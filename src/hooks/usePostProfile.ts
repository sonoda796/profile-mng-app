import { useCallback, useState } from "react";
import axios from "axios";

import { Profile } from "../types/api/profile";
import { useProfile } from "./useProfile";

export const usePostProfile = () => {
    // const { showMessage } = useMessage();

    const [loading, setLoading] = useState(false);
    const { setChangedProfile } = useProfile();

    const postProfile = useCallback((props: Profile, onClose: () => void) => {

        const { id, name, nickName, groupName, age, birthDay, gender, address, email, favoriteFood, favoriteDrink, hobby } = props;

        setLoading(true);
        axios.post('https://jd1kjojkwf.execute-api.ap-northeast-1.amazonaws.com/test/MySQLDBManager',
            {
                "payload": {
                    "profile": {
                        "id": id,
                        "name": name,
                        "nickName": nickName,
                        "groupName": groupName,
                        "age": age,
                        "birthDay": birthDay,
                        "gender": gender,
                        "address": address,
                        "email": email,
                        "favoriteFood": favoriteFood,
                        "favoriteDrink": favoriteDrink,
                        "hobby": hobby
                    }
                }
            }
        ).then((res) => {

            // 登録成功時はプロフィール一覧を再レンダリング
            setChangedProfile(res.data);
            onClose();

        }).catch(() => {

            // showMessage({ title: "ユーザー取得に失敗しました", status: "error" })
        }).finally(() => {

        });
    }, []);

    return { postProfile };
}