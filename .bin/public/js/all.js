!function (error) {
  console.error(error);
  if (typeof document === 'undefined') {
    return;
  } else if (!document.body) {
    document.addEventListener('DOMContentLoaded', print);
  } else {
    print();
  }
  function print() {
    var pre = document.createElement('pre');
    pre.className = 'errorify';
    pre.textContent = error.message || error;
    if (document.body.firstChild) {
      document.body.insertBefore(pre, document.body.firstChild);
    } else {
      document.body.appendChild(pre);
    }
  }
}({"message":"/Users/nico/dev/bevacqua.io/components/buildfirst/bookCoverSidebar.js: Unexpected token (6:2) while parsing file: /Users/nico/dev/bevacqua.io/components/buildfirst/bookCoverSidebar.js\n\n  4 | export default React.createClass({ // because extends React.Component doesn't support mixins\n  5 |   mixins: [State]\n> 6 |   render () {\n    |   ^\n  7 |     var summary = this.getPathname() === '/buildfirst'\n  8 |     var link = (summary ?\n  9 |       <a href='/buildfirst/resources'>resources</a> :","name":"SyntaxError","stack":"SyntaxError: /Users/nico/dev/bevacqua.io/components/buildfirst/bookCoverSidebar.js: Unexpected token (6:2)\n  4 | export default React.createClass({ // because extends React.Component doesn't support mixins\n  5 |   mixins: [State]\n> 6 |   render () {\n    |   ^\n  7 |     var summary = this.getPathname() === '/buildfirst'\n  8 |     var link = (summary ?\n  9 |       <a href='/buildfirst/resources'>resources</a> :\n    at Parser.pp.raise (/Users/nico/dev/bevacqua.io/node_modules/babelify/node_modules/babel-core/node_modules/babylon/lib/parser/location.js:24:13)\n    at Parser.pp.unexpected (/Users/nico/dev/bevacqua.io/node_modules/babelify/node_modules/babel-core/node_modules/babylon/lib/parser/util.js:82:8)\n    at Parser.pp.expect (/Users/nico/dev/bevacqua.io/node_modules/babelify/node_modules/babel-core/node_modules/babylon/lib/parser/util.js:76:33)\n    at Parser.pp.parseObj (/Users/nico/dev/bevacqua.io/node_modules/babelify/node_modules/babel-core/node_modules/babylon/lib/parser/expression.js:596:12)\n    at Parser.pp.parseExprAtom (/Users/nico/dev/bevacqua.io/node_modules/babelify/node_modules/babel-core/node_modules/babylon/lib/parser/expression.js:392:19)\n    at Parser.parseExprAtom (/Users/nico/dev/bevacqua.io/node_modules/babelify/node_modules/babel-core/node_modules/babylon/lib/plugins/jsx/index.js:412:22)\n    at Parser.pp.parseExprSubscripts (/Users/nico/dev/bevacqua.io/node_modules/babelify/node_modules/babel-core/node_modules/babylon/lib/parser/expression.js:236:19)\n    at Parser.pp.parseMaybeUnary (/Users/nico/dev/bevacqua.io/node_modules/babelify/node_modules/babel-core/node_modules/babylon/lib/parser/expression.js:217:19)\n    at Parser.pp.parseExprOps (/Users/nico/dev/bevacqua.io/node_modules/babelify/node_modules/babel-core/node_modules/babylon/lib/parser/expression.js:163:19)\n    at Parser.pp.parseMaybeConditional (/Users/nico/dev/bevacqua.io/node_modules/babelify/node_modules/babel-core/node_modules/babylon/lib/parser/expression.js:145:19)"})