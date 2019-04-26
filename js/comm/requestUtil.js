var request = {}

/*
 * 배열로 get방식의 파라미터 받아옴.
 */
request.getParameters = function (parm) {

    var requestParam = {};
    var url = unescape(location.href);
    var paramArr = (url.substring(url.indexOf('?') + 1, url.length)).split('&');
    var tempArr = [];

    for (var ix = 0, ixLen = paramArr.length; ix < ixLen; ix++) {
        tempArr = paramArr[ix].split('=');
        requestParam[tempArr[0]] = tempArr[1];
    }

    return requestParam;
}