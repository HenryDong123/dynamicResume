var css1 = `
/*
您好面试官，欢迎
感谢观看
以下就是我的动态简历
为了您的观看体验
首先让我们把这里装修一下

*/
*{
     transition: all 1s;
}

#code{
    border: 2px dashed #99CCEE;
 
    padding: 20px
    
}

/*
为了阅读代码的流畅性，
现在让我们加上代码高亮
*/

.token.selector{ color: #690; }
.token.property{ color: #905; }

/*
保护眼睛也是很重要的
*/

html{
    color: #fff;
    background-color: #2B2B2B;
    
}



`

function writeCode(prefix, code, fn) {
    let domCode = document.querySelector('#code')


    let n = 0
    let id = setInterval(() => {
        n += 1
        domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css)
        styleTag.innerHTML = prefix + code.substring(0, n)
        domCode.scrollTop = domCode.scrollHeight

        if (n >= code.length) {
            window.clearInterval(id)
            fn && fn.call()
        }

    }, 10)


}

writeCode('', css1, () => {//

})
