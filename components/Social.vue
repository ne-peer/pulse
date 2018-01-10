<template>
  <section class="social">
    <div class="container">
      <div class="columns col-sm-oneline">
        <div class="col-6 col-md-12">
          <a href="https://github.com/ne-peer" target="_blank">
            <div class="panel github" id="github">
              <div class="panel-body">
                <div class="sns">
                  <h3 class="title"><i class="fa fa-github" aria-hidden="true"></i>Github</h3>
                  <p class="desc" lang="ja">個人的な開発リポジトリなど</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        
        <div class="col-6 col-md-12">
          <a href="https://qiita.com/ne-peer" target="_blank">
            <div class="panel qiita">
              <div class="panel-body">
                <div class="sns">
                  <h3 class="title"><i class="fa fa-bookmark" aria-hidden="true"></i>Qiita</h3>
                  <p class="desc" lang="ja">Angular を中心に書いています</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        
        <!-- <div class="col-6 col-md-12">
          <a href="https://ne-peer.com" target="_blank">
            <div class="panel blog">
              <div class="panel-body">
                <div class="sns">
                  <h3 class="title"><i class="fa fa-wordpress" aria-hidden="true"></i>Blog</h3>
                  <p class="desc" lang="ja">中の人のプライベートな日記です</p>
                </div>
              </div>
            </div>
          </a>
        </div> -->
      <!-- col-oneline -->
      </div>
    <!-- container -->
    </div>
  </section>
</template>

<style>
.social .panel {
  margin: 10px;
  min-height: 100px;
  padding-top: 18px;
  border-radius: 5px;
}

.social .sns {
  padding-bottom: 3px;
  padding-left: 10px;
}

.social .panel .title i {
  margin-right: 12px;
}

.social .panel .desc {
  padding-left: 10px;
  color: #727e96;
}

.github {
  color: #454d5d;
  background-color: #f8f9fa;
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
