// console.log('hello world')
const content = document.getElementById("content")
const loading = document.getElementById("loading")
const iframe = document.createElement('iframe');

const source = 'https://docs.google.com/document/d/e/2PACX-1vTCokjpK6MoyiYHvngh7v00GeVeRgpctHqjmu7Gr7A38ASDQ2p9J8H4dZTnfAniyfnRqSa9K2CEJgzb/pub?embedded=true'

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
  $('iframe').contents().find("body").append('<style>p, span { color: black!important; } a { color: rgb(133, 195, 241)!important; }</style>')
})
