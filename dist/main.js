(() => {
  "use strict";
  let e = 1,
    t = [];
  class s {
    constructor(e = null, t = []) {
      (this.data = e), (this.possibleMoves = t);
    }
  }
  class o {
    constructor(e, t) {
      (this.end = t),
        (this.start = e),
        (this.root = this.buildFirstArr(e)),
        console.log(e, t);
    }
    appender(e) {
      return !(e[0] > 8 || e[0] < 1 || e[1] > 8 || e[1] < 1);
    }
    moveChecker(e) {
      return (
        null != e.find((e) => e[0] === this.end[0] && e[1] === this.end[1]) &&
        (console.log("epic!!!"), !0)
      );
    }
    buildRestArray(o) {
      let i = [];
      o.forEach((e) => {
        let t = new s(e),
          o = [e[0] + 1, e[1] + 2];
        this.appender(o) && t.possibleMoves.push(o);
        let l = [e[0] + 2, e[1] + 1];
        this.appender(l) && t.possibleMoves.push(l);
        let n = [e[0] + 2, e[1] - 1];
        this.appender(n) && t.possibleMoves.push(n);
        let p = [e[0] + 1, e[1] - 2];
        this.appender(p) && t.possibleMoves.push(p);
        let r = [e[0] - 1, e[1] - 2];
        this.appender(r) && t.possibleMoves.push(r);
        let h = [e[0] - 2, e[1] - 1];
        this.appender(h) && t.possibleMoves.push(h);
        let d = [e[0] - 2, e[1] + 1];
        this.appender(d) && t.possibleMoves.push(d);
        let a = [e[0] - 1, e[1] + 2];
        this.appender(a) && t.possibleMoves.push(a), i.push(...t.possibleMoves);
      }),
        console.log(e, i),
        this.moveChecker(i)
          ? ((document.getElementById(
              "promptBox"
            ).textContent = `It will take at least ${e} moves to get from ${this.start} to ${this.end}. `),
            console.log(this.root))
          : ((t = []), t.push(...i), e++, this.buildRestArray(t));
    }
    buildFirstArr = function (o = null) {
      if (o[0] !== this.end[0] || o[1] !== this.end[1]) {
        if (null === o || o[0] > 8 || o[0] < 1 || o[1] > 8 || o[1] < 1)
          return null;
        if (1 === e) {
          let i = new s(o),
            l = [o[0] + 1, o[1] + 2];
          this.appender(l) && i.possibleMoves.push(l);
          let n = [o[0] + 2, o[1] + 1];
          this.appender(n) && i.possibleMoves.push(n);
          let p = [o[0] + 2, o[1] - 1];
          this.appender(p) && i.possibleMoves.push(p);
          let r = [o[0] + 1, o[1] - 2];
          this.appender(r) && i.possibleMoves.push(r);
          let h = [o[0] - 1, o[1] - 2];
          this.appender(h) && i.possibleMoves.push(h);
          let d = [o[0] - 2, o[1] - 1];
          this.appender(d) && i.possibleMoves.push(d);
          let a = [o[0] - 2, o[1] + 1];
          this.appender(a) && i.possibleMoves.push(a);
          let u = [o[0] - 1, o[1] + 2];
          this.appender(u) && i.possibleMoves.push(u),
            t.push(...i.possibleMoves),
            this.moveChecker(t)
              ? (document.getElementById(
                  "promptBox"
                ).textContent = `It will take 1 move to get from ${o} to ${this.end}. `)
              : (e++, this.buildRestArray(t));
        }
      } else
        document.getElementById("promptBox").textContent =
          "You're already there smartguy";
    };
  }
  (() => {
    let e = "";
    const t = document.getElementById("promptBox");
    t.textContent = "Place Knight";
    const s = document.getElementById("chessboard");
    for (let e = 1, t = 8, o = 0; o < 64; e++, o++) {
      e > 8 && ((e = 1), t--);
      let o = document.createElement("div");
      o.classList.add("square"),
        o.setAttribute("id", `cell-${e}-${t}`),
        s.appendChild(o);
    }
    function i() {
      if ("Place Knight" === t.textContent) {
        let s = this.id.toString().split("-");
        e = [`${s[1]}`, `${s[2]}`].map(Number);
        let o = event.target,
          i = document.createElement("img");
        return (
          i.setAttribute("src", "/src/images/knight.png"),
          i.setAttribute("id", "horse"),
          o.appendChild(i),
          (t.textContent = "Now Set a Destination"),
          e
        );
      }
      if ("Now Set a Destination" === t.textContent) {
        let t = event.target,
          s = document.createElement("img");
        s.setAttribute("src", "/src/images/stable.png"),
          s.setAttribute("id", "stable"),
          t.appendChild(s);
        let i = this.id.toString().split("-"),
          l = [`${i[1]}`, `${i[2]}`].map(Number);
        console.log("s", e), new o(e, l);
      }
    }
    document.querySelectorAll(".square").forEach((e) => {
      e.addEventListener("click", i);
    });
  })();
})();
