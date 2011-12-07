;(function($){
  var tabArea = $('.tabArea');
  var tabClass = 'selected';

  function tab(hash){
    if(!hash) 
      return $("ul>li>a", tabArea);
    return $('ul>li>a[href|=#'+hash+']', tabArea);
  };

  function item(hash){
    if(!hash) 
      return $('.items>div', tabArea);
    return $('.items>div#'+hash, tabArea);
  };
  
  function tabItem(hash) {
    if(hash != "") {
      tab().removeClass(tabClass);   
      tab(hash).addClass(tabClass);
      item().hide();
      item(hash).show();
    } else {
      item().first().show();
      tab().first().addClass(tabClass);
    }
  }

  $(function() {
    $.history.init(tabItem);
    tab().not('.external-link').click(function(e) {          
      var url = $(this).attr('href');
      url = url.replace(/^.*#/, '');
      $.history.load(url);
      return false;
    });
  });
})(jQuery);

