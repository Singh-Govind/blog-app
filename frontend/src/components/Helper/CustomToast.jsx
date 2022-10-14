import { Box, useToast } from "@chakra-ui/react";

export default function CustomToast({ pos, toastText, bgColor }) {
  const toast = useToast();
  return (
    <>
      {toast({
        position: pos,
        render: () => (
          <Box color="white" p={3} bg={`${bgColor}.500`}>
            {toastText}
          </Box>
        ),
      })}
    </>
  );
}
