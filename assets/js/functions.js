var render = function(){
  var input = $('.input')
  var output = $('.output')

  var rendered = katex.renderToString($('input').val(), { displayMode: true })
  $('.output').html(rendered)

}
