import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Row, Col, Select } from "antd";
import { DashboardLayout } from "../../components/layout";
import styles from "../styles.module.scss";
import { getFilms } from "../../redux/actions/user";
import FilmsSvg from "../../assets/svg/video-camera.svg";
import StarshipSvg from "../../assets/svg/ufo.svg";
import PeopleSvg from "../../assets/svg/people.svg";
import VehicleSvg from "../../assets/svg/taxi.svg";
import SpecieSvg from "../../assets/svg/species.svg";
import { useHistory } from "react-router";
import Films from "./films";


const Home = ({ getFilms }) => {
  useEffect(() => {
    getFilms();
    // eslint-disable-next-line
  }, []);

  const history = useHistory()

  return (
    <DashboardLayout>
      <div className={styles.topbanner}>
      <div className={styles.topbanner__left} />
          
        
        <div className={styles.topbanner__right}>
          <Select
          placeholder="Current Year"
          />
          <Select 
          placeholder="Current Week"
          />
        </div>

      </div>
      <div
        style={{
          paddingRight: 20,
          paddingLeft: 20,
          paddingTop: 20,
          paddingBottom: 20,
          marginBottom:40,
        }}
      >
        <Row gutter={[16, 16]}>
          <Col
            span={4}
            lg={4}
            sm={11}
            md={11}
            xl={4}
            xs={11}
            xxl={4}
            style={{ backgroundColor: "transparent", marginRight: 10 }}
          >
            <div className={styles.topinfo} onClick={()=>history.push("/app")}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 40,
                }}
              >
                <div className={styles.topinfo__title}>Films</div>
                <div
                  className={styles.topinfo__image}
                  style={{ backgroundColor: "#03D4B6" + 30 }}
                >
                  <img src={FilmsSvg} alt="" />
                </div>
              </div>
              <div className={styles.topinfo__statistic}>200</div>
              <div className={styles.topinfo__subtitle}>
                20 More than yesterday
              </div>
            </div>
          </Col>

          <Col
          span={4}
          lg={4}
          sm={11}
          md={11}
          xl={4}
          xs={11}
          xxl={4}
            
            style={{ backgroundColor: "transparent", marginRight: 10 }}
          >
            <div className={styles.topinfo} onClick={()=>history.push("/app/starships")}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 40,
                }}
              >
                <div className={styles.topinfo__title}>Starships</div>
                <div
                  className={styles.topinfo__image}
                  style={{ backgroundColor: "#2170FF" + 30 }}
                >
                  <img src={StarshipSvg} alt="" />
                </div>
              </div>
              <div className={styles.topinfo__statistic}>200</div>
              <div className={styles.topinfo__subtitle}>
                20 More than yesterday
              </div>
            </div>
          </Col>
          <Col
            span={4}
            lg={4}
            sm={11}
            md={11}
            xl={4}
            xs={11}
            xxl={4}
            style={{ backgroundColor: "transparent", marginRight: 10 }}
          >
            <div className={styles.topinfo} onClick={()=>history.push("/app/people")}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 40,
                }}
              >
                <div className={styles.topinfo__title}>People</div>
                <div
                  className={styles.topinfo__image}
                  style={{ backgroundColor: "#353190" + 30 }}
                >
                  <img src={PeopleSvg} alt="" />
                </div>
              </div>
              <div className={styles.topinfo__statistic}>200</div>
              <div className={styles.topinfo__subtitle}>
                20 More than yesterday
              </div>
            </div>
          </Col>
          <Col
            span={4}
            lg={4}
            sm={11}
            md={11}
            xl={4}
            xs={11}
            xxl={4}
            style={{ backgroundColor: "transparent", marginRight: 10 }}
          >
            <div className={styles.topinfo} onClick={()=>history.push("/app/vehicles")}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 40,
                }}
              >
                <div className={styles.topinfo__title}>Vehicles</div>
                <div
                  className={styles.topinfo__image}
                  style={{ backgroundColor: "#F0D93C" + 30 }}
                >
                  <img src={VehicleSvg} alt="" />
                </div>
              </div>
              <div className={styles.topinfo__statistic}>200</div>
              <div className={styles.topinfo__subtitle}>
                20 More than yesterday
              </div>
            </div>
          </Col>
          <Col
            span={4}
            lg={4}
            sm={11}
            md={11}
            xl={4}
            xs={11}
            xxl={4}
            style={{ backgroundColor: "transparent", marginRight: 10 }}
          >
            <div className={styles.topinfo} onClick={()=>history.push("/app/species")}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 40,
                }}
              >
                <div className={styles.topinfo__title}>Species</div>
                <div
                  className={styles.topinfo__image}
                  style={{ backgroundColor: "#353190" + 30 }}
                >
                  <img src={SpecieSvg} alt="" />
                </div>
              </div>
              <div className={styles.topinfo__statistic}>200</div>
              <div className={styles.topinfo__subtitle}>
                20 More than yesterday
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div
        style={{
          paddingRight: 10,
          paddingLeft: 10,
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        <Films/>
      </div>
    </DashboardLayout>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  getFilms: () => {
    dispatch(getFilms());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
