import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SuggestDymmy(props) {
  const truncate = (text, maxLength) => {
    if (text.length > maxLength) {
      return `${text.slice(0, maxLength)}...`;
    }
    return text;
  };

  return (
    <>
      <Wrapper to={`/post/${props.postId}`}>
        <ProductBox>
          <ListImageBox>
            <img
              // src={`https://velog-yz.s3.ap-northeast-2.amazonaws.com/images/${props.url}`}
              src={`http://localhost:8080/post/image/${props.url}`}
              alt="제안사진"
            />
          </ListImageBox>

          <ProductInfo>
            <TitleInfo>
              <h1>{truncate(props.title, 25)}</h1>
              <h4>{truncate(props.content, 80)}</h4>
            </TitleInfo>

            <LocalDateTimeInfo>
              <span>{props.registerDate}</span>
            </LocalDateTimeInfo>

            <PriceInfo>
              <span>by {props.memberName}</span>
              {/* <span className="Likes">likes {props.likeCount}</span> */}
              {/* <span className="Likes">likes 100</span> */}
            </PriceInfo>
          </ProductInfo>
        </ProductBox>
      </Wrapper>
    </>
  );
}

export const Wrapper = styled(Link)`
  /* margin-left: 6px; */
  margin-bottom: 30px;
  flex-shrink: 0;
  /* width: 264.75px; */
  width: ${100 / 3}%;
  height: 100%;
  position: relative;
  transition-property: transform;
  text-decoration: none;
  color: inherit;
  margin-top: 0;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-8px); // Adjust the value as needed
  }
`;

export const ProductBox = styled.div`
  color: rgb(51, 51, 51);
  cursor: pointer;
  width: 95%;
  height: 100%;
`;

export const ListImageBox = styled.div`
  overflow: hidden;
  position: relative;
  background-color: rgb(245, 245, 245);
  height: 180px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease-in-out 0s;
  }
`;

export const TitleInfo = styled.div`
  position: relative;
  padding: 14px 10px 14px 10px;
  height: 100px;
  display: block;

  & h1 {
    font-size: 16px;
    line-height: 1.45;
    font-weight: 700;
    margin-bottom: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    letter-spacing: normal;
    word-break: break-word;
    overflow-wrap: break-word;
    height: 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-word;
  }

  & h4 {
    font-size: 14px;
    line-height: 1.45;
    font-weight: 400;
    margin-bottom: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    letter-spacing: normal;
    word-break: break-word;
    overflow-wrap: break-word;
    height: 100%;
    color: #868e96;
  }
`;

export const LocalDateTimeInfo = styled.div`
  height: 20px;
  /* border: 1px solid #efefef; */
  padding: 14px 10px 14px 10px;

  -webkit-box-pack: justify;
  -webkit-box-align: center;
  align-items: center;

  & span {
    font-size: 12px;
    color: #868e96;
    /* font-weight: 800; */
    line-height: 1.5;

    white-space: nowrap;
  }
`;

export const ProductInfo = styled.div`
  position: relative;
  /* padding: 14px 10px 10px 14px; */
  height: 100%;
  border: 2px solid #efefef;

  /* display: block; */
`;

export const PriceInfo = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  -webkit-box-align: center;
  align-items: center;
  height: 44px;
  padding: 0px 10px 0px 10px;
  border-top: 1px solid #efefef;
  justify-content: space-between;

  .Likes {
    font-size: 14px;
  }
`;

export const PriceBox = styled.div`
  display: flex;
  width: 100%;
  padding: 7px 10px 7px 10px;
  border-top: 1px solid #efefef;
  justify-content: space-between;

  & span {
    font-size: 16px;
    font-weight: 800;
    line-height: 1.5;
    white-space: nowrap;
  }
`;

export const PirceDC = styled.span`
  color: rgb(250, 98, 47);
  font-size: 16px;
  font-weight: 800;
  line-height: 1.5;
  white-space: nowrap;
  margin-right: 7px;
`;

export const RealPrice = styled.span`
  color: rgb(181, 181, 181);
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  text-decoration: line-through;
  margin-top: 2px;
`;
