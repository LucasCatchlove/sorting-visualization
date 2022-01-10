


let arr, gen, nth, arrss, sm
let col
let current = 0
let f = false

function setup() {
  noLoop()
  frameRate(60)
  arr = randomArray(150)
  col = windowWidth / arr.length
  createCanvas(arr.length * (col + 5) + col / 2, 800);
  gen = bubbleSort()

  let slider = createSlider(0, 150)
  slider.input(() => {
    noLoop();
    f = false;
    arr = randomArray(slider.value());
    col = windowWidth / (1.5 * arr.length)
    resizeCanvas(arr.length * (col + 5) + col / 2, 800)

  })

  let btn = createButton('sort')
  btn.mousePressed(() => { f = true; loop(); gen = bubbleSort() })


}

function draw() {

  background('lightblue')

  displayArrayContents(arr)
  if (f)
    gen.next()
}


function* bubbleSort() {
  let n = arr.length
  nth = n
  let swapped = true

  while (swapped) {
    swapped = false
    for (let i = 1; i < n; i++) {
      current = i
      if (arr[i] < arr[i - 1]) {
        swap(arr, i, i - 1)
        swapped = true
      }
      yield
    }
    n = n - 1
  }
}

function* selectionSort() {
  let smallest
  for (let min = 0; min < arr.length; min++) {
    smallest = min
    for (let j = min + 1; j < arr.length; j++)
      if (arr[j] < arr[smallest]) smallest = j

    swap(arr, min, smallest)
    sm = smallest
    current = min
    yield
  }
}




function swap(arr, a, b) {
  console.log('yo')
  let temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}


function displayArrayContents(arr) {
  for (let i = 0; i < arr.length; i++) {

    noStroke()
    fill(255, 255 - arr[i] * 3, 100)

    if (i == current)
      fill('green')
    if (i == sm)
      fill('purple')



    rect(5 + i * (col + 5), height - arr[i] * 10, col, arr[i] * 10)
  }
}

function randomArray(size) {
  let arr = []
  for (let i = 0; i < size; i++) {
    arr.push(floor(random(0, 75)))
  }
  return arr
}



