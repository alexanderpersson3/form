import { Box } from "@chakra-ui/react";

export const Form = ({ children, ...props }) => {
  return (
    <Box as="form" className="row" {...props} noValidate>
      {children}
    </Box>
  );
};
