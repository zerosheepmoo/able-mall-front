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
        title: "[임의의 서비스]",
        desc: `다람쥐 헌 쳇바퀴에 타고파. 나는 차륜을 타고 불타의 광명을 보고파.`,
        imgsrc: "https://images.unsplash.com/photo-1536706936563-c9e47fc563df",
    },
    {
        title: "[임의의 서비스2]",
        desc: `다람쥐 헌 쳇바퀴에 타고파. 나는 차륜을 타고 불타의 광명을 보고파.`,
        imgsrc: "https://images.unsplash.com/photo-1536706936563-c9e47fc563df",
    },
    {
        title: "[임의의 서비스3]",
        desc: `다람쥐 헌 쳇바퀴에 타고파. 나는 차륜을 타고 불타의 광명을 보고파.`,
        imgsrc: "https://images.unsplash.com/photo-1536706936563-c9e47fc563df",
    },
    {
        title: "[임의의 서비스4]",
        desc: `다람쥐 헌 쳇바퀴에 타고파. 나는 차륜을 타고 불타의 광명을 보고파.`,
        imgsrc: "https://images.unsplash.com/photo-1536706936563-c9e47fc563df",
    },
    {
        title: "[임의의 서비스5]",
        desc: `다람쥐 헌 쳇바퀴에 타고파. 나는 차륜을 타고 불타의 광명을 보고파.`,
        imgsrc: "https://images.unsplash.com/photo-1536706936563-c9e47fc563df",
    },
    {
        title: "[임의의 서비스6]",
        desc: `다람쥐 헌 쳇바퀴에 타고파. 나는 차륜을 타고 불타의 광명을 보고파.`,
        imgsrc: "https://images.unsplash.com/photo-1536706936563-c9e47fc563df",
    },
    {
        title: "[임의의 서비스7]",
        desc: `다람쥐 헌 쳇바퀴에 타고파. 나는 차륜을 타고 불타의 광명을 보고파.`,
        imgsrc: "https://images.unsplash.com/photo-1536706936563-c9e47fc563df",
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
