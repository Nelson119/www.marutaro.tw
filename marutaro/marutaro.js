var option = {
  get: 'user',
  userId: 124317,
  clientId: '48f7e2f268c44241b7fc4f65835e1aee',
  accessToken: '124317.1677ed0.2bbd8e6680f84a6fa35da0e53fb70f4e',
  sortBy: 'most-recent',
  resolution: 'standard_resolution',
  links: false,
  limit: 9,
};

if ($(window).width() > 768) {
  option.after = function() {
    startupKit.uiKitContent.content38();
  };
  option.template = '<div class="sample-box col-md-4 col-sm-12"><img src="{{image}}" alt=" {{caption}} " /></div>';
  option.target = 'instafeed';

} else {
  option.after = function() {
    $('.item').first().addClass('active');
  };
  option.template = '<div class="item"> <div class="fill"><img src="%7b%7bimage%7d%7d.html"/></div> </div>';
  option.target = 'instafeed-phone';
}
var feed = new Instafeed(option);
feed.run();
