function downloaded() {
  Swal.fire(
    'File Downloading!',
    'Please wait a few seconds!',
    'success'
  )
}

const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})