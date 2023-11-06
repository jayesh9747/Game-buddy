import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeswitch from "./ColorModeswitch";

const Navbar = () => {
  return (
    <HStack padding={"10px"} justifyContent={"space-between"}>
      <Image src={logo} boxSize={"60px"}></Image>
      <ColorModeswitch />
    </HStack>
  );
};

export default Navbar;
