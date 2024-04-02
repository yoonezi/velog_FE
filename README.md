# Velog
## 프로젝트 기간 
2023-01 ~ 2023-03

<br/>

## 기술 구성
- 언어 및 프레임워크: React, styled-components  
- 디자인 : Figma

<br/>

# :bookmark: 개요 <a name = "outline"></a>
 개발자를 위한 블로그 서비스

<br/>


# 🛠 채택한 개발 기술 이유<a name = "why"></a>
### React, styled-component

- React
    - **컴포넌트화**를 통해 추후 유지보수와 재사용성을 고려했습니다.
    - 유저 배너, 상단과 하단 배너 등 중복되어 사용되는 부분이 많아 컴포넌트화를 통해 리소스 절약이 가능했습니다.
- styled-component
    - props를 이용한 **조건부 스타일링**을 활용하여 상황에 알맞은 스타일을 적용시킬 수 있었습니다.
    - 빌드될 때 고유한 클래스 이름이 부여되어 **네이밍 컨벤션을 정하는 비용을 절약**할 수 있었습니다.

### eslint, prettier

- 정해진 규칙에 따라 자동적으로 코드 스타일을 정리해 **코드의 일관성을 유지**하고자 했습니다.
- 코드 품질 관리는 eslint에, 코드 포맷팅은 prettier에 일임해 사용했습니다.

<br/>

# 🖥️ 결과물 <a name = "result"></a>
## 홈
<img width="1000" alt="스크린샷 2024-04-02 오후 4 51 03" src="https://github.com/yoonezi/velog_FE/assets/101792929/17c4d134-43a4-4a3c-ab5e-6cd8930ab073">

- 앱의 홈 화면
- 기본으로 최신 포스트 순으로 정렬됩니다.

### 홈 - 페이징
<img width="1439" alt="스크린샷 2024-04-02 오후 6 38 27" src="https://github.com/yoonezi/velog_FE/assets/101792929/bb7a8836-c296-4eb7-af27-1b9415840a58">

- 포스트 6개를 기준으로 Paging 구현하였습니다.

<br>
<br>


## 헤더
<p align="center">
<img width="756" alt="스크린샷 2024-04-02 오후 5 01 01" src="https://github.com/yoonezi/velog_FE/assets/101792929/f0e7cf05-15e2-4749-8ea2-9402ba39f0c1">
</p>

- 로그인 여부에 따라 헤더를 다르게 적용하였습니다.
- 포스트를 카테고리와 최신, 좋아요, 조회수 순으로 정렬할 수 있습니다.

<br>
<br>

## 피드
<img width="1440" alt="스크린샷 2024-04-02 오후 6 18 05" src="https://github.com/yoonezi/velog_FE/assets/101792929/9fb5f7a4-5d58-4ced-92e2-484d8337e5f3">
<img width="1440" alt="스크린샷 2024-04-02 오후 5 52 03" src="https://github.com/yoonezi/velog_FE/assets/101792929/fa7ed7b3-c9ef-428e-b162-2b93ad6280d6">

- 자신의 이미지 상단에 알림의 갯수가 적혀 있습니다.
- 이미지 클릭 시, 알림을 확인할 수 있습니다.


<br><br>

## 포스트
<img width="1440" alt="스크린샷 2024-04-02 오후 5 02 16" src="https://github.com/yoonezi/velog_FE/assets/101792929/a22f42d6-afe7-4f96-a52f-431ad3ec324d">
<img width="1440" alt="스크린샷 2024-04-02 오후 5 02 29" src="https://github.com/yoonezi/velog_FE/assets/101792929/b94c5a28-1a61-4d7f-adc6-3dbf7d3b9f7d">

- 포스트 상세 페이지입니다.

#### 포스트 - 자신의 포스트
<img width="1440" alt="스크린샷 2024-04-02 오후 5 31 43" src="https://github.com/yoonezi/velog_FE/assets/101792929/4cb8a82a-93f2-44bd-a141-a157073782f9">

- 자신의 포스트면, 수정 & 삭제 버튼이 보이고
- 해당 버튼을 누르면 수정 페이지로 이동 또는 삭제가 됩니다.

#### 포스트 - 다른 유저의 포스트
<img width="1440" alt="스크린샷 2024-04-02 오후 5 50 35" src="https://github.com/yoonezi/velog_FE/assets/101792929/a07d15e2-8763-4f98-a7f7-aee6bbddf50c">
<img width="1440" alt="스크린샷 2024-04-02 오후 6 34 10" src="https://github.com/yoonezi/velog_FE/assets/101792929/7638df7a-4cdd-4276-8a2b-d94566c04fe5">

- 다른 유저의 포스트라면, 팔로우 버튼이 보이고
- 해당 버튼을 누르면 팔로우, 언팔로우를 할 수 있습니다.


#### 포스트 좋아요 & 댓글
<img width="1440" alt="스크린샷 2024-04-02 오후 6 34 39" src="https://github.com/yoonezi/velog_FE/assets/101792929/ef33d128-03c1-4112-acf9-74cb180ce4d7">

- 포스트 하단에 좋아요와 댓글창이 있습니다.
- 댓글은 리스트 형태로 보이고 수정 또는 삭제를 할 수 있습니다.

