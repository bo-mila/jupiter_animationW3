
const animItems = document.querySelectorAll("._anim-items");
if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll(params) {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add("_active");
      } else {
        if (!animItem.classList.contains("_anim-no-repeat")) {
          animItem.classList.remove("_active");
        }
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }

  setTimeout(() => {
    animOnScroll();
  }, 300);

}




//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhbmltT25TY3JvbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IGFuaW1JdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuX2FuaW0taXRlbXNcIik7XHJcbmlmIChhbmltSXRlbXMubGVuZ3RoID4gMCkge1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGFuaW1PblNjcm9sbCk7XHJcbiAgZnVuY3Rpb24gYW5pbU9uU2Nyb2xsKHBhcmFtcykge1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFuaW1JdGVtcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgY29uc3QgYW5pbUl0ZW0gPSBhbmltSXRlbXNbaW5kZXhdO1xyXG4gICAgICBjb25zdCBhbmltSXRlbUhlaWdodCA9IGFuaW1JdGVtLm9mZnNldEhlaWdodDtcclxuICAgICAgY29uc3QgYW5pbUl0ZW1PZmZzZXQgPSBvZmZzZXQoYW5pbUl0ZW0pLnRvcDtcclxuICAgICAgY29uc3QgYW5pbVN0YXJ0ID0gNDtcclxuXHJcbiAgICAgIGxldCBhbmltSXRlbVBvaW50ID0gd2luZG93LmlubmVySGVpZ2h0IC0gYW5pbUl0ZW1IZWlnaHQgLyBhbmltU3RhcnQ7XHJcblxyXG4gICAgICBpZiAoYW5pbUl0ZW1IZWlnaHQgPiB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcclxuICAgICAgICBhbmltSXRlbVBvaW50ID0gd2luZG93LmlubmVySGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0IC8gYW5pbVN0YXJ0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoKHBhZ2VZT2Zmc2V0ID4gYW5pbUl0ZW1PZmZzZXQgLSBhbmltSXRlbVBvaW50KSAmJiBwYWdlWU9mZnNldCA8IChhbmltSXRlbU9mZnNldCArIGFuaW1JdGVtSGVpZ2h0KSkge1xyXG4gICAgICAgIGFuaW1JdGVtLmNsYXNzTGlzdC5hZGQoXCJfYWN0aXZlXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICghYW5pbUl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiX2FuaW0tbm8tcmVwZWF0XCIpKSB7XHJcbiAgICAgICAgICBhbmltSXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiX2FjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG9mZnNldChlbCkge1xyXG4gICAgY29uc3QgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxyXG4gICAgICBzY3JvbGxMZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0LFxyXG4gICAgICBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuICAgIHJldHVybiB7IHRvcDogcmVjdC50b3AgKyBzY3JvbGxUb3AsIGxlZnQ6IHJlY3QubGVmdCArIHNjcm9sbExlZnQgfVxyXG4gIH1cclxuXHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBhbmltT25TY3JvbGwoKTtcclxuICB9LCAzMDApO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4iXSwiZmlsZSI6ImFuaW1PblNjcm9sbC5qcyJ9
