import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay, } from "@chakra-ui/react";
import { memo, FC } from "react";


type Props = {
    isOpen: boolean;
    onClose: () => void;
    onClickTop: () => void;
    onClickProfileManagement: () => void;
    onClickSetting: () => void;
}

export const MenuDrawer: FC<Props> = memo((props) => {

    const { isOpen, onClose, onClickTop, onClickProfileManagement, onClickSetting } = props;

    return (
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerBody p={0} bg={"gray.100"}>
                    {/* <DrawerCloseButton /> */}
                    <Button w={"100%"} onClick={onClickTop}>TOP</Button>
                    <Button w={"100%"} onClick={onClickProfileManagement}>プロフィール一覧</Button>
                    <Button w={"100%"} onClick={onClickSetting}>設定</Button>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
});