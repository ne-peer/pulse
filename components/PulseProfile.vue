<template>
  <section class="profile">
    <div class="avater">
      <img src="~/static/avater/20170306_dia-icon.png" height="150" width="150" class="img-fit-contain circle" alt="my-avater">
    </div>
    <div class="detail container">
      <div class="columns">
        <div class="col-9 col-sm-11 col-mx-auto">
          <h3>ne-peer</h3>
          <div class="description text-gray">
            <div class="row">東京在住でフリーランスエンジニアやってます。趣味でウェブアプリなどを作ったりなんかしています。</div>
            <div class="row">スマートフォンやガジェットを集める癖があったりします。</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.profile .avater {
  width: 150px;
  margin: 0 auto;
}

.profile .detail {
  /* margin-top: 30px; */
  width: 100%;
  padding: 20px;
  margin: 0 auto;
}

.profile .detail .description {
  padding-top: 10px;
}

.profile .detail div.row {
  margin-top: 10px;
}
</style>
