import React from "react";
import { Grid, Tabs, Tab, Box } from "@material-ui/core";
import "./styles.css";
import Image1 from "./box.PNG";


const ScrollableTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabsData = [
    { label: "brand", content: "BRAND" },
    { label: "food", content: "FOOD" },
    { label: "game", content: "GAME" },
    { label: "anmimals", content: "ANIMALS" },
    { label: "drink", content: "DRINK" },
    { label: "books", content: "BOOKS" },
    { label: "clothes", content: "CLOTHES" },
    { label: "water", content: "WATER" },
  ];

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {tabsData.map((tab, index) => (
          <Tab
            key={index}
            icon={
              <div>
                <div>
                  <img className="for_img"
                    src={`https://source.unsplash.com/random/?${tab.label}`}
                    alt={tab.label}
                  />
                </div>
                <div>{tab.label}</div>
              </div>
            }
            aria-label={tab.label}
          />
        ))}
      </Tabs>
      {tabsData.map((tab, index) => (
        <TabPanel key={index} value={value} index={index}>
          <br></br>
          <h1 className="TabPanel">{tab.content}</h1>
        </TabPanel>
      ))}
    </div>
  );
};

const handleImageClcik = (index) => {
  console.log('클릭')
};

const TabPanel = (props) => {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

const MainVote = () => {
  return (
    <div>
      <h2>Select Category Option</h2>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ScrollableTabs />
        </Grid>
        <Grid item xs={12}>
          <h3>Title</h3> {/* 그리드 아이템 밑에 위치한 타이틀 */}
        </Grid>
      </Grid>
      <div className="DivLine"></div>
    </div>
  );
};

export default MainVote;
