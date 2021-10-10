import React from "react";
import Grid from "@mui/material/Grid";
import ServiceCard from "../section/ServiceCard";

const services = [
    {
        title: "놀이치료",
        desc: `놀이치료는 가장 널리 알려진 치료방법으로써, 4000년의 역사를
        담고 있는 중국무술보다도 과학적이고 효과적이다.`,
        imgsrc: "https://images.unsplash.com/photo-1575364289437-fb1479d52732",
    },
    {
        title: "심리치료",
        desc: `과학적 방법론을 적용시킨 이론을 기반으로 하는 학문 중에서는 낙제점이지만, 그 효과만큼은
        일상 속에서 태양 주위에서 중력에 의해 빛이 얼마만큼 휘는지 깨닫는 것보다 뛰어나다`,
        imgsrc: "https://images.unsplash.com/photo-1495653797063-114787b77b23",
    },
    {
        title: "미술치료",
        desc: `미술의 기원은 무엇일까. 비교적 근대의 잭슨 폴록부터 뒤샹, 피카소, 고갱, 고흐, 밀레, 레오나르도 다빈치까지.
        위대한 화가들이 여럿있으나, 핵심은 그림을 그리고 즐거워하며 마음을 여는 것이다. 마치 선사시대의 동굴벽화 처럼`,
        imgsrc: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7",
    },
    {
        title: "가족상담",
        desc: `가족이 평화로워야 모든 일이 잘풀린다. 가화만사성이라. 가정을 잘 돌보아야 나라를 다스리고 천하를 평정할 수 있다.
        수신제가치국평찬하라.`,
        imgsrc: "https://images.unsplash.com/photo-1609220136736-443140cffec6",
    },
    {
        title: "자조행동 프로그램",
        desc: `이 프로그램은 청소년기 자녀들의 독립적 생활에 필요한 기술을 가르칠 수 있는 효과적인 방법을 제공하고 있습니다. 
        우선, 교수방법의 개요를 읽으면서 내용에 쉽게 접근할 수 있고 일곱 가지 유형의 기술을 지도하는 단계별 지침과 아래의 내용을 만날 수 있을 것입니다.`,
        imgsrc: "https://images.unsplash.com/photo-1495900593237-22dc861b231d",
    },
    {
        title: "학습지원",
        desc: `지원받고 싶은 사람, 손?. 그래 거기 맨앞의 금발머리, 그래 너말이야.`,
        imgsrc: "https://images.unsplash.com/photo-1532619187608-e5375cab36aa",
    },
    {
        title: "활동보조 서비스 신청",
        desc: `인간다운 삶을 영위하기 위해서는 돈이 필요하고, 이를 가장 빨리 해결 할 수 있는 방법은
        국가정책 중 활동보조 서비스를 신청하는 것이다.`,
        imgsrc: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e",
    },
    {
        title: "기타 복지서비스 조회",
        desc: `그 외 수영, 주짓수, 플룻트 수업반을 운영하여 제공한다`,
        imgsrc: "https://images.unsplash.com/photo-1514213949578-58fe7b8ff146",
    },
];

const ServiceBody: React.VFC = () => {
    return (
        <Grid container>
            <Grid container item justifyContent="center">
                {services.map((service) => {
                    return (
                        <ServiceCard
                            key={service.title}
                            title={service.title}
                            desc={service.desc}
                            imgsrc={service.imgsrc}
                        />
                    );
                })}
            </Grid>
        </Grid>
    );
};

export default ServiceBody;
