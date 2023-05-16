function downloaded() {
  Swal.fire({
    icon: 'success',
    title: 'File Downloading!',
    text:'Please wait a few seconds',
    footer:'File will be named b07byo.apk'
  })
}

function downloaded2() {
  Swal.fire({
    icon: 'success',
    title: 'File Downloading!',
    text:'Please wait a few seconds',
  })
}  

const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})
