  $("script[type='math/tex']").replaceWith(
    function(){
      var tex = $(this).text();
      return katex.renderToString(tex, {displayMode: false});
  });

  $("script[type='math/tex; mode=display']").replaceWith(
    function(){
      var tex = $(this).text();
      return katex.renderToString(tex.replace(/%.*/g, ''), {displayMode: true});
  });
