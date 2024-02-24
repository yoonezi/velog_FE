/* eslint-disable jsx-a11y/anchor-is-valid */
import { ServiceCenter } from "./styles";
import logo from "./logo.svg";
import "./styles.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Avatar, Badge, Space } from "antd";
// import NavHeader from "../Common/Header/NavHeader/NavHeader";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import { notification } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [notificationCount, setNotificationCount] = useState(0);
  const [notifications, setNotifications] = useState([]);
  const [memberInfo, setMemberInfo] = useState([]);
  const [status, setStatus] = useState(false);
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const handleLogout = async (event) => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("email");
    localStorage.removeItem("nickname");
    localStorage.removeItem("memberId");

    setStatus(false);
  };

  const accessToken = localStorage.getItem("accessToken");

  const handleWritePost = () => {
    if (accessToken) {
      navigate("/writepost");
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken") == null) {
      setStatus(false);
    } else {
      setStatus(true);
    }
  }, []);

  useEffect(() => {
    const nickname = localStorage.getItem("nickname");
    const memberId = localStorage.getItem("memberId");

    const getMemberInfo = async () => {
      if (!nickname) {
        return;
      }
      setNickname(nickname);
      setMemberInfo({ ...memberInfo, memberId });
    };
    getMemberInfo();
  }, []);

  useEffect(() => {
    const fetchNotifications = async () => {
      const accessToken = localStorage.getItem("accessToken");

      if (!accessToken) {
        return;
      }

      try {
        const response = await axios.get(`http://localhost:8080/api/feed`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const fetchedNotifications = response.data.userFeeds;
        setNotifications(fetchedNotifications);
        setNotificationCount(fetchedNotifications.length);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
  }, []);
  const showNotifications = () => {
    const notificationList = notifications || [];
    notification.open({
      message: "알림 리스트",
      description: (
        <ul>
          {notificationList.map((notification) => (
            <AlertList style={{ margin: "10px 0px" }} key={notification.id}>
              {generateNotificationMessage(notification)}
              <br></br>
              {notification.regDate}
            </AlertList>
          ))}
        </ul>
      ),
    });
    setNotificationCount(0);
  };

  const generateNotificationMessage = (notification) => {
    const { feedTaskType, message } = notification;

    switch (feedTaskType) {
      case "ADD_COMMENT":
        return `${message}`;
      case "POST_LIKE":
        return `${message}`;
      default:
        return "알 수 없는 알림입니다.";
    }
  };

  const items = [
    {
      key: "1",
      label: <Link to={`/memberpost/${memberInfo.memberId}`}>내 벨로그</Link>,
    },
    {
      key: "2",
      label: <a href="/">임시 글</a>,
    },
    {
      key: "3",
      label: <a href="/setting">설정</a>,
    },
    {
      key: "4",
      label: (
        <a href="" onClick={handleLogout}>
          로그아웃
        </a>
      ),
    },
  ];

  return (
    <>
      <div className="HeadTop">
        <div className="UserHead">
          <InfoDelivery onClick={handleWritePost}>새 글 작성</InfoDelivery>
          {status ? (
            <ServiceCenter>
              <Dropdown menu={{ items }}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <span>{nickname}</span>
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>

              <HeadUserLink onClick={showNotifications}>
                <Space size="middle">
                  <Badge
                    count={notificationCount}
                    showZero
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <Avatar
                      shape="circle"
                      size="middle"
                      src="https://api.dicebear.com/7.x/miniavs/svg?seed=3"
                    />
                  </Badge>
                </Space>
              </HeadUserLink>
            </ServiceCenter>
          ) : (
            <>
              <HeadUserLink className="HeadUserLink" to="/login">
                로그인
              </HeadUserLink>
            </>
          )}
        </div>
        <div className="HeadMain">
          <div className="HeadLeft">
            <a href="/">
              <img src={logo} alt="로고" to="/" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export const HeadUserName = styled.div`
  margin-right: 12px;
`;

export const ServiceIcon = styled.div`
  margin-right: 12px;
`;

const HeadUserLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  margin-left: 12px;
`;

const AlertList = styled.li`
  cursor: pointer;
  padding: 10px 0px;
  border-top: 1px solid #efefef;
`;

export const InfoDelivery = styled.div`
  height: 16px;
  padding: 6px 16px;
  border-radius: 18px;
  border: 1px solid #212529;
  color: #212529;
  font-size: 15px;
  line-height: 16px;
  letter-spacing: -0.32px;
  margin-right: 13px;

  & span {
    font-weight: 500;
    color: #212529;
  }

  &:hover {
    background-color: #212529;
    color: #ffffff;
  }
`;
