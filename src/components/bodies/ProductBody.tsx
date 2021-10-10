import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import ProductCard from "../section/ProductCard";
import { ProductType } from "../../interfaces/consts";

import Bunjojang from "../../images/bunjojang.png";
import Dobble from "../../images/dobble.png";
import LangTera from "../../images/langtera.png";
import PerBattle from "../../images/personalitybattle.png";
import Gosum from "../../images/gosumdot.png";
import MagnetLang from "../../images/magnetlang.png";
import MeCon from "../../images/meconbey.png";
import MeMind from "../../images/memind.png";
import Que from "../../images/questionmart.png";
import Safe from "../../images/safe.png";
import Making from "../../images/making.png";
import Tape from "../../images/sujungtape.png";
import ProductTool from "../section/ProductTool";
import { ProductBodyProps } from "../../interfaces/props";

const itemData = [
    {
        img: Bunjojang,
        title: "분노조절게임",
        category: ProductType.PUZ,
        price: 39000,
    },
    {
        img: Dobble,
        title: "도블동물원",
        category: ProductType.PUZ,
        price: 19800,
    },
    {
        img: LangTera,
        title: "지적장애아동언어치료",
        category: ProductType.LANG,
        price: 19000,
    },
    {
        img: PerBattle,
        title: "성격대결",
        category: ProductType.CREATE,
        price: 70000,
        exPrice: 100000,
    },
    {
        img: Gosum,
        title: "촉감보드: 고슴도치닷",
        category: ProductType.CREATE,
        price: 39000,
        exPrice: 79000,
    },
    {
        img: MagnetLang,
        title: "자석 언어카드",
        category: ProductType.LANG,
        price: 41000,
    },
    {
        img: MeCon,
        title: "내가 말하기 게임",
        category: ProductType.LANG,
        price: 70000,
    },
    {
        img: MeMind,
        title: "내 마음이 들리니?",
        category: ProductType.CREATE,
        price: 51000,
    },
    {
        img: Que,
        title: "마트에간 궁금이",
        category: ProductType.PHY,
        price: 48000,
    },
    {
        img: Safe,
        title: "안전빙고",
        category: ProductType.PUZ,
        price: 18000,
    },
    {
        img: Making,
        title: "요리를만들어요(10인용)",
        category: ProductType.MAKE,
        price: 22000,
    },
    {
        img: Tape,
        title: "수정테이프",
        category: ProductType.CLASS,
        price: 4500,
    },
];

const tabsKind = [
    ProductType.ALL,
    ProductType.CREATE,
    ProductType.LANG,
    ProductType.MAKE,
    ProductType.PUZ,
    ProductType.PHY,
    ProductType.CLASS,
];

const ProductBody: React.VFC<ProductBodyProps> = (props) => {
    const { info } = props;
    const [categoryType, setCategoryType] = useState(0);

    const handleCategory = (event: React.SyntheticEvent, newValue: number) => {
        setCategoryType(newValue);
    };
    return (
        <>
            <Grid container item justifyContent="center" xs={12}>
                <Box
                    sx={{
                        borderBottom: 1,
                        borderColor: "divider",
                        width: "80%",
                        pt: 1,
                        mt: 2,
                        mb: 3,
                    }}
                >
                    <Tabs
                        variant="scrollable"
                        scrollButtons="auto"
                        sx={{
                            width: "100%",
                            display: "flex",
                        }}
                        value={categoryType}
                        onChange={handleCategory}
                    >
                        {tabsKind.map((tn) => (
                            <Tab
                                sx={{ flex: 1, minWidth: 152 }}
                                key={tn}
                                label={tn}
                            />
                        ))}
                    </Tabs>
                </Box>
            </Grid>
            <Grid container item xs={12} justifyContent="center">
                {itemData.map((item) => {
                    if (categoryType === 0) {
                        return <ProductCard item={item} />;
                    }
                    return (
                        item.category === tabsKind[categoryType] && (
                            <ProductCard item={item} />
                        )
                    );
                })}
            </Grid>
            <ProductTool info={info} />
        </>
    );
};

export default ProductBody;
