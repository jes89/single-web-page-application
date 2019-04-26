<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="app_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>단월드</title>
    
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <script src="/app/js/comm/restRequestUtil.js" ></script>
    <script src="/app/js/comm/requestUtil.js"></script>
    <script src="/app/js/comm/global.js"></script>
    <script src="/app/js/layout/headerRenderer.js"></script>
    <script src="/app/js/layout/bottomRenderer.js"></script>
    <script src="/app/js/layout/leftMenuRenderer.js"></script>
    <script src="/app/js/rendererRouter.js"></script>

    <link rel="stylesheet" type="text/css" href="/app/css/reset.css"/>
    <link rel="stylesheet" type="text/css" href="/app/css/layout.css"/>
    <link rel="stylesheet" type="text/css" href="/app/css/loading.css"/>

</head>
<body id="body">
    <div id="loading-container" class="loading-container" style="display:none">
        <div class="loading"></div>
        <div id="loading-text">loading</div>
    </div>
    <script>

        global.mac = '00-FF-D8-95-05-5D';

        (function () {

            let reqInfo = {
                requestUrl: 'http://localhost:8080/api/user/loginByUserInfo',
                methodType: 'POST',
                requestHeader: null,
                data: JSON.stringify({
                    userId: 'test',
                    pwd: 'pwd',
                    mac: '00-FF-D8-95-05-5D'
                }),
                callback: function (payload) {
                    if (payload["result"] && payload["result"] === "success") {
                        rendererRouter.route();
                    } else {
                        console.log("예외처리");
                    }
                }
            }

            let restObj = new restRequestUtil(reqInfo);

        })();

        window.onpopstate = function(event) {
            rendererRouter.route();
        }

    </script>
</body>
</html>
