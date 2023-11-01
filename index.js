import MyHeader from "./MyHeader";

// function MyHeader() {
//     return (
//             <header>
//                 <nav className = "nav">
//                     <img src = "logo192.png" className = "nav-logo"/>
//                     <ul className = "nav-items">
//                         <li> Home </li>
//                         <li> About </li>
//                         <li> Contact</li>
//                     </ul>
//                 </nav>
//             </header>
//     );
// }

function MyMain() {
  return (
    <div>
      <h1> Fun Facts about React </h1>
      <ol>
        <li>Fun fact 1</li>
        <li>Fun fact 2</li>
        <li>Fun fact 3</li>
        <li>Fun fact 4</li>
      </ol>
    </div>
  );
}

function MyFooter() {
  return (
    <div>
      <footer className="footer">
        <small>
          {" "}
          <p> © 2023 Kwaku development. All rights reserved. </p>{" "}
        </small>
      </footer>
    </div>
  );
}

function MyPage() {
  return (
    <div>
      <MyHeader />
      <MyMain />
      <MyFooter />
    </div>
  );
}

ReactDOM.render(<MyPage />, document.getElementById("root"));

// creating an element in JS
// const h1 = document.createElement("h1")
// h1.textContent = "This is the Header"
// h1.className = "header"
// document.getElementById("root").append(h1)

// const nav = (
//     <nav>
//         <h1 className="next"> MySite</h1>
//         <ul>
//             <li> Pricing</li>
//             <li> About</li>
//             <li> Contact</li>
//         </ul>
//     </nav>
// )

// ReactDOM.render(nav, document.getElementById("text"))

// ReactDOM.render(
// <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum a nostrum enim aliquam voluptas. Reprehenderit sint reiciendis quasi. Obcaecati quae libero corrupti similique culpa doloremque iusto distinctio fugiat voluptate pariatur!</p>,
// document.getElementById('main')
// );
