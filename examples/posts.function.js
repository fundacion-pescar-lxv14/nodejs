function Post(p) {
    this.postTitle = p.postTitle;
    this.postDescription = p.postDescription;
    this.postedAt = p.postedAt;
    this.calificacion = p.calificacion;
    this.price = p.price;
    this.stock = p.stock;
    this.product = p.product;
    this.categories = p.categories;
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
        if (cat === oldCat) {
            _this['categories'].replace(i, newCat);
            return;
        }
    });
};
