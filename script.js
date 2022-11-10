(function() {
  var $closeBtn, $heading, $loadBtn, $loading, $players, $playersAway, $playersHome, $stage, $subHeading, $switchBtn, $switcher, $team, $teamListHome, $terrain, $world, anim, data, dom, events, init, pos, scenes, state;

  $stage = null;

  $world = null;

  $terrain = null;

  $team = null;

  $teamListHome = null;

  $players = null;

  $playersHome = null; // Subset of $players

  $playersAway = null; // Subset of $players

  $switchBtn = null;

  $loadBtn = null;

  $closeBtn = null;

  $heading = null;

  $subHeading = null;

  $loading = null;

  $switcher = null;

  var coordinates = 
  {
    five: [{x: 0, y: 410}, {x: 100, y: 300}, {x: -100, y: 300}, {x: -150, y: 50}, {x: 150, y: 50}],
    six: [{x: 0, y: 410}, {x: 100, y: 300}, {x: -100, y: 300}, {x: -150, y: 50}, {x: 150, y: 50}, {x: 0, y: -100}],
  };

  data = {
    players: {
      home: [
        {
          name: 'Yusuf Okkabas',
          asset: 'photos/okkabas.png',
          origin: 'Fethiye',
          height: '1.75m',
          shirt: '1',
          pos: 'Goalkeeper',
          dob: '22',
          goals: 0,
          games: 0,
          x: -110,
          y: -190
        },
        {
          name: 'Baran Ateş',
          asset: 'photos/ates.png',
          origin: 'İzmir',
          height: '1.82',
          shirt: '8',
          pos: 'Defender',
          dob: '17',
          goals: 0,
          games: 0,
          x: -150,
          y: 50
        },
        {
          name: 'Mert Büyük',
          asset: 'photos/no.png',
          origin: 'İzmir',
          height: '1.75m',
          shirt: '3',
          pos: 'Striker',
          dob: '27',
          goals: 0,
          games: 0,
          x: 0,
          y: 100
        },
         {
          name: 'Olgu Ceneli',
          asset: 'photos/ceneli.png',
          origin: 'Bornova',
          height: '1.80m',
          shirt: '8',
          pos: 'Midfield',
          dob: '32',
          goals: 0,
          games: 0,
          x: -150,
          y: 50
        },
        {
          name: 'Hakan Uluskan',
          asset: 'photos/uluskan.png',
          origin: 'İzmir',
          height: '1.75m',
          shirt: '3',
          pos: 'Midfielder',
          dob: '20',
          goals: 0,
          games: 0,
          x: 150,
          y: 50
        },        
        {
          name: 'Mehmet İşçimen',
          asset: 'photos/iscimen.png',
          origin: 'İzmir',
          height: '1.75m',
          shirt: '5',
          pos: 'Midfielder',
          dob: '37',
          goals: 0,
          games: 0,
          x: -110,
          y: -190
        }
      ],
      away: [
        {
          name: 'Ramazan Kaya',
          asset: 'photos/kaya.png',
          origin: 'Doğubeyazıt',
          height: '1.85m',
          shirt: '10',
          pos: 'Striker',
          dob: '25',
          goals: 0,
          games: 0,
          x: -150,
          y: 50
        }
        {
          name: 'Özgür Özdemir',
          asset: 'photos/ozdemir.png',
          origin: 'Buca',
          height: '1.83m',
          shirt: '1',
          pos: 'Defence',
          dob: '17',
          goals: 0,
          games: 0,
          x: 110,
          y: -190
        },
        {
          name: 'Mehmet Kulalı',
          asset: 'photos/kulali.png',
          origin: 'Kula',
          height: '1.78m',
          shirt: '45',
          pos: 'Defence',
          dob: '32',
          goals: 0,
          games: 16,
          x: 110,
          y: -190
        },
        {
          name: 'Fırat Kırbay',
          asset: 'photos/kirbay.png',
          origin: 'Konak',
          height: '1.80m',
          shirt: '35',
          pos: 'Midfield',
          dob: '32',
          goals: 0,
          games: 0,
          x: 0,
          y: 100
        },
        {
          name: 'Vefa Aksoy',
          asset: 'photos/aksoy.png',
          origin: 'Denizli',
          height: '1.55m',
          shirt: '2',
          pos: 'defender',
          dob: '37',
          goals: 0,
          games: 0,
          x: 150,
          y: 50
        },
        {
          name: 'Furkan Çolmabey',
          asset: 'photos/colmabey.png',
          origin: 'İzmir',
          height: '1.75',
          shirt: '8',
          pos: 'Midfield',
          dob: '25',
          goals: 0,
          games: 0,
          x: -150,
          y: 50
        },
        
        /*,
        {
          name: 'Modric',
          asset: 'rm-modric.jpg',
          origin: 'Croatia',
          height: '1.74m',
          shirt: '19',
          pos: 'Midfield',
          dob: '30',
          goals: 5,
          games: 27,
          x: -200,
          y: 180
        },
        {
          name: 'Nacho',
          asset: 'rm-nacho.jpg',
          origin: 'Germany',
          height: '1.79',
          shirt: '18',
          pos: 'Defence',
          dob: '25',
          goals: 2,
          games: 25,
          x: 200,
          y: 180
        },
        {
          name: 'Ramos',
          asset: 'rm-ramos.jpg',
          origin: 'Spain',
          height: '1.83m',
          shirt: '4',
          pos: 'Defence',
          dob: '31',
          goals: 21,
          games: 1,
          x: 100,
          y: 300
        },
        {
          name: 'Pepe',
          asset: 'rm-pepe.jpg',
          origin: 'Brazil',
          height: '1.88m',
          shirt: '3',
          pos: 'Defence',
          dob: '32',
          goals: 0,
          games: 34,
          x: -100,
          y: 300
        },
        {
          name: 'Casillas',
          asset: 'rm-casillas.jpg',
          origin: 'Spain',
          height: '1.85m',
          shirt: '1',
          pos: 'Goalie',
          dob: '34',
          goals: 0,
          games: 48,
          x: 0,
          y: 410
        }*/
      ]
    }
  };

  state = {
    home: true,
    disabHover: false,
    swapSides: function() {
      if (this.home) {
        return this.home = false;
      } else {
        return this.home = true;
      }
    },
    curSide: function() {
      if (this.home) {
        return 'home';
      } else {
        return 'away';
      }
    }
  };

  pos = {
    world: {
      baseX: 0,
      baseY: 0,
      baseZ: -200
    },
    def: {
      goalie: [0, -50]
    }
  };

  dom = {
    addPlayers: function(side) {
      var $el, key, ref, val;
      ref = data.players[side];
      for (key in ref) {
        val = ref[key];
        val.side = side;
        $el = this.addPlayer(val, ref.length, key);
        $team.append($el);
      }
      $players = $('.js-player');
      $playersHome = $('.js-player[data-side="home"]');
      return $playersAway = $('.js-player[data-side="away"]');
    },
    addPlayer: function(data, teamLength, key) {
      var $el;
      if(teamLength == 5) {
        $el = $('<div class="js-player player" data-name="' + data.name + '" data-side="' + data.side + '" data-x="' + coordinates['five'][key]['x'] + '" data-y="' + coordinates['five'][key]['y'] + '"></div>');
      } else {
        $el = $('<div class="js-player player" data-name="' + data.name + '" data-side="' + data.side + '" data-x="' + coordinates['six'][key]['x'] + '" data-y="' + coordinates['six'][key]['y'] + '"></div>');
      }
      $el.append('<div class="player__label"><span>' + data.name + '</span></div>');
      $el.append('<div class="player__img"><img src= ' + data.asset + '></div>');
      $el.prepend('<div class="player__card"> </div>');
      $el.prepend('<div class="player__placeholder"></div>');
      this.populateCard($el.find('.player__card'), data);
      return $el;
    },
    preloadImages: function(preload) {
      var i, promises;
      promises = [];
      i = 0;
      while (i < preload.length) {
        (function(url, promise) {
          var img;
          img = new Image();
          img.onload = function() {
            return promise.resolve();
          };
          return img.src = url;
        })(preload[i], promises[i] = $.Deferred());
        i++;
      }
      return $.when.apply($, promises).done(function() {
        scenes.endLoading();
        return scenes.loadIn(1600);
      });
    },
    populateCard: function($el, data) {
      return $el.append('<h3>' + data.name + '</h3>' + '<ul class="player__card__list"><li><span>DOB</span><br/>' + data.dob + ' yr</li><li><span>Height</span><br/>' + data.height + '</li><li><span>Origin</span><br/>' + data.origin + '</li></ul>' + '<ul class="player__card__list player__card__list--last"><li><span>Games</span><br/>' + data.games + '</li><li><span>Goals</span><br/>' + data.goals + '</li></ul>');
    },
    displayNone: function($el) {
      return $el.css('display', 'none');
    }
  };

  events = {
    attachAll: function() {
      $switchBtn.on('click', function(e) {
        var $el;
        e.preventDefault();
        $el = $(this);
        if ($el.hasClass('disabled')) {
          return;
        }
        scenes.switchSides();
        $switchBtn.removeClass('disabled');
        return $el.addClass('disabled');
      });
      $loadBtn.on('click', function(e) {
        e.preventDefault();
        return scenes.loadIn();
      });
      return $players.on('click', function(e) {
        var $el;
        e.preventDefault();
        $el = $(this);
        if ($('.active').length) {
          return false;
        }
        $el.addClass('active');
        scenes.focusPlayer($el);
        return setTimeout((function() {
          return events.attachClose();
        }), 1);
      });
    },
    attachClose: function() {
      return $stage.one('click', function(e) {
        e.preventDefault();
        return scenes.unfocusPlayer();
      });
    }
  };

  scenes = {
    preLoad: function() {
      $teamListHome.velocity({
        opacity: 0
      }, 0);
      $players.velocity({
        opacity: 0
      }, 0);
      $loadBtn.velocity({
        opacity: 0
      }, 0);
      $switcher.velocity({
        opacity: 0
      }, 0);
      $heading.velocity({
        opacity: 0
      }, 0);
      $subHeading.velocity({
        opacity: 0
      }, 0);
      $playersAway.css('display', 'none');
      $world.velocity({
        opacity: 0,
        translateZ: -200,
        translateY: -60
      }, 0);
      return $('main').velocity({
        opacity: 1
      }, 0);
    },
    loadIn: function(delay = 0) {
      var delayInc;
      $world.velocity({
        opacity: 1,
        translateY: 0,
        translateZ: -200
      }, {
        duration: 1000,
        delay: delay,
        easing: 'spring'
      });
      anim.fadeInDir($heading, 300, delay + 600, 0, 30);
      anim.fadeInDir($subHeading, 300, delay + 800, 0, 30);
      anim.fadeInDir($teamListHome, 300, delay + 800, 0, 30);
      anim.fadeInDir($switcher, 300, delay + 900, 0, 30);
      delay += 1200;
      delayInc = 30;
      return anim.dropPlayers($playersHome, delay, delayInc);
    },
    startLoading: function() {
      var images, key, ref, val;
      anim.fadeInDir($loading, 300, 0, 0, -20);
      images = [];
      ref = data.players.home && data.players.away;
      for (key in ref) {
        val = ref[key];
        images.push(val.asset);
      }
      return dom.preloadImages(images);
    },
    endLoading: function() {
      return anim.fadeOutDir($loading, 300, 1000, 0, -20);
    },
    arrangePlayers: function() {
      return $players.each(function() {
        var $el;
        $el = $(this);
        return $el.velocity({
          translateX: parseInt($el.attr('data-x')),
          translateZ: parseInt($el.attr('data-y')) // Z is the Y axis on the field
        });
      });
    },
    focusPlayer: function($el) {
      var shiftY;
      data = $el.data();
      shiftY = data.y;
      if (shiftY > 0) {
        shiftY = data.y / 2;
      }
      $('.js-player[data-side="' + state.curSide() + '"]').not('.active').each(function() {
        var $unfocus;
        $unfocus = $(this);
        return anim.fadeOutDir($unfocus, 300, 0, 0, 0, 0, null, 0.2);
      });
      $world.velocity({
        translateX: pos.world.baseX - data.x,
        translateY: pos.world.baseY,
        translateZ: pos.world.baseZ - shiftY // Z is the Y axis on the field
      }, 600);
      $terrain.velocity({
        opacity: 0.66
      }, 600);
      return this.showPlayerCard($el, 600, 600);
    },
    unfocusPlayer: function() {
      var $el;
      $el = $('.js-player.active');
      data = $el.data();
      anim.fadeInDir($('.js-player[data-side="' + state.curSide() + '"]').not('.active'), 300, 300, 0, 0, 0, null, 0.2);
      $el.removeClass('active');
      $world.velocity({
        translateX: pos.world.baseX,
        translateY: pos.world.baseY,
        translateZ: pos.world.baseZ // Z is the Y axis on the field
      }, 600);
      $terrain.velocity({
        opacity: 1
      }, 600);
      return this.hidePlayerCard($el, 600, 600);
    },
    hidePlayerCard: function($el, dur, delay) {
      var $card, $image;
      $card = $el.find('.player__card');
      $image = $el.find('.player__img');
      $image.velocity({
        translateY: 0
      }, 300);
      anim.fadeInDir($el.find('.player__label', 200, delay));
      return anim.fadeOutDir($card, 300, 0, 0, -100);
    },
    showPlayerCard: function($el, dur, delay) {
      var $card, $image;
      $card = $el.find('.player__card');
      $image = $el.find('.player__img');
      $image.velocity({
        translateY: '-=150px'
      }, 300);
      anim.fadeOutDir($el.find('.player__label', 200, delay));
      return anim.fadeInDir($card, 300, 200, 0, 100);
    },
    switchSides: function() {
      var $new, $old, delay, delayInc;
      delay = 0;
      delayInc = 20;
      $old = $playersHome;
      $new = $playersAway;
      if (!state.home) {
        $old = $playersAway;
        $new = $playersHome;
      }
      state.swapSides();
      $old.each(function() {
        var $el;
        $el = $(this);
        anim.fadeOutDir($el, 200, delay, 0, -60, 0);
        anim.fadeOutDir($el.find('.player__label'), 200, delay + 700);
        return delay += delayInc;
      });
      $terrain.velocity({
        rotateY: '+=180deg'
      }, {
        delay: 150,
        duration: 1200
      });
      return anim.dropPlayers($new, 1500, 30);
    }
  };

  anim = {
    fadeInDir: function($el, dur, delay, deltaX = 0, deltaY = 0, deltaZ = 0, easing = null, opacity = 0) {
      $el.css('display', 'block');
      $el.velocity({
        translateX: '-=' + deltaX,
        translateY: '-=' + deltaY,
        translateZ: '-=' + deltaZ
      }, 0);
      return $el.velocity({
        opacity: 1,
        translateX: '+=' + deltaX,
        translateY: '+=' + deltaY,
        translateZ: '+=' + deltaZ
      }, {
        easing: easing,
        delay: delay,
        duration: dur
      });
    },
    fadeOutDir: function($el, dur, delay, deltaX = 0, deltaY = 0, deltaZ = 0, easing = null, opacity = 0) {
      var display;
      if (!opacity) {
        display = 'none';
      } else {
        display = 'block';
      }
      return $el.velocity({
        opacity: opacity,
        translateX: '+=' + deltaX,
        translateY: '+=' + deltaY,
        translateZ: '+=' + deltaZ
      }, {
        easing: easing,
        delay: delay,
        duration: dur
      }).velocity({
        opacity: opacity,
        translateX: '-=' + deltaX,
        translateY: '-=' + deltaY,
        translateZ: '-=' + deltaZ
      }, {
        duration: 0,
        display: display
      });
    },
    dropPlayers: function($els, delay, delayInc) {
      return $els.each(function() {
        var $el;
        $el = $(this);
        $el.css({
          display: 'block',
          opacity: 0
        });
        anim.fadeInDir($el, 800, delay, 0, 50, 0, 'spring');
        anim.fadeInDir($el.find('.player__label'), 200, delay + 250);
        return delay += delayInc;
      });
    }
  };

  init = function() {
    $stage = $('.js-stage');
    $world = $('.js-world');
    $switchBtn = $('.js-switch');
    $loadBtn = $('.js-load');
    $heading = $('.js-heading');
    $switcher = $('.js-switcher');
    $closeBtn = $('.js-close');
    $subHeading = $('.js-subheading');
    $terrain = $('.js-terrain');
    $team = $('.js-team');
    $teamListHome = $('.js-team-home');
    $loading = $('.js-loading');
    dom.addPlayers('home');
    dom.addPlayers('away');
    scenes.preLoad();
    scenes.arrangePlayers();
    events.attachAll();
    return scenes.startLoading();
  };

  $(document).ready(function() {
    return init();
  });

}).call(this);