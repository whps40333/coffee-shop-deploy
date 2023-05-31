import React from "react";
import BlackCard from "../components/UI/Modals/BlcakCard";
import WhiteButton from "../components/UI/Buttons/WhiteButton";
import Input from "../components/UI/Inputs/Input";
import styles from "../styles/pages/Login.module.scss";
import coffeeLogo from "../images/coffeeLogo.png";

function RegisterPage() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.circle}>
          <img src={coffeeLogo} alt="coffee-logo" />
        </div>
        <BlackCard>
          <form className={styles.login}>
            <h2>咖啡收藏</h2>
            <Input
              id="email"
              label="E-Mail"
              type="email"
              placeholder="帳號(含有@的電子信箱)"
            />

            <Input
              id="password"
              label="Password"
              type="password"
              placeholder="密碼(由英數組成至少7個字)"
            />
            <div className={styles.actions}>
              <WhiteButton type="submit" className={styles.btn}>
                註冊
              </WhiteButton>
            </div>
            <a href="/">前往登入</a>
          </form>
        </BlackCard>
      </div>
    </>
  );
}

export default RegisterPage;
