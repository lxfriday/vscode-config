module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-native"
    ],
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-empty": 2,//块语句中的内容不能为空
        "no-unused-vars": [1, {"vars": "all", "args": "after-used"}],
        "no-use-before-define": 2,//未定义前不能使用
        "no-var": 0,//禁用var，用let和const代替
        "no-dupe-keys": 2,//在创建对象字面量时不允许键重复 {a:1,a:1}
        "no-const-assign": 2,//禁止修改const声明的变量
        "no-dupe-class-members": 2,
        "no-duplicate-case": 2,//switch中的case标签不能重复
        "no-extra-parens": [2, "functions"],//禁止非必要的括号
        "no-self-compare": 2,//不能比较自身
        "constructor-super": 2,//非派生类不能调用super，派生类必须调用super
        "new-cap": [2, {//函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
            "newIsCap": true,
            "capIsNew": false
        }],
        "new-parens": 2,//new时必须加小括号
        "no-array-constructor": 2,//禁止使用数组构造器
        "no-class-assign": 2,//禁止给类赋值
        "no-cond-assign": 2,//禁止在条件表达式中使用赋值语句
    }
};