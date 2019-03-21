<template>
  <div class="hello">
    <h4 class="title">Nico小酒馆抽奖活动</h4>
    <div class="bannerbox">
      <div class="banner"></div>
    </div>
    <div class="draw">
      <ul>
        <li>
          <div class="img">
            <p>点击抽奖</p>
          </div>
          <p class="prize">1号奖品</p>
        </li>
        <li>
          <div class="img">
            <p>点击抽奖</p>
          </div>
          <p class="prize">1号奖品</p>
        </li>
        <li>
          <div class="img">
            <p>点击抽奖</p>
          </div>
          <p class="prize">1号奖品</p>
        </li>
        <li>
          <div class="img">
            <p>点击抽奖</p>
          </div>
          <p class="prize">1号奖品</p>
        </li>
        <li>
          <div class="img">
            <p>点击抽奖</p>
          </div>
          <p class="prize">1号奖品</p>
        </li>
      </ul>
    </div>
    <div class="content">
      <div class="img">
        <img src="../assets/images/logo.png" alt="">
      </div>
      <h5>活动介绍</h5>
      <div class="chinese">
        <p>1、介绍介绍介绍介绍介绍介绍介绍介绍介绍</p>
        <p>2、介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.title {
  width: 100%;
  height: 128px;
  background: rgba(255, 255, 255, 1);
  font-size: 36px;
  font-weight: 400;
  box-sizing: border-box;
  padding-left: 33px;
  padding-top: 68px;
  margin-top: 26px;
}
.bannerbox {
  box-sizing: border-box;
  padding: 0 20px;
  .banner {
    width: 100%;
    height: 286px;
    background: rgba(242, 242, 242, 1);
    border-radius: 20px;
    margin-bottom: 40px;
    box-sizing: border-box;
    // margin-left: 20px;
  }
}

.draw ul {
  display: flex;
  flex-wrap: wrap;
  justify-content:space-around;
  box-sizing: border-box;
  padding: 0 20px;
    li {
    text-align: center;
    cursor: pointer;
    margin-right: 40px;
    &:nth-child(3) {
      margin-right: 0px;
    }
    .prize {
      color:#424242;
      margin-top: 16px;
      margin-bottom: 48px;
    }
    .img {
      position: relative;
      width: 210px;
      height: 160px;
      background: rgba(242, 242, 242, 1);
      border-radius: 16px;
      p {
        position: absolute;
        bottom: 7px;
        left: 32px;
        font-size: 36px;
        font-family: HuXiaoBoKuHei;
        font-weight: 400;
        color: rgba(66, 66, 66, 1);
      }
    }
  }
}
.content {
  width:100%;
  height:66px;
  background:rgba(245,245,245,1);
  // border:1px solid rgba(235,235,235,1);
  position: relative;
  .img {
    position: absolute;
    top: 7px;
    left: 9px;
    width: 38px;
    height: 45px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  h5 {
    color:#323232;
    line-height: 66px;
    box-sizing: border-box;
    padding-left: 69px;
  }
  .chinese {
    box-sizing: border-box;
    padding: 32px 18px 10px 20px;
    color: #8F8F8F;
    line-height: 38px;
  }
}
</style>

