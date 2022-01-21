import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Rodrigo Monteiro</Text>
          <Text color="gray.300" fontSize="small">
            rodms2306@hotmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Rodrigo Monteiro"
        src="https://github.com/rodrigo-monteiro-silva.png"
      />
    </Flex>
  );
}
