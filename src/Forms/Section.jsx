import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/button";
import { Flex, Heading } from "@chakra-ui/layout";

export const Section = ({ title, children, url }) => {
  const navigate = useNavigate();
  return (
    <Flex direction="column" mb="4" className="section">
      <Flex justify="space-between" align="center" mb="4" className="title-row">
        <Heading as="h4">{title}</Heading>
        <Button type="button" variant="secondary" onClick={() => navigate(url)}>
          Edit
        </Button>
      </Flex>
      <div className="content">{children}</div>
    </Flex>
  );
};

export const SectionRow = ({ children }) => {
  return <div className="section-row">{children}</div>;
};
