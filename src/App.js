import "./styles.css";

const SaramTitle = () => {
  return (
    <>
      <h1>길동 반점 메뉴 목록</h1>
      <h2>길동 반점 여름 특별식</h2>
    </>
  );
};

// const Saram = () => {
//   // JSX. 트위터에서 쉽게 쓸 수 있도록
//   return <h3>홍길동</h3>;
// };

// 부모컴포넌트
const Menu = (props) => {
  return <h3>{props.data}</h3>;
};

const menuItems = ["짜장면", "짬뽕", "팔보채", "탕수육", "마바두부"];

export default function App() {
  return (
    <div className="App">
      자식컴포넌트
      <SaramTitle />
      내장 객체
      {menuItems.map((item) => {
        return <Menu data={item} />;
      })}
    </div>
  );
}
