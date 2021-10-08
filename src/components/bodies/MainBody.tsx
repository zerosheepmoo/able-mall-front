import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import BoardLayout from "../section/BoardLayout";
import CaraMain from "../section/CaraMain";
import SignIn from "../section/SignIn";
import SignedIn from "../section/SignedIn";
import BannerLayout from "../section/BannerLayout";

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
    const [loggedIn, setLoggedIn] = useState(false);
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");

    const handleSignIn = (email?: string, pw?: string) => {
        if (!email) {
            alert("Plz, input an email!");
        } else if (!pw) {
            alert("Plz, input an password!");
        } else if (email === "able@ablemall.com" && pw === "mall") {
            setLoggedIn(true);
        } else {
            alert(
                "There is no such user! or Wrong pw!\nPlz input the test account:\nemail: able@ablemall.com, pw: mall"
            );
        }
    };
    const signOut = () => {
        setLoggedIn(false);
    };

    return (
        <>
            <Grid container item sm={6} md={8} lg={9}>
                <Grid container item xs={12}>
                    <CaraMain />
                </Grid>
                <Grid container item spacing={2}>
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
                    {/*<MainVideo /> */}
                    비디오가 들어갈 자리
                </Grid>
                {/* bottom2 */}
                <Grid item>
                    <Box></Box>
                </Grid>
            </Grid>
            <Grid container item sm={6} md={4} lg={3} justifyContent="center">
                <Paper sx={{ pb: 2, mr: 2, mb: 4, width: "100%" }}>
                    {loggedIn ? (
                        <SignedIn
                            email={email}
                            nickname="은방울꽃"
                            signout={signOut}
                            points={49000}
                        />
                    ) : (
                        <SignIn
                            email={{ value: email, dispatch: setEmail }}
                            pw={{ value: pw, dispatch: setPw }}
                            handleSignIn={handleSignIn}
                        />
                    )}

                    <BannerLayout
                        imgsrc="https://images.unsplash.com/photo-1631125288682-dd35fb27a0e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMzY5Mjk1NQ&ixlib=rb-1.2.1&q=80&w=1080"
                        alt="banner-sample"
                        bText="배너 / 광고 텍스트"
                    />
                </Paper>
            </Grid>
        </>
    );
};

export default MainBody;
