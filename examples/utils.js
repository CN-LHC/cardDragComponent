//输入设计稿的宽度，设定基础字号
export function setRem(designWidth) {
    setRemCore(designWidth);
    window.onresize = function () {
      setRemCore(designWidth);
    };
  }
  
function setRemCore(designWidth) {
    const scale = document.documentElement.clientWidth / designWidth;
    document.documentElement.style.fontSize = 16 * scale + "px";
}