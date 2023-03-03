import { useLocation } from "react-router-dom";
import { Stack, Progress, Text, Link } from "@chakra-ui/react";

export const Stepper = () => {
  const location = useLocation();

  const getLinkClass = (path) => {
    return (
      "nav-link disabled " + (path === location.pathname ? "active" : undefined)
    );
  };

  return (
    <Stack direction="row" spacing={4} mb={4}>
      <Link href="/" className={getLinkClass("/")}>
        <Text>Step 1</Text>
      </Link>
      <Progress value={33} size="sm" w="50%" />
      <Link href="/nummer" className={getLinkClass("/nummer")}>
        <Text>Step 2</Text>
      </Link>
      <Progress value={66} size="sm" w="50%" />
      <Link href="/confirm" className={getLinkClass("/confirm")}>
        <Text>Step 3</Text>
      </Link>
    </Stack>
  );
};
