



// function BubbleSort(toSort) {
//   this.arr = toSort
//   this.swapped = false
//   this.current = 1
//   this.previous = 0
//   this.limit = toSort.length
// }


// BubbleSort.prototype.updateIndices = function () {
//   this.previous++
//   this.current++
// }


// BubbleSort.prototype.sort = function () {

//   if (this.current != this.arr.length) {

//     if (this.arr[this.current] < this.arr[this.previous]) {
//       swap(this.arr, this.previous, this.current)
//       this.swapped = true
//     }
//     this.updateIndices()
//   }

//   if (this.swapped && this.current == this.limit) {
//     this.limit--
//     this.current = 1
//     this.previous = 0
//     this.swapped = false
//   }
// }


// BubbleSort.prototype.displayArrayContents = function () {
//   for (let i = 0; i < this.arr.length; i++) {

//     noStroke()
//     fill(255, 255 - this.arr[i] * 3, 100)

//     if (i == this.current && i <= this.limit)
//       fill('green')

//     rect(5 + i * (col + 5), height - this.arr[i] * 10, col, this.arr[i] * 10)
//   }
// }
