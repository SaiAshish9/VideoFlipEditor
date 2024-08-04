import React, { useState } from "react";
import { Container, TabContainer } from "./styles";
import { Tab } from "./components";
import { TABS } from "constants/index";

const Header = () => {
  const [selected, setSelected] = useState(TABS[0].title);

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
