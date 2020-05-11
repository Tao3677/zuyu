var jd = {
    // banner
    banner: function () {
        new Swiper('#banner', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            autoplay: 2000,
            speed: 800,
            loop: true
        });
    },
    // 导航置顶以及滚动到锚点
    fixedNav: function () {
        $(window).scroll(function (e) {
            var topVal = $(window).scrollTop();
            if(topVal > 80) {
                $('#fixednav').addClass('fixed');
                $('#fixednav').find('.logoimg img').prop('src', 'images/ic_logo_black.png')
            }else {
                $('#fixednav').removeClass('fixed');
                $('#fixednav').find('.logoimg img').prop('src', 'images/ic_logo_white.png')
            }
            let iTop = $(window).scrollTop() + 200;
            $('.scrollbox').each(function (index, ele) {
                if(iTop > $(ele).offset().top) {
                    $('.navlist li').eq(index).addClass('active').siblings().removeClass('active')
                    return ;
                }else {
                    $('.navlist li').eq(index).removeClass('active')
                }
            })
        })
    },
    // 行业洞见
    industry: function () {
        new Swiper('#industrycontent', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            autoplay: 2000,
            speed: 800,
        })
    },
    // 滚动数字
    scrollNum: function () {
        $('.numbox .num').countUp();
    },
    // 绑定事件
    bindEvent: function () {
        this.fixedNav();
        this.banner();
        this.industry();
        this.scrollNum();
    }
}
jd.bindEvent();
function sendAjax() {
    
    // $('.username').val('')
    // $('.usertel').val('')
}
$('.submit-info').click(function (e) {
    e.preventDefault()
    var username = $('.username').val();
    var usertel = $('.usertel').val();
    if(!username || !usertel) {
        alert('请填写完信息提交！')
        $('.username').focus();
        return false;
    }else if(!(/^1[3456789]\d{9}$/.test(usertel))) {
        alert('手机号码填写有误，请重新填写！');
        $('.usertel').focus();
        return false
    }else {
        $.ajax({
            url: `mail.php?name=${username}&tel=${usertel}`,
            method: "GET"
        }).done(function (res) {
            console.log(res)
            alert('提交成功！');
        })
        
    }
})

$(function () {
    $('a[href*=#]').click(function() {
        const _$this = this;
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                
                $('html,body').animate({
                    scrollTop: targetOffset - 94 + 'px'
                },500);
                $(_$this).parent().addClass('active').siblings().removeClass('active')
                return false;
            }
        }
    });
})
