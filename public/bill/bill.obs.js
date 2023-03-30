const _0x23ee35 = _0x4290;
(function (_0x2d59c0, _0xd0932e) {
    const _0x13cf84 = _0x4290,
        _0x19cf7e = _0x2d59c0();
    while (!![]) {
        try {
            const _0x2da5eb = parseInt(_0x13cf84(0x85)) / 0x1 + -parseInt(_0x13cf84(0x117)) / 0x2 * (parseInt(_0x13cf84(0x94)) / 0x3) + -parseInt(_0x13cf84(0xaf)) / 0x4 * (-parseInt(_0x13cf84(0x78)) / 0x5) + -parseInt(_0x13cf84(0xc1)) / 0x6 + parseInt(_0x13cf84(0xa8)) / 0x7 + parseInt(_0x13cf84(0xdf)) / 0x8 * (parseInt(_0x13cf84(0xa0)) / 0x9) + -parseInt(_0x13cf84(0x8d)) / 0xa * (-parseInt(_0x13cf84(0x7e)) / 0xb);
            if (_0x2da5eb === _0xd0932e) break;
            else _0x19cf7e['push'](_0x19cf7e['shift']());
        } catch (_0x2da6ae) {
            _0x19cf7e['push'](_0x19cf7e['shift']());
        }
    }
}(_0x2a97, 0xac507));
var socket = io('/kot&bill'),
    socket = io();

function _0x4290(_0x9db36d, _0x32c59f) {
    const _0x2a97bd = _0x2a97();
    return _0x4290 = function (_0x4290b0, _0x508b68) {
        _0x4290b0 = _0x4290b0 - 0x77;
        let _0x484d87 = _0x2a97bd[_0x4290b0];
        return _0x484d87;
    }, _0x4290(_0x9db36d, _0x32c59f);
}
document[_0x23ee35(0x11c)](_0x23ee35(0x9f))[_0x23ee35(0xae)]('click', () => {
    const _0x4276e5 = _0x23ee35;
    document[_0x4276e5(0x11c)](_0x4276e5(0x110))[_0x4276e5(0xb8)][_0x4276e5(0xfd)]('visible');
});
const bookedTables = [],
    tax = [];
var billno = 0x0,
    fooditems = [];
const p = document['querySelector'](_0x23ee35(0x86)),
    hoho = [],
    tables = ['6', '5', '7', '8', '1', '2', '3', '4', '9'];

