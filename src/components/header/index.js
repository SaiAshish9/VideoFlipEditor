import React from "react";
import { Container, TabContainer } from "./styles";
import { Tab } from "./components";
import { TABS } from "constants/index";

const Header = ({ selected, setSelected }) => {
  return (
    <Container>
      <p>Cropper</p>
      <TabContainer>
        {TABS.map((item, _) => (
          <Tab
            key={item.title}
            tag={item}
            selected={selected}
            onClick={() => setSelected(item.title)}
          />
        ))}
      </TabContainer>
    </Container>
  );
};

export default Header;
