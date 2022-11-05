// 用户名匹配
export function nameRule(rule, value, callback) {
    // 昵称
    let reg = /^[a-zA-Z0-9_-]{4,10}$/;
    if (value === '') {
        callback(new Error('请输入用户名'));
    } else if (!reg.test(value)) {
        callback(new Error('请输入4-10位用户名'));
    } else {
        callback()
    }
}
// 密码
export function passRule(rule, value, callback) {
    let passRule = /^\S*(?=\S{6,12})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/
    if (value === '') {
        callback(new Error('请输入密码'));
    } else if (!passRule.test(value)) {
        callback(new Error('密码必须是6-12位且必须包含大小写字母及特殊符号'));
    } else {
        callback()
    }
}
