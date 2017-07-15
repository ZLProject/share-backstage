/**
 * Created by Administrator on 2017/7/15.
 */

function Ajax() {
    this.get = function (url, fn) {
        var obj = new XMLHttpRequest();  // XMLHttpRequest对象用于在后台与服务器交换数据
        obj.open('GET', url, true);
        obj.onreadystatechange = function () {
            if (obj.readyState == 4 && obj.status == 200 || obj.status == 304) { // readyState == 4说明请求已完成
                fn.call(this, obj.responseText);  //从服务器获得数据
            }
        };
        obj.send();
    }
}

    var url = window.location.href.split("#")[0];
    var _title = '创意无限，面条秒变美味饼干！';
    var _desc = '处暑后的天气逐渐干燥，杏仁和豌豆面制成的创意小饼干，既有滋阴润燥的功效，又能当做休闲放松的小零食哦。赶紧学起来吧！';

    // var _link = 'http://www.wgdc.com.cn/html5/24jieqi/14/index.html';
    var _imgUrl = 'http://www.wgdc.com.cn/html5/24jieqi/14/images/sns.jpg';

    new Ajax().get('http://www.zhilandaren.com/newapi/wxJsParam?url='+url, function (data) {
        data = JSON.parse(data);
        wx.config({
            // debug: true,
            appId: data.appId,
            timestamp: data.timestamp,
            nonceStr: data.nonceStr,
            signature: data.signature,
            jsApiList: [
                // 所有要调用的 API 都要加到这个列表中
                'checkJsApi',
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareWeibo',
                'hideMenuItems',
                'showMenuItems',
                'hideAllNonBaseMenuItem',
                'showAllNonBaseMenuItem',
                'getNetworkType',
                'openLocation',
                'getLocation',
                'hideOptionMenu',
                'showOptionMenu',
                'closeWindow'
            ]
        });

        wx.ready(function () {
            // 在这里调用 API
            // 2. 分享接口
            // 2.1 监听“分享给朋友”，按钮点击、自定义分享内容及分享结果接口

            wx.onMenuShareAppMessage({
                title: _title,
                desc: _desc,
                // link: _link,
                imgUrl: _imgUrl,
                trigger: function (res) {
                    // alert('用户点击分享给朋友');
                },
                success: function (res) {
                    new Ajax().get('http://www.zhilandaren.com/share/doShare/31',function (data) {
                        window.location.href="http://www.baidu.com";
                    });
                },
                cancel: function (res) {
                    // alert('已取消');
                },
                fail: function (res) {
                    // alert(JSON.stringify(res));
                }
            });


            // 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口

            wx.onMenuShareTimeline({
                title: _title,
                desc: _desc,
                // link: _link,
                imgUrl: _imgUrl,
                trigger: function (res) {
                    // alert('用户点击分享到朋友圈');
                },
                success: function (res) {
                    new Ajax().get('http://www.zhilandaren.com/share/doShare/31',function (data) {
                        window.location.href="http://www.baidu.com";
                    });
                },
                cancel: function (res) {
                    // alert('已取消');
                },
                fail: function (res) {
                    // alert(JSON.stringify(res));
                }
            });
        });	//end of wx.ready
    });


