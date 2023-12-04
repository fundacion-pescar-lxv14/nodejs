type PostData = {
    postTitle:string,
    postDescription:string,
    postedAt:Date,
    calificacion: 'pesimo'|'malo'|'regular'|'bueno'|'excelente',
}
type ProductData = {
    price:number,
    stock:number,
    product:string,
    categories:string[]
}
type posts = PostData & ProductData

function Post (this: any, p:posts) {
    this.postTitle = p.postTitle
    this.postDescription = p.postDescription
    this.postedAt = p.postedAt
    this.calificacion = p.calificacion
    this.price = p.price
    this.stock = p.stock
    this.product = p.product
    this.categories = p.categories
}
Post.prototype.get = function (this: any, key:string) { 
    return this[key]
}
Post.prototype.set = function (this: any, key:string, value:string|boolean|number){
    this[key] = value;
    return this[key]
}
Post.prototype.addNew = function (this:any, value:string){
    this['categories'].push(value);
}

Post.prototype.remove = function (this:any, value:string){
    this['categories'] = this['categories']
    .filter((cat:string) => cat !== value)
}

Post.prototype.update = function (this:any, oldCat:string, newCat:string){
    this['categories'].map((cat:string, i:number) => {
        if (cat === oldCat) {
        this['categories'].replace(i, newCat)
        return
    }})
}