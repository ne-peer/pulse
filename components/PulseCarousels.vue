<template>
    <section class="pulse-carousels">
        <div class="container">
          <div class="columns">
            <div class="column col-12">
              <div class="carousel">
                <input type="radio" id="slide-1" name="carousel-radio" hidden="" class="carousel-locator" checked="">
                <input type="radio" id="slide-2" name="carousel-radio" hidden="" class="carousel-locator">
                <input type="radio" id="slide-3" name="carousel-radio" hidden="" class="carousel-locator">
                <input type="radio" id="slide-4" name="carousel-radio" hidden="" class="carousel-locator">
                <div class="carousel-container">
                  <figure class="carousel-item">
                    <label class="item-prev btn btn-action btn-lg" for="slide-4">
                      <i class="icon icon-arrow-left"></i>
                    </label>
                    <label class="item-next btn btn-action btn-lg" for="slide-2">
                      <i class="icon icon-arrow-right"></i>
                    </label>
                    <img src="https://picturepan2.github.io/spectre/img/osx-yosemite.jpg" class="img-responsive rounded" alt="macOS Yosemite Wallpaper">
                  </figure>
        
                  <figure class="carousel-item">
                    <label class="item-prev btn btn-action btn-lg" for="slide-1">
                      <i class="icon icon-arrow-left"></i>
                    </label>
                    <label class="item-next btn btn-action btn-lg" for="slide-3">
                      <i class="icon icon-arrow-right"></i>
                    </label>
                    <img src="https://picturepan2.github.io/spectre/img/osx-yosemite.jpg" class="img-responsive rounded" alt="macOS Yosemite Wallpaper">
                  </figure>
        
                  <figure class="carousel-item">
                    <label class="item-prev btn btn-action btn-lg" for="slide-2">
                      <i class="icon icon-arrow-left"></i>
                    </label>
                    <label class="item-next btn btn-action btn-lg" for="slide-4">
                      <i class="icon icon-arrow-right"></i>
                    </label>
                    <img src="https://picturepan2.github.io/spectre/img/osx-yosemite.jpg" class="img-responsive rounded" alt="macOS Yosemite Wallpaper">
                  </figure>
        
                  <figure class="carousel-item">
                    <label class="item-prev btn btn-action btn-lg" for="slide-3">
                      <i class="icon icon-arrow-left"></i>
                    </label>
                    <label class="item-next btn btn-action btn-lg" for="slide-1">
                      <i class="icon icon-arrow-right"></i>
                    </label>
                    <img src="https://picturepan2.github.io/spectre/img/osx-yosemite.jpg" class="img-responsive rounded" alt="macOS Yosemite Wallpaper">
                  </figure>
                </div>
                <div class="carousel-nav">
                  <label class="nav-item text-hide c-hand" for="slide-1">1</label>
                  <label class="nav-item text-hide c-hand" for="slide-2">2</label>
                  <label class="nav-item text-hide c-hand" for="slide-3">3</label>
                  <label class="nav-item text-hide c-hand" for="slide-4">4</label>
                </div>
              </div>
            </div>
          </div>
        
        </div>
    </section>
</template>

