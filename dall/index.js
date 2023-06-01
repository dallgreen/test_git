const { obj } = require("./myCar")

for (const [key, value] of Object.entries(obj)) {
  if (typeof value === "function") {
    console.log(`메소드: ${key}, 실행 결과: ${obj[key]()}`);
    continue;
  } else {
    console.log(`프로퍼티: ${key}, 값: ${value}`);
  }
}