~function () {
    /**
     * formatTime: 时间字符串格式化
     *  @params
     *   template:[string] 期望格式
     *   {0}=>年 ...
     *  @return
     *   [string] 格式化后的字符串
     */
    function formatTime(template = "{0}年{1}月{2}日 {3}时{4}分{5}秒") {
		let timeAry = this.match(/\d+/g);
		return template.replace(/\{(\d+)\}/g, (...[, $1]) => {
			let time = timeAry[$1] || "00";
			return time.length < 2 ? "0" + time : time;
		});
	}

    /**
     * queryURLParams:获取URL地址问号后面的参数信息（可能包括Hash）
     *  @params
     *  @return
     *      [object] 键值对储存参数信息
     */
    function queryURLParams() {
        let obj = {};
        this.replace(/([^?=&$]+)=([^?=&#]+)/g, (...[, $1, $2]) => {
            obj[$1] = $2;
        });
        this.replace(/#([^?=&#])+/g, (...[, $1]) => obj['HASH'] = $1);
        return obj;
    }
    /**
    * millimeter:千分符
    * @params
    * @return
    *  [string] 处理后的字符串 
    */
    function millimeter() {
        return this.replace(/\d{1,3}(?=(\d{3})+$)/g, content => {
            return content + ',';
        });
    }
    /*扩展到String.prototype */
    ["formatTime","queryURLParams","millimeter"].forEach(item => {
        String.prototype[item] = eval(item);
    })
}();
let time = "2020-01-01 00:00:00";
console.log(time.formatTime());

let url = "http://www.baidu.com/?lx=1&from=wx#video";
console.log(url.queryURLParams());

let num = "15629854";//=>"15,628,954"
console.log(num.millimeter());