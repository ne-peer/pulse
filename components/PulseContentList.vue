<template>
  <section>
    <div class="container">
      <div class="columns col-sm-oneline">
        <div class="col-6 col-md-12">
          <nuxt-link tag="div" to="/blog" class="content-link">
            <div class="panel">
              <div class="panel-body">
                <h4>Blog</h4>
                <p class="meta desc">美しく綺麗な記事を書きたいという内なる思いに追いついてこない雑記。たまに思いついたように長文を書いたりもします。</p>
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
            <div class="panel">
              <div class="panel-body">
                <h4>Review</h4>
                <p class="meta desc">主に購入したガジェットのレビューを書いています。</p>
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
.panel {
    margin: 8px 4px 8px 4px;
    min-height: 100px;
    padding-top: 18px;
    border-radius: 5px;
}

.content-link {
    cursor: pointer;
}

.desc {
    padding: 0px 8px 0px 8px;
    min-height: 64px;
}
</style>
