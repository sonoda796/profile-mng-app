import { ChangeEvent, memo, useEffect, useState, FC } from "react";
import {
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack
} from "@chakra-ui/react";

import { Profile } from "../../../types/api/profile";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import { usePostProfile } from "../../../hooks/usePostProfile";

type Props = {
    profile: Profile | undefined;
    isOpen: boolean;
    isAdmin?: boolean;
    onClose: () => void;
    title: string;
};

export const ProfileDetailModal: FC<Props> = memo(props => {

    const { isOpen, onClose, profile, title } = props;
    const { postProfile } = usePostProfile();

    const [id, setId] = useState<number>(0);
    const [name, setName] = useState("");
    const [nickName, setNickName] = useState("");
    const [groupName, setGroupName] = useState("");
    const [age, setAge] = useState<number>(0);
    const [birthDay, setBirthday] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [favoriteFood, setFavoriteFood] = useState("");
    const [favoriteDrink, setFavoriteDrink] = useState("");
    const [hobby, setHobby] = useState("");

    useEffect(() => {

        setName(profile?.name ?? "");
        setEmail(profile?.email ?? "");
        setId(profile?.id ?? 0);
        setName(profile?.name ?? "");
        setNickName(profile?.nickName ?? "");
        setGroupName(profile?.groupName ?? "");
        setAge(profile?.age ?? 0);
        setBirthday(profile?.birthDay ?? "");
        setGender(profile?.gender ?? "");
        setAddress(profile?.address ?? "");
        setEmail(profile?.email ?? "");
        setFavoriteFood(profile?.favoriteFood ?? "");
        setFavoriteDrink(profile?.favoriteDrink ?? "");
        setHobby(profile?.hobby ?? "");

    }, [profile]);

    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
    const onChangeNickName = (e: ChangeEvent<HTMLInputElement>) => setNickName(e.target.value);
    const onChangeGroupName = (e: ChangeEvent<HTMLInputElement>) => setGroupName(e.target.value);
    const onChangeAge = (e: ChangeEvent<HTMLInputElement>) => setAge(e.target.valueAsNumber);
    const onChangeBirthday = (e: ChangeEvent<HTMLInputElement>) => setBirthday(e.target.value);
    const onChangeGender = (e: ChangeEvent<HTMLInputElement>) => setGender(e.target.value);
    const onChangeAddress = (e: ChangeEvent<HTMLInputElement>) => setAddress(e.target.value);
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const onChangeFavoriteFood = (e: ChangeEvent<HTMLInputElement>) => setFavoriteFood(e.target.value);
    const onChangeFavoriteDrink = (e: ChangeEvent<HTMLInputElement>) => setFavoriteDrink(e.target.value);
    const onChangeHobby = (e: ChangeEvent<HTMLInputElement>) => setHobby(e.target.value);

    const onClickPostButton = () => {
        postProfile({ id, name, nickName, groupName, age, birthDay, gender, address, email, favoriteFood, favoriteDrink, hobby }, onClose);
    }

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            motionPreset="slideInBottom"
            autoFocus={false}
        >
            <ModalOverlay />
            <ModalContent pb={2}>
                <ModalHeader>{title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody mx={6}>
                    <Stack spacing={4}>
                        <FormControl>
                            <FormLabel>名前</FormLabel>
                            <Input
                                value={name}
                                // isReadOnly={!isAdmin}
                                onChange={onChangeName}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>ニックネーム</FormLabel>
                            <Input
                                value={nickName}
                                // isReadOnly={!isAdmin}
                                onChange={onChangeNickName}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>グループ</FormLabel>
                            <Input
                                type="groupName"
                                value={groupName}
                                // isReadOnly={!isAdmin}
                                onChange={onChangeGroupName}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>年齢</FormLabel>
                            <Input
                                type="number"
                                value={age}
                                // isReadOnly={!isAdmin}
                                onChange={onChangeAge}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>誕生日</FormLabel>
                            <Input
                                type="birthDay"
                                value={birthDay}
                                // isReadOnly={!isAdmin}
                                onChange={onChangeBirthday}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>性別</FormLabel>
                            <Input
                                type="gender"
                                value={gender}
                                // isReadOnly={!isAdmin}
                                onChange={onChangeGender}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>住所</FormLabel>
                            <Input
                                type="address"
                                value={address}
                                // isReadOnly={!isAdmin}
                                onChange={onChangeAddress}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>email</FormLabel>
                            <Input
                                type="email"
                                value={email}
                                // isReadOnly={!isAdmin}
                                onChange={onChangeEmail}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>好きな食べ物</FormLabel>
                            <Input
                                type="favoriteFood"
                                value={favoriteFood}
                                // isReadOnly={!isAdmin}
                                onChange={onChangeFavoriteFood}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>好きな飲み物</FormLabel>
                            <Input
                                type="favoriteDrink"
                                value={favoriteDrink}
                                // isReadOnly={!isAdmin}
                                onChange={onChangeFavoriteDrink}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>趣味</FormLabel>
                            <Input
                                type="hobby"
                                value={hobby}
                                // isReadOnly={!isAdmin}
                                onChange={onChangeHobby}
                            />
                        </FormControl>
                    </Stack>
                </ModalBody>
                {/* {isAdmin && ( */}
                <ModalFooter>
                    <PrimaryButton onClick={onClickPostButton}>登録</PrimaryButton>
                </ModalFooter>
                {/* )} */}
            </ModalContent>
        </Modal>
    );
});