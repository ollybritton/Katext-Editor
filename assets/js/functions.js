var render = function(){
  var input = $('.input')
  var output = $('.output')

  try {
    var rendered = katex.renderToString($('input').val(), { displayMode: true,
                                                            throwOnError: false,
                                                            errorColor: "#ff329f" })
  }
  catch(err) {
  }
  $('.output').html(rendered)
}
