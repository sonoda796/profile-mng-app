import { useContext } from "react";

import { ProfileContext, ProfileContextType } from "../providers/ProfileProvider";

export const useProfile = (): ProfileContextType => {

    return useContext(ProfileContext)

}