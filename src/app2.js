const $tabbar = $('.tab-bar').find('li')
const $tabContent = $('.tab-content').find('li')
$tabbar.on('click', e => {
  const act = e.currentTarget
  $(act).addClass('liactive').siblings().removeClass('liactive')
  let index = $(act).index()
  $tabContent
    .eq(index)
    .addClass('content-active')
    .removeClass('content-none')
    .siblings()
    .addClass('content-none')
})
