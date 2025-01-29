import { memo, FC } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

type Props = {
    onOpen: () => void
}

export const MenuIconButton: FC<Props> = memo((props) => {

    const { onOpen } = props

    return (

        <HamburgerIcon
            display={{ base: "block", md: "none" }}
            onClick={onOpen} />
    )
});