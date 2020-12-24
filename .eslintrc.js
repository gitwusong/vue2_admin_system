module.exports = {
    root: true,
    // root: false,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 禁止使用console.log()
        'indent': ['error', 4], // 强制使用一致的缩进
        'eqeqeq': ['error', 'always'], // 要求使用 === 和 !==
        'arrow-spacing':['error', {
            'before': true,
            'after': true
        }], // 箭头函数前后空格
        'no-var':'off', // 禁止使用var
        'prefer-arrow-callback':'error', // 回调函数使用箭头函数
        'func-call-spacing': ['error', 'never'], // 函数调用和声明年后有间隔
        'rest-spread-spacing': ['error', 'always'], // 扩展运算符及其表达式之间需有空格
        // 'no-inner-declarations': ['error', 'functions'],// 禁止在块内声明变量
        // 'accessor-pairs': 'error', // 在对象中使用 getter setter
        'block-spacing': ['error', 'always'], // 禁止或强制在代码块中开括号前和闭括号后有空格
        'brace-style': ['error', '1tbs', { // 强制在代码块中使用一致的大括号风格
            'allowSingleLine': true
        }],

        'camelcase': ['off', {
            'properties': 'always'
        }], // 驼峰
        'comma-dangle': ['error', 'never'], // 末尾的逗号
        'comma-spacing': ['error', { // 前后空格
            'before': false,
            'after': true
        }],
        'comma-style':['error', 'last'], // 换行时逗号在行尾还是行首
        'curly': ['error', 'multi-line'], // 强制所有控制语句使用一致的括号风格
        'generator-star-spacing': ['error', {
            'before': true,
            'after': true
        }], // 强制 generator 函数中 * 号周围使用一致的空格
        'keyword-spacing': ['error', {
            'before': true,
            'after': true
        }], // 强制在关键字前后使用一致的空格
        'new-cap': ['error', {
            'newIsCap': true,
            'capIsNew': false
        }], // 	要求构造函数首字母大写
        'new-parens': 'error', // 强制或禁止调用无参构造函数时有圆括号
        'no-class-assign': 'error', // 禁止修改类声明的变量
        'no-const-assign': 'error', // 禁止修改 const 声明的变量
        'no-dupe-args': 'error', // 	  禁止 function 定义中出现重名参数
        'no-dupe-class-members': 'error', //	禁止类成员中出现重复的名称
        'no-dupe-keys': 'error', // 禁止对象字面量中出现重复的 key
        'no-duplicate-case': 'error', // 禁止出现重复的 case 标签
        'no-empty-pattern': 'error', // 	 禁止使用空解构模式
        'no-eval': 'error', // 禁用 eval()
        'no-ex-assign': 'error', // 	 禁止对 catch 子句的参数重新赋值
        'no-extend-native': 'error', // 禁止扩展原生类型
        'no-extra-bind': 'error', // 止不必要的 .bind() 调用
        'no-extra-boolean-cast': 'error', // 	禁止不必要的布尔转换
        'no-extra-parens': ['error', 'functions'], //  禁止不必要的括号
        'no-fallthrough': 'error', //  禁止 case 语句落空
        'no-floating-decimal': 'error', // 禁止数字字面量中使用前导和末尾小数点
        'no-func-assign': 'error', // 	禁止对 function 声明重新赋值
        'no-implied-eval': 'error', // 禁止使用类似 eval() 的方法
        'no-inner-declarations': ['error', 'functions'], // 禁止在嵌套的块中出现变量声明或 function 声明
        'no-invalid-regexp': 'error', // 禁止 RegExp 构造函数中存在无效的正则表达式字符串
        'no-irregular-whitespace': 'error', // 禁止不规则的空白
        'no-iterator': 'error', // 	 禁用 __iterator__ 属性
        'no-label-var': 'error', // 不允许标签与变量同名
        'no-labels': ['error', {
            'allowLoop': false,
            'allowSwitch': false
        }], // 禁用标签语句
        'no-lone-blocks': 'error', // 禁用不必要的嵌套块

        'no-mixed-spaces-and-tabs': 'error', // 禁止空格和 tab 的混合缩进
        'no-multi-spaces': 'error', // 禁止使用多个空格
        'no-multi-str': 'error', // 	 禁止使用多行字符串
        'no-multiple-empty-lines': ['error', {
            'max': 1
        }], // 	  禁止出现多行空行
        'no-native-reassign': 'error',
        'no-negated-in-lhs': 'error',
        'no-new-object': 'error', // 禁用 Object 的构造函数
        'no-new-require': 'error', // 	 禁止调用 require 时使用 new 操作符
        'no-new-symbol': 'error', // 	 禁止 Symbolnew 操作符和 new 一起使用
        'no-new-wrappers': 'error', // 禁止对 String，Number 和 Boolean 使用 new 操作符
        'no-obj-calls': 'error', // 	  禁止把全局对象作为函数调用
        'no-octal': 'error', // 禁用八进制字面量
        'no-octal-escape': 'error', // 禁止在字符串中使用八进制转义序列
        'no-path-concat': 'error', // 禁止对 __dirname 和 __filename 进行字符串连接
        'no-proto': 'error', // 禁用 __proto__ 属性
        'no-redeclare': 'error', // 禁止多次声明同一变量
        'no-regex-spaces': 'error', // 禁止正则表达式字面量中出现多个空格
        'no-return-assign': ['error', 'except-parens'], // 	 禁止在 return 语句中使用赋值语句
        'no-self-assign': 'error', // 禁止自我赋值
        'no-self-compare': 'error', // 禁止自身比较
        'no-sequences': 'error', // 禁用逗号操作符
        'no-shadow-restricted-names': 'error', // 禁止将标识符定义为受限的名字
        'no-spaced-func': 'error',
        'no-sparse-arrays': 'error', // 	 禁用稀疏数组
        'no-this-before-super': 'error', // 禁止在构造函数中，在调用 super() 之前使用 this 或 super
        'no-throw-literal': 'error', // 禁止抛出异常字面量
        'no-trailing-spaces': 'error', // 禁用行尾空格
        'no-undef': 'error', // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
        'no-undef-init': 'error', // 禁止将变量初始化为 undefined
        'no-unexpected-multiline': 'error', // 	 禁止出现令人困惑的多行表达式
        'no-unmodified-loop-condition': 'error', // 禁用一成不变的循环条件
        'no-unneeded-ternary': ['error', {
            'defaultAssignment': false
        }], // 禁止可以在有更简单的可替代的表达式时使用三元操作符
        'no-unreachable': 'error', // 	 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
        'no-unsafe-finally': 'error', // 禁止在 finally 语句块中出现控制流语句
        'no-unused-vars': ['error', { // 禁止出现未使用过的变量
            'vars': 'all',
            'args': 'none'
        }],
        'no-useless-call': 'error', // 禁止不必要的 .call() 和 .apply()
        'no-useless-computed-key': 'error', // 禁止在对象中使用不必要的计算属性
        'no-useless-constructor': 'error', // 	 禁用不必要的构造函数
        'no-useless-escape': 'off', // 禁用不必要的转义字符
        'no-whitespace-before-property': 'error', // 禁止属性前有空白
        'no-with': 'error', // 	  禁用 with 语句
        'one-var': ['error', { // 强制函数中的变量要么一起声明要么分开声明
            'initialized': 'never'
        }],
        'operator-linebreak': ['error', 'after', {
            'overrides': {
                '?': 'before',
                ':': 'before'
            }
        }], // 强制操作符使用一致的换行符
        'padded-blocks': ['error', 'never'], // 要求或禁止块内填充
        'quotes': ['error', 'single', {
            'avoidEscape': true,
            'allowTemplateLiterals': true
        }], // 制使用一致的反勾号、双引号或单引号
        'semi': ['error', 'never'], // 	 要求或禁止使用分号代替 ASI
        'semi-spacing': ['error', {
            'before': false,
            'after': true
        }], // 强制分号之前和之后使用一致的空格
        'space-before-blocks': ['error', 'always'], // \
        'space-before-function-paren': ['error', 'never'], // 强制在 function的左括号之前使用一致的空格
        'space-in-parens': ['off', 'never'], // 强制在圆括号内使用一致的空格
        'space-infix-ops': 'error', // 要求操作符周围有空格
        'space-unary-ops': ['error', {
            'words': true,
            'nonwords': false
        }], // 强制在一元操作符前后使用一致的空格
        'spaced-comment': ['error', 'always', {
            'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
        }], // 强制在注释中 // 或 /* 使用一致的空格
        'template-curly-spacing': ['error', 'never'], // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
        'use-isnan': 'error', // 要求使用 isNaN() 检查 NaN
        'valid-typeof': 'error', // 强制 typeof 表达式与有效的字符串进行比较
        'wrap-iife': ['error', 'any'], // 要求 IIFE 使用括号括起来
        'yield-star-spacing': ['error', 'both'], // 强制在 yield* 表达式中 * 周围使用空格
        'yoda': ['error', 'never'], // 	 要求或禁止 “Yoda” 条件
        'prefer-const': 'error', // 要求使用 const 声明那些声明后不再被修改的变量
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 禁用 debugger
        'object-curly-spacing': ['error', 'always', {
            objectsInObjects: false
        }], // 强制在大括号中使用一致的空格
        'array-bracket-spacing': ['error', 'never'] // 	强制数组方括号中使用一致的空格
    }
}
