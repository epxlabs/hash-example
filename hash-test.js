const objectHash = require('object-hash')
const fs = require('fs')

// contents of images on local file system
var image01 = fs.readFileSync('test-image-01.jpg')
var image02 = fs.readFileSync('test-image-02.jpg')
var nonmatchingImage01 = fs.readFileSync('nonmatchin-image-01.png')

var image01Hash = objectHash.sha1(base64Encode(image01))
var image02Hash = objectHash.sha1(base64Encode(image02))
var nonmatchingImage01 = objectHash.sha1(base64Encode(nonmatchingImage01))

console.log(`Matching images should return true: ${image01Hash === image02Hash}`)

console.log(`Nonmatchin images should return false: ${image01Hash === nonmatchingImage01}`)

// helper function
function base64Encode (image) {
  return new Buffer(image).toString('base64')
}
