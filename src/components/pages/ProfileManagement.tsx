import {
    Wrap,
    WrapItem,
    useDisclosure,
} from "@chakra-ui/react";
import { memo, FC, useCallback, useEffect, useState, } from "react";

import { ProfileCard } from "../organisms/profile/ProfileCard";
import { useAllProfiles } from "../../hooks/useAllProfiles";
import { ProfileDetailModal } from "../organisms/modal/ProfiledetailModal";
import { useSelectProfile } from "../../hooks/useSelectProfile";
import { AddProfileButton } from "../atoms/button/AddProfileButton";

export const ProfileManagement: FC = memo(() => {

    const [detailModalTitle, setDetailModalTitle] = useState("");

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { getProfiles, profiles } = useAllProfiles();
    const { onSelectProfile, selectedProfile } = useSelectProfile();

    useEffect(() => getProfiles(), [getProfiles]);

    const onClickProfile = useCallback(

        (id: number) => {
            setDetailModalTitle("プロフィール詳細");
            onSelectProfile({ id, profiles, onOpen });
        },
        [profiles, onSelectProfile, onOpen]
    );

    const onClickAddProfileButton = (
        (id: number) => {
            setDetailModalTitle("プロフィール登録");
            onSelectProfile({ id, profiles, onOpen });
        });

    return (
        <>
            <Wrap p={{ base: "4px", md: "10px" }}>
                {profiles.map(obj => (
                    <WrapItem key={obj.id} mx={"auto"}>
                        <ProfileCard id={obj.id} name={obj.name} nickName={obj.nickName} groupName={obj.groupName} age={obj.age} birthDay={obj.birthDay} gender={obj.gender} address={obj.address} email={obj.email} favoriteFood={obj.favoriteFood} favoriteDrink={obj.favoriteDrink} hobby={obj.hobby} onClick={onClickProfile}></ProfileCard>
                    </WrapItem>
                ))}
            </Wrap >

            <AddProfileButton onClick={() => onClickAddProfileButton(0)}></AddProfileButton>
            <ProfileDetailModal isOpen={isOpen} onClose={onClose} isAdmin={false} profile={selectedProfile} title={detailModalTitle} />
        </>
    );
});