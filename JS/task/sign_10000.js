let phone = '17347342426';//您的手机号

function sign_10000() {
    let cookieVal = "s_cc=true;s_fid=4E9278D16E567385-1BA03F214310C9E7;lvid=9bd4e232f894f33ed19687c15db555c8;nvid=1;svid=536205A4D09ECBAA5EDD3C1215059A2A"
    $prefs.valueForKey("cookie.10000");
    if (!cookieVal) {   
        //此处无意义了cookieVal
        $notify("电信营业厅", "无法签到", "请先获取cookie");
    }
    var url = {
        url: "https://wapside.189.cn:9001/api/home/sign",
        method: 'POST',
        headers: {
            "Content-Type": `application/json;charset=utf-8`,
            "User-Agent": `Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;CtClient;7.6.0;iOS;13.3;iPhone XR`,
            "Host": `wapside.189.cn:9001`,
            "Origin": `https://wapside.189.cn:9001`,
            "Referer": `https://wapside.189.cn:9001/resources/dist/signInActivity.html?cmpid=jt-khd-my-zygn&ticket=0ab000281b4a8139f264620ae1d8b1ce067a6587921f90a6260dca4389a4e01a&version=7.6.0`,
            Cookie: cookieVal
        },
        body: JSON.stringify({
            phone
        })
    };
    $task.fetch(url).then(response => {
        var body = JSON.parse(response.body);
        console.log(response.body);
        if (body.resultCode == "0") {
            if (body.data.code == 1) {
                $notify("电信营业厅", "签到成功", `获得金币${body.data.coin}/金豆${body.data.flow}`);
            } else if (body.data.code == 0) {
                $notify("电信营业厅", "签到成功", body.data.msg);
            }else{
                $notify("电信营业厅", "", body.data.msg);
            }
        } else {
            $notify("电信营业厅", "签到失败", `${body.data.msg}`);
        }
    }, reason => {
        $notify("电信营业厅", "签到失败", `${reason.error}`);
    })

}

sign_10000();