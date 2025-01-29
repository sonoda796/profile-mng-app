import { memo, FC } from "react";
import { Button } from "@chakra-ui/icons";

type Props = {
    onClick: () => void
}

export const AddProfileButton: FC<Props> = memo((props) => {

    const { onClick } = props

    return (

        <Button boxSize={{ base: "50px", md: "65px" }} bg="blue.300" color={"white"} pos="fixed" bottom="50px" right="50px" borderRadius={"full"} fontSize={{ base: "3xl", md: "4xl" }} onClick={onClick}>
            ＋
        </Button>
    )
});