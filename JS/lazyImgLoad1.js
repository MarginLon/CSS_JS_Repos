let lazyImageBox = document.querySelector('.lazyImageBox'),
    lazyImage = lazyImageBox.querySelector('img');
    const singlelazy = function singlelazy() {
        let trueImg = lazyImage.getAttribute('lazy-image');
        lazyImage.src = trueImg;
        lazyImage.onload = () => {
            // 加载实际图片 
            lazyImage.style.opacity = 1;
        };
        lazyImageBox.isLoad = true;
    };
// DOM监听器 DOM元素和可视窗口的交叉信息
let ob = new IntersectionObserver(changes => {
    // changes是一个数组，包含所有监听的DOM元素和视口交叉信息
    let items = changes[0], {
        isIntersecting,
        target
    } = item;
    // console.log(item);
    if (isIntersecting) {
        singlelazy();
        ob.unobserve(lazyImageBox);
    }
}, {
    threshold:[1]
});
ob.observe(lazyImageBox);