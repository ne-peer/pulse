<template>
  <section class="profile">
    <div class="avater">
      <img src="~/static/avater/20170306_dia-icon.png" height="150" width="150" class="img-fit-contain circle" alt="my-avater">
    </div>
    <div class="detail">
      <h3>ne-peer</h3>
      <div class="text-gray">
        <div>東京在住でフリーランスエンジニアやってます。趣味でウェブアプリなどを作ったりなんかしています。</div>
        <div>スマートフォンやガジェットを集める癖があったりします。</div>
      </div>
    </div>
  </section>
</template>

<style>
.profile .avater {
  width: 150px;
  margin: 0 auto;
}

.profile .detail {
  margin-top: 30px;
  max-width: 660px;
  padding: 20px;
  margin: 0 auto;
}

.profile .detail div div {
  margin-top: 10px;
}
</style>
