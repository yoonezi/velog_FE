import React, { useState, useEffect, useRef } from "react";
import {
  Button,
  Form,
  Select,
  Upload,
  Space,
  Tag,
  Tooltip,
  theme,
  Input,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Header from "../Common/Header/Header";
import NavHeader from "../Common/Header/NavHeader/NavHeader";
import styled from "styled-components";
import Layouts from "../Common/Layout";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import { useParams, useNavigate } from "react-router-dom";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const getAccessTokenFromLocalStorage = () =>
  localStorage.getItem("accessToken");

export default function EditPost() {
  // title, content, category, image
  const [form] = Form.useForm();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [uploadedImages, setUploadedImages] = useState([]);
  const [tags, setTags] = useState([]);
  const { token } = theme.useToken();
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [editInputIndex, setEditInputIndex] = useState(-1);
  const [editInputValue, setEditInputValue] = useState("");
  const inputRef = useRef(null);
  const editInputRef = useRef(null);
  const { postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      const accessToken = getAccessTokenFromLocalStorage();
      try {
        const response = await axios.get(
          `http://localhost:8080/api/post/pending/${postId}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const post = response.data;
        console.log(response.data);
        setTitle(post.title);
        setContent(post.content);
        setCategory(post.categoryType);
        setTags(post.tagList || []);
        setUploadedImages(
          post.postImageList.map((image, index) => ({
            url: image.url,

            uid: index,
            name: image.url,
            status: "done",
          }))
        );
        form.setFieldsValue({
          title: post.title,
          content: post.content,
          category: post.categoryType,
          upload: post.postImageList.map((image, index) => ({
            // url: image.url,
            url: `https://velog-yz.s3.ap-northeast-2.amazonaws.com/images/${image.url}`,
            uid: index,
            name: image.url,
            status: "done",
            order: index,
          })),
        });
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [postId]);

  const handleTitleChange = (event) => {
    setTitle(event.currentTarget.value);
    console.log("title: ", event.currentTarget.value);
  };

  const handleContentChange = (event) => {
    setContent(event.currentTarget.value);
    console.log("content: ", event.currentTarget.value);
  };

  const handleCategoryChange = (value) => {
    setCategory(value);
    console.log("category: ", value);
  };

  ///////////////Tag
  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);

  useEffect(() => {
    editInputRef.current?.focus();
  }, [editInputValue]);

  const handleClose = (removedTag) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    console.log(newTags);
    setTags(newTags);
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && !tags.includes(inputValue)) {
      setTags([...tags, inputValue]);
    }
    setInputVisible(false);
    setInputValue("");
  };

  const handleEditInputChange = (e) => {
    setEditInputValue(e.target.value);
  };

  const handleEditInputConfirm = () => {
    const newTags = [...tags];
    newTags[editInputIndex] = editInputValue;
    setTags(newTags);
    setEditInputIndex(-1);
    setEditInputValue("");
  };

  ///////////////ImageAPI
  const handleImageUpload = async (file) => {
    const accessToken = getAccessTokenFromLocalStorage();

    try {
      const formData = new FormData();
      formData.append("multipartFile", file);

      const response = await axios.post(
        "http://localhost:8080/api/upload/image/post",
        formData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log("Image upload response:", response);

      setUploadedImages((prevImages) => [
        ...prevImages,
        {
          url: response.data.url,
          uid: file.uid,
          name: file.name,
          status: "done",
        },
      ]);

      return response.data.url;
    } catch (error) {
      console.error("Image upload failed:", error);
      throw error;
    }
  };

  const handleImageRemove = (file) => {
    setUploadedImages((prevImages) =>
      prevImages.filter((image) => image.uid !== file.uid)
    );
  };

  const normFile = (e) => {
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      setUploadedImages(e);
      return e;
    }
    return e?.fileList;
  };

  ///////////////PostAPI
  const handleUpdatePost = async () => {
    const accessToken = getAccessTokenFromLocalStorage();

    try {
      const filteredTags = tags.filter((tag) => tag !== "Tag example");
      const addedImages = uploadedImages.filter(
        (image) => image.status === "done"
      );

      const postParam = {
        title,
        content,
        tagList: filteredTags,
        categoryType: category,
        postImageRequestList: addedImages.map((image, index) => ({
          url: image.url,
          uid: image.uid,
          name: image.name,
          status: "done",
          order: index,
        })),
      };

      const response = await axios.put(
        `http://localhost:8080/api/post/${postId}`,
        postParam,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log(response);
      navigate(`/post/${postId}`); // 수정 완료 후 해당 포스트 상세 페이지로 이동
    } catch (error) {
      console.error("API 호출 실패:", error);
    }
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const tagInputStyle = {
    width: 64,
    height: 22,
    marginInlineEnd: 8,
    verticalAlign: "top",
  };
  const tagPlusStyle = {
    height: 22,
    background: token.colorBgContainer,
    borderStyle: "dashed",
  };

  return (
    <>
      <Header />
      <NavHeader />
      <Layouts>
        <Container>
          <Body>
            <Form
              form={form}
              name="validateOnly"
              layout="vertical"
              autoComplete="off"
              {...formItemLayout}
              onFinish={onFinish}
              initialValues={{
                title,
                content,
                category,
                upload: uploadedImages,
              }}
            >
              <Form.Item
                rules={[{ required: true, message: "제목을 입력해주세요." }]}
              >
                <InputArea
                  height="54px"
                  fontSize="30px"
                  placeholder="제목"
                  value={title}
                  onChange={handleTitleChange}
                />
              </Form.Item>
              <Form.Item
                rules={[{ required: true, message: "본문을 입력해주세요." }]}
              >
                <InputArea
                  height="800px"
                  fontSize="14px"
                  type="text"
                  placeholder="본문을 입력해주세요!"
                  style={{
                    height: "400px",
                  }}
                  value={content}
                  onChange={handleContentChange}
                />
              </Form.Item>

              <Space size={[0, 8]} wrap>
                {tags.map((tag, index) => {
                  if (editInputIndex === index) {
                    return (
                      <Input
                        ref={editInputRef}
                        key={tag}
                        size="small"
                        style={tagInputStyle}
                        value={editInputValue}
                        onChange={handleEditInputChange}
                        onBlur={handleEditInputConfirm}
                        onPressEnter={handleEditInputConfirm}
                      />
                    );
                  }
                  const isLongTag = tag.length > 20;
                  const tagElem = (
                    <Tag
                      key={tag}
                      closable={index !== 0}
                      style={{
                        userSelect: "none",
                      }}
                      onClose={() => handleClose(tag)}
                    >
                      <span
                        onDoubleClick={(e) => {
                          if (index !== 0) {
                            setEditInputIndex(index);
                            setEditInputValue(tag);
                            e.preventDefault();
                          }
                        }}
                      >
                        {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                      </span>
                    </Tag>
                  );
                  return isLongTag ? (
                    <Tooltip title={tag} key={tag}>
                      {tagElem}
                    </Tooltip>
                  ) : (
                    tagElem
                  );
                })}
                {inputVisible ? (
                  <Input
                    ref={inputRef}
                    type="text"
                    size="small"
                    style={tagInputStyle}
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={handleInputConfirm}
                    onPressEnter={handleInputConfirm}
                  />
                ) : (
                  <Tag
                    style={tagPlusStyle}
                    icon={<PlusOutlined />}
                    onClick={showInput}
                  >
                    New Tag
                  </Tag>
                )}
              </Space>

              <Form.Item
                label="Category"
                rules={[
                  { required: true, message: "카테고리를 선택해주세요." },
                ]}
                style={{
                  width: "400px",
                }}
              >
                <Select
                  placeholder="카테고리"
                  value={category}
                  onChange={handleCategoryChange}
                  rules={[
                    { required: true, message: "이미지를 선택해주세요." },
                  ]}
                >
                  <Option value="AI">인공지능</Option>
                  <Option value="BACKEND">백엔드</Option>
                  <Option value="DEVOPS">데브옵스</Option>
                  <Option value="EMBEDDED">임베디드</Option>
                  <Option value="FRONTEND">프론트엔드</Option>
                  <Option value="GAME">게임</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="upload"
                label="Upload"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                rules={[{ required: true, message: "이미지를 선택해주세요." }]}
                style={{
                  textAlign: "left",
                }}
              >
                <Upload
                  name="logo"
                  beforeUpload={(file) => {
                    handleImageUpload(file);
                    return false;
                  }}
                  listType="picture"
                  onChange={(info) => {
                    if (info.file.status === "removed") {
                      handleImageRemove(info.file);
                    }
                  }}
                >
                  <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
              </Form.Item>

              <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                <Space>
                  <Space>
                    <Button
                      type="primary"
                      htmlType="submit"
                      onClick={handleUpdatePost}
                    >
                      수정 완료
                    </Button>
                    <Button htmlType="reset">취소</Button>
                  </Space>
                </Space>
              </Form.Item>
            </Form>
          </Body>
        </Container>
      </Layouts>
    </>
  );
}

const Container = styled.div`
  min-width: 1050px;
  margin-top: 30px;
  margin-bottom: 60px;
  display: flex;
`;

const Body = styled.div`
  width: 100%;
  margin: 0px auto;
  letter-spacing: -0.6px;
  text-align: center;
`;

const InputArea = styled.textarea`
  height: ${(props) => props.height || "44px"};
  width: ${(props) => props.width || "1000px"};
  padding: 0px 11px 1px 15px;
  border: none;
  border-bottom: 1px solid rgb(221, 221, 221);
  font-weight: 400;
  font-size: ${(props) => props.fontSize || "16px"};
  line-height: 1.6;
  color: rgb(51, 51, 51);
  outline: none;
  resize: none;
`;
