import "./styles.css";

export default function App() {
  /* longestSlideDown33 = (pyramid) =>
    pyramid
      .reverse()
      .reduce((x, y) =>
        y.map((v, i) => (x[i] > x[i + 1] ? x[i] : x[i + 1]) + v)
      )[0];*/

  function longestSlideDown(pyramid) {
    for (var i = pyramid.length - 2; i > -1; i--) {
      for (var j = 0; j < pyramid[i].length; j++) {
        pyramid[i][j] += Math.max(pyramid[i + 1][j], pyramid[i + 1][j + 1]);
      }
    }
    return pyramid[0][0];
  }

  /* function longestSlideDown22(pyramid) {
    return pyramid.reduceRight((last, current) =>
      current.map((v, i) => v + Math.max(last[i], last[i + 1]))
    )[0];
  }*/

  /*function longestSlideDown44(pyramid) {
    var res = pyramid.pop();
    while (pyramid.length > 0)
      res = pyramid.pop().map((x, i) => x + Math.max(res[i], res[i + 1]));
    return res[0];
  }*/

  /*function longestSlideDown55(pyramid) {
    return pyramid.reduceRight((end, curr) =>
      curr.map((x, i) => x + Math.max(end[i], end[i + 1]))
    )[0];
  }*/

  const pyramid = `[[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]`;
  console.log(longestSlideDown(pyramid));

  return (
    <div className="App">
      <input />
    </div>
  );
}