function _0x2a97() {
    const _0x47ef50 = ['input', 'number', 'Phone\x20Number', '#bill', 'selectedIndex', '11326430WlZnCw', 'Kot\x20\x20', 'GET', 'application/json', '/feedback', 'sent', 'image', '29373tcCSqp', 'Total', '#customerName', '#PhoneNumber', 'div', 'header', 'pending', '.mb-4', 'buttondiv', 'grid-container', 'black', '.navbar-fostrap', '621FOMdnv', 'POST', 'placeholder', 'replace', 'search', 'Quantity', 'bill', 'value', '1185982WKHpCM', '#discount', 'Kot\x20', 'XYZ\x20restraunt', 'hohoh', 'cardo', 'addEventListener', '3028BcmQjD', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x27flex\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22form-group\x20mb-4\x20pb-2\x22>\x0a<label\x20class=\x22font-w600\x22>Select\x20Payment\x20Method</label>\x0a<div\x20class=\x22row\x20no-gutters\x20align-items-center\x22>\x0a\x20\x20<div\x20class=\x22col-6\x20col-sm-6\x20col-md-6\x20col-lg-4\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22custom-control\x20custom-radio\x22>\x0a\x20\x20\x20\x20\x20\x20<input\x20checked=\x22\x22\x20type=\x22radio\x22\x20id=\x22cash\x22\x20name=\x22option\x22\x20class=\x22custom-control-input\x22>\x0a\x20\x20\x20\x20\x20\x20<label\x20class=\x22custom-control-label\x22\x20for=\x22cash\x22><span\x20class=\x22ms-2\x22>Cash</span></label>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x20\x20<div\x20class=\x22col-6\x20col-sm-6\x20col-md-6\x20col-lg-4\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22custom-control\x20custom-radio\x22>\x0a\x20\x20\x20\x20\x20\x20<input\x20type=\x22radio\x22\x20id=\x22card\x22\x20name=\x22option\x22\x20class=\x22custom-control-input\x22>\x0a\x20\x20\x20\x20\x20\x20<label\x20class=\x22custom-control-label\x22\x20for=\x22card\x22><span\x20class=\x22ms-2\x22>Card</span></label>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a</div>\x0a</div>\x0a<div\x20class=\x22form-group\x20mb-4\x20pb-2\x22>\x0a<label\x20class=\x22font-w600\x22>Order\x20type</label>\x0a<div\x20class=\x22row\x20no-gutters\x20align-items-center\x22>\x0a\x0a\x20\x20<div\x20class=\x22col-6\x20col-sm-6\x20col-md-6\x20col-lg-4\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22custom-control\x20custom-radio\x22>\x0a\x20\x20\x20\x20\x20\x20<input\x20type=\x22radio\x22\x20id=\x22dine-in\x22\x20name=\x22option2\x22\x20class=\x22custom-control-input\x22>\x0a\x20\x20\x20\x20\x20\x20<label\x20class=\x22custom-control-label\x22\x20for=\x22dine-in\x22><span\x20class=\x22ms-2\x22>Dine-in</span></label>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x20\x20<div\x20class=\x22col-6\x20col-sm-6\x20col-md-6\x20col-lg-4\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22custom-control\x20custom-radio\x22>\x0a\x20\x20\x20\x20\x20\x20<input\x20checked=\x22\x22\x20type=\x22radio\x22\x20id=\x22takeaway\x22\x20name=\x22option2\x22\x20class=\x22custom-control-input\x22>\x0a\x20\x20\x20\x20\x20\x20<label\x20class=\x22custom-control-label\x22\x20for=\x22takeaway\x22><span\x20class=\x22ms-2\x22>Takeaway</span></label>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x20\x20<div\x20class=\x22col-12\x20col-sm-12\x20col-md-6\x20col-lg-4\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22select_box\x20style-1\x20w-100\x20d-flex\x22>\x0a\x20\x20\x20\x20\x0a\x20\x20</div>\x0a</div>\x0a</div>\x0a</div>\x0a\x0a', 'Basic\x20', 'tax', 'flex', 'Item', 'ca49f4e7-fdaa-430b-920c-9399cbbbf3eb', 'click', 'url', 'classList', 'options', 'Amount', 'color', '#table', '\x20\x20\x20\x20\x20\x20Quantity:\x20', 'map', 'json', 'ce9daf46-d672-4aa1-8e15-b76a787e876c', '5997876xSHMse', 'min', 'tbody', 'SGST', 'loll', 'PRINT', 'add', 'button', 'body\x20{\x20padding:\x201em;\x20}', 'filter', '#phoneNumber', 'class', 'stringify', 'customerName', 'takeaway', '\x20\x20\x20\x20Amount:\x20', '.total', 'Name:\x20', 'trim', 'follow', 'innerText', 'remove', 'gst', 'display', 'input[name=\x22option\x22]:checked', 'location', '.order', 'body', 'grid-item', 'floor', '22768RdYjhj', 'individual', 'orderedFood', '.onlineorders', 'kot\x20number:\x20', 'price', 'year', 'online\x20order\x20', '<a\x20href=\x27../kot/KOT.html\x27\x20class=\x27kot\x27>Kot</a>', 'setAttribute', 'reduce', 'time', '.generateBill', 'style', 'text', 'View\x20orders', 'reject', 'kot', 'find', '.table', 'Rate', '\x20\x20\x20\x20\x20\x20\x20', 'time2', 'error', '\x0a\x20\x20\x20\x20\x20\x20<h2>No\x20orders\x20yet</h2>\x0a\x20\x20\x20\x20\x20\x20', 'CGST', '/delete', 'includes', 'toString', '\x20$1', 'toggle', '.takeaway', 'ther', '/info', 'table:\x20', 'option', 'createElement', 'searchParams', '.torder', 'length', 'children', 'bookedTable', 'onlineorder', '\x0a<div\x20class=\x22form-group\x22>\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09<label\x20class=\x22font-w600\x22>Customer\x20Info</label>\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09<input\x20type=\x22text\x22\x20class=\x22form-control\x20solid\x22\x20\x20id=\x22customerName\x22\x20placeholder=\x22Enter\x20Full\x20Name\x22>\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22form-group\x22>\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09<input\x20type=\x22text\x22\x20class=\x22form-control\x20solid\x22\x20id=\x22PhoneNumber\x22\x20placeholder=\x22Enter\x20Phone\x20Number\x22>\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22form-group\x22\x20style=\x27display:flex\x27>\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09<input\x20type=\x22text\x22\x20class=\x22form-control\x20solid\x22\x20id=\x22discount\x22\x20placeholder=\x22Enter\x20discount\x22\x20style=\x27width:60%\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20style=\x27width:50\x27\x20id=\x27percent\x27><option\x20id=\x27₹\x27>₹</option>\x20<option\x20id=\x27%\x27>%</option></select>\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x0a', 'XYZ', 'optiion2', 'status', 'append', 'Take\x20away\x20', '.nav-fostrap', 'thead', 'customer\x20name', 'childNodes', 'data', 'hours', 'print', '124sNZTwf', 'Print\x20Kot', 'items', 'takeawayonline', 'innerHTML', 'querySelector', 'REMOVE', 'then', 'Content-Type', 'Bearer\x20EAAHpWJgc9ysBAI85N5KI7a4Xyh86IUe5UgatqtgZCp6XQ1y8qsEuPaeqW0cEOsrkIqMAC8XgHvmOOMvUDOXTtODLOayDZCYl2p0uA7tFP67RFXhvXGUPmI9ieXCJOMFhVlbWwCcZAfZCKoVVQqPiAitUlaRkGRtKAYz7cVvscZCkpSkiZAiOb6lLwgiVB6bAFXhBGazQbD3AZDZD', 'month', 'push', 'href', 'none', 'getElementsByName', 'round', 'input[name=\x22option2\x22]:checked', 'PhoneNumber', 'total', '470rNQfAi', 'pathname', 'tableNumber', 'block', '<h4\x20class=\x22mb-4\x22>Amount\x20to\x20Pay\x20₹<strong>\x20\x20\x20', 'name', '11DEryfX', '\x20\x20\x20\x20\x20\x20\x20Rate:\x20', 'table:', '\x20Visit\x20Again\x0a\x20\x20\x20Have\x20a\x20nice\x20day\x20', '#percent', 'billing_info', 'table', '742886ohzWaP', '.haha', 'log'];
    _0x2a97 = function () {
        return _0x47ef50;
    };
    return _0x2a97();
}

function none() {
    const _0x13ea68 = _0x23ee35;
    document['querySelector'](_0x13ea68(0xeb))[_0x13ea68(0xec)][_0x13ea68(0xd8)] = _0x13ea68(0x124);
}
const baseUrl = '/info';
async function getinfo() {
    const _0x50e790 = _0x23ee35,
        _0x5f57d7 = await fetch(baseUrl, {
            'method': _0x50e790(0x8f)
        }),
        _0x3b6d36 = await _0x5f57d7[_0x50e790(0xbf)]();
    console[_0x50e790(0x87)](_0x3b6d36), _0x3b6d36[_0x50e790(0xbe)](_0x12eed6 => {
        const _0x16155f = _0x50e790;
        hoho[_0x16155f(0x122)](_0x12eed6[_0x16155f(0x84)]);
        if (_0x12eed6[_0x16155f(0x84)] === _0x16155f(0xcf)) {
            document[_0x16155f(0x11c)](_0x16155f(0x105))[_0x16155f(0xec)]['display'] = _0x16155f(0x7b);
            const _0x50c63a = _0x3b6d36['filter'](_0x3bc419 => _0x3bc419[_0x16155f(0x84)] === 'takeaway'),
                _0xa5a6 = document[_0x16155f(0x103)](_0x16155f(0x98));
            _0xa5a6[_0x16155f(0xb8)][_0x16155f(0xc7)](_0x16155f(0x11a));
            const _0x216df7 = document['createElement'](_0x16155f(0xc8));
            _0x216df7[_0x16155f(0x11b)] = _0x16155f(0x116), _0x216df7[_0x16155f(0xae)](_0x16155f(0xb6), () => {
                printbill(_0x50c63a);
            });
            const _0x4e16ff = document[_0x16155f(0x103)](_0x16155f(0xc8));
            _0x4e16ff['innerHTML'] = _0x16155f(0x118), _0x4e16ff[_0x16155f(0xae)](_0x16155f(0xb6), () => {
                const _0x239680 = _0x16155f,
                    _0x2e164c = _0x239680(0x100);
                _0x276db5();
                async function _0x276db5() {
                    const _0x3418f4 = _0x239680,
                        _0x293b14 = await fetch(_0x2e164c, {
                            'method': 'GET'
                        }),
                        _0x453a67 = await _0x293b14[_0x3418f4(0xbf)]();
                    var _0x5b38c3 = 0x0;
                    if (_0x453a67[_0x3418f4(0x106)] !== 0x0) return _0x453a67[_0x3418f4(0xbe)](_0x33276e => {
                        const _0x4a490a = _0x3418f4;
                        if (_0x33276e[_0x4a490a(0x10d)] === _0x4a490a(0x9a)) {
                            _0x5b38c3++;
                            const _0x4f5fbd = document[_0x4a490a(0x103)]('div');
                            _0x4f5fbd[_0x4a490a(0xb8)][_0x4a490a(0xc7)](_0x4a490a(0xad));
                            const _0x4fdf3a = document['createElement']('h3');
                            var _0x4c91bf = document[_0x4a490a(0x103)]('p');
                            _0x4fdf3a[_0x4a490a(0xd5)] = _0x4a490a(0xab), _0x4c91bf[_0x4a490a(0xb8)]['add'](_0x4a490a(0xce)), _0x4c91bf[_0x4a490a(0xd5)] = _0x4a490a(0xd2) + _0x33276e[_0x4a490a(0x7d)];
                            var _0x41ae7b = document['createElement']('p');
                            _0x41ae7b['innerText'] = _0x4a490a(0xe3) + _0x33276e[_0x4a490a(0xf0)];
                            var _0xe4be50 = document[_0x4a490a(0x103)]('p');
                            _0xe4be50[_0x4a490a(0xd5)] = _0x4a490a(0x80) + _0x33276e['table'], _0xe4be50['classList'][_0x4a490a(0xc7)]('tableNumber');
                            const _0x4c40b2 = document[_0x4a490a(0x103)]('p');
                            _0x4c40b2[_0x4a490a(0xd5)] = 'date:\x20' + _0x33276e[_0x4a490a(0xea)] + '-' + _0x33276e[_0x4a490a(0x121)];
                            const _0x434602 = document['createElement']('p');
                            _0x434602[_0x4a490a(0xd5)] = 'time:\x20' + _0x33276e[_0x4a490a(0xf5)] + ':' + _0x33276e[_0x4a490a(0xc2)], _0x434602[_0x4a490a(0xb8)][_0x4a490a(0xc7)](_0x4a490a(0xea));
                            const _0x4b9648 = document[_0x4a490a(0x103)]('table');
                            _0x4b9648['classList'][_0x4a490a(0xc7)](_0x4a490a(0x9d));
                            const _0x401c41 = document[_0x4a490a(0x103)](_0x4a490a(0x111));
                            _0x33276e['table'] === _0x4a490a(0xcf) && (_0x39657f['innerHTML'] = _0x4a490a(0x10f) + _0x33276e[_0x4a490a(0xf0)]);
                            _0x33276e[_0x4a490a(0x84)] === 'onlineorder' && (_0x39657f[_0x4a490a(0x11b)] = _0x4a490a(0xe6) + _0x33276e[_0x4a490a(0xf0)]);
                            const _0x49a1c8 = document['createElement']('td');
                            _0x49a1c8[_0x4a490a(0xb8)][_0x4a490a(0xc7)]('grid-item'), _0x49a1c8[_0x4a490a(0xd5)] = _0x4a490a(0xb4);
                            const _0x5196e4 = document[_0x4a490a(0x103)]('td');
                            _0x5196e4[_0x4a490a(0xb8)][_0x4a490a(0xc7)](_0x4a490a(0xdd)), _0x5196e4[_0x4a490a(0xd5)] = _0x4a490a(0xa5);
                            const _0x3893eb = document['createElement']('hr');
                            _0x401c41['append'](_0x49a1c8, _0x5196e4), _0x4b9648['append'](_0x401c41);
                            var _0x5b918d = [];
                            const _0x122bd2 = document[_0x4a490a(0x103)](_0x4a490a(0xc3)),
                                _0xa8c365 = document['createElement']('div'),
                                _0x3e5e6e = document[_0x4a490a(0x103)](_0x4a490a(0x98));
                            _0x3e5e6e['append'](_0x4fdf3a, _0x4c91bf, _0xe4be50, _0x41ae7b, _0x4c40b2, _0x434602), _0x4f5fbd['setAttribute']('id', _0x4a490a(0xf0) + _0x33276e[_0x4a490a(0xf0)]), _0x4f5fbd[_0x4a490a(0xb8)][_0x4a490a(0xc7)](_0x4a490a(0x108));
                            var _0x2a3a8e = [];
                            _0x2a3a8e[_0x4a490a(0x122)](_0x5b38c3), _0x33276e[_0x4a490a(0xe1)]['map'](_0x43439c => {
                                const _0x1213cd = _0x4a490a;
                                var _0x59032a = document['createElement']('td');
                                _0x59032a[_0x1213cd(0xd5)] = _0x43439c['id'], _0x59032a[_0x1213cd(0xb8)][_0x1213cd(0xc7)](_0x1213cd(0xdd));
                                var _0x387e03 = document[_0x1213cd(0x103)]('td');
                                _0x387e03[_0x1213cd(0xd5)] = _0x43439c[_0x1213cd(0x119)], _0x387e03[_0x1213cd(0xb8)][_0x1213cd(0xc7)](_0x1213cd(0xdd));
                                const _0x3af4cd = document['createElement']('tr');
                                _0x3af4cd[_0x1213cd(0x10e)](_0x59032a, _0x387e03), _0x122bd2['append'](_0x3af4cd);
                            }), _0x4b9648[_0x4a490a(0x10e)](_0x122bd2);
                            var _0x176d73 = _0x5b918d[_0x4a490a(0xbe)](function (_0x164f33) {
                                    return parseInt(_0x164f33);
                                }),
                                _0x3b426b = _0x176d73['reduce']((_0x353242, _0x217651) => _0x353242 + _0x217651, 0x0);
                            const _0x2739a9 = document[_0x4a490a(0x103)]('table'),
                                _0x297f7a = document[_0x4a490a(0x103)]('thead'),
                                _0x270c05 = document[_0x4a490a(0x103)]('td');
                            _0x270c05[_0x4a490a(0xd5)] = _0x4a490a(0x95);
                            const _0x468780 = document['createElement']('td');
                            _0x468780[_0x4a490a(0xd5)] = _0x33276e['orderedFood'][_0x4a490a(0x106)], _0x297f7a[_0x4a490a(0x10e)](_0x270c05, _0x468780), _0x2739a9[_0x4a490a(0x10e)](_0x297f7a), _0x3e5e6e[_0x4a490a(0x10e)](_0x4b9648, _0x2739a9, _0x3893eb), _0xa8c365[_0x4a490a(0xe8)]('id', 'lol' + _0x5b38c3['toString']()), _0xa8c365[_0x4a490a(0x10e)](_0x3e5e6e), _0xa8c365['classList']['add'](_0x5b38c3[_0x4a490a(0xfb)]()), _0xa8c365[_0x4a490a(0xb8)][_0x4a490a(0xc7)]('ol'), _0x4f5fbd[_0x4a490a(0x10e)](_0xa8c365);
                        }
                    });
                }
            });
            const _0x39657f = document[_0x16155f(0x103)]('h2');
            _0x39657f['innerHTML'] = _0x16155f(0xaa) + _0x12eed6[_0x16155f(0xf0)];
            const _0x2b68ca = document[_0x16155f(0x103)](_0x16155f(0x88));
            _0x2b68ca[_0x16155f(0xe8)](_0x16155f(0xa2), _0x16155f(0x112)), _0x2b68ca['setAttribute']('id', 'customerName');
            const _0x1901fe = document['createElement'](_0x16155f(0x88));
            _0x1901fe['setAttribute'](_0x16155f(0xa2), _0x16155f(0x8a)), _0x1901fe[_0x16155f(0xe8)]('id', _0x16155f(0x128));
            const _0x20b512 = document['createElement']('button');
            _0x20b512[_0x16155f(0x11b)] = 'remove', _0x20b512[_0x16155f(0xae)]('click', () => {
                const _0xb48048 = _0x16155f;
                post(_0x50c63a, _0xb48048(0xf9));
            });
            const _0x1cf8d7 = document[_0x16155f(0x103)](_0x16155f(0x98));
            _0x1cf8d7[_0x16155f(0xb8)][_0x16155f(0xc7)](_0x16155f(0xb3));
            const _0x2849fd = document[_0x16155f(0x103)](_0x16155f(0xc8));
            _0x2849fd[_0x16155f(0x11b)] = _0x16155f(0xe7), _0x1cf8d7[_0x16155f(0x10e)](_0x216df7, _0x20b512, _0x2849fd), _0xa5a6[_0x16155f(0x10e)](_0x39657f, _0x2b68ca, _0x1901fe, _0x1cf8d7), document[_0x16155f(0xdc)][_0x16155f(0x10e)](_0xa5a6);
            const _0x1a7bcd = document[_0x16155f(0x11c)](_0x16155f(0xfe));
            _0x1a7bcd[_0x16155f(0x10e)](_0xa5a6);
        }
        if (_0x12eed6[_0x16155f(0x84)] === _0x16155f(0x109)) {
            document['querySelector'](_0x16155f(0xdb))[_0x16155f(0xec)][_0x16155f(0xd8)] = _0x16155f(0x7b);
            const _0x1c1017 = _0x3b6d36[_0x16155f(0xca)](_0xed6449 => _0xed6449['table'] === _0x16155f(0x109)),
                _0x9e34aa = document[_0x16155f(0x103)]('div');
            _0x9e34aa[_0x16155f(0xb8)][_0x16155f(0xc7)](_0x16155f(0x109));
            const _0x4aa76f = document[_0x16155f(0x103)](_0x16155f(0xc8));
            _0x4aa76f[_0x16155f(0x11b)] = _0x16155f(0xc6), _0x4aa76f[_0x16155f(0xae)](_0x16155f(0xb6), () => {
                printbill(_0x1c1017);
            });
            const _0x43114c = document['createElement']('h2');
            _0x43114c[_0x16155f(0x11b)] = _0x16155f(0x8e) + _0x12eed6[_0x16155f(0xf0)] + '\x0a';
            const _0x1f7c6c = document['createElement'](_0x16155f(0x88));
            _0x1f7c6c[_0x16155f(0xe8)](_0x16155f(0xa2), 'customer\x20name'), _0x1f7c6c['setAttribute']('id', 'customerName');
            const _0x2eb1f4 = document[_0x16155f(0x103)](_0x16155f(0x88));
            _0x2eb1f4[_0x16155f(0xe8)](_0x16155f(0xa2), _0x16155f(0x8a)), _0x2eb1f4[_0x16155f(0xe8)]('id', _0x16155f(0x128));
            const _0x542f6c = document[_0x16155f(0x103)](_0x16155f(0xc8));
            _0x542f6c['innerHTML'] = _0x16155f(0x11d), _0x542f6c['addEventListener'](_0x16155f(0xb6), () => {
                post(_0x1c1017, '/delete');
            });
            const _0x4d439b = document[_0x16155f(0x103)](_0x16155f(0x98));
            _0x4d439b[_0x16155f(0xb8)][_0x16155f(0xc7)](_0x16155f(0xb3));
            const _0x4c29f4 = document['createElement'](_0x16155f(0xc8));
            _0x4c29f4[_0x16155f(0x11b)] = '<a\x20href=\x27../kot/KOT.html\x27\x20style=\x27color:\x22white\x22\x27\x20class=\x27kot\x27>KOT</a>', _0x4d439b[_0x16155f(0x10e)](_0x4aa76f, _0x542f6c, _0x4c29f4), _0x9e34aa[_0x16155f(0x10e)](_0x43114c, _0x1f7c6c, _0x2eb1f4, _0x4d439b);
            const _0x33e68f = document[_0x16155f(0x11c)](_0x16155f(0xe2));
            _0x33e68f[_0x16155f(0x10e)](_0x9e34aa);
        }
    });
    let _0x1999b7 = tables[_0x50e790(0xca)](_0x338a9c => hoho[_0x50e790(0xfa)](_0x338a9c));
    const _0x282a23 = [];
    _0x1999b7[_0x50e790(0xbe)](_0x113d4e => {
        const _0x16261d = _0x50e790,
            _0x4ff493 = document[_0x16261d(0x11c)](_0x16261d(0xbc) + _0x113d4e['toString']());
        _0x4ff493[_0x16261d(0xb8)]['add']('bookedTable');
        let _0x8cd6d8 = _0x3b6d36[_0x16261d(0xf1)](_0x1ad7b7 => _0x1ad7b7[_0x16261d(0x84)] === _0x113d4e);
        _0x282a23[_0x16261d(0x122)](_0x8cd6d8);
        const _0x537e42 = _0x3b6d36['filter'](_0x2ad19f => _0x2ad19f[_0x16261d(0x84)] === _0x113d4e);
        _0x4ff493[_0x16261d(0xae)](_0x16261d(0xb6), () => {
            const _0x272935 = _0x16261d,
                _0x2285cd = document[_0x272935(0x11c)]('.generateBill');
            _0x2285cd['style'][_0x272935(0xd8)] = 'flex', _0x2285cd['innerHTML'] = '\x20<div\x20class=\x27flexoid\x27><i\x20id=\x27cross\x27\x20class=\x22fa-regular\x20fa-circle-xmark\x22\x20onclick=\x27none()\x27></i></div>';

            function _0x26bd25() {
                const _0x4f98e6 = _0x272935;
                var _0xef224e = document[_0x4f98e6(0x103)](_0x4f98e6(0x84));
                _0xef224e[_0x4f98e6(0xb8)][_0x4f98e6(0xc7)](_0x4f98e6(0x84)), _0xef224e[_0x4f98e6(0xb8)][_0x4f98e6(0xc7)]('text-black');
                const _0x45ca28 = document[_0x4f98e6(0x103)]('th');
                _0x45ca28[_0x4f98e6(0xb8)][_0x4f98e6(0xc7)](_0x4f98e6(0xdd)), _0x45ca28[_0x4f98e6(0xd5)] = _0x4f98e6(0xb4);
                const _0x118a51 = document[_0x4f98e6(0x103)]('th');
                _0x118a51['classList'][_0x4f98e6(0xc7)]('grid-item'), _0x118a51['innerText'] = _0x4f98e6(0xa5);
                const _0x2e886f = document['createElement']('th');
                _0x2e886f['classList'][_0x4f98e6(0xc7)](_0x4f98e6(0xdd)), _0x2e886f[_0x4f98e6(0xd5)] = 'Amount';
                const _0x45e805 = document[_0x4f98e6(0x103)](_0x4f98e6(0x111));
                _0x45e805[_0x4f98e6(0x10e)](_0x45ca28, _0x118a51, _0x2e886f), _0xef224e['append'](_0x45e805);
                const _0x3d056d = document['createElement'](_0x4f98e6(0xc3)),
                    _0x103e3c = [];
                _0x537e42['map'](_0x1544ee => {
                    const _0x5b359b = _0x4f98e6,
                        _0x165ee2 = [];
                    _0x1544ee[_0x5b359b(0xe1)][_0x5b359b(0xbe)](_0x4bc88c => {
                        const _0xd1769c = _0x5b359b;
                        _0x165ee2[_0xd1769c(0x122)](_0x4bc88c[_0xd1769c(0xe4)] * _0x4bc88c[_0xd1769c(0x119)]);
                        const _0x1787dc = document['createElement']('tr'),
                            _0x375ba3 = document[_0xd1769c(0x103)]('td');
                        _0x375ba3[_0xd1769c(0xb8)][_0xd1769c(0xc7)](_0xd1769c(0xdd)), _0x375ba3['innerText'] = _0x4bc88c['id']['replace'](/([A-Z])/g, _0xd1769c(0xfc))[_0xd1769c(0xd3)]();
                        const _0x386d81 = document[_0xd1769c(0x103)]('td');
                        _0x386d81[_0xd1769c(0xb8)][_0xd1769c(0xc7)](_0xd1769c(0xdd)), _0x386d81[_0xd1769c(0xd5)] = _0x4bc88c[_0xd1769c(0x119)];
                        const _0x105d5c = document['createElement']('td');
                        _0x105d5c[_0xd1769c(0xb8)]['add'](_0xd1769c(0xdd)), _0x105d5c[_0xd1769c(0xd5)] = _0x4bc88c[_0xd1769c(0xe4)], _0x1787dc[_0xd1769c(0x10e)](_0x375ba3, _0x386d81, _0x105d5c), _0x3d056d[_0xd1769c(0x10e)](_0x1787dc);
                    });
                    const _0x4fae1c = _0x165ee2[_0x5b359b(0xe9)](function (_0xd08bec, _0x4e9855) {
                        return _0xd08bec + _0x4e9855;
                    }, 0x0);
                    console[_0x5b359b(0x87)](_0x4fae1c), _0x103e3c['push'](_0x4fae1c);
                }), _0xef224e[_0x4f98e6(0x10e)](_0x3d056d), _0xef224e[_0x4f98e6(0xec)][_0x4f98e6(0xd8)] = _0x4f98e6(0x124);
                const _0x36f9af = document[_0x4f98e6(0x103)](_0x4f98e6(0x88));
                _0x36f9af[_0x4f98e6(0xe8)]('placeholder', _0x4f98e6(0x112)), _0x36f9af[_0x4f98e6(0xe8)]('id', _0x4f98e6(0xce));
                const _0x1af0a7 = document[_0x4f98e6(0x103)]('input');
                _0x1af0a7['setAttribute'](_0x4f98e6(0xa2), _0x4f98e6(0x8a)), _0x1af0a7[_0x4f98e6(0xe8)]('id', _0x4f98e6(0x128));
                const _0x4d1622 = document[_0x4f98e6(0x103)](_0x4f98e6(0x98));
                _0x4d1622[_0x4f98e6(0x11b)] = _0x4f98e6(0x10a);
                const _0x8ddabe = document[_0x4f98e6(0x103)](_0x4f98e6(0x98));
                console[_0x4f98e6(0x87)](_0x103e3c), _0x8ddabe[_0x4f98e6(0xe8)](_0x4f98e6(0xcc), _0x4f98e6(0x77)), _0x8ddabe['innerHTML'] = _0x4f98e6(0x7c) + _0x103e3c + '</strong></h4>';
                const _0x2eab2c = document[_0x4f98e6(0x103)]('a');
                _0x2eab2c[_0x4f98e6(0xec)][_0x4f98e6(0xbb)] = _0x4f98e6(0x9e), _0x2eab2c[_0x4f98e6(0xe8)](_0x4f98e6(0xcc), 'limk'), _0x2eab2c[_0x4f98e6(0xae)](_0x4f98e6(0xb6), () => {
                    const _0x14e3fa = _0x4f98e6;
                    document[_0x14e3fa(0x11c)](_0x14e3fa(0xf2))[_0x14e3fa(0xec)][_0x14e3fa(0xd8)] = _0x14e3fa(0x7b), document[_0x14e3fa(0x11c)]('.limk')[_0x14e3fa(0xec)]['display'] = _0x14e3fa(0x124), document[_0x14e3fa(0x11c)](_0x14e3fa(0xd1))[_0x14e3fa(0xec)][_0x14e3fa(0xd8)] = 'none';
                }), _0x2eab2c[_0x4f98e6(0x11b)] = _0x4f98e6(0xee), _0x2285cd[_0x4f98e6(0x10e)](_0xef224e, _0x8ddabe, _0x2eab2c, _0x4d1622);
                const _0x4441f4 = document[_0x4f98e6(0x103)](_0x4f98e6(0x98));
                _0x4441f4[_0x4f98e6(0x11b)] = _0x4f98e6(0xb0);
                const _0x5b028f = document[_0x4f98e6(0x103)](_0x4f98e6(0x98));
                _0x5b028f['innerHTML'] = '', _0x2285cd['append'](_0x4441f4);
                const _0x5096b9 = document['createElement'](_0x4f98e6(0x98));
                _0x5096b9[_0x4f98e6(0xb8)]['add'](_0x4f98e6(0x9c));
                const _0x250bb0 = document[_0x4f98e6(0x103)]('button');
                _0x250bb0[_0x4f98e6(0x11b)] = '\x0a<i\x20class=\x22fa-brands\x20\x20fa-whatsapp\x20\x22\x20id=\x27sms\x27></i>';
                const _0x143be0 = document['createElement'](_0x4f98e6(0xc8));
                _0x250bb0[_0x4f98e6(0xae)](_0x4f98e6(0xb6), () => {
                    const _0x216a18 = _0x4f98e6;
                    printbill(_0x537e42), document[_0x216a18(0x11c)](_0x216a18(0x86))[_0x216a18(0xec)][_0x216a18(0xd8)] = _0x216a18(0x7b), document['querySelector'](_0x216a18(0xbc) + _0x537e42[0x0][_0x216a18(0x84)])['classList'][_0x216a18(0xd6)](_0x216a18(0x108));
                }), _0x143be0[_0x4f98e6(0xd5)] = 'Remove', _0x143be0[_0x4f98e6(0xae)](_0x4f98e6(0xb6), _0x20066f => {
                    _0x537e42['map'](_0x103b73 => {
                        const _0x551a19 = _0x4290;
                        document[_0x551a19(0x11c)]('#table' + _0x537e42[0x0][_0x551a19(0x84)])[_0x551a19(0xb8)][_0x551a19(0xd6)](_0x551a19(0x108)), document[_0x551a19(0x11c)](_0x551a19(0xeb))[_0x551a19(0xec)]['display'] = 'none';
                        let _0x577731 = _0x537e42[_0x551a19(0xf1)](_0x5cfd42 => _0x5cfd42[_0x551a19(0xf0)] === _0x103b73['kot']);
                        post(_0x577731, _0x551a19(0xf9));
                    });
                });
                const _0x4ac426 = document[_0x4f98e6(0x103)](_0x4f98e6(0xc8));
                _0x4ac426[_0x4f98e6(0x11b)] = '\x0a<i\x20class=\x22fa-regular\x20sms\x20fa-message\x22\x20id=\x27sms\x27></i>', _0x4ac426[_0x4f98e6(0xae)](_0x4f98e6(0xb6), _0x197d5c => {
                    const _0x399ac5 = _0x4f98e6;
                    document[_0x399ac5(0x11c)](_0x399ac5(0xeb))[_0x399ac5(0xec)][_0x399ac5(0xd8)] = _0x399ac5(0x124), _0x1af0a7[_0x399ac5(0x11b)], post(_0x1af0a7['innerHTML'], '/sms');
                }), _0x5096b9[_0x4f98e6(0x10e)](_0x250bb0, _0x143be0, _0x4ac426), _0x2285cd[_0x4f98e6(0x10e)](_0x5096b9);
            }
            _0x26bd25();
        });
    });
}
const printbill = _0x510fcb => {
    const _0x30b74f = _0x23ee35;
    if (_0x510fcb[_0x30b74f(0x106)] !== 0x0) {
        billno++;
        const _0x26a193 = document[_0x30b74f(0x103)]('h3');
        var _0x5456b8 = document[_0x30b74f(0x103)]('p');
        _0x26a193[_0x30b74f(0xd5)] = _0x30b74f(0xab), _0x5456b8[_0x30b74f(0xb8)]['add'](_0x30b74f(0xce));
        const _0x5bf178 = document[_0x30b74f(0x11c)]('#customerName');
        _0x5456b8[_0x30b74f(0xd5)] = _0x30b74f(0xd2) + _0x5bf178[_0x30b74f(0xa7)];
        var _0x2964df = document['createElement']('p');
        _0x2964df[_0x30b74f(0xd5)] = 'Bill\x20number:\x20' + billno;
        var _0x12c5ef = document[_0x30b74f(0x103)]('p');
        _0x12c5ef['innerText'] = _0x30b74f(0x101) + _0x510fcb[0x0][_0x30b74f(0x84)], _0x12c5ef[_0x30b74f(0xb8)][_0x30b74f(0xc7)](_0x30b74f(0x7a));
        const _0x2b2e64 = document[_0x30b74f(0x103)]('p');
        _0x2b2e64[_0x30b74f(0xd5)] = 'date:\x20' + _0x510fcb[0x0][_0x30b74f(0xea)];
        const _0x3649f9 = document[_0x30b74f(0x103)]('p');
        _0x3649f9[_0x30b74f(0xd5)] = 'time:\x20' + _0x510fcb[0x0][_0x30b74f(0x115)], _0x3649f9[_0x30b74f(0xb8)][_0x30b74f(0xc7)](_0x30b74f(0xea));
        const _0x661798 = document[_0x30b74f(0x103)](_0x30b74f(0x84));
        _0x661798[_0x30b74f(0xb8)][_0x30b74f(0xc7)]('grid-container');
        const _0x41a5ea = document['createElement'](_0x30b74f(0x111)),
            _0x380d50 = document['createElement']('td');
        _0x380d50['classList'][_0x30b74f(0xc7)](_0x30b74f(0xdd)), _0x380d50['innerText'] = _0x30b74f(0xb4);
        const _0x58766e = document[_0x30b74f(0x103)]('td');
        _0x58766e[_0x30b74f(0xb8)][_0x30b74f(0xc7)]('grid-item'), _0x58766e[_0x30b74f(0xd5)] = _0x30b74f(0xa5);
        const _0x3baf43 = document[_0x30b74f(0x103)]('td');
        _0x3baf43[_0x30b74f(0xb8)][_0x30b74f(0xc7)](_0x30b74f(0xdd)), _0x3baf43['innerText'] = _0x30b74f(0xf3);
        const _0x528ac9 = document['createElement']('td');
        _0x528ac9[_0x30b74f(0xb8)][_0x30b74f(0xc7)](_0x30b74f(0xdd)), _0x528ac9[_0x30b74f(0xd5)] = _0x30b74f(0xba);
        const _0x2bee88 = document[_0x30b74f(0x103)]('hr');
        _0x41a5ea['append'](_0x380d50, _0x58766e, _0x3baf43, _0x528ac9), _0x661798[_0x30b74f(0x10e)](_0x41a5ea), console[_0x30b74f(0x87)](_0x30b74f(0xc5)), console[_0x30b74f(0x87)](_0x41a5ea);
        var _0x248d29 = [];
        const _0x12c1c0 = document['createElement'](_0x30b74f(0xc3)),
            _0x28c818 = document[_0x30b74f(0x103)]('div');
        _0x28c818[_0x30b74f(0x10e)](_0x26a193, _0x5456b8, _0x12c5ef, _0x2964df, _0x2b2e64, _0x3649f9), _0x28c818[_0x30b74f(0xe8)]('id', _0x30b74f(0xa6) + _0x510fcb[0x0]['table']);
        var _0x27c871 = [],
            _0x39b8b7 = [];
        _0x510fcb[_0x30b74f(0xbe)](_0x2e522c => {
            const _0x1d0eef = _0x30b74f;
            _0x2e522c['orderedFood'][_0x1d0eef(0xbe)](_0x449ccf => {
                const _0x1a6bd1 = _0x1d0eef;
                _0x39b8b7[_0x1a6bd1(0x122)](_0x449ccf['id']);
                var _0x48d2dd = document['createElement']('td');
                _0x48d2dd[_0x1a6bd1(0xd5)] = _0x449ccf['id'][_0x1a6bd1(0xa3)](/([A-Z])/g, '\x20$1')[_0x1a6bd1(0xd3)](), _0x48d2dd['classList'][_0x1a6bd1(0xc7)](_0x1a6bd1(0xdd));
                var _0x21017b = document[_0x1a6bd1(0x103)]('td');
                _0x21017b[_0x1a6bd1(0xd5)] = _0x449ccf[_0x1a6bd1(0x119)], _0x21017b[_0x1a6bd1(0xb8)][_0x1a6bd1(0xc7)](_0x1a6bd1(0xdd));
                const _0x2da26c = document['createElement']('td');
                _0x2da26c[_0x1a6bd1(0xd5)] = _0x449ccf[_0x1a6bd1(0xe4)], _0x2da26c[_0x1a6bd1(0xb8)][_0x1a6bd1(0xc7)](_0x1a6bd1(0xdd));
                const _0xf19d7e = document[_0x1a6bd1(0x103)]('td');
                _0xf19d7e[_0x1a6bd1(0xd5)] = _0x449ccf['price'] * _0x449ccf[_0x1a6bd1(0x119)], _0xf19d7e[_0x1a6bd1(0xe8)]('id', 'amount'), _0xf19d7e[_0x1a6bd1(0xb8)][_0x1a6bd1(0xc7)]('grid-item');
                const _0x3735c2 = document['createElement']('tr');
                _0x3735c2[_0x1a6bd1(0x10e)](_0x48d2dd, _0x21017b, _0x2da26c, _0xf19d7e);
                var _0x1b4e78 = 'Name:\x20' + _0x449ccf['id'] + _0x1a6bd1(0xbd) + _0x449ccf['items'] + _0x1a6bd1(0x7f) + _0x449ccf[_0x1a6bd1(0xe4)] + _0x1a6bd1(0xd0) + _0x449ccf[_0x1a6bd1(0xe4)] * _0x449ccf[_0x1a6bd1(0x119)] + _0x1a6bd1(0xf4);
                _0x27c871[_0x1a6bd1(0x122)](_0x1b4e78), _0x12c1c0[_0x1a6bd1(0x10e)](_0x3735c2), _0x248d29[_0x1a6bd1(0x122)](_0xf19d7e[_0x1a6bd1(0xd5)]);
            });
        }), _0x661798[_0x30b74f(0x10e)](_0x12c1c0);
        var _0x352e1c = _0x248d29[_0x30b74f(0xbe)](function (_0x58c906) {
                return parseInt(_0x58c906);
            }),
            _0x50b5ed = _0x352e1c[_0x30b74f(0xe9)]((_0x43c0ca, _0x4a6c06) => _0x43c0ca + _0x4a6c06, 0x0);
        const _0x14b4c5 = document[_0x30b74f(0x103)](_0x30b74f(0x84));
        _0x14b4c5[_0x30b74f(0xb8)]['add'](_0x30b74f(0xd7));
        const _0x78aa77 = document[_0x30b74f(0x103)](_0x30b74f(0x111)),
            _0x4d178e = document[_0x30b74f(0x103)]('td');
        _0x4d178e['innerText'] = _0x30b74f(0xc4);
        const _0x5e7232 = document[_0x30b74f(0x103)]('td');
        _0x5e7232[_0x30b74f(0xd5)] = Math[_0x30b74f(0xde)](_0x50b5ed / 0x64 * 2.5 * 0x64) / 0x64, _0x78aa77[_0x30b74f(0x10e)](_0x4d178e, _0x5e7232);
        const _0x203c6c = document[_0x30b74f(0x103)]('tr'),
            _0xb1789d = document[_0x30b74f(0x103)]('td');
        _0xb1789d['innerText'] = _0x30b74f(0xf8);
        const _0x43e5e0 = document['createElement']('td');
        _0x43e5e0[_0x30b74f(0xd5)] = Math[_0x30b74f(0xde)](_0x50b5ed / 0x64 * 2.5 * 0x64) / 0x64, _0xb1789d[_0x30b74f(0xb8)][_0x30b74f(0xc7)](_0x30b74f(0xb2)), _0x203c6c[_0x30b74f(0x10e)](_0xb1789d, _0x43e5e0), tax['push'](_0xb1789d[_0x30b74f(0xa7)]);
        const _0x20c6a4 = document[_0x30b74f(0x103)]('tr'),
            _0x4aab62 = document['createElement']('td');
        _0x4aab62['innerText'] = _0x30b74f(0x95);
        const _0x1bb01a = document[_0x30b74f(0x103)]('td'),
            _0x2af9a1 = document[_0x30b74f(0x11c)](_0x30b74f(0xa9))[_0x30b74f(0xa7)],
            _0x2ea85d = document[_0x30b74f(0x11c)](_0x30b74f(0x82));
        var _0x4858f0 = _0x2ea85d[_0x30b74f(0xb9)][_0x2ea85d[_0x30b74f(0x8c)]]['id'],
            _0x9f77af;
        console[_0x30b74f(0x87)](_0x2af9a1, _0x4858f0);
        var _0x558aef;
        if (_0x4858f0 === '%') console[_0x30b74f(0x87)](_0x4858f0), _0x558aef = _0x50b5ed * _0x2af9a1 / 0x64, _0x9f77af = _0x50b5ed - _0x50b5ed * _0x2af9a1 / 0x64;
        else _0x4858f0 === '₹' && (_0x9f77af = _0x50b5ed - _0x2af9a1, _0x558aef = _0x2af9a1);
        _0x1bb01a['innerText'] = Math[_0x30b74f(0x126)](_0x9f77af + _0x9f77af / 0x64 * 2.5 + _0x9f77af / 0x64 * 2.5);
        const _0xb58fc = document['createElement']('tr'),
            _0x6484b5 = document[_0x30b74f(0x103)]('td');
        _0x6484b5[_0x30b74f(0xd5)] = 'Less\x20Discount';
        const _0x2c58ae = document[_0x30b74f(0x103)]('td');
        _0x2c58ae['innerText'] = _0x558aef, _0x20c6a4[_0x30b74f(0x10e)](_0x4aab62, _0x1bb01a), _0xb58fc['append'](_0x6484b5, _0x2c58ae);
        const _0x226809 = document[_0x30b74f(0x103)](_0x30b74f(0xc3));
        _0x226809['append'](_0x203c6c, _0xb58fc, _0x20c6a4), _0x14b4c5[_0x30b74f(0x10e)](_0x78aa77, _0x226809);
        const _0x3d6507 = document['createElement']('p');
        _0x3d6507[_0x30b74f(0xd5)] = _0x30b74f(0x81), _0x28c818['append'](_0x661798, _0x14b4c5, _0x3d6507, _0x2bee88), p[_0x30b74f(0x10e)](_0x28c818);
        const _0x5ca03f = document[_0x30b74f(0x11c)](_0x30b74f(0x97))[_0x30b74f(0xa7)],
            _0x1a2990 = document[_0x30b74f(0x11c)](_0x30b74f(0x96))[_0x30b74f(0xa7)];
        document[_0x30b74f(0x11c)](_0x30b74f(0x8b) + _0x510fcb[0x0][_0x30b74f(0x84)])[_0x30b74f(0xec)]['display'] = 'block';
        const _0x1a76a1 = document[_0x30b74f(0x11c)](_0x30b74f(0xcb))['value'],
            _0x165d00 = document['querySelector']('#bill' + _0x510fcb[0x0][_0x30b74f(0x84)]);
        async function _0x62421() {
            const _0x191088 = _0x30b74f;
            console[_0x191088(0x87)](_0x191088(0xac));
            const _0x54ae08 = {
                    'html': _0x165d00[_0x191088(0x11b)],
                    'css': _0x191088(0xc9)
                },
                _0x48464a = _0x191088(0xb5),
                _0x85cec3 = _0x191088(0xc0),
                _0x4c2009 = {
                    'method': 'POST',
                    'body': JSON[_0x191088(0xcd)](_0x54ae08),
                    'headers': {
                        'Content-Type': _0x191088(0x90),
                        'Authorization': _0x191088(0xb1) + btoa(_0x48464a + ':' + _0x85cec3)
                    }
                };
            await fetch('https://hcti.io/v1/image', _0x4c2009)[_0x191088(0x11e)](_0xab6e0c => {
                const _0xceebf3 = _0x191088;
                return _0xab6e0c['ok'] ? _0xab6e0c[_0xceebf3(0xbf)]() : Promise[_0xceebf3(0xef)](_0xab6e0c[_0xceebf3(0x10d)]);
            })['then'](_0x382115 => {
                const _0x52ec20 = _0x191088;
                console[_0x52ec20(0x87)](_0x382115);
                const _0xc6dd04 = new URL(window[_0x52ec20(0xda)][_0x52ec20(0x123)]);
                _0xc6dd04[_0x52ec20(0x79)] = _0x52ec20(0x91), _0xc6dd04[_0x52ec20(0x104)]['set'](_0x52ec20(0x7d), _0x5bf178[_0x52ec20(0xa7)]), _0xc6dd04[_0x52ec20(0x104)]['set']('orders', _0x39b8b7), _0xc6dd04[_0x52ec20(0x104)]['set'](_0x52ec20(0x89), _0x5ca03f), console[_0x52ec20(0x87)](_0xc6dd04[_0x52ec20(0xa4)]), console['log'](_0x382115['url']);
                const _0x266088 = {
                    'number': _0x5ca03f,
                    'image': _0x382115['url'],
                    'name': _0x1a2990,
                    'totalcost': _0x9f77af,
                    'feedback': _0xc6dd04['search']
                };
                console[_0x52ec20(0x87)](_0x266088);
                var _0x17aea7 = new Headers();
                _0x17aea7['append'](_0x52ec20(0x11f), _0x52ec20(0x90)), _0x17aea7[_0x52ec20(0x10e)]('Authorization', _0x52ec20(0x120)), console[_0x52ec20(0x87)](_0x17aea7);
                var _0x483a66 = JSON['stringify']({
                        'messaging_product': 'whatsapp',
                        'recipient_type': _0x52ec20(0xe0),
                        'to': '' + _0x5ca03f,
                        'type': 'template',
                        'template': {
                            'name': _0x52ec20(0x83),
                            'language': {
                                'code': 'en'
                            },
                            'components': [{
                                'type': _0x52ec20(0x99),
                                'parameters': [{
                                    'type': _0x52ec20(0x93),
                                    'image': {
                                        'link': '' + _0x382115['url']
                                    }
                                }]
                            }, {
                                'type': 'body',
                                'parameters': [{
                                    'type': 'text',
                                    'text': '' + _0x1a2990
                                }, {
                                    'type': 'text',
                                    'text': _0x52ec20(0xab)
                                }, {
                                    'type': 'text',
                                    'text': '' + _0x50b5ed
                                }, {
                                    'type': _0x52ec20(0xed),
                                    'text': _0x52ec20(0x10b)
                                }]
                            }, {
                                'type': _0x52ec20(0xc8),
                                'sub_type': _0x52ec20(0xb7),
                                'index': '0',
                                'parameters': [{
                                    'type': _0x52ec20(0xed),
                                    'text': '' + _0xc6dd04[_0x52ec20(0xa4)]
                                }]
                            }]
                        }
                    }),
                    _0xe934a = {
                        'method': _0x52ec20(0xa1),
                        'headers': _0x17aea7,
                        'body': _0x483a66,
                        'redirect': _0x52ec20(0xd4)
                    };
                fetch('https://graph.facebook.com/v16.0/115687568138953/messages', _0xe934a)[_0x52ec20(0x11e)](_0x1b1ff8 => _0x1b1ff8[_0x52ec20(0xed)]())[_0x52ec20(0x11e)](_0x1a93bb => console[_0x52ec20(0x87)](_0x1a93bb + _0x52ec20(0xff)))['catch'](_0xdde552 => console[_0x52ec20(0x87)](_0x52ec20(0xf6), _0xdde552));
            })['catch'](_0x1113bb => console[_0x191088(0xf6)](_0x1113bb));
        }
        _0x62421();
        let _0x49ca7e, _0x283d95;

        function _0x5710f5(_0x2a84ab, _0x2aa577) {
            const _0x38637f = _0x30b74f,
                _0x2ca44c = document[_0x38637f(0x11c)](_0x38637f(0xd9));
            console[_0x38637f(0x87)](_0x2ca44c), _0x49ca7e = _0x2ca44c['id'];
        }
        var _0x2a692b = document[_0x30b74f(0x125)](_0x30b74f(0x102)),
            _0x4a58e8 = document[_0x30b74f(0x125)](_0x30b74f(0x10c));
        console[_0x30b74f(0x87)]('heee'), _0x5710f5(_0x4a58e8, 'type');
        const _0x50eb6e = document['querySelector'](_0x30b74f(0x127));
        console[_0x30b74f(0x87)](document[_0x30b74f(0x11c)](_0x30b74f(0x127))), console[_0x30b74f(0x87)](_0x50eb6e), _0x283d95 = _0x50eb6e['id'];
        const _0x488048 = [];
        _0x510fcb[_0x30b74f(0xbe)](_0x4f44e5 => {
            const _0x31563e = _0x30b74f;
            var _0x24a8ff;
            const _0x307514 = document[_0x31563e(0x11c)](_0x31563e(0x96)),
                _0x17f87f = document['querySelector'](_0x31563e(0xa9))[_0x31563e(0xa7)],
                _0x104992 = document[_0x31563e(0x11c)](_0x31563e(0x82));
            var _0x1acb44 = _0x104992['options'][_0x104992[_0x31563e(0x8c)]]['id'];
            console[_0x31563e(0x87)](_0x17f87f, _0x1acb44);
            if (_0x1acb44 === '%') {
                console[_0x31563e(0x87)](_0x1acb44);
                const _0x10e7f5 = document[_0x31563e(0x11c)](_0x31563e(0x9b))[_0x31563e(0x107)][0x0][_0x31563e(0x113)][0x0][_0x31563e(0x114)];
                _0x24a8ff = _0x10e7f5 * _0x17f87f / 0x64;
            } else _0x24a8ff = _0x17f87f;
            var _0x4c96a4 = _0x510fcb[_0x31563e(0xf1)](_0x579310 => _0x579310[_0x31563e(0xf0)] === _0x4f44e5[_0x31563e(0xf0)]);
            _0x4c96a4[_0x31563e(0x89)] = _0x1a76a1, _0x488048['push'](_0x4c96a4['orderedFood']);
            const _0x2c6471 = _0x510fcb[0x0][_0x31563e(0xe5)],
                _0xd72187 = _0x510fcb[0x0]['week'],
                _0x8b105c = _0x510fcb[0x0][_0x31563e(0x121)],
                _0x338a37 = _0x4f44e5[_0x31563e(0xc2)];
            var _0x5ce495 = {
                'name': _0x307514[_0x31563e(0xa7)],
                'number': _0x5ca03f,
                'table': _0x510fcb[0x0][_0x31563e(0x84)],
                'hours': _0x510fcb[0x0]['hours'],
                'date': _0x510fcb[0x0][_0x31563e(0xea)],
                'orders': _0x488048,
                'status': _0x510fcb[0x0][_0x31563e(0x10d)],
                'year': _0x2c6471,
                'week': _0xd72187,
                'month': _0x8b105c,
                'minutes': _0x338a37,
                'paymentMethod': _0x49ca7e,
                'orderType': _0x283d95,
                'discount': _0x17f87f
            };
            console[_0x31563e(0x87)](_0x49ca7e, _0x283d95), none();
        }), document[_0x30b74f(0x11c)](_0x30b74f(0xeb))['innerHTML'] = '';
        const _0x257f15 = document[_0x30b74f(0x11c)]('#bill' + _0x510fcb[0x0][_0x30b74f(0x84)]);
        _0x257f15[_0x30b74f(0xd6)]();
    } else p[_0x30b74f(0x11b)] = _0x30b74f(0xf7);
};
getinfo();
async function post(_0x4ee912, _0x30396d) {
    const _0x56b462 = _0x23ee35,
        _0x4acfef = await fetch(_0x30396d, {
            'method': _0x56b462(0xa1),
            'headers': {
                'Content-Type': _0x56b462(0x90)
            },
            'body': JSON[_0x56b462(0xcd)]({
                'pp': _0x4ee912
            })
        })[_0x56b462(0x11e)](_0x3d4140 => {
            const _0xab2708 = _0x56b462;
            if (!_0x3d4140['ok']) {} else console[_0xab2708(0x87)](_0xab2708(0x92));
        });
}