import React from "react";
import BlackCard from "../components/UI/Modals/BlcakCard";
import WhiteButton from "../components/UI/Buttons/WhiteButton";
import Input from "../components/UI/Inputs/Input";
import styles from "../styles/pages/Login.module.scss";
import coffeeLogo from "../images/coffeeLogo.png";

function LoginPage() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.circle}>
          <img src={coffeeLogo} alt="coffee-logo" />
        </div>
        <BlackCard>
          <form className={styles.login}>
            <h2>咖啡收藏</h2>
            <Input id="email" label="E-Mail" type="email" placeholder="email" />

            <Input
              id="password"
              label="Password"
              type="password"
              placeholder="密碼"
            />

            <div className={styles.actions}>
              <WhiteButton type="submit" className={styles.btn}>
                登入
              </WhiteButton>
            </div>
            <a href="register">前往註冊</a>
          </form>
        </BlackCard>
      </div>
    </>
  );
}

export default LoginPage;