<br><br>

### 포스트 작성
<img width="1440" alt="스크린샷 2024-04-02 오후 5 10 11" src="https://github.com/yoonezi/velog_FE/assets/101792929/4a6c9531-8053-41ba-9043-24543728d87a">

- 포스트를 작성하는 페이지입니다.

#### 포스트 작성 - 카테고리
<img width="1440" alt="스크린샷 2024-04-02 오후 5 10 37" src="https://github.com/yoonezi/velog_FE/assets/101792929/24f73ba1-1243-445e-93fb-736e9fc6b812">

- 카테고리를 선택할 수 있고 정렬에 사용됩니다.

#### 포스트 작성 - 태그
<img width="1440" alt="스크린샷 2024-04-02 오후 5 10 45" src="https://github.com/yoonezi/velog_FE/assets/101792929/1a98067d-861a-4195-add7-2b82d2ee9e61">

- 포스트에 태그를 추가할 수 있습니다.

#### 포스트 작성 - 이미지 업로드
<img width="1440" alt="스크린샷 2024-04-02 오후 5 11 32" src="https://github.com/yoonezi/velog_FE/assets/101792929/c3721e1d-5dab-4945-9f43-17d74900c89a">

- 이미지를 여러 개 업로드 할 수 있습니다.
- 삭제 버튼을 누르면 업로드 되는 이미지에서 제외됩니다.
- 가장 처음 등록한 이미지가 메인 이미지가 됩니다.

<br><br>

### 포스트 수정
<img width="992" alt="image" src="https://github.com/yoonezi/velog_FE/assets/101792929/719f9428-f0e0-4718-b55a-2f025fd9dfbc">

- 포스트를 수정하는 페이지입니다.
- 기존에 작성된 제목, 내용, 태그, 이미지를 불러옵니다.
- 유효한 값인 이메일을 사용하여 로그인이 된 유저만 자신의 포스트를 수정할 수 있습니다.

<br>

### 임시 저장 글
<img width="1200" alt="image" src="https://github.com/yoonezi/velog_FE/assets/101792929/4cd3bbe1-2386-4faf-814d-a321a9bbdf2e">

- 자신의 임시 저장글을 볼 수 있는 페이지입니다.
- 유효한 값인 이메일을 사용하여 로그인이 된 유저만 자신의 임시 포스트에 접근할 수 있습니다.

<br><br>

### User Page
<img width="1440" alt="스크린샷 2024-04-02 오후 5 52 49" src="https://github.com/yoonezi/velog_FE/assets/101792929/80054b65-3d78-431e-ab90-e58a8dd8ca0e">

- 유저의 페이지입니다.
- 게시글은 3개를 기준으로 Paging 하였습니다.

#### User Page - Follow Button
<img width="1440" alt="스크린샷 2024-04-02 오후 6 23 10" src="https://github.com/yoonezi/velog_FE/assets/101792929/6f40c82b-8109-468e-9e9d-a27acc1d4933">
<img width="1440" alt="스크린샷 2024-04-02 오후 6 23 07" src="https://github.com/yoonezi/velog_FE/assets/101792929/0eec1407-fa4e-4e13-87b1-273bff662dd0">

- 자신의 페이지라면, 팔로우 버튼이 보이지 않습니다.
- 다른 유저의 페이지라면, 팔로우 버튼이 보입니다.

<br><br>

### Follow
#### Page - Following
<img width="1440" alt="스크린샷 2024-04-02 오후 6 21 00" src="https://github.com/yoonezi/velog_FE/assets/101792929/91ea0126-9544-469c-87c2-efc6e048c222">

- 유저가 팔로우하는 유저(팔로잉)의 목록을 보여줍니다.

#### Page- Follower
<img width="1440" alt="스크린샷 2024-04-02 오후 5 52 21" src="https://github.com/yoonezi/velog_FE/assets/101792929/78d94a34-6b99-4e53-adaa-0f82ddf45720">

- 유저를 팔로우하는 유저(팔로워)의 목록을 보여줍니다.


<br><br>

### Login
<img width="1440" alt="스크린샷 2024-04-02 오후 5 07 13" src="https://github.com/yoonezi/velog_FE/assets/101792929/e510f1dd-c6e3-40ec-a3d2-ec94448056b2">

- 로그인 화면입니다.
- 로그인 성공 시, 홈으로 이동합니다.
- 이미 등록된 회원이라면, "이미 등록된 회원입니다." alert를 띄웁니다.

### Join
<img width="1440" alt="image" src="https://github.com/yoonezi/velog_FE/assets/101792929/bf2d7523-bed9-44e9-ad37-43e96b89aa18">

- 회원가입 화면입니다.
- 회원가입 성공 시, 로그인으로 이동합니다.

<br><br>

### Waring
<p align="center">
<img width="495" alt="image" src="https://github.com/yoonezi/velog_FE/assets/101792929/3e80866c-91f7-4d12-871f-e879fb90826a">
</p>

- 기타 alert 메시지입니다.
- 로그인하지 않은 유저가 팔로우, 좋아요, 댓글 기능을 사용하려고 할 때 해당 알림을 띄웁니다.


