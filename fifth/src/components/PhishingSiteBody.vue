<template>
  <div class="Login">
    <div id="loginForm">
      <div id="head">
        <img src="baha_logo_horizontal.svg">
      </div>
      <h5>會員登入</h5>
      <form id="login">
        <div id="account">
          <input type="text" class="form-control" name="userid" placeholder="帳號" autocomplete="username" required pattern="^[A-Za-z][A-Za-z0-9]{1,11}$" maxlength="12">
        </div>
        <div id="password">
          <input type="password" spellcheck="false" class="form-control" name="password" placeholder="密碼" autocomplete="current-password" required maxlength="22">
          <span @click="passwordChangeType(this);">
                <i id="eye" class="material-icons">visibility</i>
          </span>
        </div>
        <div id="option">
          <ul class="check-box">
            <li>
              <div class="check-group">
                <input id="check-saveId" type="checkbox">
                <label for="check-saveId">
                  <div class="label-icon">
                    <i class="fa fa-check"></i>
                  </div>
                  <h6>記住帳號</h6>
                </label>
              </div>
            </li>
            <li>
              <div class="check-group">
                <input id="check-autologin" type="checkbox" name="autoLogin" value="T">
                <label for="check-autologin">
                  <div class="label-icon">
                    <i class="fa fa-check"></i>
                  </div>
                  <h6>保持登入狀態</h6>
                </label>
              </div>
            </li>
          </ul>
          <a id="problem" href="https://user.gamer.com.tw/login_problem.php">登入有問題嗎？</a>
        </div>
        <div id="login-box">
          <a id="btn-login" href="https://charlie235911.github.io/Third-2/">登入</a>
        </div>
      </form>

      <div class="no-account">還沒有帳號嗎？
        <a href="https://user.gamer.com.tw/register.php?service_name=ani">我要註冊</a>
      </div>
      <div class="other-option">
        <hr>
        <div class="easy-way">使用其他帳號輕鬆登入</div>
        <hr>
      </div>
      <div id="other-login">
        <a @click="show" id="Google"><img src="btn-icon_Google.svg"></a>
        <a @click="show" id="Line"><img src="share-icon_line.svg"></a>
        <a @click="show" id="Microsoft"><img src="btn-icon_Microsoft.svg"></a>
        <a @click="show" id="Apple"><img src="btn-icon_Apple.svg"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    passwordChangeType(obj) {
      const passwordInput = document.getElementsByName("password")[0];
      const nowType = passwordInput.getAttribute("type");
      if (nowType === "password") {
        passwordInput.setAttribute("type", "text");
        obj.getElementsByTagName("i")[0].textContent = "visibility_off";
      } else {
        passwordInput.setAttribute("type", "password");
        obj.getElementsByTagName("i")[0].textContent = "visibility";
      }
    },
    show(){
      alert("此登入方式暫且維修中，請嘗試其他登入方式。");
    }
  }
};
</script>

<style scoped>
body {
  background: #E5E5E5;
  line-height: 18px;
  font-size: 15px;
  font-family: "Helvetica Neue", Helvetica, "Roboto", Arial, "Lucida Grande", "PingFang TC", "蘋果儷中黑", "Apple LiGothic Medium", sans-serif;
}

body, div, ul{
  margin: 0;
  padding: 0;
}

a {
  color: #117E96;
  text-decoration: none;
}

a:-webkit-any-link, #eye, h6, #Google, #Line, #Microsoft, #Apple{
  cursor: pointer;
}

.Login {
  display: flex;
  height: calc(100vh - 44px);
  flex-wrap: wrap;
}

#loginForm {
  width: 360px;
  margin: 8rem auto auto auto;
  padding: 36px 24px;
  background-color: #FFF;
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
}

#head {
  display: flex;
  margin-bottom: 12px;
  justify-content: center;
}

#head img {
  max-width: 190px;
}

h5 {
  display: none;
}

.form-control {
  margin: 8px 0;
  border: 1px solid #D9D9D9;
  border-radius: 3px;
  padding: 8px;
  box-sizing: border-box;
  width: 100%;
  font-size: 15px;
}

.form-control {
  margin-top: 0;
}

.form-control:focus {
  outline: none;
  border-color: #117e96;
}

::placeholder {
  color: #B3B3B3;
}

#password {
  position: relative;
}

#password span {
  position: absolute;
  top: 1px;
  right: 1px;
  width: 33px;
  height: 33px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#password span i {
  color: rgba(76, 87, 102, 0.6);
  font-size: 18px;
}

#option, #login-box, .no-account, #bottom{
  display: flex;
  width: 100%;
}

#option {
  align-items: center;
}

ul {
  list-style: none;
  display: inline-flex;
}

li {
  margin: 0 12px 0 0;
  padding: 5px 0;
}

.check-group input[type=checkbox] {
  display: none;
}

.check-group input[type=checkbox] + label .label-icon {
  display: inline-block;
  padding: 2px 0 0;
  border-radius: 2px;
  width: 18px;
  height: 18px;
  background: #fbfbfb;
  border: 1px solid #D9D9D9;
  box-sizing: border-box;
  font-size: 13px;
  text-align: center;
  color: transparent;
  cursor: pointer;
  transition: all 0.2s;
  vertical-align: text-top;
}

.check-group input[type=checkbox]:checked + label .label-icon {
  background-color: #11AAC1;
  border-color: #11AAC1;
  color: #FFF;
  box-shadow: none;
}

.fa {
  vertical-align: top;
}

.check-group input[type=checkbox] + label h6 {
  display: inline-block;
  font-size: 13px;
  color: #464646;
}

h6 {
  font-weight: normal;
  margin: 0 0 0 -1px;
}

#problem {
  font-size: 13px;
  margin-left: auto;
}

#btn-login {
  display: inline-flex;
  height: 40px;
  margin: 20px 0 0 0;
  border-radius: 6px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  background-color: #117e96;
  color: #FFF;
  width: 100%;
  font-size: 14px;
  letter-spacing: 1px;
  cursor: pointer;
}

.no-account {
  font-size: 13px;
  color: rgba(76, 87, 102, 0.6);
  margin: 16px 0;
  justify-content: center;
}

.other-option {
  display: flex;
  margin: 36px 0 16px 0;
}

hr {
  height: 1px;
  border: none;
  background-color: #D9D9D0;
  flex: 1 1;
}

.easy-way {
  font-size: 13px;
  margin: 0 8px;
  color: rgba(76, 87, 102, 0.6);
}

#other-login {
  display: inline-flex;
  width: 100%;
  justify-content: center;
}

#other-login a{
  display: flex;
  width: 46px;
  height: 46px;
  margin-left: 8px;
  margin-right: 8px;
  border: 1px solid #D9D9D0;
  border-radius: 99rem;
}

#other-login a img {
  height: 18px;
  margin: auto;
}

p {
  margin-top: 15px;
  color: #464646;
}

@media (max-width: 540px) {
  body {
    background: #FFF;
  }

  .Login {
    height: calc(100vh - 35px);
  }

  #loginForm {
    width: 100%;
    margin: 20px auto auto auto;
    box-shadow: none;
  }

  #head {
    display: none;
  }

  h5 {
    color: #464646;
    display: flex;
    margin-bottom: 16px;
    font-size: 24px;
    font-weight: bold;
    justify-content: center;
  }
}
</style>