<template>
  <section>
    <div class="container">
      <div class="columns col-sm-oneline">
        <div class="col-6 col-md-12">
          <nuxt-link tag="div" to="/blog" class="content-link">
            <div class="card">
              <div class="card-image">
                <img src="~static/bheader.jpg" height="400" class="img-responsive">
              </div>
              <div class="card-header">
                <div class="card-title h4"><i class="fa fa-bookmark" aria-hidden="true"></i>Blog</div>
                <div class="card-subtitle text-gray">日記・雑文</div>
              </div>
              <div class="card-body">
                美しく綺麗な記事を書きたいという内なる思いに追いついてこない雑記。たまに思いついたように長文を書いたりもします。
              </div>
              <div class="card-footer">
                <div class="pagination">
                  <div class="page-item page-next">
                    <div class="page-item-subtitle">to Blog</div> 
                    <div class="page-item-title h5 text-primary">ブログへ</div> 
                  </div>
                </div>
              </div>
            </div>
          </nuxt-link>
        </div>
        
        <div class="col-6 col-md-12">
          <nuxt-link tag="div" to="/review" class="content-link">
            <div class="card">
              <div class="card-image">
                <img src="~static/rheader.jpg" class="img-responsive">
              </div>
              <div class="card-header">
                <div class="card-title h4"><i class="fa fa-dollar" aria-hidden="true"></i>Review</div>
                <div class="card-subtitle text-gray">レビュー</div>
              </div>
              <div class="card-body">
                主に購入したガジェットのレビューを書いています。
              </div>
              <div class="card-footer">
                <div class="pagination">
                  <div class="page-item page-next">
                    <div class="page-item-subtitle">to Review</div> 
                    <div class="page-item-title h5 text-primary">レビューへ</div> 
                  </div>
                </div>
              </div>
            </div>
          </nuxt-link>
        </div>
      <!-- col-oneline -->
      </div>
    <!-- container -->
    </div>
  </section>
</template>

<style scoped>
.content-link {
    cursor: pointer;
}

.card {
  margin: 0px 2px 0px 2px;
}

.card-header {
  letter-spacing: 1px;
}

.card-body {
  min-height: 90px;
}

.title {
    padding-left: 8px;
}

i {
    margin-right: 12px;
}
</style>
