"use strict";

function Post(p) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    this.postTitle = (_a = p.postTitle) !== null && _a !== void 0 ? _a : "";
    this.postDescription = (_b = p.postDescription) !== null && _b !== void 0 ? _b : "";
    this.postedAt = (_c = p.postedAt) !== null && _c !== void 0 ? _c : new Date();
    this.calificacion = (_d = p.calificacion) !== null && _d !== void 0 ? _d : "regular";
    this.price = (_e = p.price) !== null && _e !== void 0 ? _e : 0;
    this.stock = (_f = p.stock) !== null && _f !== void 0 ? _f : 0;
    this.product = (_g = p.product) !== null && _g !== void 0 ? _g : '';
    this.categories = (_h = p.categories) !== null && _h !== void 0 ? _h : [];
}
Post.prototype.get = function (key) {
    return this[key];
};
Post.prototype.set = function (key, value) {
    this[key] = value;
    return this[key];
};
Post.prototype.addNew = function (value) {
    this['categories'].push(value);
};
Post.prototype.remove = function (value) {
    this['categories'] = this['categories']
        .filter(function (cat) { return cat !== value; });
};
Post.prototype.update = function (oldCat, newCat) {
    var _this = this;
    this['categories'].map(function (cat, i) {
        if (cat === oldCat)
            _this['categories'][i] = newCat;
        return;
    });
};
export default Post;
