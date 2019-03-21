<!--  -->
<template>
  <div class="success">
    <div class="banner">
      <h4 class="title">Nico小酒馆抽奖活动</h4>
      <div class="tip">
        <div class="content">
          <p>{{ msg }}</p>
          <p>{{ message }}</p>
        </div>
      </div>
    </div>
    <button>
      转发朋友圈可抽取现金红包！
    </button>
  </div>
</template>
<script>
export default {
  name: 'fail',
  props: {
    msg: {
      type: String,
      default: '报名成功！您的抽奖码是:'
    },
    message: {
      type: String,
      default: '686661'
    }
  }
}
</script>
<style lang='less' scoped>
.success {
  .banner {
    width:100%;
    height:380px;
    background: url('../assets/images/header.png');
    .title {
      width: 100%;
      height: 128px;
      // background: rgba(255, 255, 255, 1);
      font-size: 36px;
      font-weight: 400;
      box-sizing: border-box;
      padding-left: 33px;
      padding-top: 68px;
    }
    .tip {
      position: absolute;
      top: 168px;
      left: 20px;
      width:710px;
      height:286px;
      background:rgba(255,255,255,1);
      border-radius:20px;
      box-shadow: 0px 6px 30px 1px rgba(0, 0, 0, 0.2);
      .content {
        // width:291px;
        // height:84px;
        position: absolute;
        text-align: center;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 100%;
        p {
          line-height: 80px;
          font-size: 46px;
          display: block;
          width: 100%;
          color: #323232;
          &:nth-child(2) {
            font-size: 60px;
            font-weight:bold;
          }
        }
      }
    }
  }
  button {
    position: absolute;
    top: 612px;
    left: 35px;
    width:680px;
    height:88px;
    background:rgba(255,241,0,1);
    border-radius:44px;
    font-size:40px;
    font-family:HuXiaoBoKuHei;
    font-weight:400;
    color:rgba(50,50,50,1);
    outline: none;
    border: none;
  }
}
</style>
