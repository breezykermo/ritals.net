// console.log('hello world')
const content = document.getElementById("content")
const loading = document.getElementById("loading")
const iframe = document.createElement('iframe');

const source = 'https://docs.google.com/document/d/e/2PACX-1vScwo-eS0lCXorLl5g6u0CwuoE_ry3KoR61B2zf4es0fHD401C5zKsEUi-nI4ELTVl-KYaY_Ei7nc68/pub?embedded=true'

$.get(source, (data, status) => {
  $('iframe').contents().find('head').append('<base target="_blank">')
  const modData = data.replace(
    /href="(https\:\/\/www\.google\.com\/url\?q\=)(.*?)(\&)([^\'\"]+)(\")/g,
    (match, p1, p2) => {
      return `href="${p2}"`
    }
  )
  $('iframe').contents().find("body").append(modData)
  $('#loading').hide()
  $('#content').css('display', 'flex')
  $('iframe').contents().find("body").append('<style>p, span { color: black!important; } a { color: rgb(133, 195, 241)!important; } table, th, td { border: 1px solid green !important; }</style>')
})
