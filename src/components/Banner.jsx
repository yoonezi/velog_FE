import React, { useState } from "react";
import styled from "styled-components";
import useInterval from "../Hooks/useInterval";

const slides = [
  {
    src: "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/a2fd2580-9d12-4067-85bc-b061b91491a8.jpg",
  },
  {
    src: "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/f7f53161-159b-4734-a9cf-e3d1d6f6216b.jpg",
  },
  {
    src: "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/153e3da8-6fd6-4388-b166-a7e9f4acd744.jpg",
  },
  {
    src: "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/33809bc3-b299-4bb5-812d-67836ce7865c.png",
  },
  {
    src: "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/a919be13-7bd4-41f8-b094-3a03147f6bba.jpg",
  },
  {
    src: "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/f3a2ece9-d807-4071-bd2a-39e5f398920f.jpg",
  },
  {
    src: "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/4567578c-de77-43f1-818e-87eeb7f90768.jpg",
  },
  {
    src: "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/4ee2cc2f-38d0-4aa3-bc50-627f09b8ba3a.jpg",
  },
  {
    src: "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/9cd38c16-ae30-465a-b33a-efeb8affb53e.jpg",
  },
  {
    src: "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/20139e33-d871-4de9-a2e8-18a3024af36d.jpg",
  },
  {
    src: "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/a1f86827-2130-4806-b56d-481b31701dcb.jpg",
  },
  {
    src: " https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/54c92cec-f9b4-4057-9bc5-404b3d671558.jpg",
  },
];

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [Interval] = useState(false);

  function handleSwiper(direction) {
    // 현재index + direction이 슬라이드 총 개수와 동일할때 즉, 마지막페이지일때 현재 인덱스를 0인 처음으로 바꿔줌
    if (currentIndex + direction === slides.length) {
      setCurrentIndex(0);
      // 뒤로 가기 했을 때 마지막에서 -direction만큼 해주기
    } else if (currentIndex + direction < 0) {
      setCurrentIndex(slides.length - 1);
    } else {
      // 현재 인덱스를 현재인덱스 + 파라미터값으로 바꿔줌
      setCurrentIndex((currentIndex) => currentIndex + direction);
    }
  }

  useInterval(
    () => {
      // currentIndex === slides.length 이 되면 12장인데 13장까지 감 >whg? 배열은 0부터 시작하기 때문에
      if (currentIndex === slides.length - 1) {
        setCurrentIndex(0);
      } else {
        // currentIndex + 1 인 이유는 배열은 0부터 시작하지만 표시할건 1부터이기때문에
        setCurrentIndex(currentIndex + 1);
      }
    },
    // delay : 실행 전 대기 시간으로, 단위는 밀리초(millisecond, 1000밀리초 = 1초)이며 기본값은 0입니다.
    Interval ? null : 2000
  );

  return (
    <MainBanner>
      <SwiperWrap>
        <Swiper>
          <SlideButton onClick={() => handleSwiper(-1)}></SlideButton>
          <SlideButton onClick={() => handleSwiper(1)}></SlideButton>
          <SlideWrap
            style={{
              transform: `translateX(${currentIndex * -100}%) `,
            }}
          >
            {slides.map((list, idx) => {
              return (
                <SlideItem key={idx}>
                  <img src={list.src} alt="배너이미지" />
                </SlideItem>
              );
            })}
          </SlideWrap>
        </Swiper>
        <BannerCount>
          {currentIndex + 1} / {slides.length}
        </BannerCount>
      </SwiperWrap>
    </MainBanner>
  );
}

export const MainBanner = styled.div`
  height: auto;
`;

export const SwiperWrap = styled.div`
  position: relative;
  max-width: 1900px;
  height: 370px;
  margin: 0px auto 40px;
`;

export const SwiperWrapper = styled.div`
  position: relative;
  height: fit-content;
  max-width: 1900px;
  margin: 0px auto 40px;
`;

export const SlideButton = styled.button`
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 50%;
  margin: auto 590px auto 0px;
  z-index: 10;
  width: 52px;
  height: 52px;
  transition: all 0.5s ease 0s;
  opacity: 0;
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTIiIGhlaWdodD0iNTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxIDEpIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxjaXJjbGUgZmlsbC1vcGFjaXR5PSIuMiIgZmlsbD0iIzAwMCIgY3g9IjI1IiBjeT0iMjUiIHI9IjI1Ii8+CiAgICAgICAgPHBhdGggZD0iTTIyLjI4NSAzMy42OTlhMSAxIDAgMCAwIDEuMzE5LjA5OGwuMDk1LS4wODIgOC03LjgxN2ExIDEgMCAwIDAgLjEwOC0xLjMwNmwtLjA4LS4wOTYtNy43MjMtOC4xODJhMSAxIDAgMCAwLTEuNTM1IDEuMjc2bC4wOC4wOTYgNy4wNDkgNy40NjktNy4yOTcgNy4xM2ExIDEgMCAwIDAtLjA5OCAxLjMxOWwuMDgyLjA5NXoiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogICAgPC9nPgo8L3N2Zz4K)
    50% 50% no-repeat;
  transform: rotate(180deg);
  cursor: pointer;
  border: none;
`;

export const Swiper = styled.div`
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
  &:hover {
    ${SlideButton} {
      opacity: 1;
    }
  }
  ${SlideButton} {
    &:nth-child(2) {
      transform: rotate(0deg);
      right: 0%;
      left: 90%;
    }
  }
`;

export const SlideWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
`;

export const SlideItem = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  transition-property: transform;
  cursor: pointer;

  & img {
    width: 100%;
    min-width: 1050px;
    height: 370px;
    object-fit: cover;
  }
`;

export const BannerCount = styled.div`
  position: absolute;
  color: rgb(255, 255, 255);
  background: rgba(0, 0, 0, 0.15);
  z-index: 10;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 55px;
  height: 23px;
  right: 280px;
  bottom: 20px;
  line-height: 23px;
  font-size: 14px;
  font-weight: 400;
  border-radius: 12px;
`;
