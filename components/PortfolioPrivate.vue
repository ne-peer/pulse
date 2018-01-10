<template>
  <section class="portfolio-private">
    <div class="container">
      <div class="columns col-sm-oneline">
        <div class="col-4 col-md-6 col-xs-12">
          <div class="card">
            <div class="card-image">
              <img src="~/static/portfolio/deredorm.png" class="img-responsive" alt="deredorm">
            </div>
            <div class="card-header">
              <div class="card-title h5">Deredorm</div>
              <div class="card-subtitle text-gray">Website</div>
            </div>
            <div class="card-body">
              アイドルマスターシンデレラガールズ<br>
              プロフィールライブラリ
            </div>
            <div class="card-footer">
              <button class="btn btn-primary" v-on:click="openDeredorm">View</button>
              <button class="btn btn-link" v-on:click="openDeredormGh">Github</button>
            </div>
          </div>
        </div>
  
        <div class="col-4 col-md-6 col-xs-12">
          <div class="card">
            <div class="card-image">
              <img src="~/static/portfolio/dia.png" class="img-responsive">
            </div>
            <div class="card-header">
              <div class="card-title h5">Dia</div>
              <div class="card-subtitle text-gray">Bot</div>
            </div>
            <div class="card-body">
              Slack用 生徒会長Bot
            </div>
            <div class="card-footer">
              <button class="btn btn-link" v-on:click="openDiaGh">Github</button>
            </div>
          </div>
        </div>
        <!-- col-oneline -->
      </div>
      <!-- container -->
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    openDeredorm: () => {
      window.open('http://deredorm.ne-peer.com');
    },
    openDeredormGh: () => {
      window.open('https://github.com/ne-peer/deredorm');
    },
    openDiaGh: () => {
      window.open('https://github.com/ne-peer/dia');
    }
  }
}
</script>

<style>
.portfolio-private .card {
  margin: 5px;
  background-color: #f8f9fa;
}

.portfolio-private .card-body {
  min-height: 65px;
}

.portfolio-private .card-footer button {
  margin-right: 3px;
}
</style>
