$('.submit-info').click(function () {
    var username = $('.username').val();
    var usertel = $('.usertel').val();
    if(!username || !usertel) {
        alert('请填写完信息提交！')
        $('.username').focus();
    }else if(!(/^1[3456789]\d{9}$/.test(usertel))) {
        alert('手机号码填写有误，请重新填写！');
        $('.usertel').focus();
    }else {
        $.ajax({
            url: `mail.php?name=${username}&tel=${usertel}`,
            method: "GET"
        }).done(function(res) {
            console.log(res)
            alert('提交成功！');
        })
    }
})