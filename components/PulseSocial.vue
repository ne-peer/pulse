<template>
  <section class="social">
    <div class="container">
      <div class="columns">
        <div class="col-8 col-sm-12 col-mx-auto">
          <a href="https://github.com/ne-peer" target="_blank">
            <div class="panel github" id="github">
              <div class="panel-body">
                <div class="sns">
                  <h3 class="title"><i class="fa fa-github" aria-hidden="true"></i>Github</h3>
                  <p class="desc-light" lang="ja">個人的な開発リポジトリなど</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div class="columns">
        <div class="col-8 col-sm-12 col-mx-auto">
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
      </div>

      <div class="columns">
        <div class="col-8 col-sm-12 col-mx-auto">
          <a href="https://www.instagram.com/nacre09" target="_blank">
            <div class="panel instagram">
              <div class="panel-body">
                <div class="sns">
                  <h3 class="title"><i class="fa fa-instagram" aria-hidden="true"></i>Instagram</h3>
                  <p class="desc-light" lang="ja">過去に撮った写真とか</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    <!-- container -->
    </div>
  </section>
</template>

<style scoped>
.social .panel {
  margin: 10px;
  min-height: 80px;
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

.desc {
  padding-left: 10px;
  color: #727e96;
  font-size: 14px;
}

.desc-light {
  padding-left: 10px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
}

.social .github {
  color: #f8f9fa;
  background-color: rgba(69, 77, 93, 1);
}

.social .qiita {
  color: #7bb84f;
  background-color: #f8f9fa;
}

.social .blog {
  color: #fa0048;
  background-color: #f8f9fa;
}

.social .instagram {
  color: #f8f9fa;
  background-color: rgba(210, 2, 111, 0.9);
}
</style>
