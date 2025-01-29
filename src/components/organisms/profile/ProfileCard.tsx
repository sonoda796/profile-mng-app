import { Wrap, WrapItem, Box, Stack, Image, Text } from "@chakra-ui/react";
import { memo, FC } from "react";

type Props = {
    id: number;
    name: string;
    nickName: string;
    groupName: string;
    age: number;
    birthDay: string;
    gender: string;
    address: string;
    email: string;
    favoriteFood: string;
    favoriteDrink: string;
    hobby: string;
    onClick: (id: number) => void;
}

export const ProfileCard: FC<Props> = memo((props) => {

    const { id, nickName, groupName, onClick } = props;

    return (
        <Box
            w={"260px"}
            h={"260px"}
            bg={"white"}
            borderRadius={"10px"}
            shadow={"md"}
            p={4}
            _hover={{ cursor: "pointer", opacity: 0.8 }}
            onClick={() => onClick(id)}>
            <Stack textAlign={"center"}>
                <Image boxSize={"160px"} src="https://picsum.photos/300/200" borderRadius={"full"} m={"auto"} />
                <Text fontSize={"lg"}>{nickName}</Text>
                <Text fontSize={"sm"} color={"gray"}>{groupName}</Text>
            </Stack>
        </Box>
    )
});