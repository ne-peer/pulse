<template>
  <section>
    <div class="container">
      <div class="columns col-sm-oneline">
        <div class="col-6 col-md-12">
          <div class="panel github">
            <div class="panel-body">
              <div class="sns">
                <p class="title"><h3>Github</h3></p>
                <p class="desc text-gray" lang="ja">個人的な開発リポジトリなど。</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-6 col-md-12">
          <div class="panel qiita">
            <div class="panel-body">
              <div class="sns">
                <p class="title"><h3>Qiita</h3></p>
                <p class="desc text-gray" lang="ja">Angular を中心に書いています。</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-6 col-md-12">
          <div class="panel blog">
            <div class="panel-body">
              <div class="sns">
                <p class="title"><h3>Blog</h3></p>
                <p class="desc" lang="ja">プライベートな日記です。</p>
              </div>
            </div>
          </div>
        </div>
      <!-- col-oneline -->
      </div>
    <!-- container -->
    </div>
  </section>
</template>

<style>
.panel {
  margin: 10px;
  min-height: 126px;
  border-radius: 5px;
}

.sns {
  padding-bottom: 3px;
  padding-left: 10px;
}

.panel .desc {
  padding-left: 10px;
  color: #727e96;
}

.github {
  background-color: #454d5d;
  color: #ffffff;
}

.github .desc {
  color: #acb3c2;
}

.qiita {
  color: #7bb84f;
  background-color: #f8f9fa;
}

.blog {
  color: #FA0048;
  background-color: #f8f9fa;
}
</style>
