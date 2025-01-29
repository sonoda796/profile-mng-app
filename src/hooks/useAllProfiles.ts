/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from "react";
import axios from "axios";

import { Profile } from "../types/api/profile";
// import { useMessage } from "./useMessage";
import { useProfile } from "./useProfile";

export const useAllProfiles = () => {
    // const { showMessage } = useMessage();

    const [loading, setLoading] = useState(false);
    const [profiles, setProfiles] = useState<Array<Profile>>([]);
    const { changedProfile } = useProfile();

    const getProfiles = useCallback(() => {

        console.log("ユーザー一覧取得")
        setLoading(true);
        axios
            .get("https://jd1kjojkwf.execute-api.ap-northeast-1.amazonaws.com/test/MySQLDBManager")
            .then(res => {

                setProfiles(res.data)
            })
            .catch(() => { }
                // showMessage({ title: "ユーザー取得に失敗しました", status: "error" })
            )
            .finally(() => setLoading(false));
    }, [changedProfile]);

    return { getProfiles, loading, profiles };
};