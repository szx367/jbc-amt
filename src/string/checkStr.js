/**
 * @desc 校验字符串方法
 * @param {String} str 需要校验的字符串
 * @return {String} 返回boolen
 * 例如：checkStr(str).isNum()  //true
 */

let checkStr = function(str) {
    if (!(this instanceof checkStr)) {
        return new checkStr(str);
    }
    this.str = str;
}

/*  
    在原型上添加 isNum 方法，判断是否为数字
    checkStr("1234").isNum() //true
*/
checkStr.prototype.isNum = function() {
    const regExp = /^-?\d+(\.\d+)?$/;
    return regExp.test(this.str);
}
/*  
    在原型上添加 isPhone 方法，判断是否为手机号
    checkStr("18100000000").isPhone() //true
*/
checkStr.prototype.isPhone = function() {
    const regExp = /^[1][3-9][0-9]{9}$/;
    return regExp.test(this.str);
}
/*  
    在原型上添加 isMail 方法，判断是否为邮箱
    checkStr("example@example.com").isMail() //true
*/
checkStr.prototype.isMail = function() {
    const regExp = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
    return regExp.test(this.str);
}
/*  
    在原型上添加 isTel 方法，判断是否为电话
    checkStr("010-12345678").isTel() //true
    checkStr("16612345678").isTel() //true
*/
checkStr.prototype.isTel = function() {
    const regExp = /^((0\d{2,3}-\d{7,8})|(1[3-9]\d{9}))$/;
    return regExp.test(this.str);
}
/*  
    在原型上添加 isUserName 方法，判断是否为字母开头且不包含特殊字符
    checkStr("hello123").isUserName() //true
    checkStr("Abc_def").isUserName() //true
*/
checkStr.prototype.isUserName = function() {
    const regExp = /^[a-zA-Z][\w]*$/;;
    return regExp.test(this.str);
}
/*  
    在原型上添加 isPassWord 方法，判断是否为数字、字母、特殊字符混排且不小于8位
    checkStr("Abc_def#123").isPassWord() //true
    checkStr("12345Aa@").isPassWord() //true
*/
checkStr.prototype.isPassWord = function() {
    const regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[!@#$%^&*()_+\w]{8,}$/;
    return regExp.test(this.str);
}
/*  
    在原型上添加 isChineseName 方法，判断是否为中文
    checkStr("张三").isChineseName() //true
*/
checkStr.prototype.isChineseName = function() {
    const regExp = /^[\u4e00-\u9fa5·]+$/;
    return regExp.test(this.str);
}
/*  
    在原型上添加 isIDCard 方法，判断是否为身份证 支持15位/18位
    checkStr("110101199003073710").isIDCard() //true
*/
checkStr.prototype.isIDCard = function() {
    const regExp = /(^\d{15}$)|(^\d{17}([0-9]|X)$)/;
    return regExp.test(this.str);
}
/*  
    在原型上添加 isUrl 方法，判断是否为url地址
    checkStr("http://www.example.com").isUrl() //true
    checkStr("ftp://example.com").isUrl() //true
*/
checkStr.prototype.isUrl = function() {
    const regExp = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return regExp.test(this.str);
}
/*  
    在原型上添加 isImage 方法，判断是否为url地址
    checkStr("http://example.com/image.jpg").isImage() //true
    checkStr("image.jpg").isImage() //true
*/
checkStr.prototype.isImage = function() {
    const regExp = /\.(jpg|jpeg|png|gif)$/i;
    return regExp.test(this.str);
}
/*  
    在原型上添加 isBase64 方法，判断是否为url地址
    checkStr(str).isBase64() //true
*/
checkStr.prototype.isBase64 = function() {
    try {
        return btoa(atob(this.str)) === this.str
    } catch (error) {
        return false
    }
}

return checkStr

  