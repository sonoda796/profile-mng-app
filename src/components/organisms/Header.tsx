import { Box, Flex, Heading, Button } from "@chakra-ui/react";
import { memo, FC } from "react";
import { useDisclosure, AddIcon } from "@chakra-ui/icons";
import { useNavigate, Link } from "react-router-dom";

import { MenuDrawer } from "../molecules/MenuDrawer";
import { MenuIconButton } from "../atoms/button/MenuIconButton";

export const Header: FC = memo(() => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    let navigate = useNavigate();

    const onClickTop = () => {
        navigate("/home");
    }
    const onClickUserManagement = () => {
        navigate("/profile_management");
    }
    const onClickSetting = () => {
        navigate("/setting");
    }

    return (
        <>
            <Flex
                as="nav"
                bg="blue.300"
                color="gray.50"
                align="center"
                justify="space-between"
                padding={{ base: 3, md: 5 }}>
                <Flex as={"a"} pr={3} _hover={{ cursor: "pointer" }}>
                    <Heading
                        as={"h1"}
                        fontSize={{ base: "md", md: "lg" }}>
                        プロフィール管理
                    </Heading>
                </Flex>

                <Flex align={"center"} fontSize={"sm"} flexGrow={2} display={{ base: "none", md: "flex" }}>
                    <Box pr={4}>
                        <Link to={"/profile_management"}>プロフィール一覧</Link>
                    </Box>
                    <Link to={"/setting"}>設定</Link>
                </Flex>

                <MenuIconButton onOpen={onOpen} />

            </Flex >
            <MenuDrawer isOpen={isOpen} onClose={onClose} onClickTop={onClickTop} onClickProfileManagement={onClickUserManagement} onClickSetting={onClickSetting} />
        </>


    )
});