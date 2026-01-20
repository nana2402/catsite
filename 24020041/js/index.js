document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".hamburger");
  const nav = document.querySelector("#siteNav");

  // ページによってはハンバーガーが無い場合もあるので保険
  if (!btn || !nav) return;

  btn.addEventListener("click", () => {
    const open = btn.classList.toggle("is-open");
    nav.classList.toggle("is-open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // メニューのリンクを押したら閉じる
  nav.addEventListener("click", (e) => {
    if (e.target.closest("a")) {
      btn.classList.remove("is-open");
      nav.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
    }
  });

  // 画面を大きくしたら（PCに戻ったら）メニューを閉じる
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      btn.classList.remove("is-open");
      nav.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
    }
  });
});
