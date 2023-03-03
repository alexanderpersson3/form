import { forwardRef } from "react";
import { Button as ChakraButton } from "@chakra-ui/react";

export const Button = forwardRef(
  ({ children, variant = "primary", ...props }, ref) => {
    return (
      <ChakraButton className={`btn btn-${variant}`} {...props}>
        {children}
      </ChakraButton>
    );
  }
);
