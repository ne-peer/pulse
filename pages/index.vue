<template>
  <section class="index">
    <div>
      <img src="~/static/symfony-ghoast.png" width="100" class="img-responsive" alt="ghoast">
      <p class="ja text-gray">ここには何もありません。</p>
      <p class="en text-gray">There is nothing here.</p>

      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="guide col-6 col-sm-10 col-mx-auto">
              <ul class="pagination">
                <li class="page-item page-next" style="text-align:left;">
                  <nuxt-link class="pagination-next page-nav" to="/blog">
                    <div class="page-item-subtitle">to Blog</div>
                    <div class="page-item-title h5">ブログへ</div>
                  </nuxt-link>
                </li>
                <li class="page-item page-prev" style="text-align:right;">
                  <nuxt-link class="pagination-previous page-nav" to="/review">
                    <div class="page-item-subtitle">to Review</div>
                    <div class="page-item-title h5">レビューへ</div>
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
</script>

<style>
.index img {
  margin: 0 auto;
  padding-top: 200px;
}

.index p {
  text-align: center;
}

.index .ja {
  margin-top: 40px;
}

.index .en {
  font-size: 10px;
}
</style>
