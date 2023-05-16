function downloaded() {
  Swal.fire({
    icon: 'success',
    title: 'File Downloading!',
    text:'Please wait for a few moments',
    footer:'File will be named b07byo.apk'
  })
}

const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})
