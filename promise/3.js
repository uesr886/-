function a(cbB, cbC, cbD) {
    cbB(cbC, cbD)
}
function b(cb, cbD) {
    cb(cbD)
}
function c(cb) {
    cb()
}
function d() {

}
a(b, c, d)