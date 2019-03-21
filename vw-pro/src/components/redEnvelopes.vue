<!--  -->
<template>
  <div>
    <div class="top">
      <div class="red">
        <h4 class="title">Nico小酒馆抽奖活动</h4>
        <div class="head">
          <img src="../assets/images/head.png" alt="">
        </div>

      </div>
      <div class="content">
        <p>昵称</p>
        <p>恭喜您获得红包</p>
        <p>6.66</p>
        <span>元</span>
      </div>
    </div>
    <div class="tip">
      红包将在2小时内发到您的微信账户
    </div>
    <button>确认</button>
  </div>
</template>
<script>
export default {
  name: 'RedEnvelopes',
  data() {
    return {
    }
  }
}
</script>
<style lang='less' scoped>
.top {
  width:100%;
  height:669px;
  background:rgba(242,242,242,1);
  border-radius:0px 0px 24px 24px;
  margin-bottom: 20px;
  .red {
    width:100%;
    height:301px;
    background-image: url('../assets/images/red.png');
    background-size: 100% 100%;
    position: relative;
    .title {
      width: 100%;
      height: 128px;
      // background: rgba(255, 255, 255, 1);
      font-size: 36px;
      font-weight: 400;
      box-sizing: border-box;
      padding-left: 33px;
      padding-top: 68px;
      color:rgba(255,243,195,1);
    }
    .head {
      width:129px;
      height:129px;
      border-radius:14px;
      position: absolute;
      bottom: -60px;
      left: 50%;
      transform: translateX(-50%);
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .content {
    width: 100%;
    text-align: center;
    margin-top: 75px;
    p {
      font-size: 32px;
      color:rgba(5,5,5,1);
      // line-height: 50px;
      &:first-child {
        font-size:32px;
        margin-bottom: 15px;
      }
      &:nth-child(2) {
        color: #818181;
        font-size:28px;
        margin-bottom: 3px;
      }
      &:nth-child(3) {
        font-size:124px;
        display: inline;
      }
    }
  }
}
.tip {
  font-size:28px;
  font-weight:500;
  color:rgba(129,129,129,1);
  text-align: center;
  margin-bottom: 326px;
}
button {
  width:680px;
  height:88px;
  background:rgba(219,89,67,1);
  border-radius:44px;
  outline: none;
  border: none;
  text-align: center;
  line-height: 88px;
  font-family:HuXiaoBoKuHei;
  margin-left: 35px;
  color: #fff;
  font-size:40px;
  margin-bottom: 5px;
}
</style>
