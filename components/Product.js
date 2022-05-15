import Link from "next/link"
import Image from "next/image"

export default function Product(props) {
  return (
    <>
        <div class="p-20 bg-purple-100 w-full md:w-1/2">
  <h3 class="text-purple-300 font-bold mb-4">2. Card with image</h3>
  <div class="bg-white rounded-lg shadow-lg">
    <img src="https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80" alt="" class="rounded-t-lg"/>
    <div class="p-6">
      <h2 class="font-bold mb-2 text-2xl text-purple-800">Card with an image
      </h2>
      <p class="text-purple-700 mb-2">This is a little bit better of a card!</p>
      <a href="#" class="text-purple-600 hover:text-purple-500 underline text-sm">Read More 👉</a>
    </div>
  </div>
</div>
    </>
  )
}
