import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ComplexNav from "./nav/ComplexNav";
import useWindowWidthSize from "../hooks/useWindowWidthSize";
import BoardLayout from "./section/BoardLayout";
import CaraMain from "./section/CaraMain";
import SignIn from "./SignIn";
import BannerLayout from "./section/BannerLayout";
import { Switch, Route, useHistory } from "react-router-dom";

const locas = ["", "orgsrh", "addser", "shop", "polsrh"];
const updatesContents = [
    { title: "새해 복 많이 받으세용!", date: "2022-01-02" },
    { title: "12월의 블랙 프라이데이", date: "2021-12-12" },
    { title: "에이블몰 크리스마스 이벤트", date: "2021-11-21" },
    { title: "가래떡을 전하세요", date: "2021-11-09" },
    { title: "10/31 에이블몰 오픈!", date: "2021-10-31" },
];
const newsContents = [
    { title: "2022 장애인 지원사업", date: "2022-01-03" },
    { title: "요셉의 집, 우리도 즐거워요", date: "2021-11-01" },
    { title: "경기북부, 장애인 시설 확충하겠다.", date: "2021-10-21" },
    { title: "양주시 장애인 시설...훈훈하다", date: "2021-10-15" },
    { title: "에이블몰, 포보스 선정 영향력 있는", date: "2021-10-11" },
];
const requetContents = [
    { title: "건의합니다.", date: "2022-01-03" },
    { title: "저도 건의해요.", date: "2021-12-01" },
    { title: "건의", date: "2021-11-21" },
    { title: "건의합니다", date: "2021-11-15" },
    { title: "건의해요", date: "2021-10-09" },
];

const MainPage: React.VFC = () => {
    const [tabIdx, setTabIdx] = useState(0);
    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabIdx(newValue);
        handleNavClick(newValue);
    };
    const winWidth = useWindowWidthSize();

    const history = useHistory();

    const handleNavClick = (idx: number) => {
        history.push(`/${locas[idx]}`);
    };

    return (
        <div style={{ marginBottom: 70 }}>
            <Grid container spacing={2}>
                {/* navigation */}
                <Grid item sx={{ width: "100%" }}>
                    <ComplexNav
                        winWidth={winWidth}
                        value={tabIdx}
                        handleChange={handleTabChange}
                        locas={locas}
                    />
                </Grid>
                {/* mainbody */}
                <Switch>
                    <Route path="/" exact>
                        <Grid container item sm={8} lg={9} spacing={2}>
                            <Grid container item xs={12}>
                                <CaraMain />
                            </Grid>
                            <Grid container item>
                                <Grid container item xs={12} md={6} lg={4}>
                                    <BoardLayout
                                        title="에이블몰 업데이트 소식"
                                        contents={updatesContents}
                                        rootSProps={{ ml: 2, mr: 2, mb: 2 }}
                                    />
                                </Grid>
                                <Grid container item xs={12} md={6} lg={4}>
                                    <BoardLayout
                                        title="장애인 관련 새 소식"
                                        contents={newsContents}
                                        rootSProps={{ ml: 2, mr: 2, mb: 2 }}
                                    />
                                </Grid>
                                <Grid container item xs={12} md={12} lg={4}>
                                    <BoardLayout
                                        title="에이블몰 건의함"
                                        contents={requetContents}
                                        rootSProps={{ ml: 2, mr: 2, mb: 2 }}
                                    />
                                </Grid>
                            </Grid>
                            {/* bottom */}
                            <Grid container item>
                                2
                            </Grid>
                            {/* bottom2 */}
                            <Grid item>
                                <Box
                                    sx={{
                                        height: 1000,
                                        backgroundColor: "#000000",
                                    }}
                                ></Box>
                            </Grid>
                        </Grid>
                        <Grid container item sm={4} lg={3}>
                            <Paper sx={{ mr: 2 }}>
                                <SignIn />

                                <BannerLayout
                                    imgsrc="https://images.unsplash.com/photo-1631125288682-dd35fb27a0e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMzY5Mjk1NQ&ixlib=rb-1.2.1&q=80&w=1080"
                                    alt="banner-sample"
                                    bText="배너 / 광고 텍스트"
                                />
                            </Paper>
                        </Grid>
                    </Route>
                    <Route path="/orgsrh">
                        <div>기관검색</div>
                    </Route>
                    <Route path="/addser">
                        <div>서비스신청</div>
                    </Route>
                    <Route path="/shop">
                        <div>상품구매</div>
                    </Route>
                    <Route path="/polsrh">
                        <div>정책구매</div>
                    </Route>
                    <Route path="/auth">
                        <div>인증</div>
                    </Route>
                </Switch>
            </Grid>
        </div>
    );
};

export default MainPage;
