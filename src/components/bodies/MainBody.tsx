import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import BoardLayout from "../section/BoardLayout";
import CaraMain from "../section/CaraMain";
import SignIn from "../section/SignIn";
import SignedIn from "../section/SignedIn";
import BannerLayout from "../section/BannerLayout";
import MainVideo from "../section/MainVideo";
import ReactPlayer from "react-player";
import { Typography } from "@mui/material";

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

const MainBody: React.VFC = () => {
    return (
        <>
            <Grid container item sm={12} md={12} lg={12} sx={{ m: 1 }}>
                <Grid container item xs={12} md={12} lg={8}>
                    <CaraMain />
                </Grid>
                <Grid
                    container
                    item
                    display={{ xs: "none", md: "flex" }}
                    md={6}
                    lg={4}
                    order={1}
                    flexDirection="column"
                >
                    <MainVideo />
                </Grid>
                <Grid container item xs={12} md={6} lg={4} order={1}>
                    <BoardLayout
                        title="에이블몰 업데이트 소식"
                        contents={updatesContents}
                        rootSProps={{ ml: 2, mr: 2, mb: 2 }}
                    />
                </Grid>
                <Grid container item xs={12} md={6} lg={4} order={3}>
                    <BoardLayout
                        title="에이블몰 건의함"
                        contents={requetContents}
                        rootSProps={{ ml: 2, mr: 2, mb: 2 }}
                    />
                </Grid>
                <Grid container item xs={12} md={6} lg={4} order={2}>
                    <BoardLayout
                        title="장애인 관련 새 소식"
                        contents={newsContents}
                        rootSProps={{ ml: 2, mr: 2, mb: 2 }}
                    />
                </Grid>
                {/* footer? */}
                <Grid container item order={5}>
                    {/* <MainVideo /> */}
                </Grid>
            </Grid>
        </>
    );
};

export default MainBody;
