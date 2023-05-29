<template>
<div>
  <div id="bottom">
    <p>
      本站所刊載之圖文內容等版權皆屬原廠商或原作者所有，非經同意請勿轉載
      <br>
      巴 哈 姆 特 電 玩 資 訊 站 https://www.gamer.com.tw
    </p>
  </div>
</div>
</template>

<script>

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

#head img {
  max-width: 190px;
}

h5 {
  display: none;
}

::placeholder {
  color: #B3B3B3;
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

.check-group input[type=checkbox] + label h6 {
  display: inline-block;
  font-size: 13px;
  color: #464646;
}

h6 {
  font-weight: normal;
  margin: 0 0 0 -1px;
}

hr {
  height: 1px;
  border: none;
  background-color: #D9D9D0;
  flex: 1 1;
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

#bottom {
  margin: auto 0 0 0;
  justify-content: center;
  height: 80px;
  border-top: 1px solid #999999;
  text-align: center;
  font-size: 12px;
}

p {
  margin-top: 15px;
  color: #464646;
}

@media (max-width: 540px) {
  body {
    background: #FFF;
  }

  h5 {
    color: #464646;
    display: flex;
    margin-bottom: 16px;
    font-size: 24px;
    font-weight: bold;
    justify-content: center;
  }

  #bottom {
    padding: 0 16px 12px 16px;
  }
}
</style>