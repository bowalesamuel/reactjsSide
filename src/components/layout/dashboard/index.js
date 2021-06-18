import React, { useState } from "react";
import { connect } from "react-redux";
import { Layout, Menu, 
  // Avatar
 } from "antd";
import { Link, useHistory, useLocation } from "react-router-dom";
import {
  CaretDown,
  Power,
} from "../../../assets/svg";
import { navigation } from "./data";
import { BellOutlined, MessageOutlined } from "@ant-design/icons"

import styles from "./styles.module.scss";

import png from "../../../assets/png";


const { Header, Content, Sider, 
  Footer
 } = Layout;

function Toggle() {
  return (
    <span role="img" aria-label="bars" className="anticon anticon-bars">
      <svg
        viewBox="0 0 1024 1024"
        focusable="false"
        data-icon="bars"
        width="1em"
        height="1em"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"></path>
      </svg>
    </span>
  );
}

function getWindowDimensions() {
  const { screen } = window;
  let width = screen.width;
  let height = screen.height;
  return {
    width,
    height,
  };
}

const DashboardLayout = ({ children, bg, user, logout, type }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [showSideBar, setShowSideBar] = useState(true);
  // const [collapsed, setCollapsed] = useState(false);
  const [windowDimensions,] = useState(
    getWindowDimensions()
  );

  let location = useLocation();
  const { pathname } = location;

  const toggle = () => {
    setShowSideBar(!showSideBar);
  };
  const history = useHistory()

  return (
    <Layout>
      {/* {console.log("dimension", windowDimensions)} */}
      <Sider
      // breakpoint="lg"
      // collapsedWidth="0"
      // onBreakpoint={broken => {
      //   console.log(broken);
      // }}
      // onCollapse={(collapsed, type) => {
      //   console.log(collapsed, type);
      // }}

      breakpoint="lg"
        collapsedWidth="0"
        trigger={null}
        collapsed={showSideBar}
        onBreakpoint={(broken) => {
          setShowSideBar(broken);
        }}

        // breakpoint="lg"
        // // collapsedWidth={windowDimensions.width < 866 ? "0" : "80"}
        // trigger={null}
        // onCollapse={toggle}
        // collapsed={showSideBar}
        // onBreakpoint={(broken) => {
        //   setShowSideBar(broken);
        // }}
        width={230}
        style={{
          overflow: "auto",
          height: "100vh",
            // position: "fixed",
          //   left: 0,
          backgroundColor: "#fff",
        }}
      >
        <div className={styles.logo}>
          {/* <AstroLogoWhite /> */}
          <img src={png.StarWarsLogo} width="150" height="50" />
        </div>
        <Menu
          style={{
            backgroundColor: "#fff",
            color:"#000",
            
          }}
          theme="light"
          mode="inline"
          defaultSelectedKeys={[pathname]}
        >
          {navigation &&
            navigation.map(({ Icon, Name, route }) => (
              <Menu.Item key={route} icon={<img src={Icon} style={{ fontSize: 18 }} />}>
                <Link to={route} style={{fontSize:15}}>{Name}</Link>
              </Menu.Item>
            ))}
        </Menu>
      </Sider>

      <Layout
        className="site-layout"
        style={
          bg ? { backgroundColor: "#fff", minWidth: 300 } : { minWidth: 300 }
        }
      >
        <Header
          className="site-layout-background"
          style={{ padding: 0, backgroundColor: "#fff" }}
        >
          <div className={styles.header}>
            <div
              className={styles.header__left}
              style={{ display: "flex", alignItems: "center" }}
            >
              <div
                style={{ cursor: "pointer" }}
                id={styles.header__left_toggler}
                onClick={() => setShowSideBar(!showSideBar)}
              >
                <Toggle />
                </div>
              {/* {windowDimensions.width < 866 && (
                <div
                  style={{ cursor: "pointer", fontSize:20, color:'#921946' }}
                  id={styles.header__left_toggler}
                  onClick={() => setShowSideBar(!showSideBar)}
                >
                  <Toggle />
                </div>
              )} */}
              {type ? type: "Dashboard"}
            </div>
            <div className={styles.header__right}>
              <div
                style={{ display: "flex", alignItems: "center" }}
                onClick={() => setShowDropDown(!showDropDown)}
              >
                {/* <div className={styles.header__right__avatar}>
                  {` - - `}
                  </div> */}
                  <div className={styles.header__right__name}>
                  <MessageOutlined />
                  </div>
                <div className={styles.header__right__name}>
                  <BellOutlined />
                  </div>
                <img src={png.Avatar} width="40" height="40" />
                {/* <CaretDown /> */}
                {showDropDown && (
                  <div
                    className={styles.dropDown}
                    style={{
                      top: 50,
                      backgroundColor: "#fff",
                      right: 20,
                      boxShadow: "4px 19px 20px 5px #cecece",
                      zIndex: 9,
                    }}
                  >
                    <div
                      style={{
                        padding: "0px 15px",
                        backgroundColor: "#fff",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                      }}
                      onClick={() => history.push("/")}
                    >
                      <Power /> <span>Logout</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Header>

        <Content
          style={{
            padding: "0px 0px 0",
            overflowY: "auto",
            backgroundColor: "#F7F4F4",
            // maxWidth:"100%"
          }}
          className={styles.maincontent}
        >
          {children}
        </Content>
        
      </Layout>
     
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardLayout);
