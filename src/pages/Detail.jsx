import React from "react";
import styled from "styled-components";
import Header from "../Common/Header/Header";
import NavHeader from "../Common/Header/NavHeader/NavHeader";
import Layouts from "../Common/Layout";

export default function Detail() {
  return (
    <>
      <Header />
      <NavHeader />
      <Layouts>
        <DetailWrap>
          <DetailImg />
          <DetailInfo>
            <ProductName>
              <h2>상품이름</h2>
              <button style={{ width: "40px", height: "40px" }}></button>
            </ProductName>

            <ProductPriceWrap>
              <span>가격</span>
              <span> 원</span>
            </ProductPriceWrap>
            <Discount>
              <span>가격</span>
              <span>할인</span>
            </Discount>
            <ProductDelivery>
              <span>배송</span>
              <DeliveryInfo>
                <p>배송</p>
                <br />
                <p>
                  23시 전 주문시 내일 아침 7시 전 도착
                  <br />
                  (대구·부산·울산 샛별배송 운영시간 별도 확인)
                </p>
              </DeliveryInfo>
            </ProductDelivery>
            <ProductCategoryWrap>
              <span>구분</span>
              <span>카테고리</span>
            </ProductCategoryWrap>
            <ProductUnit>
              <span>판매단위</span>
              <span>1개</span>
            </ProductUnit>
            <ProductSeller>
              <span>판매자</span>
              <span>컬리</span>
            </ProductSeller>
            <ProductUI>
              <ProductTotal>
                <span>총 상품금액: </span>
                <span>가격</span>
                <span>원</span>
              </ProductTotal>
            </ProductUI>
          </DetailInfo>
        </DetailWrap>
      </Layouts>
    </>
  );
}

const DetailWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const DetailImg = styled.img`
  width: 430px;
  height: 552px;
  /* background: url({detail.productImage}); */
  object-fit: cover;
`;

const DetailInfo = styled.div`
  display: flex;
  width: 560px;
  flex-direction: column;
`;

const ProductName = styled.div`
  display: flex;
  justify-content: space-between;

  h2 {
    &:first-child {
      font-size: 24px;
      margin: 4px 20px 0 0;
      font-weight: 500;
    }
  }

  button {
    &:last-child {
      background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBzdHJva2U9IiNEREQiIGN4PSIyMCIgY3k9IjIwIiByPSIxOS41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAuNSAxMSkiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIxLjgiPgogICAgICAgICAgICA8Y2lyY2xlIGN4PSIzIiBjeT0iOSIgcj0iMi4xIi8+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMTM3KSI+CiAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSI4Ljg2MyIgY3k9IjMiIHI9IjIuMSIvPgogICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgZD0iTTAgOC4xMzYgNi4zNjMgNC41Ii8+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgNS4xMzcgMTgpIj4KICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9IjguODYzIiBjeT0iMyIgcj0iMi4xIi8+CiAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBkPSJNMCA4LjEzNiA2LjM2MyA0LjUiLz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==);
      border: none;
    }
  }
`;

// const ProductDesc = styled.div`
//   color: rgb(181, 181, 181);
//   font-size: 14px;
//   line-height: 34px;
//   padding: 0px 0 8px 0;
// `;

const ProductPriceWrap = styled.div`
  margin: 15px 0 0 0;

  span {
    &:first-child {
      font-size: 28px;
      font-weight: bold;
    }

    &:last-child {
      font-size: 18px;
      font-weight: bold;
    }
  }
`;

const Discount = styled.div`
  height: 24px;
  font-weight: bold;
  display: flex;
  text-align: center;
  align-items: center;
  margin-bottom: 10px;

  span {
    &:nth-child(1) {
      font-size: 14px;
      color: #999999;
    }
  }
`;

//  배송구분div 스타일
const ProductDelivery = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px 0 0 0;

  span {
    &:first-child {
      margin: 0 120px 0 0;
      color: #666666;
    }

    &:last-child {
      font-size: 12px;
      color: #666666;
    }
  }
`;
const DeliveryInfo = styled.div`
  p {
    &:first-child {
      font-size: 14px;
      color: #333333;
      font-weight: 600;
      margin: 0 0 -3px 0;
    }

    &:last-child {
      font-size: 12px;
      color: #666666;
    }
  }
`;

// 카테고리 div 스타일
const ProductCategoryWrap = styled.div`
  margin: 10px 0;

  span {
    &:first-child {
      margin: 0 120px 0 0;
      color: #666666;
    }

    &:last-child {
      font-size: 14px;
      color: #666666;
      font-weight: 600;
    }
  }
`;

const ProductUnit = styled.div`
  margin-top: 20px;
  span {
    &:first-child {
      margin-right: 93px;
    }
    &:last-child {
      font-weight: bold;
    }
  }
`;

const ProductSeller = styled.div`
  margin-top: 30px;
  span {
    &:first-child {
      margin-right: 106px;
    }
    &:last-child {
      font-weight: bold;
    }
  }
`;

// 디테일 우측 하단 가격/버튼wrap
const ProductUI = styled.div`
  margin-top: 40px;
`;

const ProductTotal = styled.div`
  text-align: right;

  span {
    &:first-child {
      color: #333333;
      font-size: 13px;
    }

    &:nth-child(2) {
      font-size: 32px;
    }

    &:last-child {
      font-size: 20px;
    }
  }
`;

const ButtonWrap = styled.form`
  display: flex;
  margin-top: 67px;
`;

const LikeButton = styled.button`
  width: 56px;
  height: 56px;
  border: 1px solid rgb(221, 221, 221);
  background-color: #ffffff;
  border-radius: 3px;
  margin-right: 8px;
  img {
    padding: 0 10px;
  }
`;

const BellButton = styled.button`
  width: 56px;
  height: 56px;
  border: 1px solid rgb(221, 221, 221);
  background-color: #ffffff;
  border-radius: 3px;
  margin-right: 8px;
  img {
    padding: 0 10px;
  }
`;

const PutButton = styled.button`
  width: 100%;
  color: white;
  font-weight: bold;
  background-color: #5f0080;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  cursor: pointer;
`;

//모달관련

const ModalText = styled.div`
  font-size: 25px;
  font-weight: 700;
  letter-spacing: -0.7px;
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
  color: #5f0080;
`;

const Img = styled.img`
  width: 70px;
  height: 88px;
  margin-right: 30px;
  object-fit: cover;
  display: inline;
`;

const ModalWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

const ModalBox = styled.div``;
const ModalTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.7px;
  margin: 5px 0 20px 0;
`;
const ModalPrice = styled.div`
  font-size: 18px;

  span {
    font-size: 14px;
    padding-left: 5px;
    color: #999999;
  }
`;
