import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";

export default function Deals() {
  const [hour, setHour] = useState(23 - new Date().getHours());
  const [minute, setMinute] = useState(59 - new Date().getMinutes());
  const [second, SetSecond] = useState(59 - new Date().getSeconds());

  useEffect(() => {
    const id = setInterval(() => {
      setHour(23 - new Date().getHours());
      setMinute(59 - new Date().getMinutes());
      SetSecond(59 - new Date().getSeconds());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <DealWrap>
        <DealBox>
          <TimeBox>
            <h2>일일특가</h2>
            <h4>24시간 한정 특가</h4>

            <TimeCount>
              <span> {hour < 10 ? "0" + hour : hour}:</span>
              <span> {minute < 10 ? "0" + minute : minute}:</span>
              <span> {second < 10 ? "0" + second : second}</span>
            </TimeCount>
            <p>망설이면 늦어요!</p>
          </TimeBox>
          {/* <ItemWrap> */}
          <ItemBox>
            <div>
              <ItemImgBox>
                <img
                  src="https://product-image.kurly.com/product/image/677a37f8-0d1d-40bb-84bf-91489cb06938.jpg"
                  alt="상품 이미지"
                />
                <ItemSticker>
                  <span>일일특가</span>
                </ItemSticker>
                <CartButton>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="
                    alt="장바구니 아이콘"
                  />
                </CartButton>
              </ItemImgBox>

              <ItemTextBox>
                <div>넉넉하게 즐기는 달콤한 풍미</div>
                <h3>폴 바셋 바리스타 돌체라떼 330ml(12개입)</h3>
              </ItemTextBox>
              <ItemFooter>
                <EventPriceBox>
                  <span>30%</span>
                  <span>26,600원</span>
                  <span>38,000원</span>
                </EventPriceBox>
              </ItemFooter>
            </div>
            {/* </ItemBox> */}
            {/* <ItemBox> */}
            <div>
              <ItemImgBox>
                <img
                  src="https://product-image.kurly.com/product/image/ffbb3e96-b82a-412e-858b-bb3a910c072f.jpg"
                  alt="상품 이미지"
                />
                <ItemSticker>
                  <span>+10%쿠폰</span>
                </ItemSticker>
                <CartButton>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="
                    alt="장바구니 아이콘"
                  />
                </CartButton>
              </ItemImgBox>

              <ItemTextBox>
                <div>10% 쿠폰 적용기준: 25% 할인 (최대 혜택가 132,966 원)</div>
                <h3>
                  아베다 인바티 어드밴스드 엑스폴리에이팅 라이트 샴푸
                  1000ml(얆은 모발 타입)
                </h3>
              </ItemTextBox>
              <ItemFooter>
                <EventPriceBox>
                  <span>17%</span>
                  <span>147,740원</span>
                  <span>178,000원</span>
                </EventPriceBox>
              </ItemFooter>
            </div>
          </ItemBox>
          {/* </ItemWrap> */}
        </DealBox>
      </DealWrap>
    </>
  );
}

export const DealWrap = styled.div`
  height: 100%;
`;
export const DealBox = styled.div`
  width: 1050px;
  margin: 0px auto;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 40px 0px;
`;
export const TimeBox = styled.div`
  width: 249px;
  & h2 {
    padding-top: 1px;
    font-size: 28px;
    color: rgb(51, 51, 51);
    font-weight: 500;
    line-height: 1.1;
    letter-spacing: -0.26px;
    margin: 0px;
  }

  & h4 {
    font-size: 16px;
    color: rgb(153, 153, 153);
    font-weight: normal;
    line-height: 1.3;
    letter-spacing: normal;
    margin: 0px;
    padding-top: 11px;
  }
  & p {
    padding-top: 26px;
    font-size: 14px;
    color: rgb(204, 204, 204);
    font-weight: normal;
    line-height: 1.43;
    letter-spacing: -0.4px;
    margin: 0px;
  }
`;

export const TimeCount = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  width: 136px;
  font-size: 32px;
  font-weight: 800;
  color: rgb(51, 51, 51);
  padding: 24px 0px 6px;
  margin: 0px;
`;

export const TimerIcon = styled.div`
  margin-right: 5px;
  & svg {
    width: 100%;
    height: 100%;
    transform: translate3d(0px, 0px, 0px);
    overflow: hidden;
  }
`;

export const ItemBox = styled.div`
  display: flex;
  gap: 18px;
  & div {
    color: rgb(51, 51, 51);
    cursor: pointer;
    padding: 0px;
    display: block;
  }
`;

export const ItemImgBox = styled.div`
  overflow: hidden;
  position: relative;
  background-color: rgb(245, 245, 245);
  width: 338px;
  display: block;
  height: 434px;
  & img {
    position: absolute;
    inset: -100%;
    width: 100%;
    height: 100%;
    margin: auto;
    object-fit: cover;
    background-color: rgb(238, 238, 238);
    /* transition: all 0.5s ease-in-out 0s; */
  }
`;
export const ItemSticker = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  opacity: 0.9;
  background-color: rgb(189, 118, 255);

  & span {
    font-size: 14px;
    line-height: 1.43px;
    font-weight: bold;
    color: rgb(255, 255, 255);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px 8px;
    height: 32px;
  }
`;

export const ItemTextBox = styled.div`
  width: 338px;

  & div {
    margin-bottom: 8px;
    font-size: 14px;
    padding: 15px 0px 0px;
    font-weight: 400;
    color: rgb(153, 153, 153);
    line-height: 1.38;
    word-break: break-word;
  }
  & h3 {
    font-size: 16px;
    line-height: 1.45;
    color: rgb(51, 51, 51);
    font-weight: 400;
    margin: 0px;
    margin-bottom: 6px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    letter-spacing: normal;
    word-break: break-word;
    overflow-wrap: break-word;
  }
`;
export const ItemFooter = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px;
`;

export const EventPriceBox = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px;
  & span {
    color: rgb(51, 51, 51);
    font-weight: 800;
    line-height: 1.5;
    white-space: nowrap;
    font-size: 20px;
  }
  & span:first-child {
    color: rgb(250, 98, 47);
    margin-right: 7px;
  }
  & span:last-child {
    margin-left: 6px;
    color: rgb(181, 181, 181);
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    text-decoration: line-through;
  }
`;

export const CartButton = styled.button`
  position: absolute;
  right: 40px;
  bottom: 40px;
  z-index: 10;
  border: none;
  margin: 0;
  background-color: rgba(0, 0, 0, 0);
  & img {
    width: 45px;
    height: 45px;
    background-color: rgba(0, 0, 0, 0);
  }
`;
