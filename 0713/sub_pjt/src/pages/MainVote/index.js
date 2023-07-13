import React from "react";
import { Grid, Tabs, Tab, Box } from "@material-ui/core";
import "./styles.css";
import Image1 from "./box.PNG";


const ScrollableTabs = ({ onChange }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (onChange) onChange(event, newValue);
  };

  const tabsData = [
    { label: "brand", content: "BRAND" },
    { label: "food", content: "FOOD" },
    { label: "game", content: "GAME" },
    { label: "animals", content: "ANIMALS" },
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
          <h1 className="TabPanel" style={{ color: 'navy' }}>{tab.content}</h1>
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
  const [selectedTab, setSelectedTab] = React.useState(0);
  const tabsData = [
    { label: "brand", content: "BRAND" },
    { label: "food", content: "FOOD" },
    { label: "game", content: "GAME" },
    { label: "animals", content: "ANIMALS" },
    { label: "drink", content: "DRINK" },
    { label: "books", content: "BOOKS" },
    { label: "clothes", content: "CLOTHES" },
    { label: "water", content: "WATER" },
  ];

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div>
      <h2>Select Category Option</h2>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ScrollableTabs onChange={handleTabChange} />
        </Grid>
        <Grid item xs={12} container justifyContent="center" alignItems="center">
          {tabsData[selectedTab].label === 'brand' && (
            <>
            <div>
              <img className="for_cateimg" src={`https://mobiinsidecontent.s3.ap-northeast-2.amazonaws.com/kr/wp-content/uploads/2021/07/02095908/%EB%82%98%EC%9D%B4%ED%82%A4.png`} />
              <h2 style={{ textAlign: 'center' }}>NIKE</h2>
            </div>
            <div>
              <img className="for_cateimg" src={`https://mega-sport.pro/assets/mgr/images/sliaider-brands/adidas.jpg`} />
              <h2 style={{ textAlign: 'center' }}>ADIDAS</h2>
            </div>
            </>
          )}

          {tabsData[selectedTab].label === 'food' && (
            <>
            <div>
              <img className="for_cateimg" src={`https://img.sbs.co.kr/newimg/news/20191209/201381896_1280.jpg`} />
              <h2 style={{ textAlign: 'center' }}>CHICKEN</h2>
            </div>
            <div>
              <img className="for_cateimg" src={`https://cdn.dominos.co.kr/admin/upload/goods/20200311_5MGKbxlW.jpg`} />
              <h2 style={{ textAlign: 'center' }}>PIZZA</h2>
            </div>
            </>
          )}

          {tabsData[selectedTab].label === 'game' && (
            <>
            <div>
              <img className="for_cateimg" src={`https://source.unsplash.com/random/?badminton`} />
              <h2 style={{ textAlign: 'center' }}>BADMINTON</h2>
            </div>
            <div>
              <img className="for_cateimg" src={`https://source.unsplash.com/random/?pingpong`} />
              <h2 style={{ textAlign: 'center' }}>PINGPONG</h2>
            </div>
            </>
          )}

          {tabsData[selectedTab].label === 'animals' && (
            <>
            <div>
              <img className="for_cateimg" src={`https://source.unsplash.com/random/?dog`} />
              <h2 style={{ textAlign: 'center' }}>DOG</h2>
            </div>
            <div>
              <img className="for_cateimg" src={`https://source.unsplash.com/random/?cat`} />
              <h2 style={{ textAlign: 'center' }}>CAT</h2>
            </div>
            </>
          )}

          {tabsData[selectedTab].label === 'drink' && (
            <>
            <div>
              <img className="for_cateimg" src={`https://source.unsplash.com/random/?soju`} />
              <h2 style={{ textAlign: 'center' }}>SOJU</h2>
            </div>
            <div>
              <img className="for_cateimg" src={`https://source.unsplash.com/random/?beer`} />
              <h2 style={{ textAlign: 'center' }}>BEER</h2>
            </div>
            </>
          )}

          {tabsData[selectedTab].label === 'books' && (
            <>
            <div>
              <img className="for_cateimg" src={`https://img.daily.co.kr/@files/www.daily.co.kr/content_watermark/life/2017/20170504/859b9ec69dcef60de3606fd9eab7e29e.jpg`} />
              <h2 style={{ textAlign: 'center' }}>추리소설</h2>
            </div>
            <div>
              <img className="for_cateimg" src={`https://an2-img.amz.wtchn.net/image/v2/3W5L5z0d7xbv3-IsF9JJpg.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk56STVlREV3T0RCeE9EQWlYU3dpY0NJNklpOTJNaTl6ZEc5eVpTOXBiV0ZuWlM4eE5qTXhNREV6TURVd09UWTBOek13TmpVekluMC5WTkVoNk1RTjctWGFERzVVZjFmRWZoVjUzNUQ3NGhsYUdfa3Q1MmQ5UG80`} />
              <h2 style={{ textAlign: 'center' }}>연애소설</h2>
            </div>
            </>
          )}

        </Grid>
      </Grid>
      {/* <div className="DivLine"></div> */}
    </div>
  );
};




export default MainVote;
