//pagetop
$(function() {
    var scroll = $('.pagetop');
    var scrollShow = $('.pagetop-show');
        $(scroll).hide();
        $(window).scroll(function() {
            if($(this).scrollTop() >= 300) {
                $(scroll).fadeIn().addClass(scrollShow);
            } else {
                $(scroll).fadeOut().removeClass(scrollShow);
            }
        });
});


//スムーススクロール
$(window).on('load', function() {
    var hash = location.hash;
    if(hash) {
        $('body,html').scrollTop(0);
        setTimeout(function() {
            var target = $(hash);
            var scroll = target.offset().top;
            $('body,html').animate({scrollTop:scroll},500);
        }, 100);
    }
});
$(window).on('load', function() {
    $('a[href^="#"]').click(function() {
        var href = $(this).attr('href');
        var target = href == '#' ? 0 : $(href).offset().top;
            $('body,html').animate({scrollTop:target},500);
            return false;
    });
});







//===============================================================
// 横スライドインタイプのスライドショー
//===============================================================
$(function() {
    $('.slide4-parts').each(function() {
        var $this = $(this);
        var slides = $this.find('.slide-parts');
        var slideCount = slides.length;
        var currentIndex = 0;
        var isAnimating = false;

        // インジケータを表示する要素を取得
        var indicators = $this.find('.slide-indicators-parts');

        // スライドの数に応じたインジケータを生成
        for (var i = 0; i < slideCount; i++) {
            indicators.append('<span class="indicator" data-index="' + i + '"></span>');
        }

        // インジケータの初期状態を設定
        var indicatorElements = indicators.find('.indicator');
        indicatorElements.eq(currentIndex).addClass('active');

        // 初期状態で全てのスライドに .hidden クラスを追加
        slides.addClass('hidden');

        // 最初のスライドに .active と .initial クラスを追加し、.hidden クラスを削除
        slides.eq(currentIndex).addClass('active initial').removeClass('hidden');

        // 遅延後に .initial クラスを削除
        setTimeout(function() {
            slides.eq(currentIndex).removeClass('initial');
        }, 50);

        // インジケータをクリックしたときの動作を設定
        indicatorElements.on('click', function() {
            var clickedIndex = $(this).data('index');

            // アニメーション中は操作を受け付けない
            if (isAnimating) return;

            // 現在のスライドと同じ場合は何もしない
            if (clickedIndex === currentIndex) return;

            // スライドの切り替え
            changeSlide(clickedIndex);
        });

        // 自動スライドのタイマー
        setInterval(function() {
            var nextIndex = (currentIndex + 1) % slideCount;
            changeSlide(nextIndex);
        }, 6000); // 4秒ごとにスライドを切り替える

        function changeSlide(nextIndex) {
            isAnimating = true;

            // 現在のスライドを左に移動
            slides.eq(currentIndex).removeClass('active').addClass('left');

            // 次のスライドを表示
            slides.eq(nextIndex).addClass('active').removeClass('hidden');

            // インジケータの更新
            indicatorElements.eq(currentIndex).removeClass('active');
            indicatorElements.eq(nextIndex).addClass('active');

            // アニメーション終了後の処理
            setTimeout(function() {
                // 左に移動したスライドに .hidden クラスを追加
                slides.eq(currentIndex).removeClass('left').addClass('hidden');

                currentIndex = nextIndex;
                isAnimating = false;
            }, 700); // cssの「.slide4-parts .slide-parts」の行の時間と合わせる
        }
    });
});








