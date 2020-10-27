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
const lazyFunc = function lazyFunc() {
    // 防止重复加载
    if (lazyImageBox.isLoad) return;
    let A = lazyImageBox.getBoundingClientRect().bottom,
        B = document.documentElement.clientHeight;
    if (A <= B) {
        
        singlelazy();
    }
};
setTimeout(lazyFunc, 1000);
window.onscroll = lazyFunc;//触发频率高 => 节流