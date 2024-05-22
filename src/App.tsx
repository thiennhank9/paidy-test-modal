/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  Input,
  Label,
  Link,
  Button,
  Modal,
  Logo,
  InputPhone
} from "./components";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Modal>
        <Modal.Header>
          <section className="header">
            <div>
              <h1>SHOP NAME</h1>
              <h1>¥ 99,999</h1>
            </div>
            <Logo src="paidy-logo.png" alt="paidy-logo" />
          </section>
        </Modal.Header>
        <Modal.Body>
          <form>
            <Label>メールアドレス</Label>
            <Input />
            <Label>携帯電話番号</Label>
            <InputPhone />
            <div className="bottom">
              <span className="term-line">
                <Link>利用規約・個人情報取扱条項</Link> に同意して
              </span>
              <Button>次へ</Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default App;
