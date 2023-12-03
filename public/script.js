var element = new URLSearchParams(window.location.search).get('name')
var simbolo = new URLSearchParams(window.location.search).get('simbolo')
var number =new URLSearchParams(window.location.search).get('number')
var electron = new URLSearchParams(window.location.search).get('electron')

function distribuicaoatomica(numeroa){
  var list = [
    2,
    8,
    18,
    32,
    32,
    18,
    8]
    var sequence =[]
    var number =numeroa


    for (var i =0 ; i< list.length ; i ++){
      if (number- list[i] > 0 ){
        sequence.push(list[i])
        number = number- list[i]
      }
      else{
        if(number > 0){
          sequence.push(number)
          number = number- list[i]
        }
        else{

        }
      }
    }
    return sequence
}
console.log(distribuicaoatomica(number))
var table = [
{
  "wiki": "http://en.wikipedia.org/wiki/Period%201%20element",
  "elements": [{
    "group": "",
    "position": 0,
    "name": element,
    "number": number,
    "small": simbolo,
    "molar": 1.00794,
    "electrons": distribuicaoatomica(number) }]
}]


var Electrons = React.createClass({ displayName: "Electrons",
  render: function () {

  } });

var ElectronRing = React.createClass({ displayName: "ElectronRing",
  render: function () {
    var electrons = [];

    for (var i = this.props.count; i >= 0; i--) {
      var electronStyle = { transform: "rotate(" + 360 / this.props.count * i + "deg)" };
      electrons.push( /*#__PURE__*/React.createElement("div", { className: "electron", style: electronStyle }));
    }
    var ringClass = 'electronRing shell-' + this.props.shell;
    return /*#__PURE__*/(
      React.createElement("div", { className: ringClass },
      electrons,
      this.props.children));


  } });


var Element = React.createClass({ displayName: "Element",
  render: function () {
    var divStyle = {
      left: this.props.data.position * (100 / 18) + "%" };

    var shell = 1;
    var lastRing = [''];
    this.props.data.electrons.map(function (electronCount) {
      var newRing = /*#__PURE__*/React.createElement(ElectronRing, { shell: shell, count: electronCount }, lastRing);
      shell += 1;
      lastRing = newRing;
    });
    return /*#__PURE__*/(
      React.createElement("div", { className: "element", style: divStyle }, /*#__PURE__*/
      React.createElement("p", { className: "number" }, this.props.data.number), /*#__PURE__*/
      React.createElement("h1", { className: "symbol", title: this.props.data.name }, this.props.data.small),
      lastRing));


  } });


var TableRow = React.createClass({ displayName: "TableRow",
  render: function () {
    var elements = this.props.data.map(function (element) {
      return /*#__PURE__*/(
        React.createElement(Element, { data: element }));

    });
    return /*#__PURE__*/(
      React.createElement("div", { className: "elementrow" },
      elements));


  } });


var PeriodicTable = React.createClass({ displayName: "PeriodicTable",
  render: function () {
    var rows = this.props.data.map(function (row) {
      return /*#__PURE__*/(
        React.createElement(TableRow, { data: row.elements }));

    });
    return /*#__PURE__*/(
      React.createElement("div", { className: "periodic_table" },
      rows));


  } });


React.render( /*#__PURE__*/
React.createElement("div", null, /*#__PURE__*/
React.createElement(PeriodicTable, { data: table }), /*#__PURE__*/
),


document.getElementById('content'));