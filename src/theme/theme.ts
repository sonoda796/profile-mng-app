import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({

    styles: {
        global: {
            body: {
                backgroundColor: "gray.100",
                color: "gray"
            }
        }
    }
})

export default theme;
