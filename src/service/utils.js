export default {

  //获取浏览器地址参数
  getQueryString(key) {
    var name, value;
    var str = window.location.href; //取得整个地址栏
    var num = str.indexOf("?")
    str = str.substr(num + 1); //取得所有参数   stringvar.substr(start [, length ]

    var arr = str.split("&"); //各个参数放到数组里
    for (var i = 0; i < arr.length; i++) {
      num = arr[i].indexOf("=");
      if (num > 0 && (arr[i].substring(0, num) == key)) {
        return arr[i].substr(num + 1);
      }
    }
    return false;
  },
  // set localStorage
  setLocalStorage(key, value) {
    localStorage.setItem(key, value);
  },
  getLocalStorage(key) {
    return localStorage.getItem(key);
  },
  removeLocalStorage(key) {
    localStorage.removeItem(key);
  },
  setSessionStorage(key, value) {
    sessionStorage.setItem(key, value);
  },
  getSessionStorage(key) {
    return sessionStorage.getItem(key);
  },
  createMask() {
    let mask = "<div class='loading' style='width: 100%;height: 100%;position: fixed;top: 0;left: 0;right: 0;bottom: 0;z-index: 9999;background-color: rgba(0, 0, 0, .3);filter: progid:DXImageTransform.Microsoft.Gradient(startColorStr=#40000000,endColorStr=#40000000);'><div class='load-container load4' style='display: flex;display: -webkit-flex;justify-content: center;float: left;position: absolute;overflow: hidden;-moz-box-sizing: border-box;box-sizing: border-box;width: 100%;top: 50%;transform: translateY(-50%);'><div class='pacman'><div></div><div></div><div></div><div></div><div></div></div></div></div>"
    $(document.body).append(mask);
  },
  deleteMask() {
    $(".loading").remove();
  },
  sort(arr) {
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          var temp = arr[j + 1];
          arr[j + 1] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr;
  },
  formateDate(date) {
    return moment(Date.parse(date)).format('YYYY-MM-DD');
  },
  formateDate1(date) {
    return moment(Date.parse(date)).format('YYYY-MM-DD HH:mm:ss');
  },
  formateDate2(date) {
    return moment(Date.parse(date)).format('HH:mm:ss');
  },
  secondsTohhmmss(value) {
    value = parseInt(value);
    let hours = parseInt(value / 3600);
    let other = value % 3600;
    let min = parseInt(other / 60);
    let seconds = other % 60;
    return hours + ':' + min + ':' + seconds;
  },
  closeSelf() {
    window.opener = null;
    window.open('', '_self');
    window.close();
  },
  MD5(str) {
    return $.md5(str);
  },
  getFile(url, token, args, type) {
    let type1 = type ? type : 'post';
    let form = $("<form>");
    form.attr('style', 'display:none');
    // form.attr('target', '');
    form.attr('method', type1); //请求方式
    form.attr('action', url);//请求地址
    $('body').append(form);

    let token1 = $('<input>');//将你请求的数据模仿成一个input表单

    token1.attr('type', 'hidden');
    token1.attr('name', 'token');//该输入框的name
    token1.attr('value', token);//该输入框的值
    form.append(token1);//123

    for (let obj of args) {
      let input1 = $('<input>');//将你请求的数据模仿成一个input表单
      input1.attr('type', 'hidden');
      input1.attr('name', obj.name);//该输入框的name
      input1.attr('value', obj.value);//该输入框的值
      form.append(input1);
    }
    form.submit();
    form.remove();
  },
  saveAuth(obj) {
    this.authList = obj;
  },
  getAuth() {
    return this.authList;
  },
  // getSocket(workerId,token){
  // 	let _this = this;
  // 	let stomp = Stomp.over(new SockJS("/serviceRecord/chat?x-access-token="+token));

  // 	stomp.connect({"workerId":workerId,"Content-Type":"text/event-stream"}, function (frame) {
  //            console.log("*websocket connect success*");
  //      	}, function(error){
  //      		alert(error);
  //      		setTimeout(this.getSocket,10000);
  //      		console.log('WebSocket: reconnecting in 10s...')
  //      	});
  // 	return stomp;
  // },
}
